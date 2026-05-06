import { Metadata } from 'next'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import EngageSection from '@/components/sections/EngageSection'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import HorizontalRule from '@/components/ui/HorizontalRule'

export const metadata: Metadata = {
  title: 'Executive Advisory — Change Agents',
  description:
    'Strategic positioning and market architecture for founders, CEOs, and senior leaders.',
}

export default function ExecutiveAdvisoryPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="STRATEGIC ADVISORY  FOR ENTERPRISE TECHNOLOGY"
        heading="Executive Market Architecture"
        lead={`Market architecture is the structural foundation that determines how a firm — or its leadership — is positioned, perceived, and placed within a competitive market.

We work with founders, CEOs, and senior leaders to clarify how they are positioned within their industry — and how that positioning translates into influence, opportunity, and long-term relevance.`}
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">

          {/* When This Matters */}
          <div>
            <h2 className="font-medium text-heading text-ink mb-4 text-center">When This Matters</h2>
            <div
              className="w-12 h-1 mx-auto mb-8 rounded"
              style={{ background: 'linear-gradient(to right, #8AAB58, #C4D8A4)' }}
            />
            <InnerCardGrid
              items={[
                { title: 'Leadership Entry',     body: 'Stepping into a new leadership role' },
                { title: 'Career Transition',    body: 'Navigating career transition or displacement' },
                { title: 'Influence Expansion',  body: 'Expanding influence within the ecosystem' },
                { title: 'Executive Visibility', body: 'Preparing for board or investor visibility' },
                { title: 'Category Ownership',   body: 'Building long-term category association' },
              ]}
            />
          </div>

          <HorizontalRule />

          {/* What We Work On */}
          <div>
            <h2 className="font-medium text-heading text-ink mb-4 text-center">What We Work On</h2>
            <div
              className="w-12 h-1 mx-auto mb-8 rounded"
              style={{ background: 'linear-gradient(to right, #8AAB58, #C4D8A4)' }}
            />
            <InnerCardGrid
              items={[
                { title: 'Strategic positioning and differentiation', body: 'Defining a distinct market position that sets you apart from competitors.' },
                { title: 'Leadership narrative and identity',          body: 'Crafting a clear, credible story that reflects who you are and how you lead.' },
                { title: 'Industry relevance and perception',          body: 'Shaping how your expertise and value are understood within your industry.' },
                { title: 'Visibility architecture',                    body: 'Designing where and how you show up to build the right kind of visibility.' },
                { title: 'Long-term influence design',                 body: 'Building sustained authority that compounds over time.' },
              ]}
            />
          </div>

          <HorizontalRule />

          {/* How We Engage */}
          <EngageSection
            eyebrow="HOW WE ENGAGE"
            heading="All work is direct, confidential, and founder-led."
            body="We do not operate as a content engine or visibility service. We work at the level of positioning before amplification begins."
          />

        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
