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
    sm: { w: 56, h: 56, box: "h-14 w-14" },
    md: { w: 80, h: 80, box: "h-16 w-16 sm:h-20 sm:w-20" },
    lg: { w: 104, h: 104, box: "h-24 w-24 sm:h-28 sm:w-28" },
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

  // Default: Center Circular Badge Emblem
  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center text-center select-none py-1 group ${className}`}
      aria-label="Boundless Saunas Home"
    >
      <div className={`relative ${dims.box} transition-transform duration-300 group-hover:scale-105`}>
        <Image
          src={logoSrc}
          alt="Boundless Saunas Emblem Logo"
          width={dims.w}
          height={dims.h}
          className="object-contain w-full h-full drop-shadow-md"
          priority
        />
      </div>
    </Link>
  );
}
