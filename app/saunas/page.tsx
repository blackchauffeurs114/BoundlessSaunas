import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saunas | Discover Your Perfect Sauna — Boundless Saunas",
  description: "From compact garden saunas to fully mobile commercial builds. Every sauna is customized for the experience.",
};

export default function SaunasPage() {
  return (
    <div className="bg-[#f7f5f0] text-[#1b1713]">
      {/* 1. HERO SECTION (DARK BACKGROUND WITH IMG_0807.JPG) */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/3e8abfe9-ee63-4d85-a957-a4d6521f745a/IMG_0807.JPG"
            alt="Boundless Bespoke Handcrafted Saunas Range"
            fill
            priority
            className="object-cover object-[49%_77%]"
          />
          {/* Subtle natural 40% tint matching original site Squarespace imageOverlayOpacity 0.5 */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content: Left Aligned */}
        <div className="relative z-10 max-w-[1500px] w-full mx-auto">
          <div className="max-w-4xl text-left space-y-6 sm:space-y-7">
            <p className="text-xs sm:text-[13px] font-mono tracking-[0.25em] uppercase text-white/70 font-normal">
              — THE RANGE
            </p>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-white leading-[1.04] drop-shadow-md">
              Here to make your sauna<br className="hidden sm:inline" />
              {" "}dreams become a reality..
            </h1>

            <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-2xl">
              Every Boundless Sauna is handcrafted by the best designers to suit your specific needs. If you want to experience heat, recovery, and outdoor living, Boundless Saunas is for you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTRO HEADER SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="section-tag-light">
            Three Builds. Endless Possibilities.
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
            From compact garden saunas to fully mobile commercial builds. Every sauna is customized for the experience.
          </h2>
        </div>
      </section>

      {/* 3. MODEL 1: THE COVE */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#efebe4] border-b border-black/5">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Specs & Info */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#1b1713] border border-[#786e5a]/25 bg-white/60">
                  1–2 Person · Compact Garden
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1b1713] font-normal">
                  The Cove
                </h2>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-serif text-3xl sm:text-4xl text-[#6e7c52] font-medium">
                    From £10,000
                  </span>
                  <span className="text-sm text-[#8c857b] uppercase font-medium">+ VAT</span>
                </div>
              </div>

              <div className="space-y-4 text-[#555046] text-base leading-relaxed font-light">
                <p>
                  This is our smallest garden sauna. Built for one to two people, ideal for your smaller spaces. The Cove combines clean architectural lines with a calm, minimal interior for a space where you can unwind and heal.
                </p>
                <p>
                  Fully bespoke and configurable to your preferred layout and finish. Add a window, make slightly wider, we can adapt to you.
                </p>
              </div>

              {/* 6-Item Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">0.9 m × 1.4m</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">External</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">1.2 m × 1.69 m</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Stove</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">6kW Huum Steel</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal Cladding</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Thermo Radiata</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Benches</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Thermo Radiata</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">External Cladding</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Black or Larch</span>
                </div>
              </div>

              <p className="text-xs text-[#8c857b] italic">
                *All saunas are customisable to suit. Please see our materials page for options.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?model=The+Cove"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#110e0c] text-white hover:bg-[#6e7c52] transition-all"
                >
                  <span>Enquire About This</span>
                </Link>
                <Link
                  href="/materials"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-black/20 text-[#1b1713] hover:bg-black hover:text-white transition-all"
                >
                  <span>View in Detail</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Gallery (5 Images) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              <div className="relative col-span-2 h-72 sm:h-80 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/2fb7e641-0c3a-4627-8e2d-127e38bdfa52/IMG_4546.PNG"
                  alt="The Cove Sauna 3D Render"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/e9885a53-69dd-4ef1-b536-7d87a8213082/IMG_4560.PNG"
                  alt="The Cove Interior Render"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/49eb84b6-779f-47f2-9c99-3c63579bca14/IMG_4563.PNG"
                  alt="The Cove Side View"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/2b54e9ad-7a1d-48aa-a785-01ca365d0ed8/BE21E235-83A9-4BBA-8E30-8801A0F9CE2F.PNG"
                  alt="The Cove Floor Plan"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/14b886ff-b937-41c9-b20d-156a882c2b4c/IMG_3669.JPG"
                  alt="The Cove Real Build"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODEL 2: THE SOLACE */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] border-b border-black/5">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Specs & Info */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#1b1713] border border-[#786e5a]/25 bg-white">
                  4–6 Person · Glass Fronted
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1b1713] font-normal">
                  The Solace
                </h2>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-serif text-3xl sm:text-4xl text-[#6e7c52] font-medium">
                    From £21,000
                  </span>
                  <span className="text-sm text-[#8c857b] uppercase font-medium">+ VAT</span>
                </div>
              </div>

              <div className="space-y-4 text-[#555046] text-base leading-relaxed font-light">
                <p>
                  The Solace is one of our larger glass-fronted sauna designed for more spacious gardens, wellness spaces, and slower shared experiences.
                </p>
                <p>
                  Built to accommodate 4-6 people, The expansive glazing, elevated detailing, Huum stove makes it a striking centrepiece for those who want recovery, and long evenings that unfold slowly.
                </p>
              </div>

              {/* 6-Item Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">2.4 m × 2 m</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">External</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">3.3 m × 2.34 m</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Stove</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">10.5kW Huum Steel</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal Cladding</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Alder</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Floor</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Red Grandis</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">External Cladding</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Black Premium</span>
                </div>
              </div>

              <p className="text-xs text-[#8c857b] italic">
                *All saunas are customisable to suit. Please see our materials page for options.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?model=The+Solace"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#110e0c] text-white hover:bg-[#6e7c52] transition-all"
                >
                  <span>Enquire About This</span>
                </Link>
                <Link
                  href="/the-luna"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-black/20 text-[#1b1713] hover:bg-black hover:text-white transition-all"
                >
                  <span>View in Detail</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Gallery (6 Images) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              <div className="relative col-span-2 h-72 sm:h-80 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/0e445267-7292-40e8-a1fb-6548a402cb1f/IMG_4557.PNG"
                  alt="The Solace Sauna Perspective Render"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/a1440f11-56a5-4be4-89b7-3ff699e35967/IMG_4553.PNG"
                  alt="The Solace Interior View"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/42dd12c3-c54d-46e1-817c-a69646082318/IMG_4552.PNG"
                  alt="The Solace Glass Detail"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/654a9eac-581b-4248-936d-dfe2bc25066e/IMG_4019.JPG"
                  alt="The Solace Real Coastal Build"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/a23c1794-0401-428a-9e29-729f9a5ab691/P1000964.JPEG"
                  alt="The Solace Garden Setting"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MODEL 3: THE HAVEN */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#efebe4] border-b border-black/5">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Specs & Info */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#1b1713] border border-[#786e5a]/25 bg-white/60">
                  2–4 Person · Signature Glass
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1b1713] font-normal">
                  The Haven
                </h2>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-serif text-3xl sm:text-4xl text-[#6e7c52] font-medium">
                    From £16,000
                  </span>
                  <span className="text-sm text-[#8c857b] uppercase font-medium">+ VAT</span>
                </div>
              </div>

              <div className="space-y-4 text-[#555046] text-base leading-relaxed font-light">
                <p>
                  Built to accommodate 2-4 people, The haven’s expansive glazing, elevated detailing, and the Huum stove is a striking centrepiece for those who want recovery, and long evenings that unfold slowly.
                </p>
                <p>
                  A compact luxury footprint tailored for tranquil private gardens and boutique wellness retreats.
                </p>
              </div>

              {/* 6-Item Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">2 m × 2 m</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">External</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">2.29 m × 2.1 m</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Stove</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">10.5kW Huum Steel</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal Cladding</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Alder</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Floor</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Red Grandis</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">External Cladding</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Black Premium</span>
                </div>
              </div>

              <p className="text-xs text-[#8c857b] italic">
                *All saunas are customisable to suit. Please see our materials page for options.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?model=The+Haven"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#110e0c] text-white hover:bg-[#6e7c52] transition-all"
                >
                  <span>Enquire About This</span>
                </Link>
                <Link
                  href="/the-nest"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-black/20 text-[#1b1713] hover:bg-black hover:text-white transition-all"
                >
                  <span>View in Detail</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Gallery (3 Images) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              <div className="relative col-span-2 h-72 sm:h-80 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/dea1f1e8-0459-44cd-8cf0-8975557e588a/IMG_4543.PNG"
                  alt="The Haven Sauna 3D Model"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-52 sm:h-60 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/d953b904-2182-4ec1-a917-9227db5aac4a/IMG_4551.PNG"
                  alt="The Haven Front Glass Elevation"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-52 sm:h-60 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/2383cd74-ba32-4075-88b4-7e8b1c9ebf7a/IMG_4547.PNG"
                  alt="The Haven Layout"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MODEL 4: THE SANCTUARY */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] border-b border-black/5">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Specs & Info */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#1b1713] border border-[#786e5a]/25 bg-white">
                  Wraparound Porch &amp; Deck
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1b1713] font-normal">
                  The Sanctuary
                </h2>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-serif text-3xl sm:text-4xl text-[#6e7c52] font-medium">
                    From £28,000
                  </span>
                  <span className="text-sm text-[#8c857b] uppercase font-medium">+ VAT</span>
                </div>
              </div>

              <div className="space-y-4 text-[#555046] text-base leading-relaxed font-light">
                <p>
                  Our beautiful sanctuary sauna, featuring a spacious wraparound porch and deck, floor to ceiling window and modern design. The sanctuary blends natural warmth with a contemporary design. Inside a 2 tier floating bench, soft lighting and a choice of heater to create the perfect environment for relaxation.
                </p>
                <p>
                  This sauna is designed for the entertainer. Why not add an outdoor shower our plunge bath under your porch?
                </p>
              </div>

              {/* 6-Item Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">2.5 m × 2 m</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">External</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">3.5 m × 2.4 m</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Stove</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Wood Fired or Electric</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal Cladding</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Thermo Ayous</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Benches</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Thermo Ash</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Floor</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Wood or Tiled</span>
                </div>
              </div>

              <p className="text-xs text-[#8c857b] italic">
                *All saunas are customisable to suit. Please see our materials page for options.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?model=The+Sanctuary"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#110e0c] text-white hover:bg-[#6e7c52] transition-all"
                >
                  <span>Enquire About This</span>
                </Link>
                <Link
                  href="/materials"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-black/20 text-[#1b1713] hover:bg-black hover:text-white transition-all"
                >
                  <span>View in Detail</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Gallery (3 Images) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              <div className="relative col-span-2 h-72 sm:h-80 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/c0a91428-e1ba-4a86-bebc-2cb8e6a65104/IMG_4542.PNG"
                  alt="The Sanctuary Wraparound Porch Sauna"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-52 sm:h-60 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/8d684324-9852-4a14-b536-65540ef4b262/IMG_4544.PNG"
                  alt="The Sanctuary Floor to Ceiling Window"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-52 sm:h-60 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/2ef251d1-a899-4e4d-b96b-6ac4d714abc9/IMG_4550.PNG"
                  alt="The Sanctuary Architecture"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 & 8. THE COMMERCIAL & MOBILE BUILD SECTION */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#efebe4] border-b border-black/5">
        <div className="max-w-[1500px] mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Specs */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#1b1713] border border-[#786e5a]/25 bg-white/60">
                  Commercial &amp; Event Spec
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1b1713] font-normal">
                  The Specification
                </h2>
                <p className="text-[#555046] text-base sm:text-lg leading-relaxed font-light">
                  Available from 12ft to 18ft+, each build is fully self-sufficient, commercial-grade, and engineered for life on the road.
                </p>
              </div>

              {/* 5-Item Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Chassis</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Galvanised Flat-bed</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Power</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">300W Solar (Off-grid)</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Heating</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Wood-fired Stove</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Window</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Panoramic Glazed</span>
                </div>
                <div className="bg-white p-4 rounded-[12px] border border-[#786e5a]/16 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Cladding</span>
                  <span className="font-serif text-base text-[#1b1713] font-medium">Charred Larch / Black</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?model=Mobile+Sauna"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#110e0c] text-white hover:bg-[#6e7c52] transition-all"
                >
                  <span>Enquire About This</span>
                </Link>
                <Link
                  href="/commercial-mobile"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-black/20 text-[#1b1713] hover:bg-black hover:text-white transition-all"
                >
                  <span>View in Detail</span>
                </Link>
              </div>
            </div>

            {/* Right Photos */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              <div className="relative col-span-2 h-72 sm:h-80 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/1f5fbb1b-05f0-4185-8906-faa0728ee75c/IMG_6106.jpg"
                  alt="Boundless Mobile Sauna on Road"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/b5ffe436-b79c-47a7-a57e-04db9d6a780b/IMG_4548.png"
                  alt="Mobile Sauna Chassis Design"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/37a28ba4-c46f-4ff3-99b7-f9e127ef1cfe/IMG_0207.JPG"
                  alt="Mobile Sauna Operating on Beach"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Sizes & Pricing 4-Card Grid */}
          <div className="pt-8 border-t border-black/5 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1b1713] font-normal">
                Sizes &amp; Pricing
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-[#786e5a]/16 rounded-[15px] p-6 space-y-3 transition-all hover:-translate-y-1 hover:shadow-md">
                <span className="font-serif text-2xl text-[#1b1713] font-medium">12ft</span>
                <div className="space-y-0.5">
                  <span className="text-xs text-[#8c857b] block uppercase">From</span>
                  <span className="font-serif text-3xl text-[#6e7c52] font-medium">£29,000</span>
                  <span className="text-xs text-[#8c857b] block">+ VAT</span>
                </div>
                <p className="text-xs text-[#666055] leading-relaxed pt-2 border-t border-black/5">
                  Compact mobile · 4 - 6 people
                </p>
              </div>

              <div className="bg-white border border-[#786e5a]/16 rounded-[15px] p-6 space-y-3 transition-all hover:-translate-y-1 hover:shadow-md">
                <span className="font-serif text-2xl text-[#1b1713] font-medium">16ft</span>
                <div className="space-y-0.5">
                  <span className="text-xs text-[#8c857b] block uppercase">From</span>
                  <span className="font-serif text-3xl text-[#6e7c52] font-medium">£36,000</span>
                  <span className="text-xs text-[#8c857b] block">+ VAT</span>
                </div>
                <p className="text-xs text-[#666055] leading-relaxed pt-2 border-t border-black/5">
                  No changing room · 12 - 14 people
                </p>
              </div>

              <div className="bg-white border border-[#786e5a]/16 rounded-[15px] p-6 space-y-3 transition-all hover:-translate-y-1 hover:shadow-md">
                <span className="font-serif text-2xl text-[#1b1713] font-medium">16ft +</span>
                <div className="space-y-0.5">
                  <span className="text-xs text-[#8c857b] block uppercase">From</span>
                  <span className="font-serif text-3xl text-[#6e7c52] font-medium">£38,000</span>
                  <span className="text-xs text-[#8c857b] block">+ VAT</span>
                </div>
                <p className="text-xs text-[#666055] leading-relaxed pt-2 border-t border-black/5">
                  With changing room · 8 - 10 people
                </p>
              </div>

              <div className="bg-white border border-[#786e5a]/16 rounded-[15px] p-6 space-y-3 transition-all hover:-translate-y-1 hover:shadow-md">
                <span className="font-serif text-2xl text-[#1b1713] font-medium">18ft +</span>
                <div className="space-y-0.5">
                  <span className="text-xs text-[#8c857b] block uppercase">From</span>
                  <span className="font-serif text-3xl text-[#6e7c52] font-medium">£40,000</span>
                  <span className="text-xs text-[#8c857b] block">+ VAT</span>
                </div>
                <p className="text-xs text-[#666055] leading-relaxed pt-2 border-t border-black/5">
                  With changing room · 10 - 12 people
                </p>
              </div>
            </div>

            <div className="text-center pt-2">
              <Link
                href="/contact?type=Mobile+Build"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#110e0c] text-white hover:bg-[#6e7c52] transition-all"
              >
                <span>Discuss a Mobile Build</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FULLY BESPOKE COMMISSION SECTION */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] border-b border-black/5">
        <div className="max-w-[1500px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="section-tag-light">
              One-of-a-Kind
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
              Fully Bespoke Commissions
            </h2>
            <p className="text-[#666055] text-sm sm:text-base font-light">
              Architect-designed outdoor saunas for unique clifftops, challenging contours, rooftop terraces, or commercial hospitality spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#786e5a]/16 rounded-[15px] p-8 text-center space-y-2">
              <p className="text-xs text-[#8c857b] uppercase tracking-wider">Build Type</p>
              <h4 className="font-serif text-2xl text-[#1b1713] font-medium">Fully Bespoke</h4>
            </div>
            <div className="bg-white border border-[#786e5a]/16 rounded-[15px] p-8 text-center space-y-2">
              <p className="text-xs text-[#8c857b] uppercase tracking-wider">Size</p>
              <h4 className="font-serif text-2xl text-[#1b1713] font-medium">Any Footprint</h4>
            </div>
            <div className="bg-white border border-[#786e5a]/16 rounded-[15px] p-8 text-center space-y-2">
              <p className="text-xs text-[#8c857b] uppercase tracking-wider">Pricing</p>
              <h4 className="font-serif text-2xl text-[#6e7c52] font-medium">On Enquiry</h4>
              <p className="text-xs text-[#8c857b]">Spec-dependent</p>
            </div>
          </div>

          {/* 3 Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative h-64 sm:h-72 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
              <Image
                src="/content/v1/6993920ac427d10258b41fb2/3bfb8b7e-ea94-4165-acf5-03627ea273fa/IMG_0804.JPG"
                alt="Bespoke Sauna Interior"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 sm:h-72 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
              <Image
                src="/content/v1/6993920ac427d10258b41fb2/2f619d8d-85af-452f-a9fc-d5cd85e596e4/IMG_0831.JPG"
                alt="Bespoke Sauna Exterior Pergola"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 sm:h-72 rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
              <Image
                src="/content/v1/6993920ac427d10258b41fb2/7fced0b2-3629-4e3f-957a-70b224dc0883/IMG_0845.JPG"
                alt="Bespoke Sauna Evening View"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/contact?type=Bespoke"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#110e0c] text-white hover:bg-[#6e7c52] transition-all"
            >
              <span>Enquire About This</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10 & 11. CASE STUDIES SECTION */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#efebe4] border-b border-black/5">
        <div className="max-w-[1500px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tag-light">
              Proud Builder Of
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
              Built for the brands shaping British sauna.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Soala Sauna */}
            <div className="bg-white border border-[#786e5a]/14 rounded-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/92347c79-0fd3-46e4-a161-a117b669ce1f/IMG_0393.jpg"
                  alt="Soala Sauna Henley on Thames"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#1b1713] border border-[#786e5a]/20">
                    Henley on Thames
                  </span>
                  <h3 className="font-serif text-3xl text-[#1b1713] font-medium pt-1">
                    Soala Sauna
                  </h3>
                  <p className="text-sm text-[#666055] leading-relaxed font-light">
                    A premium Thames-side mobile sauna brand. Hand-built by Boundless, finished to commercial spec — and proudly running every weekend.
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#6e7c52]">
                  <a href="https://soala.co.uk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    <span>soala.co.uk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-black/20">|</span>
                  <a href="mailto:sauna@soala.co.uk" className="hover:underline">
                    sauna@soala.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: On Shore Sauna */}
            <div className="bg-white border border-[#786e5a]/14 rounded-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/c8c61e97-5da4-4e57-bfea-4553c319bd65/b99896f9-59f9-4f62-8ddc-6275ad734e73.JPG"
                  alt="On Shore Sauna Westward Ho!"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#1b1713] border border-[#786e5a]/20">
                    Westward Ho!
                  </span>
                  <h3 className="font-serif text-3xl text-[#1b1713] font-medium pt-1">
                    On Shore Sauna
                  </h3>
                  <p className="text-sm text-[#666055] leading-relaxed font-light">
                    Devon&apos;s coastal mobile sauna brand. Built for sea-level air, salt, and sand — and the kind of post-surf reset that defines the West Country.
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#6e7c52]">
                  <a href="https://onshoresaunas.co.uk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    <span>onshoresaunas.co.uk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-black/20">|</span>
                  <span className="text-[#666055]">@onshoresaunas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL HERO CALLOUT SECTION (DARK WITH IMG_0823.JPG) */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-14 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/a3079c27-def2-48e6-afed-c202775524b1/IMG_0823.JPG"
            alt="Bespoke Handcrafted Sauna by Boundless Saunas"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="section-tag-pill">
            Start Your Project
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight">
            A bespoke sauna, built around your space.
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Tell us about your space, your style, and how you want to customize your sauna experience. We’ll come back with ideas, materials, and a tailored quote.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/materials"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border border-white/50 text-white hover:bg-white hover:text-black transition-all shadow-xl"
            >
              <span>See Materials</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all shadow-xl"
            >
              <span>Start Your Build</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
