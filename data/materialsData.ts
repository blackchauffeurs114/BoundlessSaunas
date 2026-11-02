export interface MaterialItem {
  id: string;
  tag: string;
  name: string;
  desc: string;
  img: string;
  alt: string;
  aspectRatio: "landscape" | "portrait";
}

export const internalCladdingItems: MaterialItem[] = [
  {
    id: "thermo-spruce",
    tag: "— Light golden",
    name: "Thermo Spruce",
    desc: "Thermo Alder is smooth, warm, and naturally refined. It has a calm feel with excellent stability under heat and moisture.",
    img: "/content/v1/6993920ac427d10258b41fb2/affa0c3f-50ba-41fd-bb1d-27a6977c948e/Thermory_Sauna_wall_STP_15x90_thermo-spruce_1920_3.webp",
    alt: "Horizontal wooden planks with visible wood grain and knots.",
    aspectRatio: "landscape"
  },
  {
    id: "alder",
    tag: "— Reddish warmth",
    name: "Alder",
    desc: "Light-reddish toned with a clean, contemporary finish. Alder is water-repellent and best for a softer, more minimal sauna space.",
    img: "/content/v1/6993920ac427d10258b41fb2/682abce0-368a-4838-b5b5-99e233e89698/Thermory_Sauna_wall_STS4_15x90_alder_1920_3.webp",
    alt: "A close-up of a wooden surface with horizontal planks and a light natural finish.",
    aspectRatio: "landscape"
  },
  {
    id: "thermo-alder",
    tag: "— Warm brown",
    name: "Thermo Alder",
    desc: "Radiata pine is stunning, lightweight, and exclusive. It exudes warmth, depth, and character, everything you want in a sauna.",
    img: "/content/v1/6993920ac427d10258b41fb2/4cacaa9b-3415-4408-a9be-499a9411e719/Thermory_Sauna_wall_STP_15x90_thermo-alder_1920_3.webp",
    alt: "Close-up of horizontal wooden planks with a natural light brown finish.",
    aspectRatio: "landscape"
  },
  {
    id: "thermo-aspen",
    tag: "— Golden brown",
    name: "Thermo Aspen",
    desc: "Aspen is a traditional sauna timber well known for its smooth finish and understated appearance. With thermal modification, it is a golden brown, clean, bright, and comfortable for high temperatures.",
    img: "/content/v1/6993920ac427d10258b41fb2/4cacaa9b-3415-4408-a9be-499a9411e719/Thermory_Sauna_wall_STP_15x90_thermo-alder_1920_3.webp",
    alt: "Several horizontal wooden planks with a natural wood grain pattern and a light brown color.",
    aspectRatio: "landscape"
  },
  {
    id: "thermo-radiata",
    tag: "— Knotted golden",
    name: "Thermo Radiata",
    desc: "With thermal modification, Ayous retains its eye-catching natural pattern and traditional character.",
    img: "/content/v1/6993920ac427d10258b41fb2/22eb1c7d-043b-4ba5-a198-35429115f566/Thermory_Sauna_wall_STS4_15x140_thermo-radiata-pine_1920_3-1312x875.webp",
    alt: "Close-up of wooden planks with a smooth finish and natural wood grain.",
    aspectRatio: "landscape"
  },
  {
    id: "western-red-cedar",
    tag: "— Aromatic red",
    name: "Western Red Cedar",
    desc: "Western red cedar is a statement sauna material. No over-heating, no resin, and water-repellent, it has a rich aroma and gives a unique atmosphere to its saunas.",
    img: "/content/v1/6993920ac427d10258b41fb2/5a77b1b0-b234-4372-b6ad-a972d4ad43a0/Thermory_Sauna_wall_STP_15x140_cedar_3.1-scaled.webp",
    alt: "Close-up of a light-colored wooden surface with horizontal planks and visible wood grain.",
    aspectRatio: "landscape"
  }
];

export const externalCladdingItems: MaterialItem[] = [
  {
    id: "thermo-ayous",
    tag: "— Weathers to silver",
    name: "Thermo Ayous",
    desc: "British Larch Tongue & Groove is knotty, with a warm, pale reddy-orange colour. Great for a natural wood look on a budget.",
    img: "/content/v1/6993920ac427d10258b41fb2/7fe9052e-04f0-456d-ad0c-52e22c08c900/Z71_9567-37b-Ayous-DTC14.webp",
    alt: "Close-up of a wooden surface with vertical planks.",
    aspectRatio: "landscape"
  },
  {
    id: "home-grown-larch",
    tag: "— Natural & knotty",
    name: "Home Grown Larch",
    desc: "British Larch Tongue & Groove is quite knotty, with a warm, pale reddy-orange colour. A good option if you want a natural wood look on a budget.",
    img: "/content/v1/6993920ac427d10258b41fb2/e2f46b18-9684-4da2-bcb0-136d361e6d86/Larch_DouglasFirShadowGapVertical95mmx19mm.jpg",
    alt: "British Larch Tongue and Groove Cladding",
    aspectRatio: "landscape"
  },
  {
    id: "painted-black",
    tag: "— Bold contemporary",
    name: "Painted Black",
    desc: "This is a minimal and contemporary cladding painted to mimic charred black cladding. A unique finish designed to sit quietly in modern outdoor spaces.",
    img: "/content/v1/6993920ac427d10258b41fb2/06d75fd3-77d5-442b-a98b-7f1bfe9d42ba/Painted-Black-Shadow-Gap.jpg",
    alt: "Painted Black Shadow Gap Cladding",
    aspectRatio: "landscape"
  },
  {
    id: "charred-larch",
    tag: "— Visual impact",
    name: "Charred Larch",
    desc: "Charred larch is a stunning deep black in tone with a textured finish inspired by traditional timber preservation methods. It is a perfect choice for durable, architectural saunas and designed to weather beautifully.",
    img: "/content/v1/6993920ac427d10258b41fb2/fb70a6e5-a60e-42e5-b9ad-1e25f7acfa5b/Charred-PAR-Graphite.webp",
    alt: "Charred Larch PAR Graphite",
    aspectRatio: "landscape"
  }
];

export const stoveItems: MaterialItem[] = [
  {
    id: "huum-drop",
    tag: "— Wall mounted",
    name: "Huum Drop",
    desc: "A compact wall-mounted Scandinavian electric heater with a sculptural stone basket design and soft, balanced heat.",
    img: "/content/v1/6993920ac427d10258b41fb2/f278816c-520d-4bb1-840b-5a3711473768/Screenshot 2026-04-20 at 22.18.12.png",
    alt: "A metal container filled with small gray rocks, with the branding 'HUUM' on the side.",
    aspectRatio: "portrait"
  },
  {
    id: "huum-cliff",
    tag: "— Red Dot winner",
    name: "Huum Cliff",
    desc: "This is the Red Dot award-winning design inspired by Nordic coastal rocks. With an ultra-slim profile and eco-conscious construction, it is perfect for the smallest saunas.",
    img: "/content/v1/6993920ac427d10258b41fb2/df87306d-d7b4-41d1-88a3-6936470a9740/Screenshot 2026-04-20 at 22.21.21.png",
    alt: "Modern slim sauna heater filled with stones.",
    aspectRatio: "portrait"
  },
  {
    id: "huum-hive-mini",
    tag: "— Statement piece",
    name: "Huum Hive Mini",
    desc: "Smaller than the Huum Hive, it is a standing statement heating option offering consistent heating across your sauna.",
    img: "/content/v1/6993920ac427d10258b41fb2/845d5e79-aae8-4381-92b6-95f925504482/Screenshot 2026-04-20 at 22.18.43.png",
    alt: "Standing cylindrical sauna heater with stone cage.",
    aspectRatio: "portrait"
  },
  {
    id: "huum-hive",
    tag: "— Maximum heat",
    name: "Huum Hive",
    desc: "Designed for larger sauna spaces with increased stone capacity and consistent heat distribution.",
    img: "/content/v1/6993920ac427d10258b41fb2/be118002-b906-4388-b12a-8c49dff5982d/Screenshot 2026-04-20 at 22.23.06.png",
    alt: "A cylindrical wire basket filled with gray decorative stones.",
    aspectRatio: "portrait"
  },
  {
    id: "huum-hive-wood",
    tag: "— Wood-fired",
    name: "Huum Hive Wood",
    desc: "Bringing the soul of traditional sauna heating back, it is a robust, durable, wood-fired heating option for an authentic, long-lasting steam experience.",
    img: "/content/v1/6993920ac427d10258b41fb2/53f2382c-be71-4b66-a8f7-d7b60ce99cc0/Screenshot 2026-04-20 at 22.27.15.png",
    alt: "A modern outdoor wood-burning stove encased in stacked rocks with metal grid.",
    aspectRatio: "portrait"
  },
  {
    id: "huum-hive-wood-ls",
    tag: "— Through-wall feed",
    name: "Huum Hive Wood LS",
    desc: "HUUM HIVE LS Tunnel is a space-saving heating solution. Installed with a “through-the-wall” feed that allows stoking from an adjacent room.",
    img: "/content/v1/6993920ac427d10258b41fb2/2d7ab427-a81f-4981-8d3f-bdfc6acfa422/Screenshot 2026-04-20 at 22.28.50.png",
    alt: "Electric sauna stove surrounded by metal cage with glass door.",
    aspectRatio: "portrait"
  },
  {
    id: "narvi-kuru",
    tag: "— Compact design",
    name: "Narvi Kuru",
    desc: "The Narvi Kuru is a small model designed for cosy saunas. It fits snugly in difficult spaces easily for an even steam distribution.",
    img: "/content/v1/6993920ac427d10258b41fb2/7f69bc93-d478-4a18-a5b5-b9caf47359d7/Screenshot 2026-04-20 at 22.25.58.png",
    alt: "A Narvi sauna stove with rocks on top.",
    aspectRatio: "portrait"
  },
  {
    id: "narvi-inari-plus-wood",
    tag: "— Countryside classic",
    name: "Narvi Inari Plus Wood",
    desc: "The Narvi Inari Plus Wood is for those who enjoy simplicity and functionality. It is an ideal heating solution for a countryside cabin.",
    img: "/content/v1/6993920ac427d10258b41fb2/a81b75d8-7fb3-47e4-9c85-b609b907beca/Screenshot 2026-04-20 at 22.30.40.png",
    alt: "A cylindrical sauna heater filled with gray rocks enclosed in black metal bars.",
    aspectRatio: "portrait"
  }
];

export const featureOptions = [
  {
    id: "full-glass-fronts",
    title: "Full-glass fronts",
    desc: "Floor-to-ceiling glass saunas with panoramic views. Your imagination is the limit.",
    icon: "/content/v1/6993920ac427d10258b41fb2/b3ec1adc-21a1-47f6-a004-76435e506a0c/noun-glass-8273454-5C6B3D.png",
    alt: "Full-glass fronts icon"
  },
  {
    id: "sedum-roof",
    title: "Sedum Roof",
    desc: "The traditional heart of saunas or a modern twist to the experience. Choose the soul of your sauna.",
    icon: "/content/v1/6993920ac427d10258b41fb2/c60626d8-093e-47ba-86ff-3d38a79b91ad/noun-wooden-5483076-5C6B3D.png",
    alt: "Sedum Roof icon"
  },
  {
    id: "copper-shower",
    title: "Copper Shower",
    desc: "Out of the norm? Don’t worry. We love the challenge. Anything is possible at Boundless Saunas",
    icon: "/content/v1/6993920ac427d10258b41fb2/48b68827-216a-431b-b898-f82f8cd89c06/noun-design-6626422-5C6B3D.png",
    alt: "Copper Shower icon"
  }
];
