import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { experience } from '../content/data'

export function Experience() {
  return (
    <Section id="experience" kicker="Experience" title="Timeline of impact">
      <div className="relative">
        <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-px bg-white/[0.08] md:block" />

        <div className="space-y-4">
          {experience.map((e, idx) => (
            <Reveal key={e.company} delay={0.02 * idx}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="card relative overflow-hidden p-6 md:pl-14"
              >
                <div className="absolute inset-0 bg-accent-gradient opacity-[0.06]" />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08]">
                        <Briefcase className="h-4 w-4 text-white/80" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">{e.company}</div>
                        <div className="mt-0.5 text-xs uppercase tracking-[0.2em] text-zinc-400">{e.period}</div>
                      </div>
                    </div>
                    <div className="chip">Full Stack</div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pointer-events-none absolute left-5 top-7 hidden md:block">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent-gradient shadow-glow" />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

