import { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
import HorizontalRule from '@/components/ui/HorizontalRule'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Contact — Change Agents',
  description:
    'We work with a limited number of enterprise leaders and firms each year. All conversations are confidential.',
}

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    name: 'Lorem Ipsum',
    role: 'CEO, Enterprise Technology Firm',
  },
  {
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    name: 'Lorem Ipsum',
    role: 'Founder, Technology Company',
  },
]

const faqs = [
  {
    question: 'Lorem ipsum: How does an engagement typically begin?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum: What kind of firms do you work with?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Lorem ipsum: How long does a typical engagement last?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    question: 'Lorem ipsum: Is everything kept confidential?',
    answer:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit.',
  },
]

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

      {/* Testimonials */}
      <section className="bg-white px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <SectionLabel className="mb-10">TESTIMONIALS</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-aurora-blue-50 border border-aurora-blue-100 rounded-lg p-8"
              >
                <blockquote>
                  <p className="font-light italic text-body text-muted leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="font-medium text-small text-ink">{t.name}</p>
                    <p className="font-normal text-small text-muted">{t.role}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HorizontalRule className="max-w-6xl mx-auto" />

      {/* FAQs */}
      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <SectionLabel className="mb-10">FREQUENTLY ASKED QUESTIONS</SectionLabel>
          <div className="space-y-8 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-rule pb-8">
                <h3 className="font-medium text-body text-ink mb-3">{faq.question}</h3>
                <p className="font-normal text-body text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
