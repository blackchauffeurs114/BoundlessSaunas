import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#110e0c] text-white/80 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-3 space-y-6">
            <BrandLogo variant="badge" theme="light" size="xl" className="justify-start" />

            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-light">
              Bespoke luxury saunas, hand-crafted to perfection. Garden retreats, commercial mobile builds, and trade construction — each engineered to endure.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#899362] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#899362] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-white/60 cursor-default">
                  About
                </span>
              </li>
              <li>
                <span className="text-white/60 cursor-default">
                  Saunas
                </span>
              </li>
              <li>
                <span className="text-white/60 cursor-default">
                  Materials
                </span>
              </li>
              <li>
                <span className="text-white/60 cursor-default">
                  Gallery
                </span>
              </li>
              <li>
                <a href="#quote-builder" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm text-white/70 font-light">
              <p>
                <a href="mailto:boundless.saunas@gmail.com" className="hover:text-white transition-colors">
                  boundless.saunas@gmail.com
                </a>
              </p>
              <p className="text-white/50 text-xs pt-1">
                Boundless Craft Workshop, Washington, USA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Boundless Saunas. All rights reserved.</p>
          <p>Handcrafted with passion · Washington, USA</p>
        </div>
      </div>
    </footer>
  );
}
