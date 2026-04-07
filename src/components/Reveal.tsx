import { motion, type MotionProps, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  const props: MotionProps = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 14, filter: 'blur(6px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
      }

  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  )
}

