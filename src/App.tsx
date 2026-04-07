import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Background } from './components/Background'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { navItems } from './content/site'
import { useActiveSection } from './hooks/useActiveSection'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Showcase } from './sections/Showcase'
import { Skills } from './sections/Skills'

export function App() {
  const [loading, setLoading] = useState(true)
  const { active } = useActiveSection(navItems)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 850)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar activeId={active} />
      <WhatsAppFloat />

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
      >
        Skip to content
      </a>

      <AnimatePresence mode="wait">{loading ? <LoadingScreen key="loading" /> : null}</AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading ? (
          <motion.div
            key="page"
            id="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Showcase />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

