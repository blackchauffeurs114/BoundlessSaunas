import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "badge" | "inline";
  theme?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function BrandLogo({
  variant = "badge",
  theme = "light",
  className = "",
  size = "md",
}: BrandLogoProps) {
  // theme="light" means light (white) line art on dark background
  const isLightText = theme === "light";

  // Sizing: slightly increased header logo size for optimal visibility
  const dims = {
    sm: { w: 58, h: 58, box: "h-14 w-14 sm:h-16 sm:w-16" },
    md: { w: 84, h: 84, box: "h-16 w-16 sm:h-[4.75rem] sm:w-[4.75rem]" },
    lg: { w: 104, h: 104, box: "h-20 w-20 sm:h-24 sm:w-24" },
    xl: { w: 124, h: 124, box: "h-24 w-24 sm:h-28 sm:w-28" },
  }[size];

  const logoSrc = "/assets/logo.png";
  // Subtle drop-shadow for the white circular emblem
  const shadowClass = "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]";

  if (variant === "inline") {
    return (
      <Link href="/" className={`inline-flex items-center gap-4 group select-none ${className}`}>
        <div className={`relative ${dims.box} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
          <Image
            src={logoSrc}
            alt="Boundless Saunas"
            width={dims.w}
            height={dims.h}
            className={`object-contain w-full h-full ${shadowClass}`}
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

  // Default: circular emblem only
  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none group ${className}`}
      aria-label="Boundless Saunas Home"
    >
      <div className={`relative ${dims.box} transition-transform duration-300 group-hover:scale-105`}>
        <Image
          src={logoSrc}
          alt="Boundless Saunas Emblem"
          width={dims.w}
          height={dims.h}
          className={`object-contain w-full h-full ${shadowClass}`}
          priority
        />
      </div>
    </Link>
  );
}
