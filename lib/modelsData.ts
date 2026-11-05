export interface SaunaModelItem {
  id: string;
  title: string;
  dimensions: string;
  category: string;
  location: string;
  mainImage: string;
  thumbImage: string;
  href: string;
}

export const FEATURED_MODELS: SaunaModelItem[] = [
  {
    id: "flare-v2",
    title: "6x10 Flare Sauna V2",
    dimensions: "6' × 10'",
    category: "Bespoke Cabin",
    location: "Handcrafted in Washington, USA",
    mainImage: "/assets/featured/flare-v2-main.jpg",
    thumbImage: "/assets/featured/flare-v2-thumb.jpg",
    href: "/models/flare-v2",
  },
  {
    id: "blaze-coldplunge",
    title: "6x12 Blaze Cold Plunge",
    dimensions: "6' × 12'",
    category: "Sauna + Cold Plunge",
    location: "Handcrafted in Washington, USA",
    mainImage: "/assets/featured/blaze-coldplunge-main.jpg",
    thumbImage: "/assets/featured/blaze-coldplunge-thumb.jpg",
    href: "/models/blaze-coldplunge",
  },
  {
    id: "blaze-foyer",
    title: "6x12 Blaze Foyer Sauna",
    dimensions: "6' × 12'",
    category: "Foyer Entrance Build",
    location: "Handcrafted in Washington, USA",
    mainImage: "/assets/featured/blaze-foyer-main.jpg",
    thumbImage: "/assets/featured/blaze-foyer-thumb.jpg",
    href: "/models/blaze-foyer",
  },
  {
    id: "blaze-shower",
    title: "6x12 Blaze Shower Sauna",
    dimensions: "6' × 12'",
    category: "Integrated Shower Build",
    location: "Handcrafted in Washington, USA",
    mainImage: "/assets/featured/blaze-shower-main.jpg",
    thumbImage: "/assets/featured/blaze-shower-thumb.jpg",
    href: "/models/blaze-shower",
  },
  {
    id: "blaze-superfoyer",
    title: "6x12 Blaze Super Foyer",
    dimensions: "6' × 12'",
    category: "Luxury Foyer Suite",
    location: "Handcrafted in Washington, USA",
    mainImage: "/assets/featured/blaze-superfoyer-main.jpg",
    thumbImage: "/assets/featured/blaze-superfoyer-thumb.jpg",
    href: "/models/blaze-superfoyer",
  },
  {
    id: "pinnacle",
    title: "8x20 Pinnacle Sauna",
    dimensions: "8' × 20'",
    category: "Commercial / Large Format",
    location: "Handcrafted in Washington, USA",
    mainImage: "/assets/featured/pinnacle-main.jpg",
    thumbImage: "/assets/featured/pinnacle-thumb.jpg",
    href: "/models/pinnacle",
  },
];
