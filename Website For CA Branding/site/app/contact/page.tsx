import { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Start a Conversation — Change Agents Strategic Advisory',
  description:
    'We work with a limited number of enterprise technology leaders and firms each year. All conversations are confidential. Reach us at hello@changeagents.in.',
  openGraph: {
    title: 'Start a Conversation — Change Agents Strategic Advisory',
    description:
      'We work with a limited number of enterprise technology leaders and firms each year. All conversations are confidential. Reach us at hello@changeagents.in.',
    url: 'https://changeagents.in/contact/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Start a Conversation — Change Agents Strategic Advisory',
    description:
      'We work with a limited number of enterprise technology leaders and firms each year. All conversations are confidential.',
  },
  alternates: { canonical: 'https://changeagents.in/contact/' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero / Intro + Form */}
      <section className="bg-gradient-to-br from-slate-900 via-aurora-blue-900 to-slate-900 px-6 lg:px-8 py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle aurora glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-aurora-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurora-indigo-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — Intro */}
            <div>
              <p className="font-light text-small text-white/50 uppercase tracking-label mb-6">
                START A CONVERSATION
              </p>
              <h1 className="font-bold text-title text-white mb-8">
                We work with a limited number of enterprise leaders and firms each year.
              </h1>
              <div className="space-y-5 max-w-[52ch]">
                <p className="font-normal text-body text-white/70">
                  If you would like to explore a potential engagement, write to us:
                </p>
                <a
                  href="mailto:hello@changeagents.in"
                  className="block font-medium text-lead text-white hover:text-white/80 transition-colors duration-200 underline underline-offset-4"
                >
                  hello@changeagents.in
                </a>
                <p className="font-normal text-body text-white/70">
                  Engagements begin with a short exploratory conversation; no brief required, no proposal
                  expected. Just a direct discussion about where you are and whether there&apos;s a fit.
                </p>
                <p className="font-normal text-small text-white/50 italic mt-6">
                  All conversations are confidential.
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
