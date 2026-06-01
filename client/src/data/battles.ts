export type Battle = {
  slug: string;
  name: string;
  date: string;
  location: string;
  commanders: string[];
  outcome: string;
  relatedForts: string[];
  relatedPeople: string[];
};

export const battles: Battle[] = [
  {
    slug: "/battles/battle-of-pratapgad",
    name: "Battle of Pratapgad",
    date: "1659",
    location: "Pratapgad, Maharashtra",
    commanders: ["Chhatrapati Shivaji Maharaj", "Afzal Khan"],
    outcome: "Major Maratha success that changed regional perceptions of Shivaji Maharaj's power.",
    relatedForts: ["/forts/pratapgad-fort", "/forts/raigad-fort"],
    relatedPeople: ["/faq/who-killed-afzal-khan", "/people/netaji-palkar"]
  },
  {
    slug: "/battles/battle-of-pavan-khind",
    name: "Battle of Pavan Khind",
    date: "1660",
    location: "Ghod Khind/Pavan Khind region",
    commanders: ["Baji Prabhu Deshpande", "Maratha rearguard leaders"],
    outcome: "A celebrated defensive action that enabled Shivaji Maharaj's escape toward Vishalgad.",
    relatedForts: ["/forts/raigad-fort", "/forts/rajgad-fort"],
    relatedPeople: ["/people/baji-prabhu-deshpande"]
  },
  {
    slug: "/battles/battle-of-salher",
    name: "Battle of Salher",
    date: "1672",
    location: "Salher region, north Maharashtra",
    commanders: ["Moropant Pingle", "Prataprao Gujar"],
    outcome: "A major open-field Maratha victory over Mughal forces.",
    relatedForts: ["/forts/raigad-fort", "/forts/purandar-fort"],
    relatedPeople: ["/people/moropant-pingle", "/people/hambirrao-mohite"]
  },
  {
    slug: "/battles/battle-of-umberkhind",
    name: "Battle of Umberkhind",
    date: "1661",
    location: "Umberkhind pass, Sahyadri region",
    commanders: ["Chhatrapati Shivaji Maharaj", "Kartalab Khan"],
    outcome: "An ambush that demonstrates terrain-led planning and mobile warfare.",
    relatedForts: ["/forts/lohagad-fort", "/forts/sinhagad-fort"],
    relatedPeople: ["/military/ganimi-kava", "/military/guerrilla-warfare"]
  },
  {
    slug: "/battles/shivaji-vs-afzal-khan",
    name: "Shivaji Maharaj vs Afzal Khan",
    date: "1659",
    location: "Pratapgad area",
    commanders: ["Chhatrapati Shivaji Maharaj", "Afzal Khan"],
    outcome: "A decisive political and military turning point in the Deccan.",
    relatedForts: ["/forts/pratapgad-fort"],
    relatedPeople: ["/faq/who-killed-afzal-khan"]
  },
  {
    slug: "/battles/shivaji-vs-shaista-khan",
    name: "Shivaji Maharaj vs Shaista Khan",
    date: "1663",
    location: "Pune",
    commanders: ["Chhatrapati Shivaji Maharaj", "Shaista Khan"],
    outcome: "A daring raid that damaged Mughal prestige and highlighted intelligence-led action.",
    relatedForts: ["/forts/sinhagad-fort", "/forts/purandar-fort"],
    relatedPeople: ["/military/intelligence-network"]
  },
  {
    slug: "/battles/shivaji-vs-mughals",
    name: "Shivaji Maharaj vs the Mughals",
    date: "Multiple campaigns",
    location: "Deccan and western India",
    commanders: ["Chhatrapati Shivaji Maharaj", "Mughal commanders including Shaista Khan and others"],
    outcome: "A long contest shaped by forts, diplomacy, raids, treaties and regional power shifts.",
    relatedForts: ["/forts/raigad-fort", "/forts/purandar-fort"],
    relatedPeople: ["/administration/governance-model", "/military/shivaji-maharaj-military-strategy"]
  }
];
