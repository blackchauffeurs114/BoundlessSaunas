"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Saunas", href: "/saunas" },
  { name: "Gallery", href: "/gallery" },
  { name: "Materials", href: "/materials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Pages without dark hero images get a dark navbar background
  const isLightPage = !isScrolled && (
    pathname === "/contact" ||
    pathname === "/cart"
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#110e0c]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/25"
            : isLightPage
            ? "bg-[#110e0c]/90 backdrop-blur-sm py-4 border-b border-white/10"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between">
            {/* Left Nav items (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-7 flex-1">
              {navLinks.map((item) => {
                const isHome = item.href === "/";
                return (
                  <Link
                    key={item.name}
                    href={isHome ? "/" : "#"}
                    onClick={(e) => {
                      if (!isHome) {
                        e.preventDefault();
                      }
                    }}
                    className={`header-nav-link text-[15px] font-normal transition-colors ${
                      isHome ? "active text-white" : "text-white/80 hover:text-white cursor-default"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Center Logo */}
            <div className="flex-1 lg:flex-initial flex justify-start lg:justify-center">
              <BrandLogo variant="badge" theme="light" size="md" />
            </div>

            {/* Right Action Button (Desktop) */}
            <div className="hidden lg:flex items-center justify-end flex-1">
              <a
                href="#quote-builder"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-md"
              >
                <span>Start Your Build</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button (Minimalist 2-line style matching Squarespace screenshot) */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 focus:outline-none flex flex-col justify-center items-end gap-1.5 w-10 h-10"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <div className="flex flex-col justify-center gap-1.5 w-7">
                    <span className="w-7 h-[1.5px] bg-white rounded-full"></span>
                    <span className="w-7 h-[1.5px] bg-white rounded-full"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#110e0c]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-12 px-6">
          <div className="flex justify-center pt-2 pb-4">
            <BrandLogo variant="badge" theme="light" size="sm" />
          </div>

          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((item) => {
              const isHome = item.href === "/";
              return (
                <Link
                  key={item.name}
                  href={isHome ? "/" : "#"}
                  onClick={(e) => {
                    if (!isHome) {
                      e.preventDefault();
                    }
                    setMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-serif tracking-wide ${
                    isHome ? "text-white font-medium" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-white/10 text-center space-y-4">
            <a
              href="#quote-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full py-4 rounded-full text-sm font-semibold bg-white text-black"
            >
              <span>Start Your Build</span>
            </a>
            <p className="text-xs text-white/40">
              Boundless Saunas · Washington, USA · boundless.saunas@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  );
}
