export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  aboutPhilosophy: {
    title: string;
    quote: string;
    paragraphs: string[];
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  socials: Array<{
    platform: string;
    url: string;
    username: string;
  }>;
}

export const profileData: ProfileData = {
  name: 'Muhammad Owais',
  role: 'Software Developer',
  tagline: 'Building digital experiences with code',
  shortBio: 'I build modern web experiences and full-stack applications with engineering precision, resilient architecture, and visual craft.',
  aboutPhilosophy: {
    title: 'I BUILD WITH PURPOSE.',
    quote: 'The interface itself is evidence of the developer’s technical ability.',
    paragraphs: [
      'As a software developer specializing in modern web ecosystems and full-stack engineering, I bridge the gap between rigorous systems logic and fluid, high-fidelity user experiences.',
      'My focus centers on the MERN stack, TypeScript, and modern component systems. I treat frontends not merely as visual coats of paint, but as state-driven, accessible digital engines engineered for performance, clean architecture, and intuitive interaction.',
      'From structuring scalable REST APIs with Express and Node.js to designing resilient schemas in MongoDB and MySQL, I build software with end-to-end reliability and production-grade craftsmanship in mind.'
    ],
    pillars: [
      {
        title: 'Full-Stack Architecture',
        description: 'Cohesive client-server integration utilizing TypeScript, RESTful endpoints, and robust data persistence.'
      },
      {
        title: 'Crafted Interfaces',
        description: 'Fluid micro-interactions, responsive typography, and tactile feedback without sacrificing accessibility.'
      },
      {
        title: 'Clean Engineering',
        description: 'Single responsibility, modular component patterns, strict type-checking, and zero-bloat state management.'
      }
    ]
  },
  socials: [
    { platform: 'GitHub', url: 'https://github.com', username: '@owais-dev' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', username: 'muhammad-owais' },
    { platform: 'Email', url: 'mailto:owais.developer@example.com', username: 'owais.developer@example.com' }
  ]
};
