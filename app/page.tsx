import Image from "next/image";
import Marquee from "@/components/Marquee";
import QuoteBuilder from "@/components/QuoteBuilder";
import FeaturedProjects from "@/components/FeaturedProjects";
import VideoReelsSection from "@/components/VideoReelsSection";

export default function HomePage() {
  return (
    <div className="bg-[#f7f5f0] text-[#1b1713]">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative min-h-[100dvh] flex items-center pt-28 sm:pt-24 pb-14 sm:pb-16 px-5 sm:px-10 lg:px-14 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-banner.jpg"
            alt="Boundless Bespoke Handcrafted Sauna in Washington, USA"
            fill
            priority
            className="object-cover object-[52%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
        </div>

        {/* Content: Left-aligned hero title and buttons */}
        <div className="relative z-10 max-w-[1500px] w-full mx-auto">
          <div className="max-w-4xl lg:max-w-5xl text-left space-y-4 sm:space-y-7 mt-4 sm:mt-12">
            <div className="inline-block">
              <span className="section-tag-pill">
                CRAFTED IN WASHINGTON, USA
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
              Designed for slower living, Boundless handcrafted saunas are built from scratch in Washington, USA. Every build fits your space and your lifestyle. Every project is refined and built to last.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-[340px] sm:max-w-none">
              <a
                href="#featured-projects"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-xl text-center"
              >
                <span>Explore our Saunas</span>
              </a>
              <a
                href="#quote-builder"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium border border-white/60 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-center"
              >
                <span>Start Your Build</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE TICKER */}
      <Marquee />

      {/* 3. FEATURED BUILDS & MODELS (CAROUSEL SHOWCASE) */}
      <FeaturedProjects />

      {/* 4. SAUNAS IN MOTION (3 VERTICAL AD REELS) */}
      <VideoReelsSection />

      {/* 5. BOOKING FORM (ONLINE ESTIMATE / START YOUR BUILD) */}
      <section id="quote-builder" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#f7f5f0] border-b border-black/5">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="section-tag-light">
              Online Estimate
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
              Start Your Build
            </h2>
            <p className="text-[#5c564e] text-sm sm:text-base font-light">
              Get an instant bespoke quote tailored to your sauna specifications in 4 simple steps.
            </p>
          </div>
          <QuoteBuilder />
        </div>
      </section>

      {/* 6. BY THE NUMBERS (SCREENSHOT 3: BUILT ONE AT A TIME. BUILT TO LAST.) */}
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

      {/* 7. OWNERS' WORDS (SCREENSHOT 2 & 3: WHAT OUR CUSTOMERS SAY) */}
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

      {/* 8. FROM CONCEPT TO CUSTOM BUILD (SCREENSHOT 1: READY TO START?) */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-14 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/content/v1/6993920ac427d10258b41fb2/5133d5e1-ced1-4242-b8ed-c9bd6c3efdfc/IMG_0798.JPG"
            alt="Custom Sauna Build at Night"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
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
            <a
              href="#quote-builder"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all shadow-xl"
            >
              <span>Start your build</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
