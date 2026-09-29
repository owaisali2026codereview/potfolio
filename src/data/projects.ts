export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full-Stack' | 'Frontend' | 'Architecture' | 'Backend';
  technologies: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  role: string;
  architecture: string;
  keyFeatures: string[];
  challenges: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'nexus-commerce-platform',
    title: 'Full-Stack E-Commerce Platform',
    subtitle: 'Modern digital storefront with real-time cart state and secure order processing',
    description: 'A full-stack commerce application with JWT authentication, inventory management, multi-step cart workflows, and high-performance responsive UI.',
    category: 'Full-Stack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    liveUrl: 'https://example.com/nexus-commerce',
    githubUrl: 'https://github.com/example/nexus-commerce',
    role: 'Full-Stack Software Developer',
    problem: 'Traditional small-scale web stores often suffer from disconnected state synchronizations, slow page navigations, and insecure checkout flows when scaling inventory.',
    solution: 'Designed and engineered an end-to-end MERN architecture featuring type-safe REST APIs, optimistic UI updates for cart modifications, and secure server-side validation.',
    architecture: 'Layered MERN architecture with modular Express routers, Mongoose schemas with compound indexes, and decoupled React UI primitives leveraging customized context for local cart persistence.',
    keyFeatures: [
      'Token-based authentication with refresh cycles and role-based permissions',
      'Instant search and multi-facet filtering across product categories',
      'Optimistic state updates for instant cart additions and item removals',
      'Stripe checkout integration with server-side webhook reconciliation',
      'Admin portal for catalog management, stock status, and order tracking'
    ],
    challenges: [
      'Preventing race conditions when multiple users add low-stock products concurrently',
      'Maintaining 60fps animations across complex product grids on mobile viewports'
    ],
    outcomes: [
      'Successfully delivered complete cart-to-checkout flow with zero runtime type errors',
      'Implemented clean separation of concerns allowing new payment gateways without rewriting catalog logic'
    ]
  },
  {
    id: '02',
    slug: 'pulse-developer-workspace',
    title: 'Developer Analytics & Task Suite',
    subtitle: 'Unified dashboard for engineering sprints, sprint metrics, and workflow tracking',
    description: 'An interactive developer operations workspace offering real-time task boards, structured sprint planning, and visual team velocity reporting.',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Chakra UI', 'Python', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    liveUrl: 'https://example.com/pulse-workspace',
    githubUrl: 'https://github.com/example/pulse-workspace',
    role: 'Lead Frontend & API Engineer',
    problem: 'Engineering teams often struggle with fragmented dashboards that require context switching between static spreadsheets and disconnected ticket trackers.',
    solution: 'Built a consolidated single-page application dashboard featuring responsive data visualizers, accessible drag-and-drop boards, and a normalized MySQL relational backend.',
    architecture: 'Component-driven frontend using Chakra UI design tokens and custom SVG chart renderers, communicating with a lightweight Python service for sprint analytics calculation.',
    keyFeatures: [
      'Interactive Kanban workflow board with tactile keyboard and pointer accessibility',
      'Dynamic sprint charts and velocity graphs rendered without heavy external chart bloat',
      'Granular project milestone tracking with tag filtering and search',
      'Normalized relational schema with foreign key constraints in MySQL'
    ],
    challenges: [
      'Managing intricate layout reflows during board reordering across different screen resolutions',
      'Structuring reusable dashboard widgets with consistent dark-mode contrast'
    ],
    outcomes: [
      'Intuitive user interface with fluid interactions and strict TypeScript definitions',
      'Fully keyboard navigable interface complying with WCAG 2.1 accessibility criteria'
    ]
  },
  {
    id: '03',
    slug: 'synthetix-api-gateway',
    title: 'Scalable REST API Engine & Gateway',
    subtitle: 'High-throughput microservices router with rate limiting and schema validation',
    description: 'A robust Node.js backend providing centralized API routing, rate limiting, request validation, and comprehensive MongoDB audit logging.',
    category: 'Backend',
    technologies: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    liveUrl: 'https://example.com/synthetix-api',
    githubUrl: 'https://github.com/example/synthetix-api',
    role: 'Backend Systems Developer',
    problem: 'Unchecked incoming client requests can overwhelm downstream database instances and lack structured error tracking across microservices.',
    solution: 'Engineered a centralized API gateway that verifies incoming payloads against strict validation schemas, throttles abuse, and logs structured traces.',
    architecture: 'Express middleware pipeline with schema validation middleware, rate limiter token buckets, structured error handlers, and asynchronous MongoDB telemetry storage.',
    keyFeatures: [
      'Declarative request payload validation ensuring clean data before controller execution',
      'Custom IP-based and user-based token bucket rate limiting',
      'Structured JSON error format conforming to RFC 7807 problem details',
      'Health check and system telemetry probe endpoints'
    ],
    challenges: [
      'Designing clean middleware composition that minimizes memory allocation per request',
      'Creating comprehensive test suites validating edge-case HTTP statuses'
    ],
    outcomes: [
      'Modular backend architecture easily extensible for additional service endpoints',
      'Zero unhandled promise rejections through centralized async error capture'
    ]
  },
  {
    id: '04',
    slug: 'chroma-design-system',
    title: 'Accessible UI Component Library',
    subtitle: 'Engineered design system primitives with WCAG-compliant keyboard navigation',
    description: 'A production-ready UI component library featuring accessible modal dialogs, drawer panels, interactive inputs, and animated surface states.',
    category: 'Architecture',
    technologies: ['React', 'TypeScript', 'Chakra UI'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    liveUrl: 'https://example.com/chroma-system',
    githubUrl: 'https://github.com/example/chroma-system',
    role: 'UI/UX & Frontend Engineer',
    problem: 'Disjointed styling and ad-hoc CSS across development teams result in visual inconsistency and accessibility violations.',
    solution: 'Constructed an opinionated, token-first component design library with comprehensive keyboard traps, ARIA attributes, and cohesive visual hierarchy.',
    architecture: 'Custom tokens wrapping Chakra UI primitives, layered CSS variables for theme overrides, and strictly typed component prop contracts.',
    keyFeatures: [
      'Compound modal and drawer systems with focus containment and ESC key handlers',
      'Form controls with built-in validation states, screen-reader cues, and floating labels',
      'Fluid spacing scales powered by CSS clamp functions',
      'Strict TypeScript prop documentation with IntelliSense support'
    ],
    challenges: [
      'Ensuring focus restoration to the trigger element upon modal dismissal',
      'Achieving high contrast standards across all dark surface elevations'
    ],
    outcomes: [
      'Streamlined development workflow through plug-and-play accessible primitives',
      'Consistent design language deployed across the entire web portfolio'
    ]
  }
];
