import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import type { ProjectItem } from '../content/data'
import { cn } from '../lib/cn'

export function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const hasGitHub = Boolean(project.githubHref && project.githubHref !== '#')

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.01}
      transitionSpeed={1100}
      glareEnable
      glareMaxOpacity={0.18}
      glareColor="rgba(168,85,247,0.55)"
      glarePosition="all"
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="card group relative h-full overflow-hidden p-6"
      >
        <div className="absolute inset-0 bg-accent-gradient opacity-[0.04] transition group-hover:opacity-[0.08]" />
        <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-white/[0.06] blur-2xl opacity-0 transition group-hover:opacity-100" />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold text-white">{project.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-zinc-300">{project.description}</div>
            </div>
            <div className="chip shrink-0">Featured #{index + 1}</div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="chip bg-black/20">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={project.liveHref && project.liveHref !== '#' ? project.liveHref : '#contact'}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              title="Open Live Demo"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
            <a
              href={project.githubHref ?? '#'}
              target="_blank"
              rel="noreferrer"
              className={cn('btn-secondary', !hasGitHub && 'pointer-events-none opacity-50')}
              aria-disabled={!hasGitHub}
              title={!hasGitHub ? 'Add your GitHub link later' : 'Open GitHub repository'}
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

