import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sun, Battery, ShieldCheck, Flame } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Mobile | Experience Mobile Wellness — Boundless Saunas",
  description: "Commercial off-grid mobile saunas from 12ft to 18ft. 300W solar, twin-axle AL-KO chassis, and wood-burning stoves built for UK coastal wellness businesses.",
};

export default function CommercialMobilePage() {
  return (
    <div className="bg-[#f7f5f0] text-[#1b1713] pt-28 sm:pt-36">
      {/* 1. HERO */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="section-tag-light">
                The Range · Commercial Mobile
              </span>

              <h1 className="font-serif text-5xl sm:text-6xl text-[#1b1713] font-normal leading-tight">
                Off-grid. Built to roll.
              </h1>

              <div className="flex items-baseline gap-3">
                <span className="text-xs text-[#8c857b] uppercase tracking-wider">From</span>
                <span className="font-serif text-3xl sm:text-4xl text-[#6e7c52] font-medium">
                  £28,000
                </span>
                <span className="text-sm text-[#8c857b]">+ VAT</span>
              </div>

              <p className="text-[#666055] text-base leading-relaxed font-light">
                Commissioned by some of the UK’s most respected mobile sauna operators. From 12ft to 18ft, fully self-sufficient on 300W solar power — ready for any coastline, festival, campsite, or wellness venue in the country.
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-black/5 text-center">
                <div className="bg-white p-3 rounded-2xl border border-[#786e5a]/15 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Off-Grid Solar</span>
                  <span className="font-serif text-base sm:text-lg text-[#1b1713] font-medium">300W System</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-[#786e5a]/15 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Trailer Sizes</span>
                  <span className="font-serif text-base sm:text-lg text-[#1b1713] font-medium">12ft – 18ft</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-[#786e5a]/15 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a9386] block">Chassis</span>
                  <span className="font-serif text-base sm:text-lg text-[#1b1713] font-medium">Twin-Axle AL-KO</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?model=Commercial+Mobile"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-[#6e7c52] transition-all"
                >
                  <span>Commission a Mobile Build</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-black/20 text-[#1b1713] hover:bg-black hover:text-white transition-all"
                >
                  <span>View Mobile Gallery</span>
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 shadow-md">
              <Image
                src="/content/v1/6993920ac427d10258b41fb2/f3304ec4-f7a5-4338-9aca-87cfdea692d2/IMG_0809.JPG"
                alt="Commercial Mobile Sauna"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIZES & PRICE POINTS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#efebe4] border-t border-black/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="section-tag-light">
              Fleet Options
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal">
              Six sizes. Six price points.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { size: "12ft Mobile", price: "£28,000", capacity: "4–6 Bathers", desc: "Agile, lightweight towing on smaller vehicle classes." },
              { size: "14ft Mobile", price: "£32,000", capacity: "6–8 Bathers", desc: "Our most popular commercial fleet size. Perfect for beach and lake venues." },
              { size: "16ft Mobile", price: "£36,000", capacity: "8–10 Bathers", desc: "Includes separate internal changing room, bench storage, and dual-tier hot room." },
              { size: "18ft Mobile", price: "£40,000", capacity: "10–12 Bathers", desc: "Festival flagship. High hourly throughput with spacious changing room." },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#786e5a]/15 hover:border-[#6f7a48]/50 rounded-2xl p-6 sm:p-7 space-y-4 flex flex-col justify-between shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#6e7c52] font-semibold">
                    {card.capacity}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1b1713] font-medium">{card.size}</h3>
                  <div className="font-serif text-2xl text-[#1b1713]">
                    {card.price} <span className="text-xs text-[#8c857b] font-sans">+ VAT</span>
                  </div>
                  <p className="text-xs text-[#666055] leading-relaxed font-light pt-1">
                    {card.desc}
                  </p>
                </div>
                <Link
                  href={`/contact?model=Commercial+Mobile+${encodeURIComponent(card.size)}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-black/15 text-[#1b1713] hover:bg-black hover:text-white transition-all"
                >
                  <span>Select Size</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
