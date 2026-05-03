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
 * Job listings — currently no open positions.
 *
 * The site renders an empty-state on /careers when this array is empty,
 * inviting CV submissions for future opportunities. Add new entries
 * here when HR confirms a real opening.
 */
export const jobListings: JobListing[] = [];
