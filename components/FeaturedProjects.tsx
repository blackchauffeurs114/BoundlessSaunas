"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
  id: string;
  title: string;
  country: string;
  customerType: string;
  mainImage: string;
  thumbImage: string;
  href: string;
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "london",
    title: "Private Spa in London",
    country: "United Kingdom",
    customerType: "Private",
    mainImage: "/assets/featured/london-main.jpg",
    thumbImage: "/assets/featured/london-thumb.jpg",
    href: "/contact",
  },
  {
    id: "dubai",
    title: "Poolside Spa in Dubai",
    country: "United Arab Emirates",
    customerType: "Private",
    mainImage: "/assets/featured/dubai-main.jpg",
    thumbImage: "/assets/featured/dubai-thumb.jpg",
    href: "/contact",
  },
  {
    id: "riga",
    title: "Athlete Spa in Riga",
    country: "Latvia",
    customerType: "Commercial",
    mainImage: "/assets/featured/riga-main.jpg",
    thumbImage: "/assets/featured/riga-thumb.jpg",
    href: "/contact",
  },
  {
    id: "garda",
    title: "Spa in Lake Garda",
    country: "Italy",
    customerType: "Private",
    mainImage: "/assets/featured/garda-main.jpg",
    thumbImage: "/assets/featured/garda-thumb.jpg",
    href: "/contact",
  },
  {
    id: "thailand",
    title: "Spa in Thailand",
    country: "Thailand",
    customerType: "Commercial",
    mainImage: "/assets/featured/thailand-main.jpg",
    thumbImage: "/assets/featured/thailand-thumb.jpg",
    href: "/contact",
  },
  {
    id: "phuket",
    title: "Wellness Complex in Phuket",
    country: "Thailand",
    customerType: "Commercial",
    mainImage: "/assets/featured/phuket-main.jpg",
    thumbImage: "/assets/featured/phuket-thumb.jpg",
    href: "/contact",
  },
];

export default function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to update arrows
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 360;
    const scrollAmount = cardWidth + 16; // card width + gap
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-10 lg:px-14 bg-[#f7f5f0] overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        {/* Header row: Title on left, Controls on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 sm:mb-12 px-2 sm:px-0">
          <div className="space-y-2.5">
            <span className="section-tag-light">Showcase</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal leading-tight">
              Featured Projects
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop Left / Right Arrow Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous featured projects"
                className={`w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-lg transition-all duration-200 ${
                  canScrollLeft
                    ? "text-[#1b1713] bg-white hover:bg-[#1b1713] hover:text-white hover:border-[#1b1713] shadow-sm cursor-pointer"
                    : "text-black/30 border-black/10 bg-black/5 cursor-not-allowed opacity-50"
                }`}
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next featured projects"
                className={`w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-lg transition-all duration-200 ${
                  canScrollRight
                    ? "text-[#1b1713] bg-white hover:bg-[#1b1713] hover:text-white hover:border-[#1b1713] shadow-sm cursor-pointer"
                    : "text-black/30 border-black/10 bg-black/5 cursor-not-allowed opacity-50"
                }`}
              >
                →
              </button>
            </div>

            {/* View all projects / Start Your Build CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1b1713] text-white hover:bg-[#6e7c52] transition-colors shadow-sm"
            >
              <span>View all projects</span>
            </Link>
          </div>
        </div>

        {/* Horizontal Carousel Viewport */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 px-2 sm:px-0 scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative flex-none w-[78vw] max-w-[325px] sm:w-[350px] lg:w-[380px] aspect-[4/5] rounded-[16px] overflow-hidden bg-neutral-900 shadow-md snap-start transition-all duration-300 hover:shadow-2xl"
            >
              {/* Main Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 350px, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Inset Top-Left Thumbnail with Frosted Glass Frame */}
              <div className="absolute top-3.5 left-3.5 z-20 w-[26%] max-w-[92px] aspect-[4/5] rounded-[10px] p-1 bg-white/20 backdrop-blur-md border border-white/35 shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-full h-full rounded-[6px] overflow-hidden">
                  <Image
                    src={project.thumbImage}
                    alt={`${project.title} detail`}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom Gradient Overlay & Project Info */}
              <div className="absolute inset-0 z-10 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end text-white">
                <h3 className="font-serif text-2xl sm:text-[1.65rem] font-medium leading-tight text-white mb-2.5 drop-shadow-sm group-hover:text-amber-100 transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center gap-3.5 text-xs text-white/80 font-light">
                  {/* Location Meta */}
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 text-white/70 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1225 7.84588 17.2657 5.78069 15.7425 4.2575C14.2193 2.7343 12.1541 1.87748 10 1.875ZM16.8453 9.375H13.7336C13.5938 6.52266 12.4953 4.50547 11.5945 3.3125C12.9932 3.64837 14.2516 4.41357 15.1934 5.50079C16.1352 6.58802 16.7131 7.94274 16.8461 9.375H16.8453ZM7.51797 10.625H12.482C12.3016 13.8758 10.7453 15.868 10 16.6406C9.25391 15.8672 7.69844 13.875 7.51797 10.625ZM7.51797 9.375C7.69844 6.12422 9.25469 4.13203 10 3.35938C10.7461 4.13516 12.3016 6.12734 12.482 9.375H7.51797ZM8.40547 3.3125C7.50469 4.50547 6.40625 6.52266 6.26641 9.375H3.15391C3.28687 7.94274 3.86477 6.58802 4.80657 5.50079C5.74836 4.41357 7.00682 3.64837 8.40547 3.3125ZM3.15391 10.625H6.26641C6.4086 13.4773 7.50469 15.4945 8.40547 16.6875C7.00682 16.3516 5.74836 15.5864 4.80657 14.4992C3.86477 13.412 3.28687 12.0573 3.15391 10.625ZM11.5914 16.6875C12.4922 15.4945 13.5883 13.4773 13.7305 10.625H16.843C16.7102 12.0568 16.1328 13.4113 15.1916 14.4984C14.2504 15.5856 12.9926 16.3511 11.5945 16.6875H11.5914Z" />
                    </svg>
                    <span>{project.country}</span>
                  </span>

                  {/* Customer Type Meta */}
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 text-white/70 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 10.625c1.726 0 3.125-1.399 3.125-3.125S11.726 4.375 10 4.375 6.875 5.774 6.875 7.5s1.399 3.125 3.125 3.125zm0 1.875c-2.33 0-7 1.17-7 3.5V17.5h14v-1.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                    <span>{project.customerType}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
