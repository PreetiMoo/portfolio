import { useEffect, useMemo, useState } from 'react'

type Item = { id: string }

export function useActiveSection<T extends Item>(items: readonly T[]) {
  const ids = useMemo(() => items.map((i) => i.id), [items])
  const [active, setActive] = useState<string>(ids[0] ?? 'home')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0.1, 0.2, 0.35, 0.5, 0.65] },
    )

    for (const el of elements) obs.observe(el)
    return () => obs.disconnect()
  }, [ids])

  return { active }
}

