import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { site } from '../content/site'

export function WhatsAppFloat() {
  const rawPhone = site.contact.phone.replace(/\D/g, '')
  const phone = rawPhone.startsWith('91') ? rawPhone : `91${rawPhone}`
  const text = encodeURIComponent(
    "Hi Preeti, I visited your portfolio and would like to discuss a project.",
  )
  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(37,211,102,0.45)] ring-1 ring-white/20 transition hover:brightness-110 sm:bottom-6 sm:right-6"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{ boxShadow: ['0 8px 24px rgba(37,211,102,0.28)', '0 12px 34px rgba(37,211,102,0.5)', '0 8px 24px rgba(37,211,102,0.28)'] }}
      transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  )
}

