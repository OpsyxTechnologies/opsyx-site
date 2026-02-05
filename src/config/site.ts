export const siteConfig = {
  name: "Opsyx Technologies",
  tagline: "Mission-Critical Cybersecurity at the Speed of Relevance",
  motto: "Defend Forward and Operate Resilient",
  description: "SDVOSB cybersecurity consultancy delivering Purple Team operations, secure automation, and federal compliance at the speed of relevance.",
  url: "https://opsyxtechnologies.com",
  email: "contact@opsyx.com",
  socials: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/company/opsyx-technologies",
    github: import.meta.env.VITE_GITHUB_URL || "https://github.com/OpsyxTechnologies",
    twitter: import.meta.env.VITE_TWITTER_URL || "https://twitter.com/opsyxtech",
    google: import.meta.env.VITE_GOOGLE_URL || "https://google.com/search?q=Opsyx+Technologies",
  },
  org: {
    github: "OpsyxTechnologies",
    type: "SDVOSB",
  },
};
