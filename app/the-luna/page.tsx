import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Luna | Garden Sauna — Boundless Saunas",
  description: "The Luna: 2.5m × 2m internal luxury garden sauna. Expansive panoramic glass, 10.5kW HUUM WiFi stove, and handcrafted Thermo Alder benches.",
};

export default function TheLunaPage() {
  return (
    <div className="bg-[#f7f5f0] text-[#1b1713] pt-28 sm:pt-36">
      {/* 1. HERO SHOWCASE */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="section-tag-light">
                Our Range · The Garden Sauna
              </span>

              <h1 className="font-serif text-5xl sm:text-6xl text-[#1b1713] font-normal leading-tight">
                The Luna
              </h1>

              <div className="flex items-baseline gap-3">
                <span className="text-xs text-[#8c857b] uppercase tracking-wider">From</span>
                <span className="font-serif text-3xl sm:text-4xl text-[#6e7c52] font-medium">
                  £18,000
                </span>
                <span className="text-sm text-[#8c857b]">+ VAT</span>
              </div>

              <p className="text-[#666055] text-base leading-relaxed font-light">
                Our signature panoramic glass garden sauna. Built around the view, The Luna balances contemporary architectural elegance with deep, soothing radiant heat. Designed for four to six people to share in slow, restorative ritual.
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-black/5 text-center">
                <div className="bg-white p-3 rounded-2xl border border-[#786e5a]/15 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Internal Size</span>
                  <span className="font-serif text-base sm:text-lg text-[#1b1713] font-medium">2.5m × 2.0m</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-[#786e5a]/15 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Capacity</span>
                  <span className="font-serif text-base sm:text-lg text-[#1b1713] font-medium">4–6 People</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-[#786e5a]/15 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Stove Power</span>
                  <span className="font-serif text-base sm:text-lg text-[#1b1713] font-medium">10.5kW HUUM</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?model=The+Luna"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-[#6e7c52] transition-all"
                >
                  <span>Enquire About This Build</span>
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
                src="/content/v1/6993920ac427d10258b41fb2/bc7a1ac4-e162-441c-abd7-60b3340c32af/IMG_0838.JPG"
                alt="The Luna Sauna Interior and Panoramic Window"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUILT AROUND THE VIEW */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#efebe4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src="/content/v1/6993920ac427d10258b41fb2/1777888534493-R5X5SRH7PE1QOKPD8TML/IMG_0837.JPG"
                alt="Panoramic Glass Wall of The Luna"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="section-tag-light">
                Architectural View
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal">
                Built around the view.
              </h2>
              <div className="space-y-4 text-[#666055] text-base leading-relaxed font-light">
                <p>
                  The cornerstone of The Luna is its full-height double-glazed architectural glass wall. Whether your sauna faces a coastal headland, rolling moorland, or a tranquil secluded garden, the outside becomes part of the interior experience.
                </p>
                <p>
                  We utilize commercial-grade, argon-filled toughened thermal glass that maintains complete internal temperatures up to 100°C without condensation or draft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#f7f5f0] border-t border-black/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="section-tag-light">
              The Specifications
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1713] font-normal">
              The technical details.
            </h2>
          </div>

          <div className="bg-white border border-[#786e5a]/15 rounded-3xl overflow-hidden divide-y divide-black/5 text-sm shadow-sm">
            {[
              { label: "Internal Dimensions", value: "2.5m (Width) × 2.0m (Depth) × 2.1m (Internal Height)" },
              { label: "External Footprint", value: "2.8m (Width) × 2.3m (Depth) × 2.45m (Roof Peak)" },
              { label: "Recommended Capacity", value: "4 to 6 Adults comfortably seated across 2 tiers" },
              { label: "Heating System", value: "10.5kW HUUM Steel or Drop Electric Heater with WiFi App Control" },
              { label: "Glazing Specification", value: "8mm + 8mm Toughened Argon Double-Glazed Panoramic Glass" },
              { label: "Internal Cladding", value: "Thermo Aspen / Thermo Alder (Resin-free, hypoallergenic)" },
              { label: "Benches", value: "Handcrafted 2-Tier Floating Benches in Thermo Alder with LED glow" },
              { label: "External Cladding", value: "Breathable membrane with charred British Larch or Shou Sugi Ban" },
            ].map((spec, i) => (
              <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral-50 transition-colors">
                <span className="text-[#8c857b] font-medium text-xs sm:text-sm">{spec.label}</span>
                <span className="text-[#1b1713] font-medium">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact?model=The+Luna"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-[#6e7c52] transition-all"
            >
              <span>Enquire About The Luna</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
