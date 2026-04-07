import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../content/data'

export function Projects() {
  return (
    <Section id="projects" kicker="Featured Projects" title="Premium builds with strong UX + scale">
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={0.02 * idx} className="h-full">
            <ProjectCard project={p} index={idx} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Reveal delay={0.05}>
          <div className="card p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-lg font-semibold text-white">Want the live links?</div>
                <div className="mt-1 text-sm text-zinc-400">
                  I’ll add portfolio live URLs when available. For now, the UI is ready for them.
                </div>
              </div>
              <a className="btn-primary" href="#contact">
                Request a demo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

