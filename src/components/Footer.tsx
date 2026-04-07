import { Heart } from 'lucide-react'
import { site } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-px flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-zinc-400">
          © {year} <span className="text-white/80">{site.name}</span>. All rights reserved.
        </div>
        <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
          Built with <Heart className="h-4 w-4 text-rose-300/90" /> React, TypeScript, Tailwind, and Framer Motion.
        </div>
      </div>
    </footer>
  )
}

