import { Metadata } from 'next'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import EngageSection from '@/components/sections/EngageSection'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'Executive Positioning & Market Architecture for Technology Leaders — Change Agents',
  description:
    'Strategic positioning and market architecture for enterprise technology founders, CEOs, and senior leaders navigating growth, transition, and leadership visibility.',
  openGraph: {
    title: 'Executive Positioning & Market Architecture for Technology Leaders — Change Agents',
    description:
      'Strategic positioning and market architecture for enterprise technology founders, CEOs, and senior leaders navigating growth, transition, and leadership visibility.',
    url: 'https://changeagents.in/executive-advisory/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Executive Positioning & Market Architecture for Technology Leaders — Change Agents',
    description:
      'Strategic positioning and market architecture for enterprise technology founders, CEOs, and senior leaders navigating growth, transition, and leadership visibility.',
  },
  alternates: { canonical: 'https://changeagents.in/executive-advisory/' },
}

export default function ExecutiveAdvisoryPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="STRATEGIC ADVISORY  FOR ENTERPRISE TECHNOLOGY"
        heading="Executive Market Architecture"
        lead={`Market architecture is the structural foundation that determines how a firm — or its leadership — is positioned, perceived, and placed within a competitive market.

We work with founders, CEOs, and senior leaders to clarify how they are positioned within their industry — and how that positioning translates into influence, opportunity, and long-term relevance.`}
        bgColor="#0B1520"
        darkAurora={{
          bands: 'repeating-linear-gradient(100deg, #0B1520 0%, #0F2340 15%, #162C4A 30%, #1A3A5C 45%, #0F2340 60%, #0B1520 75%)',
          glow1: 'rgba(37, 99, 235, 0.2)',
          glow1Pos: { top: '-10%', right: '5%' },
          glow2: 'rgba(10, 22, 40, 0.6)',
          glow2Pos: { bottom: '-15%', left: '0%' },
        }}
      />

      {/* When This Matters */}
      <section className="bg-[#F6F3EE] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8 text-center">When This Matters</h2>
          <InnerCardGrid
            items={[
              { title: 'Leadership Entry',     body: 'Stepping into a new leadership role' },
              { title: 'Career Transition',    body: 'Navigating career transition or displacement' },
              { title: 'Influence Expansion',  body: 'Expanding influence within the ecosystem' },
              { title: 'Executive Visibility', body: 'Preparing for board or investor visibility' },
              { title: 'Category Ownership',   body: 'Building long-term category association' },
            ]}
            cardBgColor="#E8DFD4"
            tickColor="#A8927F"
          />
        </div>
      </section>

      {/* What We Work On */}
      <section className="bg-[#E8E2D8] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8 text-center">What We Work On</h2>
          <InnerCardGrid
            items={[
              { title: 'Strategic positioning and differentiation', body: 'Defining a distinct market position that sets you apart from competitors.' },
              { title: 'Leadership narrative and identity',          body: 'Crafting a clear, credible story that reflects who you are and how you lead.' },
              { title: 'Industry relevance and perception',          body: 'Shaping how your expertise and value are understood within your industry.' },
              { title: 'Visibility architecture',                    body: 'Designing where and how you show up to build the right kind of visibility.' },
              { title: 'Long-term influence design',                 body: 'Building sustained authority that compounds over time.' },
            ]}
            cardBgColor="#D4CCBB"
            tickColor="#8B7D67"
          />
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
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
