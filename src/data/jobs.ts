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

export const jobListings: JobListing[] = [
  {
    id: "1",
    title: "Production Manager",
    department: "Operations",
    location: "Accra, Ghana",
    type: "Full-time",
    description:
      "Lead and manage daily production operations at our main manufacturing facility in Accra. You will be responsible for overseeing production schedules, ensuring quality standards are met, optimizing production efficiency, and managing a team of 50+ production staff. This role is critical to maintaining the high standards that our brands are known for while driving continuous improvement across the production floor.",
    requirements: [
      "Bachelor's degree in Food Science, Engineering, or related field",
      "Minimum 7 years of experience in food manufacturing, with at least 3 years in a management role",
      "Strong knowledge of food safety regulations and HACCP principles",
      "Experience with lean manufacturing and continuous improvement methodologies",
      "Proven ability to lead and motivate large teams in a fast-paced environment",
      "Excellent problem-solving and decision-making skills",
    ],
    postedDate: "2025-10-01",
  },
  {
    id: "2",
    title: "Marketing Manager",
    department: "Marketing",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description:
      "Drive brand growth and consumer engagement for Daily Food's portfolio of brands across the Nigerian market. You will develop and execute marketing strategies, manage advertising campaigns, oversee brand partnerships, and lead a team of marketing professionals. This role requires a deep understanding of the Nigerian consumer landscape and the ability to translate brand strategy into impactful, locally relevant campaigns.",
    requirements: [
      "Bachelor's degree in Marketing, Business Administration, or related field; MBA preferred",
      "Minimum 5 years of marketing experience in FMCG or food & beverage industry",
      "Demonstrated success in developing and executing integrated marketing campaigns",
      "Strong understanding of the Nigerian consumer market and retail landscape",
      "Experience managing marketing budgets and delivering measurable ROI",
      "Excellent leadership, communication, and stakeholder management skills",
    ],
    postedDate: "2025-09-25",
  },
  {
    id: "3",
    title: "Quality Assurance Lead",
    department: "Quality & Compliance",
    location: "Accra, Ghana",
    type: "Full-time",
    description:
      "Oversee quality assurance processes across all product lines to ensure compliance with local and international food safety standards. You will lead the QA team, manage internal and external audits, develop and maintain quality management systems, and work closely with production and R&D teams to uphold product integrity from raw material intake through to finished goods distribution.",
    requirements: [
      "Bachelor's degree in Food Science, Microbiology, Chemistry, or related field",
      "Minimum 5 years of experience in food quality assurance or quality control",
      "Thorough knowledge of ISO 22000, FSSC 22000, and HACCP systems",
      "Experience conducting internal audits and managing external certification audits",
      "Strong analytical skills and attention to detail",
      "Ability to work cross-functionally with production, R&D, and supply chain teams",
    ],
    postedDate: "2025-09-18",
  },
  {
    id: "4",
    title: "Supply Chain Analyst",
    department: "Supply Chain & Logistics",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description:
      "Analyze and optimize supply chain operations for the East African region, covering procurement, logistics, warehousing, and distribution. You will use data-driven insights to identify cost savings, improve delivery performance, and support the scaling of our distribution network across Kenya, Tanzania, Uganda, and Rwanda. This role is ideal for a highly analytical professional who thrives on turning data into actionable supply chain improvements.",
    requirements: [
      "Bachelor's degree in Supply Chain Management, Logistics, Business Analytics, or related field",
      "Minimum 3 years of experience in supply chain analysis or logistics planning",
      "Strong proficiency in data analysis tools such as Excel, SQL, and visualization platforms",
      "Experience with ERP systems and supply chain management software",
      "Knowledge of East African logistics infrastructure and trade regulations",
      "Excellent communication skills with the ability to present insights to senior leadership",
    ],
    postedDate: "2025-09-10",
  },
  {
    id: "5",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "London, United Kingdom",
    type: "Full-time",
    description:
      "Plan and execute digital marketing campaigns to grow brand awareness and engagement for Daily Food Limited International across global digital channels. You will manage social media strategy, paid advertising, email marketing, content creation, and website optimization. Working from our London international office, you will play a key role in shaping how the company's brands are perceived by audiences in Europe and across the African diaspora.",
    requirements: [
      "Bachelor's degree in Marketing, Digital Media, Communications, or related field",
      "Minimum 3 years of experience in digital marketing, preferably in FMCG or food & beverage",
      "Proven experience managing social media accounts and paid advertising campaigns across multiple platforms",
      "Strong skills in SEO, SEM, Google Analytics, and marketing automation tools",
      "Experience with content creation and an eye for compelling visual storytelling",
      "Familiarity with African and diaspora consumer audiences is a strong advantage",
    ],
    postedDate: "2025-09-05",
  },
];
