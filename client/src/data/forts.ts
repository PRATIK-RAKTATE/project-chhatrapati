import type { ImageKey } from "./images";

export type Fort = {
  slug: string;
  name: string;
  location: string;
  image: ImageKey;
  summary: string;
  related: string[];
};

export const forts: Fort[] = [
  {
    slug: "/forts/raigad-fort",
    name: "Raigad Fort",
    location: "Raigad district, Maharashtra",
    image: "raigad",
    summary: "Capital fort of the Maratha state after the coronation, associated with royal administration and state ceremony.",
    related: ["/forts/rajgad-fort", "/forts/pratapgad-fort", "/forts/sinhagad-fort"]
  },
  {
    slug: "/forts/sinhagad-fort",
    name: "Sinhagad Fort",
    location: "Near Pune, Maharashtra",
    image: "sinhagad",
    summary: "A strategic hill fort near Pune, remembered for the later battle linked with Tanaji Malusare.",
    related: ["/forts/rajgad-fort", "/forts/purandar-fort", "/forts/lohagad-fort"]
  },
  {
    slug: "/forts/pratapgad-fort",
    name: "Pratapgad Fort",
    location: "Satara district, Maharashtra",
    image: "pratapgad",
    summary: "A mountain fort central to the Afzal Khan episode and the rise of Maratha confidence in 1659.",
    related: ["/forts/raigad-fort", "/forts/torna-fort", "/forts/rajgad-fort"]
  },
  {
    slug: "/forts/torna-fort",
    name: "Torna Fort",
    location: "Pune district, Maharashtra",
    image: "landscape",
    summary: "Often associated with Shivaji Maharaj's early fort acquisitions and the practical beginning of Swarajya expansion.",
    related: ["/forts/rajgad-fort", "/forts/sinhagad-fort", "/forts/purandar-fort"]
  },
  {
    slug: "/forts/rajgad-fort",
    name: "Rajgad Fort",
    location: "Pune district, Maharashtra",
    image: "landscape",
    summary: "A long-serving capital before Raigad, valued for its strong hill position and administrative role.",
    related: ["/forts/raigad-fort", "/forts/torna-fort", "/forts/sinhagad-fort"]
  },
  {
    slug: "/forts/shivneri-fort",
    name: "Shivneri Fort",
    location: "Junnar, Maharashtra",
    image: "landscape",
    summary: "The birth fort of Shivaji Maharaj and a key site for biographical and pilgrimage travel intent.",
    related: ["/forts/lohagad-fort", "/forts/sinhagad-fort", "/forts/raigad-fort"]
  },
  {
    slug: "/forts/purandar-fort",
    name: "Purandar Fort",
    location: "Near Pune, Maharashtra",
    image: "landscape",
    summary: "A significant fort in Maratha-Mughal negotiations and western Deccan military geography.",
    related: ["/forts/sinhagad-fort", "/forts/rajgad-fort", "/forts/lohagad-fort"]
  },
  {
    slug: "/forts/vijaydurg-fort",
    name: "Vijaydurg Fort",
    location: "Sindhudurg district, Maharashtra",
    image: "sindhudurg",
    summary: "A coastal stronghold important to maritime defence and later Maratha naval history.",
    related: ["/forts/sindhudurg-fort", "/navy/naval-forts", "/navy/maratha-navy"]
  },
  {
    slug: "/forts/sindhudurg-fort",
    name: "Sindhudurg Fort",
    location: "Malvan, Maharashtra",
    image: "sindhudurg",
    summary: "A sea fort commissioned in Shivaji Maharaj's era to strengthen Konkan coastal defence.",
    related: ["/forts/vijaydurg-fort", "/navy/sindhudurg-naval-base", "/navy/naval-forts"]
  },
  {
    slug: "/forts/lohagad-fort",
    name: "Lohagad Fort",
    location: "Near Lonavala, Maharashtra",
    image: "landscape",
    summary: "A hill fort near major routes, useful for understanding logistics, trade paths and regional defence.",
    related: ["/forts/sinhagad-fort", "/forts/purandar-fort", "/forts/shivneri-fort"]
  }
];
