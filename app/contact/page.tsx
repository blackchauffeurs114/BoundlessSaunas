import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Clock, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Design Your Perfect Sauna Today — Boundless Saunas",
  description: "Get in touch directly with Cam Wickins at Boundless Saunas. Phone +44 7498 633823, email hello@boundlesssaunas.co.uk, or visit our Porthcothan workshop in Cornwall.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f7f5f0] text-[#1b1713] pt-28 sm:pt-36">
      {/* 1. HERO */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="section-tag-light">
                Get in Touch
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl text-[#1b1713] font-normal leading-tight">
                Let’s build your sauna
              </h1>
              <p className="text-[#666055] text-base sm:text-lg leading-relaxed font-light">
                Tell us how you imagine your sauna. We’ll talk about style, environment, and emotion. If you can think of it, we can build it.
              </p>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 shadow-md">
              <Image
                src="/content/v1/6993920ac427d10258b41fb2/1777888534472-NHKQV9GRW9D5UJS7QUQ7/IMG_0815.JPG"
                alt="Boundless Saunas Cornwall Workshop"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT LINE & INQUIRY FORM */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Line Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="section-tag-light">
                Direct Line
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1713] font-normal">
                Speak to Cam.
              </h2>
              <p className="text-[#666055] text-sm sm:text-base leading-relaxed font-light">
                One direct line no middle men, no missed messages. Cam picks up, listens, and gets back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+447498633823"
                className="bg-white border border-[#786e5a]/15 hover:border-[#6f7a48] rounded-2xl p-5 flex items-center gap-4 transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6e7c52]/10 flex items-center justify-center text-[#6e7c52] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#9a9386]">PHONE</div>
                  <div className="font-serif text-lg text-[#1b1713] font-medium">+44 7498 633823</div>
                </div>
              </a>

              <a
                href="mailto:hello@boundlesssaunas.co.uk"
                className="bg-white border border-[#786e5a]/15 hover:border-[#6f7a48] rounded-2xl p-5 flex items-center gap-4 transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6e7c52]/10 flex items-center justify-center text-[#6e7c52] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#9a9386]">EMAIL</div>
                  <div className="font-serif text-lg text-[#1b1713] font-medium">hello@boundlesssaunas.co.uk</div>
                </div>
              </a>

              <div className="bg-white border border-[#786e5a]/15 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#6e7c52]/10 flex items-center justify-center text-[#6e7c52]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#9a9386]">WORKSHOP</div>
                  <div className="font-serif text-base text-[#1b1713]">Porthcothan, PL28 8LN Cornwall, UK</div>
                </div>
              </div>

              <div className="bg-white border border-[#786e5a]/15 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#6e7c52]/10 flex items-center justify-center text-[#6e7c52]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#9a9386]">HOURS</div>
                  <div className="font-serif text-base text-[#1b1713]">Mon–Sat · 8:00am – 6:00pm GMT</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6e7c52] hover:underline"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow along @boundlesssaunas on Instagram</span>
              </a>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 3. INSTAGRAM FEED */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#efebe4] border-t border-black/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="section-tag-light">
              Follow the Build
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal">
              @boundlesssaunas on Instagram.
            </h2>
            <p className="text-sm text-[#666055] font-light">
              Process shots, finished builds, and the occasional surf check. Follow along.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "/content/v1/6993920ac427d10258b41fb2/1777888534478-RHCT13RACD52VJY37H8C/IMG_0813.JPG",
              "/content/v1/6993920ac427d10258b41fb2/1777888534465-T6SFKM03RG37Z3GIKYJZ/IMG_0846.JPG",
              "/content/v1/6993920ac427d10258b41fb2/1777888534493-R5X5SRH7PE1QOKPD8TML/IMG_0837.JPG",
              "/content/v1/6993920ac427d10258b41fb2/1777888534486-3QK46NU5CYIONIWL7XNY/IMG_0803.JPG",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src={src}
                  alt="Boundless Instagram Post"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
