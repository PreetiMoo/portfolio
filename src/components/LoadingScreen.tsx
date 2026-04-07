import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[60] grid place-items-center bg-ink-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="text-center">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-accent-gradient shadow-glow" />
        <div className="mt-5 text-sm font-medium text-white">Loading portfolio</div>
        <div className="mt-2 h-1.5 w-56 overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            className="h-full w-1/2 bg-accent-gradient"
            initial={{ x: '-30%' }}
            animate={{ x: '30%' }}
            transition={{ duration: 1.0, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="mt-3 text-xs text-zinc-500">Crafting a premium experience…</div>
      </div>
    </motion.div>
  )
}

