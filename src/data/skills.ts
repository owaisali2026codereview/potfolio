export type SkillCategory = 'Frontend' | 'Backend' | 'Databases' | 'Programming' | 'Architecture';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  icon?: string;
  featured?: boolean;
  orbitIndex?: number;
}

export const skills: Skill[] = [
  // Orbit Core Skills (Featured in Hero Orbit)
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'Declarative component hierarchies, hooks, state machines, and modern concurrent patterns.',
    featured: true,
    orbitIndex: 0,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming',
    description: 'Strict end-to-end type safety, generic utilities, and expressive domain modeling across client and server.',
    featured: true,
    orbitIndex: 1,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Databases',
    description: 'Document database modeling, aggregation pipelines, indexing, and Mongoose ODM integration.',
    featured: true,
    orbitIndex: 2,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming',
    description: 'Modern ESNext syntax, asynchronous event loops, DOM performance, and functional paradigms.',
    featured: true,
    orbitIndex: 3,
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Databases',
    description: 'Relational schema normalization, complex SQL joins, indexing, and transactional integrity.',
    featured: true,
    orbitIndex: 4,
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    description: 'Backend scripting, algorithmic problem solving, data processing, and automation pipelines.',
    featured: true,
    orbitIndex: 5,
  },
  {
    id: 'mern',
    name: 'MERN Stack',
    category: 'Architecture',
    description: 'Full-stack synergy connecting MongoDB, Express, React, and Node.js into unified production web applications.',
    featured: true,
    orbitIndex: 6,
  },

  // Additional In-depth Categorized Skills (Section 20)
  {
    id: 'ui-engineering',
    name: 'UI Engineering',
    category: 'Frontend',
    description: 'Design system implementation, responsive layouts, micro-interactions, CSS tokens, and web accessibility standards.',
    featured: false,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    description: 'Non-blocking I/O event-driven server runtime, stream processing, and NPM package ecosystem.',
    featured: false,
  },
  {
    id: 'express',
    name: 'Express',
    category: 'Backend',
    description: 'RESTful API routing, middleware chains, rate limiting, and centralized error handling.',
    featured: false,
  },
  {
    id: 'apis',
    name: 'REST APIs',
    category: 'Backend',
    description: 'Standardized HTTP status codes, structured JSON payloads, and clean resource contracts.',
    featured: false,
  },
  {
    id: 'auth',
    name: 'Authentication',
    category: 'Backend',
    description: 'JWT token lifecycles, bcrypt hashing, session cookies, and role-based access control (RBAC).',
    featured: false,
  },
  {
    id: 'reusable-components',
    name: 'Reusable Components',
    category: 'Architecture',
    description: 'Atomic design hierarchy, compound component patterns, and separation of presentation from business logic.',
    featured: false,
  },
  {
    id: 'feature-based',
    name: 'Feature-Based Architecture',
    category: 'Architecture',
    description: 'Domain-driven folder isolation minimizing coupling and enabling long-term codebase maintainability.',
    featured: false,
  },
];

export const marqueeTechnologies = [
  'HTML5',
  'CSS3',
  'JAVASCRIPT',
  'REACT',
  'NODE.JS',
  'EXPRESS',
  'MONGODB',
  'TYPESCRIPT',
  'PYTHON',
  'MYSQL',
  'GIT',
  'MERN STACK',
] as const;
