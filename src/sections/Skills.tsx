import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { skillGroups } from '../content/data'

export function Skills() {
  return (
    <Section id="skills" kicker="Skills" title="A practical full‑stack toolkit">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, idx) => (
          <Reveal key={g.title} delay={0.02 * idx}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="card p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-white">{g.title}</div>
                  <div className="mt-1 text-sm text-zinc-400">Hover to explore</div>
                </div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08]">
                  <g.icon className="h-5 w-5 text-white/80" />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i.name}
                    className="group inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-200 ring-1 ring-white/[0.07] transition hover:bg-white/[0.06]"
                    title={i.note}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient opacity-90" />
                    {i.name}
                    {i.note ? <span className="text-white/40">•</span> : null}
                    {i.note ? <span className="text-white/60">{i.note}</span> : null}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

