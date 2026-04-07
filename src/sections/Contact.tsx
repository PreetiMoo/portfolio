import { motion } from 'framer-motion'
import { Globe, Mail, Phone } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { site } from '../content/site'

type FormState = { name: string; email: string; message: string }

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    message: false,
  })

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) e.email = 'Please enter your email.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.message.trim()) e.message = 'Please enter a message.'
    return e
  }, [form])

  const canSubmit = Object.keys(errors).length === 0

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!canSubmit) return

    const subject = `Portfolio inquiry — ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(href, '_self')
  }

  return (
    <Section id="contact" kicker="Contact" title="Let’s build something impactful together">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <div className="card p-6 sm:p-7">
            <div className="text-lg font-semibold text-white">Send a message</div>
            <p className="mt-2 text-sm text-zinc-400">
              Prefer email? This form will open your mail app with a pre-filled message.
            </p>

            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                placeholder="Your name"
                error={touched.name ? errors.name : undefined}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder="you@domain.com"
                error={touched.email ? errors.email : undefined}
              />
              <Field
                label="Message"
                value={form.message}
                onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                placeholder="Tell me what you’re building, timelines, and what success looks like."
                error={touched.message ? errors.message : undefined}
                multiline
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  Email Preeti
                </motion.button>

                <div className="text-xs text-zinc-500">
                  By sending, you agree to share your contact details for this conversation.
                </div>
              </div>
            </form>
          </div>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={0.03}>
            <div className="card p-6">
              <div className="text-lg font-semibold text-white">Direct contact</div>
              <div className="mt-4 space-y-2 text-sm">
                <a className="chip w-full justify-between hover:bg-white/[0.06]" href={`mailto:${site.contact.email}`}>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {site.contact.email}
                  </span>
                  <span className="text-white/40">Email</span>
                </a>
                <a className="chip w-full justify-between hover:bg-white/[0.06]" href={`tel:${site.contact.phone}`}>
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {site.contact.phone}
                  </span>
                  <span className="text-white/40">Call</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="card p-6">
              <div className="text-lg font-semibold text-white">Social</div>
              <p className="mt-2 text-sm text-zinc-400">
                Connect where you’re most active. LeetCode is a placeholder for now.
              </p>
              <div className="mt-5 grid gap-2">
                <a
                  className="btn-secondary w-full justify-between"
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    LinkedIn
                  </span>
                  <span className="text-white/40">Open</span>
                </a>
                <a
                  className="btn-secondary w-full justify-between"
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    GitHub
                  </span>
                  <span className="text-white/40">Open</span>
                </a>
                <a className="btn-secondary w-full justify-between" href={site.links.leetcode}>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-white/[0.08] text-[10px] font-semibold">
                      LC
                    </span>
                    LeetCode
                  </span>
                  <span className="text-white/40">Open</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type = 'text',
  error,
  multiline,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  onBlur: () => void
  placeholder: string
  type?: 'text' | 'email'
  error?: string
  multiline?: boolean
}) {
  const base =
    'w-full rounded-xl bg-black/20 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 ring-1 ring-white/[0.08] outline-none transition focus:ring-white/[0.16]'
  return (
    <div>
      <div className="flex items-end justify-between">
        <label className="text-sm font-medium text-white">{label}</label>
        {error ? <span className="text-xs text-rose-300">{error}</span> : null}
      </div>
      <div className="mt-2">
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
            rows={5}
            className={base}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
            className={base}
          />
        )}
      </div>
    </div>
  )
}

