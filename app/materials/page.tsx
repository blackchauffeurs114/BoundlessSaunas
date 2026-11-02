"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  internalCladdingItems,
  externalCladdingItems,
  stoveItems,
  featureOptions,
} from "@/data/materialsData";

export default function MaterialsPage() {
  const [activeTab, setActiveTab] = useState<"internal" | "external" | "stoves">("internal");

  return (
    <div className="bg-[#f7f5f0] text-[#1b1713]">
      {/* 1. HERO SECTION (DARK BACKGROUND WITH IMG_0800.JPG) */}
      <section className="relative min-h-[70vh] sm:min-h-[82vh] flex items-center pt-32 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/7288fe42-f7f9-4951-9303-ded78895cf5e/IMG_0800.JPG"
            alt="Boundless Saunas Materials Choices Header"
            fill
            priority
            className="object-cover object-center"
          />
          {/* 50% dark tint matching Squarespace imageOverlayOpacity 0.5 */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content: Left Aligned */}
        <div className="relative z-10 max-w-[1500px] w-full mx-auto">
          <div className="max-w-4xl text-left space-y-6 sm:space-y-7">
            <p className="text-xs sm:text-[13px] font-mono tracking-[0.25em] uppercase text-white/70 font-normal">
              — MATERIALS CHOICES
            </p>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-white leading-[1.05] drop-shadow-md">
              Wood. Heat. Finish
            </h1>

            <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-2xl">
              The warm timber, soft lighting, and the way the sauna feels and breathes around you. These are the details that make Boundless Saunas exquisite.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xs sm:text-[13px] font-mono tracking-[0.25em] uppercase text-[#6e7c52] font-semibold">
            — THREE LAYERS
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
            Internal cladding.<br />
            External cladding. <em className="italic">Stoves.</em>
          </h2>
          <p className="text-base sm:text-lg text-[#555046] font-light max-w-xl mx-auto">
            Choose what&apos;s inside, what&apos;s outside, and how it heats. Mix and match we&apos;ll build to suit.
          </p>

          {/* 3. TABS CONTAINER */}
          <div className="pt-8 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <button
              onClick={() => setActiveTab("internal")}
              className={`text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "internal"
                  ? "bg-[#110e0c] text-white shadow-md"
                  : "bg-white/80 border border-[#786e5a]/20 text-[#1b1713] hover:bg-black/5"
              }`}
            >
              Internal Cladding
            </button>
            <button
              onClick={() => setActiveTab("external")}
              className={`text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "external"
                  ? "bg-[#110e0c] text-white shadow-md"
                  : "bg-white/80 border border-[#786e5a]/20 text-[#1b1713] hover:bg-black/5"
              }`}
            >
              External Cladding
            </button>
            <button
              onClick={() => setActiveTab("stoves")}
              className={`text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "stoves"
                  ? "bg-[#110e0c] text-white shadow-md"
                  : "bg-white/80 border border-[#786e5a]/20 text-[#1b1713] hover:bg-black/5"
              }`}
            >
              Stoves &amp; Heaters
            </button>
          </div>
        </div>
      </section>

      {/* 4. MATERIALS CONTENT CONTAINER */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#efebe4]">
        <div className="max-w-[1500px] mx-auto">
          {/* TAB 1: INTERNAL CLADDING (6 Items) */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9 transition-opacity duration-300 ${
              activeTab === "internal" ? "block" : "hidden"
            }`}
          >
            {internalCladdingItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-[16px] overflow-hidden border border-[#786e5a]/16 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#786e5a] font-semibold block">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-[1.7rem] text-[#1b1713] font-normal leading-snug">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#555046] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TAB 2: EXTERNAL CLADDING (4 Items) */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-7 sm:gap-9 transition-opacity duration-300 ${
              activeTab === "external" ? "block" : "hidden"
            }`}
          >
            {externalCladdingItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-[16px] overflow-hidden border border-[#786e5a]/16 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#786e5a] font-semibold block">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-[1.7rem] text-[#1b1713] font-normal leading-snug">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#555046] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TAB 3: STOVES & HEATERS (8 Items) */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-9 transition-opacity duration-300 ${
              activeTab === "stoves" ? "block" : "hidden"
            }`}
          >
            {stoveItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-[16px] overflow-hidden border border-[#786e5a]/16 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[2/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#786e5a] font-semibold block">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1b1713] font-normal leading-snug">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#555046] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEYOND THE STANDARD SECTION */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] border-t border-black/5">
        <div className="max-w-[1500px] mx-auto space-y-16 sm:space-y-20">
          {/* Header */}
          <div className="max-w-2xl text-left space-y-4">
            <p className="text-xs sm:text-[13px] font-mono tracking-[0.25em] uppercase text-[#6e7c52] font-semibold">
              — BEYOND THE STANDARD
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1b1713] font-normal leading-tight">
              Other options.<br />
              <em className="italic">Just ask.</em>
            </h2>
            <p className="text-base sm:text-lg text-[#555046] font-light leading-relaxed">
              Specialised cladding, full-glass fronts, infrared add-ons we work outside the catalogue all the time.
            </p>
          </div>

          {/* 3 Option Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {featureOptions.map((opt) => (
              <div
                key={opt.id}
                className="bg-white p-8 sm:p-10 rounded-[18px] border border-[#786e5a]/16 space-y-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 relative">
                  <Image
                    src={opt.icon}
                    alt={opt.alt}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-[#1b1713] font-normal">
                    {opt.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#555046] font-light leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALLOUT SECTION (DARK BACKGROUND WITH IMG_0798.JPG) */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-14 overflow-hidden">
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
            — MIX &amp; MATCH
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight drop-shadow-md">
            Built for your experience
          </h2>

          <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-xl mx-auto">
            Cladding, internal and eternal, heating, finish, lighting, anything you want. Tell us your vision and we’ll bring your dream sauna to life.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-lg"
            >
              <span>Start a Build</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
