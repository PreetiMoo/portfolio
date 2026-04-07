import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { stats } from '../content/data'

const highlights = [
  'RBAC systems built for real workflows and hierarchies',
  'AI integrations focused on measurable product value',
  'AR-based applications using computer vision + 3D',
  'WhatsApp API integrations for automation and engagement',
]

export function About() {
  return (
    <Section id="about" kicker="About" title="Engineering with product-level polish">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <Reveal>
            <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
              I’m a Full Stack Developer with hands-on experience across frontend, backend, and databases. I enjoy
              building scalable systems, analytics dashboards, and interactive applications that feel fast and
              intentional.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
              My work often blends product workflows with strong engineering fundamentals—clean APIs, permission models,
              integrations, and UI that stays responsive under real usage.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-6">
              <div className="section-kicker">Highlights</div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3 rounded-xl bg-black/20 p-3 ring-1 ring-white/[0.06]">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-white/[0.08]">
                      <Check className="h-4 w-4 text-white/80" />
                    </span>
                    <span className="text-sm leading-relaxed text-zinc-300">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
          {stats.map((s, idx) => (
            <Reveal key={s.label} delay={0.02 * idx}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="card p-6"
              >
                <div className="text-3xl font-semibold tracking-tight text-white">{s.value}</div>
                <div className="mt-2 text-sm text-zinc-400">{s.label}</div>
                <div className="mt-4 h-px w-full bg-white/[0.06]" />
                <div className="mt-4 text-sm text-zinc-300">
                  {s.label === 'Years of experience' && 'Hands-on delivery across products, workflows, and integrations.'}
                  {s.label === 'Projects built' && 'From dashboards to workflow platforms to interactive AR experiences.'}
                  {s.label === 'Technologies used' && 'Frontend, backend, databases, and tooling that ships reliably.'}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

