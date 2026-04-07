import type { LucideIcon } from 'lucide-react'
import {
  Boxes,
  Braces,
  Database,
  GitBranch,
  Layers,
  ShieldCheck,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react'

export type SkillGroup = {
  title: string
  icon: LucideIcon
  items: { name: string; note?: string }[]
}

export type ExperienceItem = {
  company: string
  period: string
  bullets: string[]
}

export type ProjectItem = {
  title: string
  description: string
  stack: string[]
  liveHref?: string
  githubHref?: string
}

export type ShowcaseItem = {
  title: string
  icon: LucideIcon
  description: string
  highlights: string[]
}

export const stats = [
  { label: 'Years of experience', value: '2+' },
  { label: 'Projects built', value: '10+' },
  { label: 'Technologies used', value: '20+' },
] as const

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: Layers,
    items: [
      { name: 'React.js' },
      { name: 'TypeScript / JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    icon: Braces,
    items: [{ name: 'Node.js' }, { name: 'Express.js' }],
  },
  {
    title: 'Database',
    icon: Database,
    items: [
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'SQL' },
      { name: 'Sequelize' },
    ],
  },
  {
    title: 'Tools & Architecture',
    icon: GitBranch,
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'API Development' },
      { name: 'MVC Architecture' },
      { name: 'RBAC & authorization models', note: 'Role + hierarchy aware' },
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'DigiLateral Solutions',
    period: '2025 — Present',
    bullets: [
      'Built a quiz management platform with RBAC and permissioned workflows.',
      'Developed promotion and replacement workflows with audit-friendly state transitions.',
      'Built an AR-based detection system using MediaPipe, OpenCV, and Three.js.',
      'Integrated WhatsApp Business APIs to automate notifications and user journeys.',
      'Implemented a compliance checker system focused on policy-driven validation.',
    ],
  },
  {
    company: 'Ameliorate Digital Consultancy',
    period: '2024 — 2025',
    bullets: [
      'Delivered CRUD systems using Node.js and Sequelize with clean, maintainable API layers.',
      'Implemented authentication flows, RBAC, and SSO-ready patterns.',
      'Enabled real-time communication using sockets for responsive user experiences.',
    ],
  },
  {
    company: 'Credence Analytics',
    period: '2023 — 2024',
    bullets: [
      'Worked on debugging production issues and improving query reliability.',
      'Supported banking and insurance clients with data-focused troubleshooting and fixes.',
    ],
  },
]

export const projects: ProjectItem[] = [
 
  {
    title: 'Restaurant SaaS Dashboard',
    description:
      'A multi-tenant SaaS dashboard with billing, inventory workflows, reporting, and admin controls built for scale.',
    stack: ['MERN / Node.js', 'SQL', 'RBAC', 'Dashboards'],
    liveHref: 'https://www.ezcommerse.com/login',
    githubHref: 'https://github.com/PreetiMoo',
  },
  {
    title: 'Solar Easy',
    description:
      'A marketplace platform connecting solar vendors and buyers with bidding, payments, and structured role-based access.',
    stack: ['Node.js', 'React', 'Payments', 'RBAC'],
    liveHref: 'https://solareasy.in/',
    githubHref: 'https://github.com/PreetiMoo',
  },
  {
    title: 'Landing Page',
    description:
      'A high-conversion, modern landing page focused on premium UI polish, smooth motion, and responsive performance.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveHref: 'https://preetimoo.github.io/sample-landing-page/',
    githubHref: 'https://github.com/PreetiMoo',
  },
]

export const showcase: ShowcaseItem[] = [
  {
    title: 'AR-based Detection System',
    icon: Boxes,
    description:
      'Interactive AR experiences powered by computer vision, designed to be responsive, stable, and demo-ready.',
    highlights: ['MediaPipe + OpenCV pipelines', 'Three.js overlays', 'Performance-focused iteration'],
  },
  {
    title: 'WhatsApp API Automation',
    icon: Zap,
    description:
      'Automations that reduce manual ops by moving customer touchpoints into structured WhatsApp flows.',
    highlights: ['WhatsApp Business API integrations', 'Event-driven notifications', 'Reliable delivery patterns'],
  },
  {
    title: 'RBAC + Hierarchical Systems',
    icon: ShieldCheck,
    description:
      'Permission models built for real organizations—roles, scopes, and hierarchy-aware access without brittle logic.',
    highlights: ['Granular permissions', 'Workflow approvals', 'Audit-friendly decisions'],
  },
  {
    title: 'AI Integrations',
    icon: Sparkles,
    description:
      'Pragmatic AI features that enhance products—focused on utility, observability, and safe fallbacks.',
    highlights: ['AI-assisted checks', 'Structured prompts', 'Edge-case handling'],
  },
  {
    title: 'Scalable App Foundations',
    icon: Wand2,
    description:
      'Clean architecture patterns that keep feature velocity high while preventing messy, fragile codebases.',
    highlights: ['API-first design', 'MVC-aligned layering', 'Reusable modules'],
  },
  {
    title: 'Analytics Dashboards',
    icon: Boxes,
    description:
      'Data-heavy dashboards designed for clarity, speed, and actionable reporting.',
    highlights: ['Real-time updates', 'Report exports', 'Filters + segmentation'],
  },
]

