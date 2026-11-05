"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play, Volume2, VolumeX, MapPin } from "lucide-react";

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
    title: "The Ascent · Deep Winter Session",
    model: "7x14 Ascent Sauna (7' × 14')",
    location: "Highland Alpine Snowfield",
    duration: "1:03",
    videoSrc: "/assets/videos/ad-reel-2.mp4",
    posterSrc: "/assets/featured/blaze-foyer-main.jpg",
    tag: "7x14 Ascent Spec",
    isSnow: true,
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
  const [isMuted, setIsMuted] = useState(true);
  const [playingState, setPlayingState] = useState<{ [id: string]: boolean }>({});
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
    <section className="py-20 sm:py-28 px-4 sm:px-10 lg:px-14 bg-[#141210] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Simple Clean Section Header (All bulky text removed) */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10 sm:mb-14">
          <span className="section-tag-light">
            In Action
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Saunas in Motion
          </h2>
        </div>

        {/* Responsive Layout: Mobile Horizontal Touch Slider (Slide), Desktop 3-Column Grid */}
        <div
          className="flex md:grid md:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 px-2 sm:px-0 scroll-smooth snap-x snap-mandatory max-w-6xl mx-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {REELS.map((reel) => {
            const isPlaying = !!playingState[reel.id];

            return (
              <div
                key={reel.id}
                onClick={() => handleTogglePlay(reel.id)}
                className="group relative cursor-pointer flex-none w-[80vw] max-w-[325px] md:w-auto md:max-w-none snap-center"
              >
                {/* Smartphone / Reel Bezel Frame Container */}
                <div className="relative aspect-[9/16] w-full rounded-[26px] overflow-hidden bg-stone-900 border-2 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:scale-[1.015] group-hover:border-white/35 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                  
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

                  {/* Fallback Poster Background if video is paused */}
                  {!isPlaying && (
                    <div className="absolute inset-0 z-[1]">
                      <Image
                        src={reel.posterSrc}
                        alt={reel.title}
                        fill
                        sizes="(max-width: 768px) 80vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />
                    </div>
                  )}

                  {/* Top Bar Header inside Frame */}
                  <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>{reel.tag}</span>
                    </div>

                    {/* In-Card Audio Mute/Unmute Toggle */}
                    <button
                      onClick={handleToggleMute}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white/90 transition-all shadow-md"
                      title={isMuted ? "Unmute Audio" : "Mute Audio"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5 text-white/70" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </button>
                  </div>

                  {/* Center Play Button Overlay (when paused) */}
                  {!isPlaying && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 text-stone-950 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
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

                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
                        {isPlaying ? "Playing" : reel.duration}
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

        {/* Mobile Swipe Hint Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-4">
          <span className="w-6 h-1 rounded-full bg-white/70" />
          <span className="w-1.5 h-1 rounded-full bg-white/30" />
          <span className="w-1.5 h-1 rounded-full bg-white/30" />
        </div>

      </div>
    </section>
  );
}
