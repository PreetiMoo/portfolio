import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import pmIcon from '/pm-icon.svg'
import { navItems } from '../content/site'
import { cn } from '../lib/cn'

export function Navbar({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState(false)
  const items = useMemo(() => navItems, [])
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="container-px">
        <div className="mt-4 rounded-2xl bg-black/20 ring-1 ring-white/[0.06] backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-5">
            <button
              type="button"
              onClick={() => scrollToId('home')}
              className="group inline-flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-white/[0.04]"
            >
              <img src={pmIcon} alt="PM logo" className="h-6 w-6 rounded-md ring-1 ring-white/10" />
              <span className="text-sm font-semibold tracking-tight text-white">
                Preeti<span className="text-white/70">.dev</span>
              </span>
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {items.map((i) => {
                const isActive = activeId === i.id
                return (
                  <button
                    key={i.id}
                    type="button"
                    onClick={() => scrollToId(i.id)}
                    className={cn(
                      'relative rounded-xl px-3 py-2 text-xs font-medium text-zinc-300 transition hover:text-white',
                      isActive && 'text-white',
                    )}
                  >
                    <span className="relative z-10">{i.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-white/[0.06] ring-1 ring-white/[0.08]"
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`${baseUrl}Preeti_Moolya_2026.pdf`}
                className="btn-secondary hidden sm:inline-flex"
                download
                aria-label="Download resume"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
              <button
                type="button"
                className="btn-secondary md:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="md:hidden"
              >
                <div className="space-y-1 px-3 pb-3">
                  {items.map((i) => {
                    const isActive = activeId === i.id
                    return (
                      <button
                        key={i.id}
                        type="button"
                        onClick={() => scrollToId(i.id)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.04] hover:text-white',
                          isActive && 'bg-white/[0.06] text-white ring-1 ring-white/[0.08]',
                        )}
                      >
                        {i.label}
                        <span className="text-xs text-white/40">{isActive ? 'Active' : ''}</span>
                      </button>
                    )
                  })}
                  <a href={`${baseUrl}Preeti_Moolya_2026.pdf`} className="btn-secondary w-full justify-center" download>
                    <Download className="h-4 w-4" />
                    Download resume
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

