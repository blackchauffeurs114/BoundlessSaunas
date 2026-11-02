import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "badge" | "inline";
  theme?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  variant = "badge",
  theme = "light",
  className = "",
  size = "md",
}: BrandLogoProps) {
  // theme="light" means light text/lines on dark background
  const isLightText = theme === "light";

  // Sizing: clear and readable for circular emblem
  const dims = {
    sm: { w: 52, h: 52, box: "h-12 w-12 sm:h-14 sm:w-14" },
    md: { w: 72, h: 72, box: "h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem]" },
    lg: { w: 96, h: 96, box: "h-20 w-20 sm:h-24 sm:w-24" },
  }[size];

  const logoSrc = isLightText ? "/assets/logo-white.png" : "/assets/logo-dark.png";

  if (variant === "inline") {
    return (
      <Link href="/" className={`inline-flex items-center gap-4 group select-none ${className}`}>
        <div className={`relative ${dims.box} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
          <Image
            src={logoSrc}
            alt="Boundless Saunas"
            width={dims.w}
            height={dims.h}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span
            className={`font-serif text-lg sm:text-2xl font-bold tracking-[0.16em] uppercase leading-tight ${
              isLightText ? "text-white group-hover:text-white/90" : "text-[#1b1713]"
            } transition-colors`}
          >
            Boundless<span className="font-light tracking-[0.2em]">Saunas</span>
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.32em] font-mono mt-0.5 ${
              isLightText ? "text-white/50" : "text-[#786e5a]"
            }`}
          >
            Handcrafted Luxury
          </span>
        </div>
      </Link>
    );
  }

  // Default: Center Typographic Luxury Brand Badge matching Squarespace
  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center text-center select-none py-0.5 group ${className}`}
      aria-label="Boundless Saunas Home"
    >
      <span
        className={`text-[7.5px] sm:text-[8px] tracking-[0.32em] uppercase font-mono transition-colors ${
          isLightText ? "text-white/70 group-hover:text-white/90" : "text-[#786e5a]"
        } leading-none`}
      >
        — EST • 2024 —
      </span>
      <span
        className={`font-serif text-[1.2rem] sm:text-[1.45rem] font-bold tracking-[0.16em] uppercase leading-tight mt-0.5 transition-colors ${
          isLightText ? "text-white group-hover:text-white/90" : "text-[#1b1713]"
        }`}
      >
        BOUNDLESS
      </span>
      <span
        className={`font-serif text-[11px] sm:text-[13px] tracking-[0.28em] uppercase leading-none transition-colors ${
          isLightText ? "text-white/95 group-hover:text-white" : "text-[#2e261f]"
        }`}
      >
        SAUNAS
      </span>
      <span
        className={`text-[6.5px] sm:text-[7.5px] tracking-[0.24em] uppercase font-mono transition-colors mt-0.5 ${
          isLightText ? "text-white/50 group-hover:text-white/70" : "text-[#786e5a]/80"
        } leading-none`}
      >
        — CORNWALL —
      </span>
    </Link>
  );
}
