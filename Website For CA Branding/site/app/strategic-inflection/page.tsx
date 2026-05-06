import { Metadata } from 'next'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import HorizontalRule from '@/components/ui/HorizontalRule'

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
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">

          {/* Typical Engagements */}
          <div>
            <h2 className="font-medium text-heading text-ink mb-4 text-center">Typical Engagements</h2>
            <div
              className="w-12 h-1 mx-auto mb-8 rounded"
              style={{ background: 'linear-gradient(to right, #8AAB58, #C4D8A4)' }}
            />
            <InnerCardGrid
              items={[
                { title: 'Leadership transitions',                   body: '' },
                { title: 'Market entry or expansion',                body: '' },
                { title: 'M&A and pre/post acquisition positioning', body: '' },
                { title: 'Crisis or reputation recalibration',       body: '' },
                { title: 'Structural repositioning',                 body: '' },
              ]}
            />
          </div>

          <HorizontalRule />

          {/* Nature of Work */}
          <div>
            <h2 className="font-medium text-heading text-ink mb-4 text-center">Nature of Work</h2>
            <div
              className="w-12 h-1 mx-auto mb-8 rounded"
              style={{ background: 'linear-gradient(to right, #8AAB58, #C4D8A4)' }}
            />
            <InnerCardGrid
              items={[
                { title: 'Duration',    body: 'Short-duration, high-intensity' },
                { title: 'Involvement', body: 'Direct founder involvement' },
                { title: 'Character',   body: 'Confidential and context-driven' },
                { title: 'Focus',       body: 'Focused on clarity, not volume' },
              ]}
            />
          </div>

        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
