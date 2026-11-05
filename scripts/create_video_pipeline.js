const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const FFMPEG_PATH = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');
const LOGO_PATH = path.resolve('public/assets/logo.png');
const FRAMES_DIR = path.resolve('temp_intro_frames');
const OUTPUT_INTRO = path.resolve('temp_intro_5s.mp4');
const INPUT_MAIN_VIDEO = 'C:\\Users\\Hasnainhr\\Downloads\\6x8 Sauna ad.mp4';
const OUTPUT_TRIMMED = path.resolve('temp_main_trimmed.mp4');
const FINAL_OUTPUT = path.resolve('public/assets/videos/ad-reel-1.mp4');

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

  // Base raw logo buffer
  const rawLogoBuffer = fs.readFileSync(LOGO_PATH);

  console.log(`Generating ${totalFrames} intro frames...`);

  for (let i = 0; i < totalFrames; i++) {
    const t = i / totalFrames; // 0 to 1
    const sec = i / fps; // 0 to 5.0

    // Animation phases
    let scale = 1.0;
    let opacity = 1.0;

    if (sec <= 1.2) {
      // Intro zoom & fade-in (0.0 to 1.2s)
      const p = easeOutCubic(sec / 1.2);
      scale = 0.80 + 0.20 * p;
      opacity = p;
    } else if (sec <= 3.8) {
      // Gentle breathing (1.2 to 3.8s)
      const p = (sec - 1.2) / 2.6;
      scale = 1.00 + 0.03 * Math.sin(p * Math.PI);
      opacity = 1.0;
    } else {
      // Fade transition to main video (3.8 to 5.0s)
      const p = (sec - 3.8) / 1.2;
      scale = 1.03 - 0.03 * p;
      opacity = 1.0 - 0.9 * easeInOutQuad(p);
    }

    const currentLogoSize = Math.max(100, Math.round(310 * scale));

    // Resize logo with current scale
    const resizedLogo = await sharp(rawLogoBuffer)
      .resize(currentLogoSize, currentLogoSize, { fit: 'contain' })
      .toBuffer();

    // Prepare SVG text with current opacity
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
      .composite([
        {
          input: resizedLogo,
          top: topPos,
          left: leftPos,
        }
      ])
      .jpeg({ quality: 92 })
      .toFile(frameFile);

    if (i % 30 === 0) {
      console.log(`Rendered frame ${i}/${totalFrames} (${sec.toFixed(1)}s)`);
    }
  }

  console.log('All intro frames generated successfully!');
}

async function buildIntroVideo() {
  console.log('Encoding intro frames to MP4 with silent audio track...');
  const framePattern = path.join(FRAMES_DIR, 'frame_%04d.jpg');

  // Generate 5s MP4 video + silent audio at 48000Hz stereo to match main video
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
  console.log('Trimming main video from 00:00:06 to end and scaling to 720x1280...');
  
  // Start from 00:00:06 (skip initial 5s logo)
  await runCommand(FFMPEG_PATH, [
    '-y',
    '-ss', '00:00:06',
    '-i', INPUT_MAIN_VIDEO,
    '-vf', 'scale=720:1280:force_original_aspect_ratio=decrease,pad=720:1280:(ow-iw)/2:(oh-ih)/2,fps=30',
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
  console.log('Concatenating 5s intro + trimmed video...');
  const concatList = path.resolve('temp_concat_list.txt');
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

  // Cleanup temporary files
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
    console.log('=== STARTING BOUNDLESS VIDEO EDITING PIPELINE ===');
    await generateIntroFrames();
    await buildIntroVideo();
    await trimAndFormatMainVideo();
    await concatenateVideos();

    const stats = fs.statSync(FINAL_OUTPUT);
    console.log(`\nSUCCESS! Final reel video size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  } catch (err) {
    console.error('Pipeline failed:', err);
    process.exit(1);
  }
}

main();
