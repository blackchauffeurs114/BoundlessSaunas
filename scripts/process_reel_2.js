const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const FFMPEG_PATH = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');
const LOGO_PATH = path.resolve('public/assets/logo.png');
const FRAMES_DIR = path.resolve('temp_intro_frames_2');
const OUTPUT_INTRO = path.resolve('temp_intro_5s_2.mp4');
const INPUT_MAIN_VIDEO = 'C:\\Users\\Hasnainhr\\Downloads\\accest 7x14 Sauna ad hook.mov';
const OUTPUT_TRIMMED = path.resolve('temp_main_trimmed_2.mp4');
const FINAL_OUTPUT = path.resolve('public/assets/videos/ad-reel-2.mp4');

function runCommand(cmd, args) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${cmd} ${args.join(' ')}`);
    const proc = spawn(cmd, args, { stdio: 'inherit' });
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Command failed with code ${code}`));
    });
  });
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

async function generateIntroFrames() {
  if (!fs.existsSync(FRAMES_DIR)) {
    fs.mkdirSync(FRAMES_DIR, { recursive: true });
  }

  const width = 720;
  const height = 1280;
  const totalFrames = 150; // 5 seconds at 30 fps
  const fps = 30;

  const rawLogoBuffer = fs.readFileSync(LOGO_PATH);
  console.log(`Generating ${totalFrames} intro frames for Reel 2...`);

  for (let i = 0; i < totalFrames; i++) {
    const sec = i / fps;
    let scale = 1.0;
    let opacity = 1.0;

    if (sec <= 1.2) {
      const p = easeOutCubic(sec / 1.2);
      scale = 0.80 + 0.20 * p;
      opacity = p;
    } else if (sec <= 3.8) {
      const p = (sec - 1.2) / 2.6;
      scale = 1.00 + 0.03 * Math.sin(p * Math.PI);
      opacity = 1.0;
    } else {
      const p = (sec - 3.8) / 1.2;
      scale = 1.03 - 0.03 * p;
      opacity = 1.0 - 0.9 * easeInOutQuad(p);
    }

    const currentLogoSize = Math.max(100, Math.round(310 * scale));
    const resizedLogo = await sharp(rawLogoBuffer)
      .resize(currentLogoSize, currentLogoSize, { fit: 'contain' })
      .toBuffer();

    const textOpacity = Math.max(0, Math.min(1, opacity));
    const textSvg = Buffer.from(`
      <svg width="${width}" height="${height}">
        <rect width="100%" height="100%" fill="#ffffff" />
        <g opacity="${textOpacity.toFixed(3)}">
          <text x="50%" y="780" text-anchor="middle" font-family="'Cinzel', 'Georgia', serif" font-size="26" font-weight="bold" letter-spacing="4" fill="#1b1713">BOUNDLESS SAUNAS</text>
          <text x="50%" y="816" text-anchor="middle" font-family="'Montserrat', 'Arial', sans-serif" font-size="12" font-weight="600" letter-spacing="6" fill="#6e7c52">HANDCRAFTED IN CORNWALL</text>
          <line x1="300" y1="840" x2="420" y2="840" stroke="#786e5a" stroke-width="1.5" stroke-opacity="0.3" />
        </g>
      </svg>
    `);

    const frameFile = path.join(FRAMES_DIR, `frame_${String(i).padStart(4, '0')}.jpg`);
    const topPos = Math.round(height / 2 - 240 - (currentLogoSize - 310) / 2);
    const leftPos = Math.round(width / 2 - currentLogoSize / 2);

    await sharp(textSvg)
      .composite([{ input: resizedLogo, top: topPos, left: leftPos }])
      .jpeg({ quality: 92 })
      .toFile(frameFile);
  }

  console.log('Intro frames generated successfully.');
}

async function buildIntroVideo() {
  console.log('Encoding intro frames to MP4...');
  const framePattern = path.join(FRAMES_DIR, 'frame_%04d.jpg');

  await runCommand(FFMPEG_PATH, [
    '-y',
    '-framerate', '30',
    '-i', framePattern,
    '-f', 'lavfi',
    '-i', 'anullsrc=channel_layout=stereo:sample_rate=48000',
    '-t', '5.0',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-crf', '22',
    '-preset', 'fast',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-shortest',
    OUTPUT_INTRO,
  ]);
  console.log(`Intro video created: ${OUTPUT_INTRO}`);
}

async function trimAndFormatMainVideo() {
  console.log('Trimming main video from 00:00:10 to end and scaling to 720x1280...');
  
  // User instructed: start at 00:00:10 (skip first 10s of hook/old logo)
  await runCommand(FFMPEG_PATH, [
    '-y',
    '-ss', '00:00:10',
    '-i', INPUT_MAIN_VIDEO,
    '-vf', 'scale=720:1280:force_original_aspect_ratio=decrease,pad=720:1280:(ow-iw)/2:(oh-ih)/2,fps=30',
    '-map', '0:v:0',
    '-map', '0:a:0?',
    '-c:v', 'libx264',
    '-crf', '25',
    '-preset', 'fast',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-ar', '48000',
    OUTPUT_TRIMMED,
  ]);
  console.log(`Main trimmed video created: ${OUTPUT_TRIMMED}`);
}

async function concatenateVideos() {
  console.log('Concatenating 5s intro + trimmed 7x14 video...');
  const concatList = path.resolve('temp_concat_list_2.txt');
  fs.writeFileSync(concatList, `file '${OUTPUT_INTRO.replace(/\\/g, '/')}'\nfile '${OUTPUT_TRIMMED.replace(/\\/g, '/')}'\n`);

  await runCommand(FFMPEG_PATH, [
    '-y',
    '-f', 'concat',
    '-safe', '0',
    '-i', concatList,
    '-c', 'copy',
    '-movflags', '+faststart',
    FINAL_OUTPUT,
  ]);

  console.log(`Final output produced at: ${FINAL_OUTPUT}`);

  console.log('Cleaning up temporary files...');
  try {
    fs.unlinkSync(concatList);
    fs.unlinkSync(OUTPUT_INTRO);
    fs.unlinkSync(OUTPUT_TRIMMED);
    fs.rmSync(FRAMES_DIR, { recursive: true, force: true });
  } catch (err) {
    console.error('Cleanup warning:', err.message);
  }
}

async function main() {
  try {
    console.log('=== STARTING REEL 2 VIDEO PIPELINE (7x14 Sauna Ad) ===');
    await generateIntroFrames();
    await buildIntroVideo();
    await trimAndFormatMainVideo();
    await concatenateVideos();

    const stats = fs.statSync(FINAL_OUTPUT);
    console.log(`\nSUCCESS! Reel 2 final video size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  } catch (err) {
    console.error('Pipeline failed:', err);
    process.exit(1);
  }
}

main();
