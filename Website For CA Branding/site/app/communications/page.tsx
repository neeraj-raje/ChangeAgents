import { Metadata } from 'next'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import EngageSection from '@/components/sections/EngageSection'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import HorizontalRule from '@/components/ui/HorizontalRule'

export const metadata: Metadata = {
  title: 'Communications — Change Agents',
  description:
    'Integrated communications, visibility, and narrative activation grounded in prior strategic clarity.',
}

export default function CommunicationsPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="STRATEGIC ADVISORY  FOR ENTERPRISE TECHNOLOGY"
        heading="Communications, Visibility & Narrative Activation"
        lead={`Strategic clarity that stays internal changes nothing.

Market architecture becomes consequential only when it reaches the people, platforms, and conversations that matter. The work of activation — translating positioning into presence, narrative into perception — is not separate from strategy. It is where strategy proves itself.

We support this work for clients where the foundation is already in place. Not as a content engine. Not as a media service. As the continuation of strategic thinking into the market.`}
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">

          {/* What This Looks Like */}
          <div>
            <h2 className="font-medium text-heading text-ink mb-4 text-center">What This Looks Like</h2>
            <div
              className="w-12 h-1 mx-auto mb-8 rounded"
              style={{ background: 'linear-gradient(to right, #8AAB58, #C4D8A4)' }}
            />
            <InnerCardGrid
              items={[
                {
                  title: 'Media strategy and engagement',
                  body: 'Identifying where your narrative belongs and how it lands, not just where it appears.',
                },
                {
                  title: 'Analyst relations',
                  body: 'Shaping how your firm and its leadership are understood by the institutional voices that influence enterprise perception.',
                },
                {
                  title: 'Thought leadership',
                  body: 'Structured perspectives that reflect genuine strategic clarity, not manufactured visibility.',
                },
                {
                  title: 'Industry presence',
                  body: 'Conferences, panels, and platforms where positioning is demonstrated, not just stated.',
                },
                {
                  title: 'Digital presence',
                  body: 'LinkedIn, long-form platforms, and search visibility as expressions of market architecture, not marketing activity.',
                },
              ]}
            />
          </div>

          <HorizontalRule />

          {/* Platforms for Long-Term Authority */}
          <EngageSection
            eyebrow="PLATFORMS FOR LONG-TERM AUTHORITY"
            heading="Positioning infrastructure that compounds over time."
            body="For leaders building sustained market presence, we work on the structures that compound over time — newsletters, research, podcast or video series, and where relevant, book development. These are not content calendars. They are positioning infrastructure."
          />

          <HorizontalRule />

          {/* AI-Enabled Activation */}
          <EngageSection
            eyebrow="AI-ENABLED ACTIVATION"
            heading="Deliberate use of AI in activation."
            body="We use AI deliberately — to surface insights from conversations, identify relevant opportunities, and extend the reach of strategic thinking across formats. It accelerates activation without substituting for the clarity that has to exist before any of it begins. Importantly, all activation work is grounded in prior strategic clarity. We do not begin with visibility."
          />

        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
