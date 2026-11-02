import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Discover Your Perfect Sauna — Boundless Saunas",
  description: "Meet Cam Wickins, founder of Boundless Saunas. Handcrafted bespoke outdoor saunas designed and built in Cornwall.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f7f5f0] text-[#1b1713]">
      {/* 1. HERO SECTION (DARK BACKGROUND WITH IMG_0812.png) */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center pt-28 pb-20 px-6 sm:px-10 lg:px-14 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/120ece7b-0607-4b7e-98db-482bf5cb87a2/IMG_0812.png"
            alt="The hands that build them — Boundless Saunas"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
        </div>

        {/* Content: Left Aligned */}
        <div className="relative z-10 max-w-[1500px] w-full mx-auto">
          <div className="max-w-2xl text-left space-y-6">
            <div className="inline-block">
              <span className="section-tag-pill">
                About
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-white leading-[1.06] drop-shadow-lg">
              The hands that<br />build them.
            </h1>

            <p className="text-base sm:text-lg text-white/90 font-sans font-light leading-relaxed max-w-xl">
              Cam Wickins · Founder, builder, surfer, family man. Born in Oxford raised in Cornwall.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MY STORY SECTION (WARM CREAM #f7f5f0 WITH CAM WICKINS PORTRAIT) */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0]">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="section-tag-light">
                My Story
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-[1.15]">
                Building spaces that inspire wellness
              </h2>

              <div className="space-y-5 text-[#555046] text-base sm:text-lg leading-relaxed font-light">
                <p>
                  Boundless Saunas started from a simple passion, shaped by craft. Rooted in Cornwall and built around the idea that a sauna should be a place of deep relaxation, connection, and restorative heat.
                </p>
                <p>
                  Our founder, Cam Wickins, is the mind behind every sauna. He has spent time handcrafting, shaping and learning what truly endures in the world of saunas. Through his years of experience, he understands how things perform and how they feel to live with, day in day out.
                </p>
                <p>
                  Over the years, Boundless Saunas has transformed from a pursuit of building saunas and mobile heating structures to a specialized studio creating bespoke saunas for gardens, homes, and coastal spaces. Every project we take on is designed and built to every client’s specification, not adapted from a template.
                </p>
                <p>
                  The same ethos guides every project we take on thoughtful, craftsmanship, honest material and designs that are functional and beautiful. We work closely with each client from first conversation to final finish, ensuring that every detail is built around how the sauna will be used, how it will feel, and how it will sit within its environment.
                </p>
                <p>
                  The result is work that is warm, inviting, quiet in appearance and precise in execution. Every piece is made to last and made to love.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium bg-[#110e0c] text-white hover:bg-[#6e7c52] transition-all duration-300 shadow-md"
                >
                  <span>Start a Conversation</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Column with Floating Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-md">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/1777888534478-RHCT13RACD52VJY37H8C/IMG_0813.JPG"
                  alt="Cam Wickins Founder of Boundless Saunas"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Badge in bottom corner */}
              <div className="absolute -bottom-6 left-6 sm:left-8 bg-white/95 backdrop-blur-md border border-[#786e5a]/20 rounded-2xl p-4 sm:p-5 shadow-xl">
                <h4 className="font-serif text-lg font-medium text-[#1b1713]">
                  Cam Wickins
                </h4>
                <p className="text-xs text-[#6e7c52] font-medium tracking-wide">
                  Founder · Maker · Cornwall
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIFE ON THE COAST SECTION (6-PHOTO MOSAIC GALLERY) */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#efebe4] border-t border-black/5">
        <div className="max-w-[1500px] mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tag-light">
              Life on the Coast
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
              Saunas, surf, and everything between.
            </h2>
          </div>

          {/* 6-Photo Mosaic Grid matching Squarespace layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            {/* Column 1 (Left 50% width) */}
            <div className="md:col-span-6 flex flex-col gap-3.5">
              <div className="relative h-[260px] sm:h-[340px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/b153c88a-10d5-4297-ab9d-164b4550f0a3/IMG_0834.JPG"
                  alt="Recessed sauna lighting and benches"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[180px] sm:h-[240px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/1777888534465-T6SFKM03RG37Z3GIKYJZ/IMG_0846.JPG"
                  alt="Outdoor sauna structure with warm evening light"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 2 (Middle 25% width) */}
            <div className="md:col-span-3 flex flex-col gap-3.5">
              <div className="relative h-[170px] sm:h-[220px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/a3079c27-def2-48e6-afed-c202775524b1/IMG_0823.JPG"
                  alt="Coastal sauna exterior"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[270px] sm:h-[360px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/53bb9c62-0d3a-49d5-b84a-1fd7e9593eec/IMG_0821.JPG"
                  alt="Sauna craftsmanship details"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 3 (Right 25% width) */}
            <div className="md:col-span-3 flex flex-col gap-3.5">
              <div className="relative h-[270px] sm:h-[360px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/54dcb80c-24dc-4d98-976a-be6c583dc9f5/IMG_0901.JPG"
                  alt="Sauna ladle and stone basket"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[170px] sm:h-[220px] rounded-[15px] overflow-hidden bg-neutral-200 border border-black/5 shadow-sm group">
                <Image
                  src="/content/v1/6993920ac427d10258b41fb2/591f1286-b7bb-4e74-86f3-f3fea010d17b/IMG_0862.JPG"
                  alt="Panoramic sauna glass and countryside"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. WHAT I STAND FOR (FOUR PRINCIPLES WITH ORIGINAL ICONS & NUMBERS) */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0]">
        <div className="max-w-[1500px] mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="section-tag-light">
              What I Stand For
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
              Boundless Saunas’ four principles
            </h2>
            <p className="text-[#666055] text-sm sm:text-base font-light pt-1">
              Our principles guide how we approach design, craftsmanship, and our people. Staying consistent through every project, from first conversation to final installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "01",
                icon: "/content/v1/6993920ac427d10258b41fb2/7759920a-e1c2-47f6-a47d-9fdca96ec1d5/noun-honesty-8376591-5C6B3D%20%281%29.png",
                title: "Honesty from the start",
                desc: "We believe in clear conversations, straightforward advice, and realistic expectations from first enquiry to final installation.",
              },
              {
                num: "02",
                icon: "/content/v1/6993920ac427d10258b41fb2/dda1354a-632c-45c8-ad0d-0e5d9e7058d5/noun-time-4115451-5C6B3D.png",
                title: "Time taken properly",
                desc: "Good craftsmanship cannot be rushed. We take the time to refine details, work carefully, and build every sauna to the standard it deserves.",
              },
              {
                num: "03",
                icon: "/content/v1/6993920ac427d10258b41fb2/917c7fac-744e-4639-9ea9-866a10ce6270/noun-communication-7784254-5C6B3D.png",
                title: "Easy to talk to",
                desc: "We’re a personal brand, not complicated. We stay approachable, responsive, and closely involved throughout the entire process.",
              },
              {
                num: "04",
                icon: "/content/v1/6993920ac427d10258b41fb2/3b5d93da-77e6-4110-b54b-bec6cfe2a0df/noun-quality-7729164-5C6B3D.png",
                title: "Bespoke by design",
                desc: "No two Boundless saunas are identical. Everything from layout and scale to materials, glazing, and heating systems is fully customized and built to last.",
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

      {/* 6. CALLOUT CTA (DARK BACKGROUND WITH IMG_0805.JPG) */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-14 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/5f4c523d-be7e-4b95-9ea1-1f0343712577/IMG_0805.JPG"
            alt="Handcrafted Sauna by Boundless"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="section-tag-pill">
            Let&apos;s Talk
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight">
            Got a space? Let&apos;s see what fits.
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Send me a few photos of your garden, a rough idea of the size you want, and I&apos;ll come back with options.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all shadow-xl"
            >
              <span>Start a Build</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
