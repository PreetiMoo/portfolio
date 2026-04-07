import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

export function Section({
  id,
  kicker,
  title,
  children,
  className,
}: {
  id: string
  kicker: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 sm:py-24', className)}>
      <div className="container-px">
        <div className="mb-10 sm:mb-12">
          <div className="section-kicker">{kicker}</div>
          <h2 className="section-title mt-3">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

