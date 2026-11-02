export default function Marquee() {
  const items = [
    "Bespoke Garden Saunas",
    "Mobile Builds",
    "Trade Standard Construction",
    "Hand Crafted",
    "Premium Cladding",
    "Wood-fired or Electric",
  ];

  return (
    <div className="w-full bg-[#14110e] border-y border-white/10 py-5 overflow-hidden select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Repeated twice for seamless infinite scroll */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="font-serif text-lg sm:text-xl tracking-wide text-white/90">
              {item}
            </span>
            <span className="mx-6 w-2 h-2 rounded-full bg-[#899362]"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
