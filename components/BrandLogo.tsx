import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "badge" | "inline" | "stacked";
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
  const isLightText = theme === "light"; // light text for dark background

  // Size dimensions
  const dims = {
    sm: { w: 44, h: 44, box: "h-11 w-11" },
    md: { w: 60, h: 60, box: "h-14 w-14 sm:h-16 sm:w-16" },
    lg: { w: 84, h: 84, box: "h-20 w-20 sm:h-24 sm:w-24" },
  }[size];

  // For dark background, use logo-white.png (or logo.png with brightness-0 invert)
  const logoSrc = isLightText ? "/assets/logo-white.png" : "/assets/logo.png";

  if (variant === "inline") {
    return (
      <Link href="/" className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
        <div className={`relative ${dims.box} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
          <Image
            src={logoSrc}
            alt="Boundless Saunas"
            width={dims.w}
            height={dims.h}
            className={`object-contain ${isLightText ? "brightness-0 invert" : ""}`}
            priority
          />
        </div>
        <div className="flex flex-col">
          <span
            className={`font-serif text-lg sm:text-xl font-bold tracking-[0.15em] uppercase leading-tight ${
              isLightText ? "text-white group-hover:text-white/90" : "text-[#1b1713]"
            } transition-colors`}
          >
            Boundless<span className="font-light tracking-[0.18em]">Saunas</span>
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.3em] font-mono ${
              isLightText ? "text-white/50" : "text-[#786e5a]"
            }`}
          >
            Handcrafted Luxury
          </span>
        </div>
      </Link>
    );
  }

  // Default: Circular Badge Emblem Logo
  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center text-center select-none py-1 group ${className}`}
    >
      <div className={`relative ${dims.box} transition-transform duration-300 group-hover:scale-105 drop-shadow-md`}>
        <Image
          src={logoSrc}
          alt="Boundless Saunas Emblem Logo"
          width={dims.w}
          height={dims.h}
          className={`object-contain w-full h-full ${isLightText ? "brightness-0 invert" : ""}`}
          priority
        />
      </div>
    </Link>
  );
}
