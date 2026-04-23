export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
  requirements: string[];
  postedDate: string;
}

/*
 * Job listings
 *
 * The Nov 2022 deck places Daily Food's only production + HQ site in Accra,
 * Ghana ("Daily Food today" slide 9 — no Lagos/Nairobi/London offices).
 * Earlier versions of this file listed Lagos / Nairobi / London roles that
 * implied offices that don't exist. Those have been removed.
 *
 * TODO(client): the two Accra-based roles below are plausible placeholders
 * for a 200+ employee Ghana production site. Replace them with the
 * actual current open positions from the HR team. Add market-facing roles
 * (Sales/BD for specific markets) as Accra-based with regional coverage
 * rather than roles implying overseas offices.
 */
export const jobListings: JobListing[] = [
  {
    id: "1",
    title: "Production Manager",
    department: "Operations",
    location: "Accra, Ghana",
    type: "Full-time",
    description:
      "Lead and manage daily production operations at our Accra manufacturing facility. You will be responsible for overseeing production schedules, ensuring ISO 22000 and FSSC 22000 standards are met, optimising production efficiency, and managing a team of production staff. This role is critical to maintaining the quality that has certified Boss Baker as a supplier to Burger King Africa and KFC.",
    requirements: [
      "Bachelor's degree in Food Science, Engineering, or related field",
      "Minimum 7 years of experience in food manufacturing, with at least 3 years in a management role",
      "Strong knowledge of food safety regulations, ISO 22000, FSSC 22000 and HACCP principles",
      "Experience with lean manufacturing and continuous improvement methodologies",
      "Proven ability to lead production teams in a high-volume, multi-line baked goods facility",
      "Excellent problem-solving and decision-making skills under production pressure",
    ],
    postedDate: "2026-03-15",
  },
  {
    id: "2",
    title: "Quality Assurance Lead",
    department: "Quality & Compliance",
    location: "Accra, Ghana",
    type: "Full-time",
    description:
      "Oversee quality assurance processes across all product lines to uphold ISO 22000 and FSSC 22000 certification and the food-safety standards that make Daily Food a certified Burger King and KFC supplier. You will lead the QA team, manage internal and external audits, maintain our quality management system, and partner with production and R&D from raw-material intake through finished-goods distribution across our 15 African markets.",
    requirements: [
      "Bachelor's degree in Food Science, Microbiology, Chemistry, or related field",
      "Minimum 5 years of experience in food quality assurance or quality control",
      "Deep working knowledge of ISO 22000, FSSC 22000 and HACCP systems",
      "Experience conducting internal audits and managing external certification audits",
      "Strong analytical skills and attention to detail",
      "Ability to work cross-functionally with production, R&D and supply chain teams",
    ],
    postedDate: "2026-03-02",
  },
];
