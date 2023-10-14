export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "PitchPerfectAI",
  description: "Smart Decision-Making with AI for Entrepreneurs",
  url: "http://localhost:3000",
  ogImage: "http://localhost:3000",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
};
