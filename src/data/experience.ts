export interface JourneyMilestone {
  year: string;
  phase: string;
  focus: string;
  description: string;
  technologies: string[];
}

export const journeyTimeline: JourneyMilestone[] = [
  {
    year: '2024',
    phase: 'Learning & Foundation',
    focus: 'Computer Science Fundamentals & Core Web Standards',
    description: 'Mastered semantic HTML5, modern CSS layouts, JavaScript ESNext programming, and algorithmic foundations in Python.',
    technologies: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'Git'],
  },
  {
    year: '2025',
    phase: 'Frontend Development',
    focus: 'Component Architecture & Interactive UI Engineering',
    description: 'Specialized in React, TypeScript, state orchestration, responsive design systems, and modern animation workflows.',
    technologies: ['React', 'TypeScript', 'Tailwind/Chakra', 'UI Engineering'],
  },
  {
    year: '2026',
    phase: 'Full-Stack Development',
    focus: 'MERN Stack & Scalable Backend Systems',
    description: 'Deepened full-stack engineering expertise connecting Node.js and Express REST APIs with MongoDB document stores and relational MySQL schemas.',
    technologies: ['MERN Stack', 'Node.js', 'Express', 'MongoDB', 'MySQL'],
  },
  {
    year: 'NOW',
    phase: 'Production-Ready Applications',
    focus: 'End-to-End Engineering & Digital Craftsmanship',
    description: 'Building robust, accessible, high-performance web products that unify aesthetic excellence with resilient software architecture.',
    technologies: ['React', 'TypeScript', 'MERN', 'REST APIs', 'System Design'],
  },
];

export interface PhilosophyStage {
  id: string;
  stage: string;
  title: string;
  summary: string;
  details: string;
  index: number;
}

export const developmentPhilosophy: PhilosophyStage[] = [
  {
    id: 'think',
    stage: 'THINK',
    title: 'Understand Requirements & Constraints',
    summary: 'Analyze domain logic, user requirements, technical boundaries, and system constraints before writing code.',
    details: 'Deconstruct complex user problems into clearly defined architectural requirements, identifying edge cases early.',
    index: 1,
  },
  {
    id: 'design',
    stage: 'DESIGN',
    title: 'Define Structure, UX & Technical Approach',
    summary: 'Plan component hierarchies, data flows, API contracts, and visual design tokens for clarity and cohesion.',
    details: 'Draft clean schema boundaries and UI wireframes ensuring seamless collaboration between client state and server models.',
    index: 2,
  },
  {
    id: 'build',
    stage: 'BUILD',
    title: 'Create Reusable, Maintainable Components',
    summary: 'Write type-safe, modular, single-responsibility code following clean architecture patterns.',
    details: 'Leverage TypeScript and structured React primitives to produce composable, self-documenting codebases.',
    index: 3,
  },
  {
    id: 'test',
    stage: 'TEST',
    title: 'Validate Functionality, Responsiveness & Edge Cases',
    summary: 'Audit responsiveness, verify keyboard accessibility, validate error states, and prevent regressions.',
    details: 'Test under simulated latency, reduced motion, varying screen ratios, and unexpected user inputs.',
    index: 4,
  },
  {
    id: 'ship',
    stage: 'SHIP',
    title: 'Optimize, Deploy & Monitor',
    summary: 'Bundle optimization, lazy-loading heavy assets, continuous delivery, and production stability.',
    details: 'Deliver lightweight payloads, monitor client-side metrics, and maintain continuous reliability.',
    index: 5,
  },
];
