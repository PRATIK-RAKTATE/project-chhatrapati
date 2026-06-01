export type Person = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  relatedBattles: string[];
};

export const people: Person[] = [
  { slug: "/family/jijabai", name: "Jijabai", role: "Mother and formative influence", summary: "Jijabai is remembered for shaping Shivaji Maharaj's values, political imagination and commitment to Swarajya.", relatedBattles: [] },
  { slug: "/family/shahaji-maharaj", name: "Shahaji Maharaj", role: "Father and Deccan noble", summary: "Shahaji Maharaj's career in Deccan politics formed part of the background to Shivaji Maharaj's rise.", relatedBattles: [] },
  { slug: "/family/sambhaji-maharaj", name: "Sambhaji Maharaj", role: "Son and successor", summary: "Sambhaji Maharaj succeeded Shivaji Maharaj and continued resistance during a severe imperial conflict.", relatedBattles: [] },
  { slug: "/family/rajaram-maharaj", name: "Rajaram Maharaj", role: "Maratha ruler", summary: "Rajaram Maharaj later carried forward Maratha resistance in a difficult period after Sambhaji Maharaj.", relatedBattles: [] },
  { slug: "/people/tanaji-malusare", name: "Tanaji Malusare", role: "Maratha commander", summary: "Tanaji Malusare is associated with the celebrated capture of Kondhana, later remembered as Sinhagad.", relatedBattles: ["/forts/sinhagad-fort"] },
  { slug: "/people/baji-prabhu-deshpande", name: "Baji Prabhu Deshpande", role: "Maratha commander", summary: "Baji Prabhu Deshpande is remembered for the Pavan Khind rearguard action.", relatedBattles: ["/battles/battle-of-pavan-khind"] },
  { slug: "/people/netaji-palkar", name: "Netaji Palkar", role: "Cavalry commander", summary: "Netaji Palkar served in the Maratha military system and is linked with mobile operations.", relatedBattles: ["/battles/battle-of-pratapgad"] },
  { slug: "/people/moropant-pingle", name: "Moropant Pingle", role: "Peshwa in Ashta Pradhan", summary: "Moropant Pingle was an important administrator and commander in Shivaji Maharaj's state.", relatedBattles: ["/battles/battle-of-salher"] },
  { slug: "/people/hambirrao-mohite", name: "Hambirrao Mohite", role: "Sarsenapati", summary: "Hambirrao Mohite became a prominent Maratha military leader in the later period.", relatedBattles: ["/battles/battle-of-salher"] },
  { slug: "/people/kanhoji-angre", name: "Kanhoji Angre", role: "Maratha naval leader", summary: "Kanhoji Angre belongs to a later phase of Maratha maritime power and is useful for understanding the naval legacy.", relatedBattles: ["/navy/maratha-navy"] }
];
