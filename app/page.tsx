import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Marquee from "@/components/Marquee";
import QuoteBuilder from "@/components/QuoteBuilder";
import FeaturedProjects from "@/components/FeaturedProjects";
import VideoReelsSection from "@/components/VideoReelsSection";

export default function HomePage() {
  return (
    <div className="bg-[#f7f5f0] text-[#1b1713]">
      {/* 1. HERO SECTION (100% MATCH WITH SCREENSHOT: LEFT-ALIGNED CONTENT, SAUNA VISIBLE ON RIGHT) */}
      <section className="relative min-h-[100dvh] flex items-center pt-28 sm:pt-24 pb-14 sm:pb-16 px-5 sm:px-10 lg:px-14 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-banner.jpg"
            alt="Boundless Bespoke Handcrafted Sauna in Cornwall"
            fill
            priority
            className="object-cover object-[52%_center] sm:object-center"
          />
          {/* Subtle overlay to enhance contrast on the left side text while preserving the sauna glow on the right */}
          <div className="absolute inset-0 bg-black/15"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent"></div>
        </div>

        {/* Content: STRICTLY LEFT-ALIGNED as shown in the screenshot */}
        <div className="relative z-10 max-w-[1500px] w-full mx-auto">
          <div className="max-w-4xl lg:max-w-5xl text-left space-y-4 sm:space-y-7 mt-4 sm:mt-12">
            <div className="inline-block">
              <span className="section-tag-pill">
                CRAFTED IN CORNWALL
              </span>
            </div>

            <h1 className="font-serif text-[2.85rem] xs:text-[3.1rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.5rem] font-normal tracking-tight text-white leading-[1.04] sm:leading-[1.05] drop-shadow-md">
              <span className="block sm:inline">Heat. Deep </span>
              <span className="block sm:inline">Relaxation.</span>
              <br className="hidden sm:inline" />
              <span className="block sm:inline sm:mt-2">Bespoke </span>
              <span className="block sm:inline">saunas.</span>
            </h1>

            <p className="text-[15px] sm:text-lg text-white/90 font-sans font-light leading-[1.5] sm:leading-relaxed max-w-[340px] sm:max-w-2xl">
              Designed for slower living, Boundless handcrafted saunas are built from scratch on the Cornish coast. Every build fits your space and your lifestyle. Every project is refined and built to last.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-[340px] sm:max-w-none">
              <Link
                href="/saunas"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-xl text-center"
              >
                <span>Explore our Saunas</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium border border-white/60 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-center"
              >
                <span>Start Your Build</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE TICKER */}
      <Marquee />

      {/* 3. OUR CRAFT SECTION (EXACT SQUARESPACE 3-COLUMN MOSAIC LAYOUT) */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0]">
        <div className="max-w-[1500px] mx-auto space-y-10 sm:space-y-12">
          {/* Top Text Header */}
          <div className="max-w-3xl space-y-3">
            <span className="section-tag-light">
              Our Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] leading-[1.15] font-normal">
              Every sauna is a one of a kind.
            </h2>
            <p className="text-[#5c564e] text-base leading-relaxed font-light pt-1">
              Every Boundless Sauna is customized using carefully selected materials that embody the experience you want to have. Intricate detailing and trade-standard sauna build quality come together to create a space that endures.
            </p>
          </div>

          {/* 3-Column Photo Mosaic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            {/* Column 1: Left wide side (Col 2-14 = 50% width) - Roshni wali (Day) & Andheray wali (Night) */}
            <div className="md:col-span-6 flex flex-col gap-3.5">
              <div className="relative h-[260px] sm:h-[340px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/assets/craft/craft-day-exterior.jpg"
                  alt="Handcrafted Boundless sauna trailer pod on timber decking in daylight"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="relative h-[180px] sm:h-[240px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/assets/craft/craft-night-exterior.jpg"
                  alt="Handcrafted Boundless mobile sauna trailer illuminated at night with exterior LED light bar and glowing mountain art interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 2: Middle column (Col 14-20 = 25% width) - Scenic garden window & Founder */}
            <div className="md:col-span-3 flex flex-col gap-3.5">
              <div className="relative h-[130px] sm:h-[180px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/assets/craft/craft-garden-window.jpg"
                  alt="Sauna panoramic window overlooking peaceful green garden"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[310px] sm:h-[400px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/founder-new.jpg"
                  alt="Cam Wickins Founder of Boundless Saunas smiling with arms crossed"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 3: Right column (Col 20-26 = 25% width) - LED timber bench & HUUM wood stove */}
            <div className="md:col-span-3 flex flex-col gap-3.5">
              <div className="relative h-[130px] sm:h-[180px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/assets/craft/craft-led-bench.jpg"
                  alt="Bespoke cedar timber wall cladding with recessed warm LED glow and ergonomic bench"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[310px] sm:h-[400px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/assets/craft/craft-stove.jpg"
                  alt="Wood-burning Huum sauna stove with stone cage, flue pipe and panoramic glass window"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* QUOTE BUILDER FORM: PLACED DIRECTLY BELOW THE 6 CRAFT IMAGES */}
          <div className="pt-10 sm:pt-16 flex flex-col items-center">
            <QuoteBuilder />
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS (HORIZONTAL TOUCH / SWIPE CAROUSEL CLONED FROM SPAPROF.COM) */}
      <FeaturedProjects />

      {/* 4.5 BOUNDLESS IN MOTION (3 VERTICAL AD REELS WITH BRANDED INTRO) */}
      <VideoReelsSection />

      {/* 5. FULL SAUNA EXPERIENCE / MOORLAND BACKGROUND */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-10 lg:px-14 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/51d9fb28-51d7-4aa5-a750-c66bcb015b53/dji_fly_20260212_135410_0006_1770915763740_photo.jpg"
            alt="Mobile Sauna in Coastal Field"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-white">
          <span className="section-tag-pill">
            Made in Cornwall · Made for Anywhere
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
            The full sauna experience. Built to move.
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Our handcrafted mobile saunas rest on galvanised flat-bed trailers and designed for fully off-grid operation. Equipped with a wood-fired stove, panoramic windows and 300W solar integration, Boundless saunas are built to carry the warmth wherever life leads.
          </p>
          <div className="pt-3">
            <Link
              href="/commercial-mobile"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all shadow-xl"
            >
              <span>See Mobile Builds</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY BOUNDLESS SAUNAS (8 PILLARS WITH EXACT SQUARESPACE ICONS & NUMBERS) */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0]">
        <div className="max-w-[1500px] mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tag-light">
              Why Boundless Saunas
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
              The sauna experience, handcrafted for perfection
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "01",
                icon: "/content/v1/6993920ac427d10258b41fb2/6bc30141-3dca-459c-b206-c44fe0c3b902/noun-heart-8128907-5C6B3D.png",
                title: "Truly bespoke",
                desc: "Every sauna is designed around you and your experience. Dimensions, layouts, cladding, glazing, and finishes are all tailored to your needs.",
              },
              {
                num: "02",
                icon: "/content/v1/6993920ac427d10258b41fb2/025b2b87-9826-48d6-8f63-766ce22ea2d3/noun-premium-8370995-5C6B3D.png",
                title: "Premium materials only",
                desc: "We work exclusively with premium sauna construction materials, like Thermo Alder, Western Red Cedar, charred Larch, and trusted Scandinavian stove systems.",
              },
              {
                num: "03",
                icon: "/content/v1/6993920ac427d10258b41fb2/003dd254-0e0b-487e-b69d-5912faa4f689/noun-layer-8287509-5C6B3D.png",
                title: "Hand-built in Cornwall",
                desc: "Every Boundless sauna is designed and handcrafted in Porthcothan. Our construction methods are proven, and our attention to detail, meticulous.",
              },
              {
                num: "04",
                icon: "/content/v1/6993920ac427d10258b41fb2/be5ee1e8-87e6-41f4-95ef-e7178d33b4e7/noun-increase-8330930-5C6B3D.png",
                title: "Trade-grade construction",
                desc: "Built for the best construction quality, trusted across hospitality, wellness, and commercial sauna projects.",
              },
              {
                num: "05",
                icon: "/content/v1/6993920ac427d10258b41fb2/50b7e1b0-c91d-4fac-9f6f-c91440c1615b/noun-wifi-8042764-5C6B3D.png",
                title: "WiFi-controlled stoves",
                desc: "Heat your sauna remotely with Huum Wi-Fi heaters for a perfectly prepared space every time.",
              },
              {
                num: "06",
                icon: "/content/v1/6993920ac427d10258b41fb2/b94ea2ca-cb18-4a89-ab47-47f8857e227f/noun-camping-2602794-5C6B3D.png",
                title: "Off-grid options",
                desc: "Operate your mobile sauna 100% off-grid with our integrated solar systems and wood-fired heating.",
              },
              {
                num: "07",
                icon: "/content/v1/6993920ac427d10258b41fb2/3f576862-f680-473e-9051-8f7a0bb627a1/noun-quality-5470586-5C6B3D.png",
                title: "Detail-focused craftsmanship",
                desc: "Built for ambiance with recessed lighting, hidden fixings, and precision bench detailing, designed to carry the ritual further.",
              },
              {
                num: "08",
                icon: "/content/v1/6993920ac427d10258b41fb2/34e074d2-299b-495a-b440-b970f16b7a01/noun-quality-8371711-5C6B3D.png",
                title: "Built once, built right",
                desc: "The Boundless excellence, quiet confidence, materials, and process. No shortcuts. No compromises.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="why-card p-6 sm:p-7 space-y-4"
              >
                {/* Number in top right */}
                <div className="why-num">
                  {p.num}
                </div>

                <div className="why-content space-y-3">
                  {/* Icon */}
                  <div className="relative w-8 h-8 opacity-85">
                    <Image src={p.icon} alt={p.title} fill className="object-contain" />
                  </div>

                  <h3 className="font-serif text-lg text-[#1b1713] font-medium leading-snug pt-1">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666055] leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE EXPERIENCE SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#efebe4] border-t border-black/5">
        <div className="max-w-[1500px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tag-light">
              The Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
              Take the sauna experience with you.
            </h2>
            <p className="text-[#666055] text-sm sm:text-base font-light">
              A Boundless sauna isn’t an upgrade its a daily reset. Built to slot into your life, not stand apart from it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "/content/v1/6993920ac427d10258b41fb2/00e44262-5e0c-4d2c-bbb1-3cc387311292/noun-reset-7064326-5C6B3D.png",
                title: "Daily reset",
                desc: "Step into the heat. Leave lighter, calmer, and ready for the day.",
              },
              {
                icon: "/content/v1/6993920ac427d10258b41fb2/6535b2fd-647a-43be-8e87-135d08af7725/noun-sleep-8246003-5C6B3D.png",
                title: "Better sleep, deeper",
                desc: "Regular sauna use has been linked to improved sleep, recovery, circulation, and overall well-being.",
              },
              {
                icon: "/content/v1/6993920ac427d10258b41fb2/ccbbce57-b870-4224-948d-1ebde0247867/noun-room-availability-7494570-5C6B3D.png",
                title: "Time, well shared",
                desc: "Designed for quiet mornings, slower evenings, and natural conversations. Built for two, four, or your whole crew, where connections matter",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-[#786e5a]/16 hover:border-[#6e7c52] rounded-[15px] p-8 space-y-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative w-10 h-10 mx-auto opacity-85">
                  <Image src={card.icon} alt={card.title} fill className="object-contain" />
                </div>
                <h3 className="font-serif text-2xl text-[#1b1713] font-medium">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666055] leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. IN THE DETAILS (6 FULL-COVER IMAGE CARDS) */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] border-t border-black/5">
        <div className="max-w-[1500px] mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="section-tag-light">
                In the details.
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal">
                In the details.
              </h2>
            </div>
            <Link
              href="/materials"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#1b1713] hover:text-[#6e7c52] font-medium border-b border-black/20 pb-0.5 transition-colors self-start sm:self-auto"
            >
              <span>View full specifications &amp; materials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/content/v1/6993920ac427d10258b41fb2/bc7a1ac4-e162-441c-abd7-60b3340c32af/IMG_0838.JPG",
                title: "Hand-selected timber.",
                desc: "Every board is hand-picked. Charred Larch, Thermo Ayous, Painted Black each chosen for grain, finish, and how it'll weather over time.",
              },
              {
                img: "/content/v1/6993920ac427d10258b41fb2/b153c88a-10d5-4297-ab9d-164b4550f0a3/IMG_0834.JPG",
                title: "Recessed lighting, soft to skin.",
                desc: "Thermo alder benches with hidden LED strips. No splinters, no overheating, no harsh light. Just the warm wood and a quiet glow.",
              },
              {
                img: "/assets/craft/craft-stove.jpg",
                title: "Huum heaters — WiFi controlled.",
                desc: "Award-winning Estonian stoves. Heat from your phone, walk into a perfect 90°C. Wood-fired options for the purists.",
              },
              {
                img: "/content/v1/6993920ac427d10258b41fb2/f845857a-42a0-4bdc-9e24-6e220ce28d0f/IMG_0802.JPG",
                title: "Maximum glass.",
                desc: "Heat treated tempered glass with hardwood frames. Lets the light in, keeps the heat where it belongs, opens like a vault.",
              },
              {
                img: "/content/v1/6993920ac427d10258b41fb2/85af26fc-19b6-4d0b-be72-fcf51ffbd9b4/IMG_0828.JPG",
                title: "Optional copper showers.",
                desc: "Hot or cold. Add an outdoor copper shower or a plunge tub — full Nordic ritual, in your garden.",
              },
              {
                img: "/content/v1/6993920ac427d10258b41fb2/54dcb80c-24dc-4d98-976a-be6c583dc9f5/IMG_0901.JPG",
                title: "Wooden ladle, hot stones.",
                desc: "The basics, done right. Ash bucket, birch ladle, stone basket — all designed to last as long as the sauna itself.",
              },
            ].map((detail, idx) => (
              <div
                key={idx}
                className="group relative h-[360px] sm:h-[400px] rounded-[8px] overflow-hidden bg-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={detail.img}
                  alt={detail.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/95"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-2">
                    {detail.title}
                  </h3>

                  <div className="max-h-0 opacity-0 group-hover:max-h-36 group-hover:opacity-100 transition-all duration-300 overflow-hidden text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-2">
                    <p>{detail.desc}</p>
                  </div>

                  <div className="self-end mt-1">
                    <div className="w-[52px] h-[52px] rounded-full bg-white text-[#5f6d3f] flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:bg-[#6b7746] group-hover:text-white group-hover:-rotate-45 shadow-md">
                      →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROUD BUILDER OF (SOALA & WESTWARD HO!) */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] border-t border-black/5">
        <div className="max-w-[1500px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tag-light">
              Proud Builder Of
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
              Trusted by the brands shaping British sauna.
            </h2>
            <p className="text-[#666055] text-sm sm:text-base font-light">
              When other sauna companies need a build done right, they come to Boundless Saunas. Two of the UK&apos;s leading mobile sauna brands run on builds crafted here.
            </p>
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
                    A premium mobile sauna brand running on the Thames. Hand-built by Boundless, finished to commercial spec.
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
                    Devon&apos;s coastal mobile sauna. Off-grid, built for the salt air, ready to roll up to any beach in the country.
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

      {/* 10. BY THE NUMBERS (DARK SECTION) */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#161311] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          <span className="section-tag-pill">
            By the Numbers
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight">
            Built one at a time. Built to last.
          </h2>
        </div>
      </section>

      {/* 11. OWNERS' WORDS (TESTIMONIALS WITH AUTHENTIC REVIEWS) */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] border-t border-black/5">
        <div className="max-w-[1500px] mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="section-tag-light">
              Owners&apos; Words
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal">
              What our customers say.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stars: "★★★★★",
                quote: "“We feel so lucky to have found Cam, The sauna is honestly an absolute work of art. We are so pleased we got to work with you.”",
                author: "Zoe & Russel - Thrive",
                location: "Somerset",
              },
              {
                stars: "★★★★★",
                quote: "“The overall finish of the sauna is excellent, interior spot on and after 6 months its had over 1000 people use it, all complimenting how beautiful it is. One customer saunas most days in Russia and said it was one of the nicest saunas they’d ever seen. Were already in discussions with Cam, planning our second sauna.”",
                author: "OnShore Sauna",
                location: "Westward Ho! , Devon",
              },
              {
                stars: "★★★★★",
                quote: "“Cam was amazing; listened to our ideas, converted them into an exciting design and then managed to production seamlessly and speedily. Delivered on time, way above what we expected. We now have a sauna of beauty.”",
                author: "Mike & Anne",
                location: "Constantine",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#7d825c]/25 rounded-[24px] p-7 sm:p-8 space-y-4 flex flex-col justify-between shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="text-[#6e7c52] tracking-wider text-base">
                    {t.stars}
                  </div>
                  <p className="text-[#555046] text-sm leading-relaxed font-light italic">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-black/5">
                  <div className="font-serif text-base text-[#1b1713] font-medium">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#8c857b]">
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FROM CONCEPT TO CUSTOM BUILD (FINAL HERO CALLOUT) */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-14 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/5133d5e1-ced1-4242-b8ed-c9bd6c3efdfc/IMG_0798.JPG"
            alt="Custom Sauna Build at Night"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="section-tag-pill">
            Ready to start?
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight">
            From concept to custom build
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Tell us about your space, your style, and how you want to customize your sauna experience. We’ll come back with ideas, materials, and a tailored quote.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all shadow-xl"
            >
              <span>Start your build</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
