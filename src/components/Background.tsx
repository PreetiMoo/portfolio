import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../lib/cn'

export function Background({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <div className={cn('pointer-events-none fixed inset-0 -z-10 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-hero-radial opacity-90" />
      <div className="absolute inset-0 bg-noise opacity-[0.55] mix-blend-soft-light" />
      <motion.div
        aria-hidden="true"
        className="absolute -left-[20%] top-[-20%] h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-3xl"
        animate={reduced ? undefined : { x: [0, 40, -10, 0], y: [0, 25, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-[18%] top-[-10%] h-[520px] w-[520px] rounded-full bg-purple-500/18 blur-3xl"
        animate={reduced ? undefined : { x: [0, -35, 12, 0], y: [0, 30, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[18%] bottom-[-24%] h-[640px] w-[640px] rounded-full bg-cyan-400/10 blur-3xl"
        animate={reduced ? undefined : { x: [0, 18, -18, 0], y: [0, -18, 18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
    </div>
  )
}

