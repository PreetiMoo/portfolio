import { ArrowUp, FileText } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { site } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()
  const baseUrl = import.meta.env.BASE_URL

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/[0.06] py-7">
      <div className="container-px">
        <div className="glass rounded-2xl px-4 py-3 sm:px-5">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-400">
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />
              LinkedIn
            </a>

            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <FaGithub className="h-4 w-4 text-zinc-300" />
              GitHub
            </a>

            <a
              href={site.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <SiLeetcode className="h-4 w-4 text-amber-400" />
              LeetCode
            </a>

            {/* <a
              href="https://www.ezcommerse.com/login"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Puzzle className="h-4 w-4 text-violet-300" />
              SaaS demo
            </a> */}

            <a
              href={`${baseUrl}Preeti_Moolya_2026.pdf`}
              download
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <FileText className="h-4 w-4 text-zinc-300" />
              Resume
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <ArrowUp className="h-4 w-4 text-zinc-300" />
              Back to top
            </button>
          </div>

          <div className="mt-3 border-t border-white/[0.06] pt-3 text-xs text-zinc-500">
            © {year} {site.name}. Built with React, TypeScript, Tailwind CSS, and Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  )
}

