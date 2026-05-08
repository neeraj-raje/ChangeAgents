import { Metadata } from 'next'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'Strategic Inflection — Change Agents',
  description:
    'High-stakes advisory during leadership transitions, market entry, M&A, and structural repositioning.',
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
        bgColor="#EEE8DF"
        auroraHighlight="rgba(232, 224, 212, 0.3)"
        auroraMid="rgba(243, 239, 232, 0.15)"
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
