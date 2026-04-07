import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Mail, Phone } from 'lucide-react'
import { site } from '../content/site'
import { Reveal } from '../components/Reveal'

export function Hero() {
  const reduced = useReducedMotion()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative min-h-[100svh] scroll-mt-24 pt-28">
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-4 py-2 text-xs text-zinc-300 ring-1 ring-white/[0.06]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
                Open to impactful full-stack work
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {site.name}
                <span className="block text-white/70">{site.role}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                {site.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="button" className="btn-primary" onClick={() => scrollTo('projects')}>
                  View Projects
                  <ArrowDown className="h-4 w-4" />
                </button>
                <button type="button" className="btn-secondary" onClick={() => scrollTo('contact')}>
                  Contact Me
                </button>
                <div className="flex flex-wrap gap-2 sm:ml-auto">
                  <a
                    className="chip group transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.07] hover:ring-white/[0.18] hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
                    href={`mailto:${site.contact.email}`}
                  >
                    <Mail className="h-3.5 w-3.5 transition group-hover:-translate-y-[1px] group-hover:text-white" />
                    {site.contact.email}
                  </a>
                  <a
                    className="chip group transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.07] hover:ring-white/[0.18] hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
                    href={`tel:${site.contact.phone}`}
                  >
                    <Phone className="h-3.5 w-3.5 transition group-hover:-translate-y-[1px] group-hover:text-white" />
                    {site.contact.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={0.08}>
              <div className="card relative overflow-hidden p-6 sm:p-7">
                <div className="absolute inset-0 bg-accent-gradient opacity-[0.10]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-white">Premium build mindset</div>
                    <div className="text-xs text-white/60">Frontend + Backend</div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      { label: 'Scalable systems', value: 92 },
                      { label: 'Interactive UI/UX', value: 90 },
                      { label: 'RBAC & workflows', value: 88 },
                      { label: 'Integrations', value: 86 },
                    ].map((m, idx) => (
                      <div key={m.label} className="rounded-xl bg-black/30 p-3 ring-1 ring-white/[0.06]">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-200">{m.label}</span>
                          <span className="text-xs text-zinc-400">{m.value}%</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            className="h-full bg-accent-gradient"
                            initial={reduced ? { width: `${m.value}%` } : { width: 0 }}
                            whileInView={{ width: `${m.value}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              delay: 0.15 + idx * 0.08,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/[0.06]">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">What I build</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      Analytics dashboards, workflow-heavy platforms, AR experiments, and integrations that ship reliably.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-accent-gradient opacity-[0.12] blur-2xl"
              animate={reduced ? undefined : { opacity: [0.08, 0.14, 0.08] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-ink-950" />
    </section>
  )
}

