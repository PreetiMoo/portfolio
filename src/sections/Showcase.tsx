import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { showcase } from '../content/data'

export function Showcase() {
  return (
    <Section id="showcase" kicker="Advanced Work" title="Work that stands out">
      <div className="grid gap-4 md:grid-cols-2">
        {showcase.map((s, idx) => (
          <Reveal key={s.title} delay={0.02 * idx}>
            <motion.article
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="card relative overflow-hidden p-6"
            >
              <div className="absolute inset-0 bg-accent-gradient opacity-[0.04]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-white">{s.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.description}</p>
                  </div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08]">
                    <s.icon className="h-5 w-5 text-white/80" />
                  </div>
                </div>

                <div className="mt-5 grid gap-2">
                  {s.highlights.map((h) => (
                    <div
                      key={h}
                      className="rounded-xl bg-black/20 px-3 py-2 text-sm text-zinc-300 ring-1 ring-white/[0.06]"
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

