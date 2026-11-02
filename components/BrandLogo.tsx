import Link from "next/link";

interface BrandLogoProps {
  variant?: "stacked" | "inline";
  theme?: "light" | "dark";
  className?: string;
}

export default function BrandLogo({
  variant = "stacked",
  theme = "light",
  className = "",
}: BrandLogoProps) {
  const isLightText = theme === "light";

  if (variant === "inline") {
    return (
      <Link href="/" className={`inline-flex items-center gap-2 group select-none ${className}`}>
        <div className="flex flex-col">
          <span
            className={`font-serif text-xl sm:text-2xl font-bold tracking-[0.14em] uppercase leading-tight ${
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

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center text-center select-none py-1 group ${className}`}
    >
      <span
        className={`text-[8px] sm:text-[9px] tracking-[0.32em] uppercase font-mono font-normal transition-colors ${
          isLightText ? "text-white/60 group-hover:text-white/80" : "text-[#786e5a]"
        }`}
      >
        — EST • 2024 —
      </span>
      <span
        className={`font-serif text-lg sm:text-[1.4rem] font-medium tracking-[0.18em] uppercase leading-none mt-1 transition-colors ${
          isLightText ? "text-white group-hover:text-white/90" : "text-[#1b1713]"
        }`}
      >
        BOUNDLESS
      </span>
      <span
        className={`font-serif text-[11px] sm:text-[13px] tracking-[0.32em] uppercase leading-none mt-0.5 transition-colors ${
          isLightText ? "text-white/90 group-hover:text-white" : "text-[#2e261f]"
        }`}
      >
        SAUNAS
      </span>
      <span
        className={`text-[7px] sm:text-[8px] tracking-[0.28em] uppercase font-mono transition-colors mt-0.5 ${
          isLightText ? "text-white/50 group-hover:text-white/70" : "text-[#786e5a]/80"
        }`}
      >
        — BESPOKE CRAFT —
      </span>
    </Link>
  );
}
