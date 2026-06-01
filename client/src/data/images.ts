export type ImageAsset = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
  width: number;
  height: number;
};

export const images = {
  shivajiPortrait: {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/80/Shivaji_portrait.jpg",
    alt: "Historical portrait associated with Chhatrapati Shivaji Maharaj",
    caption: "Portrait of Shivaji from Kincaid and Parasnis, A History of the Maratha People.",
    credit: "Anonymous, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shivaji_portrait.jpg",
    width: 1102,
    height: 1633
  },
  raigad: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Raigad_fort_2017.jpg/1280px-Raigad_fort_2017.jpg",
    alt: "Raigad Fort in Maharashtra associated with Chhatrapati Shivaji Maharaj",
    caption: "Raigad served as the capital after the coronation of Chhatrapati Shivaji Maharaj.",
    credit: "Prabuddha Magre, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Raigad_fort_2017.jpg",
    width: 1280,
    height: 720
  },
  pratapgad: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/A_Pratapgad_fort.jpg/1280px-A_Pratapgad_fort.jpg",
    alt: "Pratapgad Fort where Shivaji Maharaj met Afzal Khan",
    caption: "Pratapgad is closely associated with the 1659 encounter with Afzal Khan.",
    credit: "Amungale, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:A_Pratapgad_fort.jpg",
    width: 1527,
    height: 830
  },
  sinhagad: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/View_from_Sinhagad_Fort.jpg/1280px-View_from_Sinhagad_Fort.jpg",
    alt: "Sinhagad Fort hill landscape near Pune",
    caption: "Sinhagad, earlier Kondhana, remains one of the best-known forts near Pune.",
    credit: "Debraj Rakshit, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:View_from_Sinhagad_Fort.jpg",
    width: 1280,
    height: 960
  },
  sindhudurg: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Sindhudurg_fort_%2C_sindhudurg.jpg",
    alt: "Sindhudurg sea fort linked to the Maratha navy",
    caption: "Sindhudurg reflects the maritime priorities of the Maratha state.",
    credit: "Vaishnavi lakade, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sindhudurg_fort_,_sindhudurg.jpg",
    width: 1280,
    height: 720
  },
  landscape: {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/10/Sahyadri_mountain_range.jpg",
    alt: "Sahyadri mountain range landscape in Maharashtra",
    caption: "The Sahyadri terrain shaped fort warfare, mobility and defensive planning.",
    credit: "Akshayk9999, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sahyadri_mountain_range.jpg",
    width: 1280,
    height: 720
  }
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
