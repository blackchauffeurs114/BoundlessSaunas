"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Sparkles, MapPin } from "lucide-react";

interface ReelItem {
  id: string;
  title: string;
  model: string;
  location: string;
  duration: string;
  videoSrc: string;
  posterSrc: string;
  tag: string;
  isSnow?: boolean;
}

const REELS: ReelItem[] = [
  {
    id: "reel-1",
    title: "Deep Winter Snow Session",
    model: "6x8 Alpine Sauna",
    location: "Snow Highland Retreat",
    duration: "1:13",
    videoSrc: "/assets/videos/ad-reel-1.mp4",
    posterSrc: "/assets/featured/flare-v2-main.jpg",
    tag: "Snow & Sub-Zero Spec",
    isSnow: true,
  },
  {
    id: "reel-2",
    title: "Sunset Off-Grid Coastal Run",
    model: "6x12 Blaze Foyer Sauna",
    location: "Porthcothan Coastline",
    duration: "0:30",
    videoSrc: "/assets/videos/ad-reel-2.mp4",
    posterSrc: "/assets/featured/blaze-foyer-main.jpg",
    tag: "Dual-Chamber Suite",
  },
  {
    id: "reel-3",
    title: "Commercial Masterclass",
    model: "8x20 Pinnacle Sauna",
    location: "Devon Coastline",
    duration: "0:35",
    videoSrc: "/assets/videos/ad-reel-3.mp4",
    posterSrc: "/assets/featured/pinnacle-main.jpg",
    tag: "Commercial Flagship",
  },
];

export default function VideoReelsSection() {
  const [activeReel, setActiveReel] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [playingState, setPlayingState] = useState<{ [id: string]: boolean }>({});
  const [introState, setIntroState] = useState<{ [id: string]: boolean }>({});
  const videoRefs = useRef<{ [id: string]: HTMLVideoElement | null }>({});

  const handleTogglePlay = (reelId: string) => {
    const video = videoRefs.current[reelId];
    const isCurrentlyPlaying = playingState[reelId];

    if (!isCurrentlyPlaying) {
      // Pause any other playing video
      Object.keys(videoRefs.current).forEach((id) => {
        if (id !== reelId && videoRefs.current[id]) {
          videoRefs.current[id]?.pause();
          setPlayingState((prev) => ({ ...prev, [id]: false }));
        }
      });

      if (video) {
        video.play().then(() => {
          setPlayingState((prev) => ({ ...prev, [reelId]: true }));
          setActiveReel(reelId);
        }).catch(() => {
          setPlayingState((prev) => ({ ...prev, [reelId]: false }));
        });
      }
    } else {
      if (video) {
        video.pause();
        setPlayingState((prev) => ({ ...prev, [reelId]: false }));
      }
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => {
      const nextMuted = !prev;
      Object.keys(videoRefs.current).forEach((id) => {
        if (videoRefs.current[id]) {
          videoRefs.current[id]!.muted = nextMuted;
        }
      });
      return nextMuted;
    });
  };

  return (
    <section className="py-24 sm:py-32 px-5 sm:px-10 lg:px-14 bg-[#141210] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1500px] mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-[11px] font-mono tracking-widest uppercase backdrop-blur-md border border-white/15">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Boundless in Motion · Field Reels</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              Crafted in Cornwall.<br className="hidden sm:inline" />
              Proven anywhere.
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
              Watch real Boundless saunas operating in coastal salt winds, sub-zero snowfields, and off-grid mountain cabins. 100% genuine footage.
            </p>
          </div>

          {/* Sound Control Indicator */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handleToggleMute}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white/90 font-medium transition-all backdrop-blur-sm"
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-white/70" />
                  <span>Tap for Sound</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>Audio Enabled</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3 Vertical Reel Frame Cards (9:16 Ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {REELS.map((reel) => {
            const isPlaying = !!playingState[reel.id];
            const isShowingIntro = !!introState[reel.id];

            return (
              <div
                key={reel.id}
                onClick={() => handleTogglePlay(reel.id)}
                className="group relative cursor-pointer"
              >
                {/* Smartphone / Reel Bezel Frame Container */}
                <div className="relative aspect-[9/16] w-full rounded-[28px] overflow-hidden bg-stone-900 border-2 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:scale-[1.015] group-hover:border-white/35 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                  
                  {/* Video Player */}
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el;
                    }}
                    src={reel.videoSrc}
                    poster={reel.posterSrc}
                    playsInline
                    loop
                    muted={isMuted}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    onEnded={() => setPlayingState((prev) => ({ ...prev, [reel.id]: false }))}
                  />

                  {/* Fallback Poster Background if video is not loaded/playing */}
                  {!isPlaying && !isShowingIntro && (
                    <div className="absolute inset-0 z-[1]">
                      <Image
                        src={reel.posterSrc}
                        alt={reel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />
                    </div>
                  )}

                  {/* Branded Google Flow / Round Logo Intro Overlay */}
                  {isShowingIntro && (
                    <div className="absolute inset-0 z-30 bg-white flex flex-col items-center justify-center p-6 transition-all duration-700 animate-fadeIn">
                      <div className="relative w-28 h-28 rounded-full shadow-2xl p-3 bg-white border border-stone-200 animate-pulse flex items-center justify-center">
                        <Image
                          src="/assets/logo.png"
                          alt="Boundless Saunas Logo"
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                      <span className="mt-4 font-serif text-stone-900 text-sm tracking-wider uppercase font-medium animate-bounce">
                        Boundless Saunas
                      </span>
                    </div>
                  )}

                  {/* Top Bar Header inside Frame */}
                  <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>{reel.tag}</span>
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white/90">
                      {reel.duration}
                    </div>
                  </div>

                  {/* Center Play Button Overlay (when paused) */}
                  {!isPlaying && !isShowingIntro && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/90 text-stone-950 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                        <Play className="w-7 h-7 fill-stone-950 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Metadata & Controls Overlay */}
                  <div className="absolute bottom-0 inset-x-0 z-20 p-5 bg-gradient-to-t from-black via-black/80 to-transparent space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-medium tracking-wide">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{reel.location}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium leading-snug">
                      {reel.title}
                    </h3>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-white/75 font-sans">
                        Model: <strong className="text-white font-medium">{reel.model}</strong>
                      </span>

                      {/* Small inline play state indicator */}
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
                        {isPlaying ? "Playing" : "Tap to Play"}
                      </span>
                    </div>
                  </div>

                  {/* Top Phone Speaker Notch Styling for Reel Look */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full z-20 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
