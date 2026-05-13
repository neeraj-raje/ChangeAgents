import { Metadata } from 'next'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'Advisory for M&A, Leadership Transitions & Market Entry — Change Agents',
  description:
    'High-trust advisory during M&A, leadership transitions, market entry, and structural repositioning for enterprise technology firms and senior leaders.',
  openGraph: {
    title: 'Advisory for M&A, Leadership Transitions & Market Entry — Change Agents',
    description:
      'High-trust advisory during M&A, leadership transitions, market entry, and structural repositioning for enterprise technology firms and senior leaders.',
    url: 'https://changeagents.in/strategic-inflection/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Advisory for M&A, Leadership Transitions & Market Entry — Change Agents',
    description:
      'High-trust advisory during M&A, leadership transitions, market entry, and structural repositioning for enterprise technology firms and senior leaders.',
  },
  alternates: { canonical: 'https://changeagents.in/strategic-inflection/' },
}

export default function StrategicInflectionPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="STRATEGIC ADVISORY  FOR ENTERPRISE TECHNOLOGY"
        heading="Strategic Inflection Advisory"
        lead={`Market architecture is the structural foundation that determines how a firm — or its leadership — is positioned, perceived, and placed within a competitive market.

At critical moments, positioning decisions carry disproportionate impact.

We work with leaders and firms during high-stakes transitions where clarity, timing, and narrative alignment are essential.`}
        bgColor="#091918"
        darkAurora={{
          bands: 'repeating-linear-gradient(100deg, #091918 0%, #0F2A28 15%, #0D3330 30%, #134E4A 45%, #0D2E2B 60%, #091918 75%)',
          glow1: 'rgba(13, 148, 136, 0.18)',
          glow1Pos: { top: '-10%', right: '10%' },
          glow2: 'rgba(6, 78, 59, 0.3)',
          glow2Pos: { top: '20%', left: '-5%' },
        }}
      />

      {/* Typical Engagements */}
      <section className="bg-[#F6F3EE] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8 text-center">Typical Engagements</h2>
          <InnerCardGrid
            items={[
              { title: 'Leadership transitions',                   body: '' },
              { title: 'Market entry or expansion',                body: '' },
              { title: 'M&A and pre/post acquisition positioning', body: '' },
              { title: 'Crisis or reputation recalibration',       body: '' },
              { title: 'Structural repositioning',                 body: '' },
            ]}
            cardBgColor="#E8DFD4"
            tickColor="#A8927F"
          />
        </div>
      </section>

      {/* Nature of Work */}
      <section className="bg-[#E8E2D8] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8 text-center">Nature of Work</h2>
          <InnerCardGrid
            items={[
              { title: 'Duration',    body: 'Short-duration, high-intensity' },
              { title: 'Involvement', body: 'Direct founder involvement' },
              { title: 'Character',   body: 'Confidential and context-driven' },
              { title: 'Focus',       body: 'Focused on clarity, not volume' },
            ]}
            cardBgColor="#D4CCBB"
            tickColor="#8B7D67"
          />
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
