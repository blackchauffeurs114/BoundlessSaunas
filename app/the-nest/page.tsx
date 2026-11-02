import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Nest | Compact Sauna — Boundless Saunas",
  description: "The Nest: 2m × 1.8m compact garden sauna. Full-height glass front, 9kW HUUM stove, and handcrafted Thermo Alder interior.",
};

export default function TheNestPage() {
  return (
    <div className="bg-[#f7f5f0] text-[#1b1713] pt-28 sm:pt-36">
      {/* 1. HERO */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="section-tag-light">
                Our Range · The Compact Sauna
              </span>

              <h1 className="font-serif text-5xl sm:text-6xl text-[#1b1713] font-normal leading-tight">
                The Nest
              </h1>

              <div className="flex items-baseline gap-3">
                <span className="text-xs text-[#8c857b] uppercase tracking-wider">From</span>
                <span className="font-serif text-3xl sm:text-4xl text-[#6e7c52] font-medium">
                  £15,000
                </span>
                <span className="text-sm text-[#8c857b]">+ VAT</span>
              </div>

              <p className="text-[#666055] text-base leading-relaxed font-light">
                A smaller, glass-fronted build for tighter gardens, couples, or close friends. Clad in British larch or painted black timber with Red Grandis decking that gently warms into a beautiful silver-grey over time.
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-black/5 text-center">
                <div className="bg-white p-3 rounded-2xl border border-[#786e5a]/15 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal Size</span>
                  <span className="font-serif text-base sm:text-lg text-[#1b1713] font-medium">2.0m × 1.8m</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-[#786e5a]/15 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Capacity</span>
                  <span className="font-serif text-base sm:text-lg text-[#1b1713] font-medium">2–4 People</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-[#786e5a]/15 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Stove</span>
                  <span className="font-serif text-base sm:text-lg text-[#1b1713] font-medium">9kW HUUM</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?model=The+Nest"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-[#6e7c52] transition-all"
                >
                  <span>Enquire About The Nest</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-black/20 text-[#1b1713] hover:bg-black hover:text-white transition-all"
                >
                  <span>View Gallery</span>
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 shadow-md">
              <Image
                src="/content/v1/6993920ac427d10258b41fb2/f85df4f4-2b92-498a-9ace-4a0fc5bf4107/IMG_8955.JPG"
                alt="The Nest Compact Sauna"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPACT BUILD, FULL DETAIL */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#efebe4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="section-tag-light">
                Refined Efficiency
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal">
                Compact build, full detail.
              </h2>
              <div className="space-y-4 text-[#666055] text-base leading-relaxed font-light">
                <p>
                  Having a smaller garden space doesn’t mean settling for inferior heat or compromised aesthetics. The Nest packs the full sensory immersion of our larger builds into an optimized 2m × 1.8m footprint.
                </p>
                <p>
                  With rapid warm-up times (under 40 minutes to reach 90°C) and reduced electrical draw, The Nest is ideal for frequent daily use.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src="/content/v1/6993920ac427d10258b41fb2/1777888534486-3QK46NU5CYIONIWL7XNY/IMG_0803.JPG"
                alt="Interior woodwork of The Nest Sauna"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#f7f5f0] border-t border-black/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="section-tag-light">
              Engineering Specs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1713] font-normal">
              The technical details.
            </h2>
          </div>

          <div className="bg-white border border-[#786e5a]/15 rounded-3xl overflow-hidden divide-y divide-black/5 text-sm shadow-sm">
            {[
              { label: "Internal Dimensions", value: "2.0m (Width) × 1.8m (Depth) × 2.1m (Internal Height)" },
              { label: "External Footprint", value: "2.29m (Width) × 2.1m (Depth) × 2.35m (Overall Height)" },
              { label: "Recommended Seating", value: "2 to 4 Adults comfortably" },
              { label: "Heating Specification", value: "9kW HUUM Hive Mini or Drop Electric with WiFi Mobile App" },
              { label: "Glazing Type", value: "Full-height Toughened Safety Glass with minimal black powder-coated frame" },
              { label: "Internal Cladding", value: "Grade-A Thermo Alder (Warm reddish tones, knot-free, splinter-free)" },
              { label: "Benches", value: "Two-level Thermo Alder benches with integrated warm under-bench LED glow" },
              { label: "External Options", value: "Natural British Larch (silvers naturally) or Pitch Black protective oil" },
            ].map((spec, i) => (
              <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral-50 transition-colors">
                <span className="text-[#8c857b] font-medium text-xs sm:text-sm">{spec.label}</span>
                <span className="text-[#1b1713] font-medium">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact?model=The+Nest"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-[#6e7c52] transition-all"
            >
              <span>Talk with Cam</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
