"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";
import { galleryItems } from "@/data/galleryItems";
import LightboxModal from "@/components/LightboxModal";

export default function GalleryPage() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const allImageUrls = galleryItems.map((item) => item.src);

  return (
    <div className="bg-[#f7f5f0] text-[#1b1713]">
      {/* 1. HERO SECTION (DARK BACKGROUND WITH IMG_0831.JPG) */}
      <section className="relative min-h-[70vh] sm:min-h-[82vh] flex items-center pt-32 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/2f619d8d-85af-452f-a9fc-d5cd85e596e4/IMG_0831.JPG"
            alt="Boundless Saunas Gallery Header"
            fill
            priority
            className="object-cover object-[55%_30%]"
          />
          {/* 50% dark tint matching Squarespace imageOverlayOpacity 0.5 */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content: Left Aligned */}
        <div className="relative z-10 max-w-[1500px] w-full mx-auto">
          <div className="max-w-4xl text-left space-y-6 sm:space-y-7">
            <p className="text-xs sm:text-[13px] font-mono tracking-[0.25em] uppercase text-white/70 font-normal">
              — THE GALLERY
            </p>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-white leading-[1.05] drop-shadow-md">
              Every build.<br />
              <em className="italic">Every angle.</em>
            </h1>

            <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-2xl">
              A growing archive of every Boundless Sauna we've made fixed garden builds, compact spaces, and mobile commercial units. Tap any image to view full size.
            </p>
          </div>
        </div>
      </section>

      {/* 2. AUTHENTIC 4-COLUMN MASONRY GALLERY (41 IMAGES) */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0]">
        <div className="max-w-[1500px] mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-5">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="break-inside-avoid mb-5 group relative rounded-[14px] overflow-hidden bg-neutral-200 border border-black/5 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="relative w-full"
                  style={{ paddingBottom: `${(1 / item.aspectRatio) * 100}%` }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle hover overlay with expand icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-black shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CALLOUT SECTION (DARK BACKGROUND WITH IMG_0798.JPG) */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-14 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/5133d5e1-ced1-4242-b8ed-c9bd6c3efdfc/IMG_0798.JPG"
            alt="Boundless Bespoke Handcrafted Build Callout"
            fill
            className="object-cover object-center"
          />
          {/* 84% dark overlay matching Squarespace imageOverlayOpacity 0.84 */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        {/* Content: Centered */}
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs sm:text-[13px] font-mono tracking-[0.25em] uppercase text-white/70 font-normal">
            — BUILD YOURS NEXT
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight drop-shadow-md">
            See one you love?<br />
            <em className="italic">Build something like it.</em>
          </h2>

          <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-xl mx-auto">
            Every sauna in this gallery started as a sketch and a conversation. Yours could too.
          </p>

          <div className="pt-2">
            <Link
              href="/saunas"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-lg"
            >
              <span>Start a Build</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Full-Screen Lightbox Modal */}
      <LightboxModal
        images={allImageUrls}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </div>
  );
}
