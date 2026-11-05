import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Users, 
  Ruler, 
  Sun, 
  Truck, 
  Droplets,
  Calendar
} from "lucide-react";
import { FEATURED_MODELS } from "@/lib/modelsData";

interface ModelDetail {
  id: string;
  title: string;
  subtitle: string;
  dimensions: string;
  capacity: string;
  category: string;
  location: string;
  estimatedPrice: string;
  leadTime: string;
  mainImage: string;
  thumbImage: string;
  gallery: string[];
  description: string[];
  keySpecs: { label: string; value: string; icon: string }[];
  features: string[];
  packages: {
    name: string;
    tagline: string;
    priceEstimate: string;
    highlighted?: boolean;
    includes: string[];
  }[];
}

const MODELS_DATA: { [key: string]: ModelDetail } = {
  "flare-v2": {
    id: "flare-v2",
    title: "6x10 Flare Sauna V2",
    subtitle: "Compact Mobile Pod with Integrated Weatherproof Entrance Porch",
    dimensions: "6' × 10' (1.8m × 3.0m)",
    capacity: "4–6 Persons",
    category: "Bespoke Mobile Cabin",
    location: "Handcrafted in Cornwall",
    estimatedPrice: "From £14,500 + VAT",
    leadTime: "6–8 Weeks",
    mainImage: "/assets/featured/flare-v2-main.jpg",
    thumbImage: "/assets/featured/flare-v2-thumb.jpg",
    gallery: [
      "/assets/featured/flare-v2-main.jpg",
      "/assets/featured/flare-v2-thumb.jpg",
      "/assets/craft/craft-day-exterior.jpg",
      "/assets/craft/craft-led-bench.jpg",
    ],
    description: [
      "The 6x10 Flare Sauna V2 is our benchmark mobile build, designed specifically for rapid heat retention and effortless mobility across UK terrain. Featuring a sheltered rear entrance porch with twin solid timber benches, it provides a dedicated transition area before stepping into the high-heat cabin.",
      "Inside, dual-tiered Thermo Alder benches are bathed in indirect warm LED glow, with an ergonomic contoured backrest and triple-glazed landscape windows offering breathtaking panoramic views while keeping thermal efficiency at maximum.",
    ],
    keySpecs: [
      { label: "External Footprint", value: "6ft Wide × 10ft Long", icon: "ruler" },
      { label: "Bathing Capacity", value: "4 to 6 Bathers", icon: "users" },
      { label: "Heating Core", value: "Huum Hive Wood-Fired / 9kW WiFi", icon: "flame" },
      { label: "Chassis", value: "Heavy-Duty Galvanised AL-KO", icon: "truck" },
      { label: "Thermal Wall", value: "70mm Kingspan + Foil Vapour Barrier", icon: "shield" },
      { label: "Off-Grid Power", value: "300W Solar + Deep-Cycle 12V Battery", icon: "sun" },
    ],
    features: [
      "Custom diamond-plate exterior weather wrap in matte black",
      "Sheltered entrance porch with twin cedar storage benches",
      "Triple-glazed heat-reflective panoramic picture window",
      "Warm recessed under-bench & perimeter roofline LED lighting",
      "Passive Finnish air intake & exhaust ventilation system",
      "Road-legal AL-KO braking system with integrated stabilizer legs",
    ],
    packages: [
      {
        name: "Essential Mobile",
        tagline: "Pure authentic Finnish sauna experience on road-ready chassis",
        priceEstimate: "Est. £14,500 + VAT",
        includes: [
          "Huum Wood-Burning Sauna Stove & flue pipe kit",
          "Thermo Alder single-tier benching",
          "Toughened 8mm clear safety glass door",
          "AL-KO road-legal trailer with hitch lock",
          "Standard 2-year Boundless structural warranty",
        ],
      },
      {
        name: "Signature Flare Suite",
        tagline: "Our most popular build with dual-tier benches & sheltered porch",
        priceEstimate: "Est. £17,200 + VAT",
        highlighted: true,
        includes: [
          "Huum Hive 13kW Wood Stove OR 9kW WiFi Electric Heater",
          "Two-tier ergonomic floating Thermo Alder benches",
          "Full rear sheltered porch with cedar benches",
          "Recessed dimmable LED ambiance system",
          "Charred Japanese Shou Sugi Ban or matte black exterior",
          "Priority build slot & delivery coordination",
        ],
      },
      {
        name: "Off-Grid Expedition",
        tagline: "Fully autonomous off-grid capability for coastal & mountain retreats",
        priceEstimate: "Est. £19,800 + VAT",
        includes: [
          "Everything in Signature Suite",
          "300W roof-mounted solar array & 110Ah AGM battery system",
          "Off-grid 12V LED lighting & dual USB fast charging ports",
          "External cold rinse shower connection dock",
          "Heavy-duty all-terrain tire & suspension upgrade",
        ],
      },
    ],
  },
  "blaze-coldplunge": {
    id: "blaze-coldplunge",
    title: "6x12 Blaze Cold Plunge",
    subtitle: "Complete Nordic Hot & Cold Contrast Suite with External Plunge Tub",
    dimensions: "6' × 12' (1.8m × 3.6m)",
    capacity: "6 Persons",
    category: "Contrast Therapy Suite",
    location: "Handcrafted in Cornwall",
    estimatedPrice: "From £18,500 + VAT",
    leadTime: "7–9 Weeks",
    mainImage: "/assets/featured/blaze-coldplunge-main.jpg",
    thumbImage: "/assets/featured/blaze-coldplunge-thumb.jpg",
    gallery: [
      "/assets/featured/blaze-coldplunge-main.jpg",
      "/assets/featured/blaze-coldplunge-thumb.jpg",
      "/assets/craft/craft-night-exterior.jpg",
      "/assets/craft/craft-garden-window.jpg",
    ],
    description: [
      "The 6x12 Blaze Cold Plunge integrates hot sauna bathing and sub-4°C cold water immersion into a unified mobile footprint. Engineered for athletes, wellness operators, and residential estates seeking the full therapeutic cycle.",
      "The exterior deck incorporates an insulated cedar plunge dock with heavy-duty thermal cover and integrated drainage, while the interior cabin delivers intense radiant heat up to 100°C.",
    ],
    keySpecs: [
      { label: "Dimensions", value: "6ft Wide × 12ft Long", icon: "ruler" },
      { label: "Capacity", value: "6 Persons (Hot) + 1 (Plunge)", icon: "users" },
      { label: "Plunge Tub", value: "Insulated Marine-Grade Cedar Tub", icon: "droplets" },
      { label: "Heater", value: "Wood-Fired Huum OR WiFi Electric", icon: "flame" },
      { label: "Chassis", value: "Heavy-Duty Dual-Axle Trailer", icon: "truck" },
      { label: "Off-Grid", value: "Integrated Solar & 12V Water Pump", icon: "sun" },
    ],
    features: [
      "Integrated exterior cold immersion cedar tub with thermal lid",
      "Rapid fill & drain plumbing with optional chiller connection",
      "Two-tier stadium Thermo Alder benching with curved front lip",
      "Massive panoramic double-glazed end wall overlooking the landscape",
      "Dimmable warm glow LED system under benches and along the ceiling",
    ],
    packages: [
      {
        name: "Contrast Essential",
        tagline: "Manual ice & water cold plunge with traditional wood stove",
        priceEstimate: "Est. £18,500 + VAT",
        includes: [
          "Insulated Western Red Cedar plunge tub with lockable cover",
          "Wood-fired high-output sauna heater with stone basket",
          "Thermo Alder sauna interior with panoramic picture window",
          "Heavy-duty galvanised mobile road trailer",
        ],
      },
      {
        name: "Pro Chiller Edition",
        tagline: "Active water cooling down to 3°C with advanced micron filtration",
        priceEstimate: "Est. £22,400 + VAT",
        highlighted: true,
        includes: [
          "Commercial 1HP water chiller & ozone sanitization system",
          "Huum Hive 15kW Wood Stove with WiFi temperature monitoring",
          "Custom waterproof deck storage box for chiller & pumps",
          "Dual-tier luxury benches with mountain contour timber art",
          "Comprehensive on-site commissioning & handover",
        ],
      },
    ],
  },
  "blaze-foyer": {
    id: "blaze-foyer",
    title: "6x12 Blaze Foyer Sauna",
    subtitle: "Twin-Chamber Mobile Build with Dedicated Weatherproof Air-Lock Lounge",
    dimensions: "6' × 12' (1.8m × 3.6m)",
    capacity: "6–8 Persons",
    category: "Foyer Entrance Build",
    location: "Handcrafted in Cornwall",
    estimatedPrice: "From £17,900 + VAT",
    leadTime: "6–8 Weeks",
    mainImage: "/assets/featured/blaze-foyer-main.jpg",
    thumbImage: "/assets/featured/blaze-foyer-thumb.jpg",
    gallery: [
      "/assets/featured/blaze-foyer-main.jpg",
      "/assets/featured/blaze-foyer-thumb.jpg",
      "/assets/craft/craft-stove.jpg",
      "/assets/craft/craft-led-bench.jpg",
    ],
    description: [
      "The 6x12 Blaze Foyer solves the classic challenge of winter sauna sessions by incorporating a separate enclosed changing foyer and air-lock entrance. No cold wind blows into the hot room when bathers enter or exit.",
      "The foyer serves as a warm dressing lounge with bench seating, dry bag storage, and coat pegs, separated from the sauna chamber by an 8mm toughened glass door.",
    ],
    keySpecs: [
      { label: "Total Length", value: "12ft (4ft Foyer + 8ft Sauna)", icon: "ruler" },
      { label: "Bathers", value: "6 to 8 Persons", icon: "users" },
      { label: "Chambers", value: "Dual Chamber (Foyer + Hot Room)", icon: "shield" },
      { label: "Heater", value: "Huum Hive Wood Stove / 10.5kW", icon: "flame" },
      { label: "Glazing", value: "Tinted Heat-Mirror Double Glazing", icon: "sun" },
      { label: "Chassis", value: "AL-KO Twin-Axle Braked Trailer", icon: "truck" },
    ],
    features: [
      "Weather-sealed enclosed foyer lounge with solid cedar bench",
      "Separate inner glass door preventing steam & heat escape",
      "Full panoramic viewing window across the hot room back wall",
      "Warm recessed LED channel lighting across both chambers",
      "Off-grid battery storage neatly tucked beneath foyer seating",
    ],
    packages: [
      {
        name: "Standard Foyer",
        tagline: "Essential twin-room layout with wood heater",
        priceEstimate: "Est. £17,900 + VAT",
        includes: [
          "Dual-room construction with 8mm glass separation door",
          "Wood-burning sauna stove with insulated flue",
          "Thermo Alder hot room benches & foyer changing bench",
          "Road-ready braked trailer with spare wheel",
        ],
      },
      {
        name: "Executive Foyer Lounge",
        tagline: "Heated boot drying, Bluetooth audio & bespoke mood lighting",
        priceEstimate: "Est. £21,000 + VAT",
        highlighted: true,
        includes: [
          "Huum Hive wood stove OR Harvia WiFi electric system",
          "Under-bench radiant floor warming in foyer",
          "Marine Bluetooth sound system with hidden transducers",
          "Integrated 300W solar panel array & dual AGM batteries",
          "Charred Larch exterior cladding with black aluminum trim",
        ],
      },
    ],
  },
  "blaze-shower": {
    id: "blaze-shower",
    title: "6x12 Blaze Shower Sauna",
    subtitle: "Complete Nordic Wellness Build with Integrated Rinse Shower",
    dimensions: "6' × 12' (1.8m × 3.6m)",
    capacity: "6 Persons",
    category: "Integrated Shower Build",
    location: "Handcrafted in Cornwall",
    estimatedPrice: "From £19,200 + VAT",
    leadTime: "7–9 Weeks",
    mainImage: "/assets/featured/blaze-shower-main.jpg",
    thumbImage: "/assets/featured/blaze-shower-thumb.jpg",
    gallery: [
      "/assets/featured/blaze-shower-main.jpg",
      "/assets/featured/blaze-shower-thumb.jpg",
      "/assets/craft/craft-day-exterior.jpg",
      "/assets/craft/craft-garden-window.jpg",
    ],
    description: [
      "The 6x12 Blaze Shower offers a complete self-contained hydrotherapy ritual with an integrated high-pressure copper rainfall shower. Bathers can rinse between sauna rounds without ever stepping into cold outdoor elements.",
      "Engineered with marine-grade waterproof wall lining, sloped slip-resistant timber floor drainage, and instant water heating options for off-grid or mains supply.",
    ],
    keySpecs: [
      { label: "Footprint", value: "6ft Wide × 12ft Long", icon: "ruler" },
      { label: "Capacity", value: "6 Bathers", icon: "users" },
      { label: "Shower System", value: "Solid Copper Overhead Rain Shower", icon: "droplets" },
      { label: "Hot Water", value: "Instant LPG / Electric Heat Exchanger", icon: "flame" },
      { label: "Drainage", value: "Full Under-Floor Sump & Waste Valve", icon: "shield" },
      { label: "Trailer", value: "AL-KO Galvanised Road Chassis", icon: "truck" },
    ],
    features: [
      "Handcrafted exposed copper rainfall shower assembly",
      "Instant water heating system with freeze-protection drainage",
      "Waterproof non-slip thermo flooring with linear channel drain",
      "Separated shower vestibule leading directly into hot room",
      "Durable exterior finish with stainless steel marine hardware",
    ],
    packages: [
      {
        name: "Standard Shower Build",
        tagline: "Cold rinse rainfall shower with mains hookup",
        priceEstimate: "Est. £19,200 + VAT",
        includes: [
          "Overhead copper shower head with brass quarter-turn valve",
          "Thermo Alder sauna chamber with Huum wood stove",
          "Sloped timber drainage floor with quick-connect waste valve",
          "Road-legal commercial trailer chassis",
        ],
      },
      {
        name: "Full Hot Water Off-Grid Suite",
        tagline: "Instant gas water heater, water tank & 12V pressure pump",
        priceEstimate: "Est. £22,900 + VAT",
        highlighted: true,
        includes: [
          "Instant LPG on-demand water heater (endless hot shower)",
          "150L onboard fresh water tank with 12V high-flow water pump",
          "Solar charging system for autonomous off-grid operation",
          "Dual-tier contoured sauna benches with ambient lighting",
          "Full handover & winterization training kit",
        ],
      },
    ],
  },
  "blaze-superfoyer": {
    id: "blaze-superfoyer",
    title: "6x12 Blaze Super Foyer",
    subtitle: "Expanded Luxury Social Suite with Extended Glazing & Lounge Spec",
    dimensions: "6' × 12' (1.8m × 3.6m)",
    capacity: "6–8 Persons",
    category: "Luxury Foyer Suite",
    location: "Handcrafted in Cornwall",
    estimatedPrice: "From £19,800 + VAT",
    leadTime: "7–9 Weeks",
    mainImage: "/assets/featured/blaze-superfoyer-main.jpg",
    thumbImage: "/assets/featured/blaze-superfoyer-thumb.jpg",
    gallery: [
      "/assets/featured/blaze-superfoyer-main.jpg",
      "/assets/featured/blaze-superfoyer-thumb.jpg",
      "/assets/craft/craft-night-exterior.jpg",
      "/assets/craft/craft-led-bench.jpg",
    ],
    description: [
      "The 6x12 Blaze Super Foyer is the pinnacle of our 12-foot range, featuring an enlarged social foyer designed for relaxed conversation, tea rituals, and panoramic countryside viewing between heat sessions.",
      "Finished with bespoke architectural timber joinery, under-counter mini beverage cooler space, and an expansive panoramic window wrap.",
    ],
    keySpecs: [
      { label: "Footprint", value: "6ft Wide × 12ft Long", icon: "ruler" },
      { label: "Capacity", value: "6 to 8 Persons", icon: "users" },
      { label: "Lounge Space", value: "Extended 5ft Social Foyer Suite", icon: "users" },
      { label: "Heater", value: "Huum Hive Wood Stove / WiFi 10.5kW", icon: "flame" },
      { label: "Glazing", value: "Double Panoramic Glass Array", icon: "sun" },
      { label: "Chassis", value: "Heavy-Duty AL-KO Twin Axle", icon: "truck" },
    ],
    features: [
      "Generous social foyer with wrap-around bench & storage locker",
      "Full height tinted glass partition separating both zones",
      "Dual panoramic viewing windows capturing 180° scenery",
      "Bespoke cedar mountain wall silhouette art in hot room",
      "Touchpad LED dimmers with multi-zone warm light controls",
    ],
    packages: [
      {
        name: "Super Foyer Edition",
        tagline: "Expanded lounge spec with premium timber selection",
        priceEstimate: "Est. £19,800 + VAT",
        highlighted: true,
        includes: [
          "Super foyer layout with custom storage bench and coat alcove",
          "Huum Hive wood stove with glass hearth plate",
          "Full Thermo Alder interior cladding with soft-glow LEDs",
          "AL-KO heavy-duty braked chassis with alloy wheels",
        ],
      },
      {
        name: "Resort & Rental Master Suite",
        tagline: "Commercial grade durability for holiday lets & luxury hospitality",
        priceEstimate: "Est. £23,500 + VAT",
        includes: [
          "WiFi remote heating controller for guest pre-heat access",
          "Integrated beverage cooler alcove with 12V/240V power",
          "Commercial grade timber sealant and wear-resistant floor",
          "Digital keypad entry lock on exterior door",
          "Comprehensive warranty & commercial compliance pack",
        ],
      },
    ],
  },
  "pinnacle": {
    id: "pinnacle",
    title: "8x20 Pinnacle Sauna",
    subtitle: "Flagship Commercial Sauna with Dual Stoves & Massive 16-Person Capacity",
    dimensions: "8' × 20' (2.4m × 6.1m)",
    capacity: "12–16 Persons",
    category: "Commercial / Large Format",
    location: "Handcrafted in Cornwall",
    estimatedPrice: "From £32,000 + VAT",
    leadTime: "10–12 Weeks",
    mainImage: "/assets/featured/pinnacle-main.jpg",
    thumbImage: "/assets/featured/pinnacle-thumb.jpg",
    gallery: [
      "/assets/featured/pinnacle-main.jpg",
      "/assets/featured/pinnacle-thumb.jpg",
      "/assets/craft/craft-stove.jpg",
      "/assets/craft/craft-night-exterior.jpg",
    ],
    description: [
      "The 8x20 Pinnacle Sauna is our flagship large-format commercial build, created for high-volume sauna societies, wellness clubs, coastal retreats, and festival operators.",
      "Featuring high multi-tier stadium benching, generous ceiling height for German Aufguss towel-waving rituals, and twin high-capacity Huum stove setups that deliver relentless löyly steam even during continuous back-to-back sessions.",
    ],
    keySpecs: [
      { label: "Footprint", value: "8ft Wide × 20ft Long", icon: "ruler" },
      { label: "Capacity", value: "12 to 16 Persons", icon: "users" },
      { label: "Benching", value: "Triple-Tier Stadium Layout", icon: "users" },
      { label: "Stoves", value: "Dual High-Output Huum Stoves", icon: "flame" },
      { label: "Chassis", value: "Commercial Triple/Dual Axle 3500kg", icon: "truck" },
      { label: "Ceiling Height", value: "2.4m Optimized for Aufguss Rituals", icon: "shield" },
    ],
    features: [
      "Massive 16-person triple-tier stadium benching configuration",
      "Twin wood-burning stoves OR high-voltage commercial 18kW system",
      "Dual panoramic glass walls for theater-grade coastal views",
      "Heavy-duty commercial fire-rated insulation & vapour barrier",
      "3500kg gross weight rated commercial chassis with electric brakes",
    ],
    packages: [
      {
        name: "Commercial Flagship",
        tagline: "Turnkey commercial sauna built for heavy daily operation",
        priceEstimate: "Est. £32,000 + VAT",
        highlighted: true,
        includes: [
          "Triple-tier stadium seating in premium Thermo Alder",
          "Dual wood-burning stoves with heavy stone capacity (240kg)",
          "Commercial grade entrance door with push bar hardware",
          "3500kg rated triple-axle trailer chassis with stabilizer jacks",
          "Full commercial compliance & electrical certification",
        ],
      },
      {
        name: "Aufguss Society Suite",
        tagline: "The ultimate community hub with changing lounge & sound system",
        priceEstimate: "Est. £37,500 + VAT",
        includes: [
          "Enclosed changing foyer + large sauna auditorium",
          "Professional high-output audio system with master DJ input",
          "Integrated LED light show with programmable colour therapy",
          "Dual water pouring buckets & traditional birch whisks kit",
          "Priority on-site delivery and operator setup training",
        ],
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(MODELS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const model = MODELS_DATA[slug];

  if (!model) {
    return {
      title: "Model Not Found — Boundless Saunas",
    };
  }

  return {
    title: `${model.title} (${model.dimensions}) | Boundless Saunas Cornwall`,
    description: `${model.subtitle}. Handcrafted in Cornwall with premium Scandinavian materials. Capacity: ${model.capacity}.`,
  };
}

export default async function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = MODELS_DATA[slug];

  if (!model) {
    notFound();
  }

  // Find other models for bottom carousel
  const otherModels = FEATURED_MODELS.filter((m) => m.id !== model.id);

  return (
    <div className="bg-[#f7f5f0] text-[#1b1713] min-h-screen pt-28 sm:pt-32 pb-24">
      {/* 1. TOP BREADCRUMB & BACK BUTTON */}
      <div className="max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6e7c52] hover:text-[#55633b] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Builds &amp; Home</span>
        </Link>
      </div>

      {/* 2. HERO SHOWCASE & PRIMARY DETAILS */}
      <section className="max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Big Visual Gallery & Interior Inset */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-stone-900 shadow-xl border border-black/5 group">
              <Image
                src={model.mainImage}
                alt={model.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Interior Inset Card */}
              <div className="absolute top-4 left-4 z-20 w-28 sm:w-36 aspect-[4/5] rounded-[12px] p-1 bg-white/20 backdrop-blur-md border border-white/35 shadow-xl overflow-hidden group/inset">
                <div className="relative w-full h-full rounded-[8px] overflow-hidden">
                  <Image
                    src={model.thumbImage}
                    alt={`${model.title} interior preview`}
                    fill
                    className="object-cover group-hover/inset:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-1.5 inset-x-1.5 py-0.5 rounded bg-black/60 text-center text-[9px] font-mono uppercase tracking-wider text-white">
                  Interior View
                </div>
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{model.location}</span>
              </div>
            </div>

            {/* Thumbnail Gallery Strip */}
            <div className="grid grid-cols-4 gap-3">
              {model.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-stone-200 border border-black/10 shadow-sm hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={img}
                    alt={`${model.title} photo ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Model Information & Specs */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#786e5a]/12 border border-[#786e5a]/25 text-[#1b1713] text-xs font-mono uppercase tracking-wider">
                <span>{model.category}</span>
                <span>·</span>
                <span>{model.dimensions}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal tracking-tight leading-tight">
                {model.title}
              </h1>

              <p className="text-[#555046] text-base leading-relaxed font-light">
                {model.subtitle}
              </p>
            </div>

            {/* Price & Lead Time Badge */}
            <div className="p-5 rounded-[16px] bg-white border border-[#786e5a]/16 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8c857b] block">
                  Estimated Pricing
                </span>
                <span className="font-serif text-2xl text-[#6e7c52] font-semibold">
                  {model.estimatedPrice}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8c857b] block">
                  Build Lead Time
                </span>
                <span className="text-sm font-medium text-[#1b1713]">
                  {model.leadTime}
                </span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-3">
              {model.keySpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-[12px] bg-white/70 border border-[#786e5a]/14 space-y-1"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8c857b] block">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#1b1713] block leading-snug">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#consultation-form"
                className="flex-1 inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium bg-[#1b1713] text-white hover:bg-neutral-800 transition-all shadow-lg text-center"
              >
                <span>Request Custom Quote</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium border border-black/25 text-[#1b1713] hover:bg-black/5 transition-all text-center"
              >
                <span>Book Call</span>
              </Link>
            </div>

            <p className="text-[11px] text-[#8c857b] font-light italic">
              * Exact pricing is tailored to your chosen heater (wood-fired or WiFi electric), timber species, and off-grid solar additions.
            </p>
          </div>
        </div>
      </section>

      {/* 3. IN-DEPTH DESCRIPTION & CRAFTSMANSHIP */}
      <section className="py-16 sm:py-24 px-5 sm:px-10 lg:px-14 bg-[#efebe4] border-y border-black/5 mb-20">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="section-tag-light">
              Craft &amp; Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1713] font-normal leading-tight">
              Built by hand in Porthcothan.<br />
              Engineered to endure for decades.
            </h2>
            <div className="space-y-4 text-[#555046] text-base leading-relaxed font-light">
              {model.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 bg-white p-7 sm:p-9 rounded-[20px] border border-[#786e5a]/16 shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1b1713] font-medium">
              Included Build Highlights
            </h3>
            <ul className="space-y-3 pt-2">
              {model.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#555046]">
                  <div className="w-5 h-5 rounded-full bg-[#6e7c52]/15 text-[#6e7c52] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES & CONFIGURATIONS SECTION */}
      <section className="max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14 mb-24">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="section-tag-light">
            Packages &amp; Configurations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1b1713] font-normal">
            Choose your build package.
          </h2>
          <p className="text-[#555046] text-sm sm:text-base font-light">
            Every sauna is built from scratch. Select a baseline configuration or let us tailor every centimeter to your exact lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {model.packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-[20px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-[#1b1713] text-white shadow-xl ring-2 ring-[#6e7c52]"
                  : "bg-white text-[#1b1713] border border-[#786e5a]/16 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="space-y-4">
                {pkg.highlighted && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6e7c52] text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular Build</span>
                  </span>
                )}

                <h3 className="font-serif text-2xl font-medium">
                  {pkg.name}
                </h3>

                <p className={`text-xs sm:text-sm font-light leading-relaxed ${pkg.highlighted ? "text-white/80" : "text-[#666055]"}`}>
                  {pkg.tagline}
                </p>

                <div className="pt-2 pb-1 border-b border-black/10 dark:border-white/10">
                  <span className="font-serif text-2xl font-semibold text-[#6e7c52]">
                    {pkg.priceEstimate}
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <span className={`text-[11px] font-mono uppercase tracking-wider block ${pkg.highlighted ? "text-white/60" : "text-[#8c857b]"}`}>
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className="w-4 h-4 text-[#6e7c52] flex-shrink-0 mt-0.5" />
                        <span className={pkg.highlighted ? "text-white/90 font-light" : "text-[#555046]"}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-7">
                <a
                  href="#consultation-form"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                    pkg.highlighted
                      ? "bg-white text-[#1b1713] hover:bg-neutral-200"
                      : "bg-[#1b1713] text-white hover:bg-neutral-800"
                  }`}
                >
                  <span>Select Package</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONSULTATION & QUOTE FORM (PRE-FILLED WITH THIS MODEL) */}
      <section id="consultation-form" className="max-w-[1100px] mx-auto px-5 sm:px-10 mb-24">
        <div className="bg-white rounded-[24px] p-8 sm:p-12 border border-[#786e5a]/20 shadow-xl space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="section-tag-light">
              Start Your Build
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1713] font-normal">
              Request a tailored quote for {model.title}
            </h2>
            <p className="text-[#555046] text-xs sm:text-sm font-light">
              Fill in your details below and Cam Wickins will personally prepare custom layout ideas, timber advice, and full pricing.
            </p>
          </div>

          <form action="/api/quote" method="POST" className="space-y-5 max-w-2xl mx-auto">
            <input type="hidden" name="model" value={model.title} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1b1713] uppercase tracking-wider block">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. James Watson"
                  className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fdfdfc] text-sm text-[#1b1713] focus:outline-none focus:ring-2 focus:ring-[#6e7c52]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1b1713] uppercase tracking-wider block">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="james@example.co.uk"
                  className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fdfdfc] text-sm text-[#1b1713] focus:outline-none focus:ring-2 focus:ring-[#6e7c52]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1b1713] uppercase tracking-wider block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+44 7123 456789"
                  className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fdfdfc] text-sm text-[#1b1713] focus:outline-none focus:ring-2 focus:ring-[#6e7c52]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1b1713] uppercase tracking-wider block">
                  Delivery Location / Postcode
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Cornwall, TR12 or London"
                  className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fdfdfc] text-sm text-[#1b1713] focus:outline-none focus:ring-2 focus:ring-[#6e7c52]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1b1713] uppercase tracking-wider block">
                Selected Model &amp; Requirements
              </label>
              <textarea
                name="message"
                rows={3}
                defaultValue={`I'm interested in the ${model.title} (${model.dimensions}). Please provide estimated pricing, available timber options, and delivery lead time.`}
                className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fdfdfc] text-sm text-[#1b1713] focus:outline-none focus:ring-2 focus:ring-[#6e7c52]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#1b1713] text-white text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-xl"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </section>

      {/* 6. EXPLORE OTHER MODELS CAROUSEL */}
      <section className="max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14 border-t border-black/5 pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="section-tag-light">
              Explore More Builds
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1b1713] font-normal">
              Other Handcrafted Models
            </h2>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#6e7c52] hover:underline"
          >
            <span>View All Showcase Builds</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherModels.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={`/models/${item.id}`}
              className="group relative aspect-[4/5] rounded-[16px] overflow-hidden bg-stone-900 shadow-md hover:shadow-xl transition-all"
            >
              <Image
                src={item.mainImage}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-5 inset-x-5 text-white space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                  {item.dimensions}
                </span>
                <h3 className="font-serif text-xl font-medium">
                  {item.title}
                </h3>
                <span className="text-xs text-white/70 block">
                  {item.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
