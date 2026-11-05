"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Volume2, VolumeX, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

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
    posterSrc: "/assets/videos/ad-reel-1-poster.jpg",
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
    posterSrc: "/assets/videos/ad-reel-2-poster.jpg",
    tag: "7x14 Ascent Spec",
    isSnow: true,
  },
  {
    id: "reel-3",
    title: "The Blaze · Coastal Trail Session",
    model: "6x12 Blaze Sauna (6' × 12')",
    location: "Cornwall Coastal Trail",
    duration: "0:52",
    videoSrc: "/assets/videos/ad-reel-3.mp4",
    posterSrc: "/assets/videos/ad-reel-3-poster.jpg",
    tag: "6x12 Blaze Spec",
  },
];

export default function VideoReelsSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [playingState, setPlayingState] = useState<{ [id: string]: boolean }>({});
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isDraggingMouse, setIsDraggingMouse] = useState(false);

  const videoRefs = useRef<{ [id: string]: HTMLVideoElement | null }>({});
  const sliderRef = useRef<HTMLDivElement>(null);

  // Touch gesture state (distinguishes finger swipe vs tap)
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isSwiping = useRef(false);

  // Mouse drag state
  const isMouseDown = useRef(false);
  const mouseStartX = useRef(0);
  const mouseScrollStart = useRef(0);
  const hasMovedMouse = useRef(false);

  // Toggle Video Play / Pause (only if not swiping/dragging)
  const handleTogglePlay = (reelId: string) => {
    if (isSwiping.current || hasMovedMouse.current) {
      return; // Finger grab or drag in progress - ignore click
    }

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

  // Touch handlers for mobile finger swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
    const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (deltaX > 8 || deltaY > 8) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (isSwiping.current) {
      // Keep swiping flag active briefly to swallow subsequent synthesized click
      setTimeout(() => {
        isSwiping.current = false;
      }, 150);
    }
  };

  // Mouse drag handlers (finger grab move support with mouse/trackpad)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isMouseDown.current = true;
    hasMovedMouse.current = false;
    mouseStartX.current = e.clientX;
    mouseScrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || !sliderRef.current) return;
    const deltaX = e.clientX - mouseStartX.current;
    if (Math.abs(deltaX) > 6) {
      hasMovedMouse.current = true;
      setIsDraggingMouse(true);
      sliderRef.current.scrollLeft = mouseScrollStart.current - deltaX;
    }
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
    setIsDraggingMouse(false);
    if (hasMovedMouse.current) {
      setTimeout(() => {
        hasMovedMouse.current = false;
      }, 150);
    }
  };

  // Track active reel on scroll
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const center = slider.scrollLeft + slider.clientWidth / 2;

    const children = Array.from(slider.children) as HTMLElement[];
    let minDistance = Infinity;
    let closestIdx = 0;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    setActiveReelIndex(closestIdx);
  };

  // Programmatic scroll to card
  const scrollToReel = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const children = Array.from(slider.children) as HTMLElement[];
    const targetCard = children[index];
    if (targetCard) {
      const scrollPos = targetCard.offsetLeft - (slider.clientWidth - targetCard.offsetWidth) / 2;
      slider.scrollTo({ left: scrollPos, behavior: "smooth" });
      setActiveReelIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeReelIndex - 1);
    scrollToReel(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(REELS.length - 1, activeReelIndex + 1);
    scrollToReel(nextIdx);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-10 lg:px-14 bg-[#141210] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Simple Clean Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10 sm:mb-14">
          <span className="section-tag-light">
            In Action
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Saunas in Motion
          </h2>
        </div>

        {/* Responsive Layout: Mobile Finger Touch / Grab Slider, Desktop 3-Column Grid */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex md:grid md:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 px-4 sm:px-6 md:px-0 scroll-smooth snap-x snap-mandatory max-w-6xl mx-auto select-none ${
            isDraggingMouse ? "cursor-grabbing" : "cursor-grab md:cursor-default"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y",
          }}
        >
          {REELS.map((reel) => {
            const isPlaying = !!playingState[reel.id];

            return (
              <div
                key={reel.id}
                onClick={() => handleTogglePlay(reel.id)}
                className="group relative flex-none w-[82vw] max-w-[330px] md:w-auto md:max-w-none snap-center transition-transform"
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
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                    onEnded={() => setPlayingState((prev) => ({ ...prev, [reel.id]: false }))}
                  />

                  {/* Fallback Poster Background if video is paused */}
                  {!isPlaying && (
                    <div className="absolute inset-0 z-[1] pointer-events-none">
                      <Image
                        src={reel.posterSrc}
                        alt={reel.title}
                        fill
                        sizes="(max-width: 768px) 82vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />
                    </div>
                  )}

                  {/* Clean Top Bar: Removed top tag badge as requested. Only clean mute/unmute button top-right */}
                  <button
                    onClick={handleToggleMute}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/85 active:scale-90 backdrop-blur-md border border-white/20 text-white/95 transition-all shadow-lg"
                    title={isMuted ? "Unmute Audio" : "Mute Audio"}
                    aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white/70" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>

                  {/* Center Play Button Overlay (when paused) */}
                  {!isPlaying && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-white/90 text-stone-950 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                        <Play className="w-7 h-7 fill-stone-950 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Metadata & Controls Overlay */}
                  <div className="absolute bottom-0 inset-x-0 z-20 p-5 bg-gradient-to-t from-black via-black/80 to-transparent space-y-2 pointer-events-none">
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Navigation Controls & Interactive Dots */}
        <div className="flex md:hidden items-center justify-center gap-3 pt-6">
          <button
            onClick={handlePrev}
            disabled={activeReelIndex === 0}
            className={`p-2.5 rounded-full border border-white/20 bg-stone-900/80 backdrop-blur-md transition-all active:scale-90 ${
              activeReelIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/10 text-white"
            }`}
            aria-label="Previous Reel"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 px-2">
            {REELS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToReel(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeReelIndex === idx
                    ? "w-8 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to reel ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={activeReelIndex === REELS.length - 1}
            className={`p-2.5 rounded-full border border-white/20 bg-stone-900/80 backdrop-blur-md transition-all active:scale-90 ${
              activeReelIndex === REELS.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/10 text-white"
            }`}
            aria-label="Next Reel"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
