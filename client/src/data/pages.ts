import { battles } from "./battles";
import { commonFaqs, type FAQ } from "./faqs";
import { forts } from "./forts";
import type { ImageKey } from "./images";
import { people } from "./people";

export type PageKind = "home" | "pillar" | "cluster" | "article" | "faq" | "travel";

export type PageSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type SitePage = {
  slug: string;
  kind: PageKind;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  image: ImageKey;
  sections: PageSection[];
  faqs: FAQ[];
  related: string[];
  references: string[];
};

const references = [
  "Primary and secondary source placeholders: Sabhasad Bakhar, contemporary Persian records, regional gazetteers, Archaeological Survey material and peer-reviewed Maratha history scholarship.",
  "Travel and fort details should be verified against current local administration and conservation notices before publication.",
  "Where dates or narrative details vary between traditions, this article uses cautious wording and flags historical variation."
];

const hubLinks = [
  "/history/shivaji-maharaj-biography",
  "/battles",
  "/forts",
  "/military/shivaji-maharaj-military-strategy",
  "/navy/shivaji-maharaj-navy",
  "/administration/ashta-pradhan-mandal",
  "/family",
  "/timeline"
];

const makeSlugTitle = (slug: string) =>
  slug
    .split("/")
    .filter(Boolean)
    .at(-1)!
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const page = (input: Omit<SitePage, "references">): SitePage => ({
  ...input,
  related: Array.from(new Set(["/shivaji-maharaj", ...input.related])).filter((slug) => slug !== input.slug),
  references
});

const standardFaqs = (topic: string): FAQ[] => [
  {
    question: `Why is ${topic} important in Shivaji Maharaj history?`,
    answer: `${topic} helps explain the larger story of Swarajya, fort-based defence, regional administration and the political choices made in seventeenth-century Maharashtra.`
  },
  {
    question: `Is every detail about ${topic} certain?`,
    answer:
      "No. Some details differ across chronicles, later traditions and modern scholarship, so careful writing should separate broad consensus from disputed or symbolic details."
  },
  ...commonFaqs.slice(0, 2)
];

const mainPillar = page({
  slug: "/shivaji-maharaj",
  kind: "pillar",
  title: "Chhatrapati Shivaji Maharaj: History, Biography, Battles, Forts and Legacy",
  description:
    "A complete guide to Chhatrapati Shivaji Maharaj covering birth, childhood, family, Swarajya, battles, forts, navy, administration, coronation, death, legacy and timeline.",
  h1: "Chhatrapati Shivaji Maharaj",
  eyebrow: "Complete history guide",
  image: "shivajiPortrait",
  related: hubLinks,
  faqs: commonFaqs,
  sections: [
    {
      id: "birth-childhood-family",
      title: "Birth, Childhood and Family",
      body: [
        "Chhatrapati Shivaji Maharaj is most commonly dated to 1630 and connected with Shivneri Fort near Junnar. His childhood is remembered through the influence of Jijabai, the political background of Shahaji Maharaj and the turbulent Deccan world of competing sultanates, local chiefs and imperial pressure.",
        "Responsible biography should avoid flattening this period into legend alone. Family memory, regional traditions and documentary scholarship together show a young leader growing inside a complex frontier society where forts, revenue rights and local alliances mattered deeply."
      ],
      bullets: ["Birthplace: Shivneri Fort", "Mother: Jijabai", "Father: Shahaji Maharaj", "Core idea: Hindavi Swarajya"]
    },
    {
      id: "rise-of-swarajya",
      title: "Rise of Swarajya",
      body: [
        "The rise of Swarajya was not a single event. It was a long process of acquiring forts, building loyal networks, protecting local revenue, negotiating when useful and fighting when necessary.",
        "Shivaji Maharaj's political achievement lay in turning scattered hill power into an organised state with legitimacy, administration, ritual sovereignty and durable military capacity."
      ]
    },
    {
      id: "battles-forts-navy",
      title: "Battles, Forts and Navy",
      body: [
        "The best-known campaigns include Pratapgad, Pavan Khind, Umberkhind, Salher and confrontations with Mughal commanders. These events show the value of terrain, speed, intelligence, surprise and morale.",
        "Forts formed the structural backbone of the Maratha state. Hill forts guarded passes and storage; sea forts such as Sindhudurg expressed a maritime strategy that treated the Konkan coast as a defensive and commercial frontier."
      ]
    },
    {
      id: "administration-coronation",
      title: "Administration and Coronation",
      body: [
        "The coronation at Raigad in 1674 transformed a successful regional power into a formally articulated kingship. Administrative institutions such as the Ashta Pradhan Mandal, revenue discipline and local governance helped convert military gains into state capacity.",
        "The political message was clear: Swarajya was not merely rebellion against larger powers, but a sovereign order with its own law, ceremony and accountability."
      ]
    },
    {
      id: "death-legacy-timeline",
      title: "Death, Legacy and Timeline",
      body: [
        "Shivaji Maharaj died at Raigad in 1680. His legacy continued through Maratha resistance, administrative memory, fort heritage, public culture and modern regional identity.",
        "The timeline below should be read as a careful overview. Some dates are firmly established, while others are best treated with attention to source variation."
      ]
    }
  ]
});

const homePage = page({
  slug: "/",
  kind: "home",
  title: "Chhatrapati Shivaji Maharaj History Hub",
  description:
    "Explore a structured SEO knowledge hub on Chhatrapati Shivaji Maharaj, including biography, battles, forts, navy, administration, people, timeline and travel guides.",
  h1: "Chhatrapati Shivaji Maharaj History Hub",
  eyebrow: "Static knowledge site",
  image: "raigad",
  related: ["/shivaji-maharaj", ...hubLinks],
  faqs: commonFaqs,
  sections: [
    {
      id: "overview",
      title: "Start with the Main Guide",
      body: [
        "This site is organised as a topical authority hub. The main pillar page introduces the complete life and legacy of Chhatrapati Shivaji Maharaj, while cluster pages go deeper into battles, forts, administration, navy, people, timeline and search-intent questions.",
        "Every article links back to the central guide and onward to related pages so readers and crawlers can move through the subject naturally."
      ]
    }
  ]
});

const historySlugs = [
  "/history/shivaji-maharaj-biography",
  "/history/childhood",
  "/history/early-life",
  "/history/achievements",
  "/history/coronation",
  "/history/death",
  "/history/legacy",
  "/history/facts"
];

const militarySlugs = [
  "/military/shivaji-maharaj-military-strategy",
  "/military/ganimi-kava",
  "/military/guerrilla-warfare",
  "/military/intelligence-network",
  "/military/army-structure",
  "/military/weapons"
];

const navySlugs = [
  "/navy/shivaji-maharaj-navy",
  "/navy/maratha-navy",
  "/navy/naval-forts",
  "/navy/naval-strategy",
  "/navy/sindhudurg-naval-base"
];

const administrationSlugs = [
  "/administration/ashta-pradhan-mandal",
  "/administration/revenue-system",
  "/administration/justice-system",
  "/administration/governance-model",
  "/administration/tax-system"
];

const timelineSlugs = ["/timeline", "/timeline/important-events", "/timeline/coronation-timeline", "/timeline/military-campaigns"];

const travelSlugs = [
  "/travel-guides/best-forts-near-pune",
  "/travel-guides/weekend-forts-in-maharashtra",
  "/travel-guides/shivaji-forts-road-trip",
  "/travel-guides/raigad-travel-guide",
  "/travel-guides/sinhagad-travel-guide"
];

const faqPages = [
  ["/faq/who-was-shivaji-maharaj", "Who Was Shivaji Maharaj?", "/history/shivaji-maharaj-biography"],
  ["/faq/where-was-shivaji-born", "Where Was Shivaji Maharaj Born?", "/history/childhood"],
  ["/faq/how-many-forts-did-shivaji-have", "How Many Forts Did Shivaji Maharaj Have?", "/forts"],
  ["/faq/when-was-shivaji-crowned", "When Was Shivaji Maharaj Crowned?", "/history/coronation"],
  ["/faq/how-did-shivaji-die", "How Did Shivaji Maharaj Die?", "/history/death"],
  ["/faq/who-was-jijabai", "Who Was Jijabai?", "/family/jijabai"],
  ["/faq/who-killed-afzal-khan", "Who Killed Afzal Khan?", "/battles/shivaji-vs-afzal-khan"]
] as const;

const genericArticle = (slug: string, clusterName: string, related: string[], image: ImageKey = "landscape"): SitePage => {
  const topic = makeSlugTitle(slug);
  return page({
    slug,
    kind: "article",
    title: `${topic}: Meaning, History and Importance`,
    description: `Detailed guide to ${topic.toLowerCase()} in the life, statecraft and legacy of Chhatrapati Shivaji Maharaj.`,
    h1: topic,
    eyebrow: clusterName,
    image,
    related,
    faqs: standardFaqs(topic),
    sections: [
      {
        id: "overview",
        title: `${topic} Overview`,
        body: [
          `${topic} is an important part of understanding Chhatrapati Shivaji Maharaj because it connects biography, geography, warfare and governance rather than treating history as isolated anecdotes.`,
          `For SEO and reader value, this page gives a neutral overview, explains the historical setting, and points to deeper articles in the ${clusterName.toLowerCase()} cluster.`
        ]
      },
      {
        id: "historical-context",
        title: "Historical Context",
        body: [
          "The seventeenth-century Deccan was shaped by regional sultanates, Mughal expansion, mobile warrior groups, local landed elites and difficult mountain terrain. Shivaji Maharaj's choices must be read within that political environment.",
          "Chronicles and later public memory sometimes emphasise different details. This article therefore keeps the main interpretation careful and avoids unsupported certainty where sources vary."
        ]
      },
      {
        id: "importance",
        title: "Importance in the Swarajya Story",
        body: [
          `${topic} matters because it helps explain how a regional movement became a durable state. It links practical decisions about forts, revenue, diplomacy and military movement with a larger vision of self-rule.`,
          "Readers should use the related articles below to move from this overview into specific battles, forts, people and institutions."
        ],
        bullets: ["Connects to the main biography", "Supports internal topical authority", "Links readers to deeper cluster pages"]
      }
    ]
  });
};

const fortsIndex = page({
  slug: "/forts",
  kind: "cluster",
  title: "Shivaji Maharaj Forts: History, Maps, Travel and Importance",
  description: "Explore important forts connected with Shivaji Maharaj, including Raigad, Pratapgad, Sinhagad, Torna, Rajgad, Shivneri and Sindhudurg.",
  h1: "Forts of Chhatrapati Shivaji Maharaj",
  eyebrow: "Forts cluster",
  image: "raigad",
  related: forts.map((fort) => fort.slug),
  faqs: standardFaqs("Shivaji Maharaj forts"),
  sections: [
    {
      id: "fort-network",
      title: "Why Forts Were Central to Swarajya",
      body: [
        "Forts were not merely monuments. They were military bases, treasuries, food stores, administrative centres, prisons, refuges and symbols of authority.",
        "The Maratha fort network used the Sahyadri terrain to slow larger armies, protect routes and give local commanders defensible positions across the western Deccan and Konkan."
      ]
    }
  ]
});

const fortPages = forts.map((fort) =>
  page({
    slug: fort.slug,
    kind: "article",
    title: `${fort.name}: History, Importance, Location and Travel Guide`,
    description: `Learn about ${fort.name}, its role in Shivaji Maharaj history, architecture, location, how to reach, nearby places and best time to visit.`,
    h1: fort.name,
    eyebrow: "Fort guide",
    image: fort.image,
    related: ["/forts", ...fort.related],
    faqs: standardFaqs(fort.name),
    sections: [
      { id: "history", title: "History", body: [fort.summary, `${fort.name} belongs to the wider fort landscape that made Swarajya defensible and administratively connected.`] },
      { id: "importance", title: "Importance During Shivaji Maharaj Era", body: [`During Shivaji Maharaj's era, ${fort.name} should be understood through control of routes, supplies, watch points and regional authority.`, "Its importance was practical as well as symbolic: forts projected sovereignty while giving commanders time and space to respond."] },
      { id: "architecture", title: "Architecture and Layout", body: ["Typical Deccan forts combine natural cliffs, gateways, water systems, bastions and inner settlement areas. Conservation status varies, so on-site observation should be paired with official heritage guidance."] },
      { id: "location-travel", title: "Location, How to Reach and Nearby Places", body: [`Location: ${fort.location}. Visitors should check current road, trek, weather and local access conditions before travelling.`, "Nearby places can include villages, temples, viewpoints, other forts and regional museums depending on the route."] },
      { id: "best-time-map", title: "Best Time to Visit and Map", body: ["Post-monsoon and winter months are usually more comfortable for fort visits in Maharashtra. A production travel page can embed a map here after checking the preferred privacy and performance approach."], bullets: ["Map placeholder", "Carry water", "Respect heritage rules", "Avoid risky edges in fog or rain"] }
    ]
  })
);

const battlesIndex = page({
  slug: "/battles",
  kind: "cluster",
  title: "Battles of Shivaji Maharaj: Strategy, Outcomes and Timeline",
  description: "Read about major battles and confrontations of Shivaji Maharaj, including Pratapgad, Pavan Khind, Salher, Umberkhind and Mughal campaigns.",
  h1: "Battles of Chhatrapati Shivaji Maharaj",
  eyebrow: "Battles cluster",
  image: "pratapgad",
  related: battles.map((battle) => battle.slug),
  faqs: standardFaqs("Shivaji Maharaj battles"),
  sections: [
    {
      id: "battle-patterns",
      title: "Patterns Across the Campaigns",
      body: [
        "The battles connected with Shivaji Maharaj show repeated use of terrain, intelligence, timing, speed and flexible command.",
        "Some engagements were open battles, while others were raids, ambushes, sieges, escapes or political confrontations. Reading them together gives a more accurate picture than isolating one famous event."
      ]
    }
  ]
});

const battlePages = battles.map((battle) =>
  page({
    slug: battle.slug,
    kind: "article",
    title: `${battle.name}: Date, Cause, Strategy, Outcome and Impact`,
    description: `Detailed guide to ${battle.name}, including cause, date, location, commanders, strategy, outcome, impact, timeline, related forts and FAQs.`,
    h1: battle.name,
    eyebrow: "Battle guide",
    image: battle.slug.includes("pratapgad") || battle.slug.includes("afzal") ? "pratapgad" : "landscape",
    related: ["/battles", ...battle.relatedForts, ...battle.relatedPeople],
    faqs: standardFaqs(battle.name),
    sections: [
      { id: "cause-date-location", title: "Cause, Date and Location", body: [`Date: ${battle.date}. Location: ${battle.location}.`, "The cause lay in the political contest for authority, routes, forts, revenue and prestige in the Deccan. Exact motives should be read through both contemporary context and later narrative traditions."] },
      { id: "commanders", title: "Commanders and Forces", body: [`Commanders associated with this event include ${battle.commanders.join(", ")}.`, "Numbers vary across accounts, so serious summaries should focus on strategy, constraints and outcome rather than unsupported precision."] },
      { id: "strategy", title: "Strategy and Tactics", body: ["The strategic pattern emphasised terrain awareness, intelligence, selective engagement, morale and timing. Maratha planning often avoided fighting on terms chosen by larger opponents.", "Where the event involved surprise or withdrawal, that should be understood as operational discipline rather than a lack of courage."] },
      { id: "outcome-impact", title: "Outcome and Impact", body: [battle.outcome, "The impact extended beyond battlefield results by affecting alliances, reputation, fort control and the confidence of local supporters."] },
      { id: "timeline-related", title: "Timeline, Related People and Related Forts", body: ["Use the related links below to study connected forts, commanders and wider campaigns in the same cluster."], bullets: ["Cause", "Movement", "Engagement", "Outcome", "Political impact"] }
    ]
  })
);

const familyIndex = page({
  slug: "/family",
  kind: "cluster",
  title: "Family of Chhatrapati Shivaji Maharaj: Jijabai, Shahaji, Sambhaji and Rajaram",
  description: "Learn about the family of Chhatrapati Shivaji Maharaj and the people who shaped or continued the Maratha story.",
  h1: "Family of Chhatrapati Shivaji Maharaj",
  eyebrow: "Family and people",
  image: "shivajiPortrait",
  related: ["/family/family-tree", ...people.map((person) => person.slug)],
  faqs: standardFaqs("Shivaji Maharaj family"),
  sections: [
    {
      id: "family-context",
      title: "Family Context",
      body: [
        "The family story connects personal biography with the wider Deccan political world. Jijabai, Shahaji Maharaj, Sambhaji Maharaj and Rajaram Maharaj each belong to different phases of this history.",
        "A family tree should be presented carefully, because titles, marriages and succession politics can be simplified too aggressively in short summaries."
      ]
    }
  ]
});

const familyTree = genericArticle("/family/family-tree", "Family and people", ["/family", "/family/jijabai", "/family/shahaji-maharaj", "/family/sambhaji-maharaj"]);

const personPages = people.map((person) =>
  page({
    slug: person.slug,
    kind: "article",
    title: `${person.name}: Biography, Role and Connection with Shivaji Maharaj`,
    description: `Read about ${person.name}, their role in Maratha history and their connection with Chhatrapati Shivaji Maharaj.`,
    h1: person.name,
    eyebrow: person.slug.startsWith("/family") ? "Family" : "People",
    image: "shivajiPortrait",
    related: [person.slug.startsWith("/family") ? "/family" : "/people/tanaji-malusare", ...person.relatedBattles],
    faqs: standardFaqs(person.name),
    sections: [
      { id: "biography", title: "Biography", body: [person.summary, `${person.name}'s story should be read as part of the larger Maratha political and military world rather than as an isolated anecdote.`] },
      { id: "role", title: "Role and Importance", body: [`Role: ${person.role}.`, "This role mattered because leadership in the Maratha state depended on loyalty, local knowledge, fort networks, revenue discipline and wartime adaptability."] },
      { id: "connections", title: "Related Battles and Articles", body: ["The links below connect this biography to related battles, forts, institutions and broader guide pages."] }
    ]
  })
);

const faqGenerated = faqPages.map(([slug, title, deeper]) =>
  page({
    slug,
    kind: "faq",
    title: `${title} Short Answer and Detailed Guide`,
    description: `${title} Get a concise answer and links to deeper historical context about Chhatrapati Shivaji Maharaj.`,
    h1: title,
    eyebrow: "FAQ answer",
    image: "shivajiPortrait",
    related: [deeper, "/shivaji-maharaj"],
    faqs: [
      {
        question: title,
        answer:
          "The short answer depends on the specific question, but the linked deeper article gives the historical setting, source caution and related pages for fuller reading."
      },
      ...commonFaqs.slice(0, 2)
    ],
    sections: [
      {
        id: "short-answer",
        title: "Short Answer",
        body: [
          "This FAQ page gives a direct answer for search intent while linking to a deeper article for context. Historical claims should be handled carefully, especially where later tradition and documentary evidence are not identical."
        ]
      },
      {
        id: "read-more",
        title: "Read the Detailed Article",
        body: [`For a fuller explanation, continue to ${makeSlugTitle(deeper)} and the main Chhatrapati Shivaji Maharaj pillar guide.`]
      }
    ]
  })
);

const generatedPages = [
  ...historySlugs.map((slug) => genericArticle(slug, "History", ["/shivaji-maharaj", ...historySlugs.filter((item) => item !== slug)], "shivajiPortrait")),
  ...militarySlugs.map((slug) => genericArticle(slug, "Military", ["/battles", ...militarySlugs.filter((item) => item !== slug)])),
  ...navySlugs.map((slug) => genericArticle(slug, "Navy", ["/forts/sindhudurg-fort", ...navySlugs.filter((item) => item !== slug)], "sindhudurg")),
  ...administrationSlugs.map((slug) => genericArticle(slug, "Administration", ["/shivaji-maharaj", ...administrationSlugs.filter((item) => item !== slug)], "raigad")),
  ...timelineSlugs.map((slug) => genericArticle(slug, "Timeline", ["/shivaji-maharaj", ...timelineSlugs.filter((item) => item !== slug)], "raigad")),
  ...travelSlugs.map((slug) => genericArticle(slug, "Travel guides", ["/forts", "/travel-guides/raigad-travel-guide", "/travel-guides/sinhagad-travel-guide"], slug.includes("sinhagad") ? "sinhagad" : "raigad"))
];

export const allPages: SitePage[] = [
  homePage,
  mainPillar,
  fortsIndex,
  ...fortPages,
  battlesIndex,
  ...battlePages,
  familyIndex,
  familyTree,
  ...personPages,
  ...faqGenerated,
  ...generatedPages
];

export const pageMap = new Map(allPages.map((item) => [item.slug, item]));
