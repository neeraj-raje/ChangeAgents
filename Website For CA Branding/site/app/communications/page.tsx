import { Metadata } from 'next'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import EngageSection from '@/components/sections/EngageSection'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

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
        bgColor="#0F1318"
        darkAurora={{
          bands: 'repeating-linear-gradient(100deg, #0F1318 0%, #141D28 15%, #1A2940 30%, #20365A 45%, #141D28 60%, #0F1318 75%)',
          glow1: 'rgba(30, 64, 175, 0.18)',
          glow1Pos: { top: '-5%', left: '15%' },
          glow2: 'rgba(51, 65, 85, 0.35)',
          glow2Pos: { bottom: '-10%', right: '0%' },
        }}
        lead={`Strategic clarity that stays internal changes nothing.

Market architecture becomes consequential only when it reaches the people, platforms, and conversations that matter. The work of activation — translating positioning into presence, narrative into perception — is not separate from strategy. It is where strategy proves itself.

We support this work for clients where the foundation is already in place. Not as a content engine. Not as a media service. As the continuation of strategic thinking into the market.`}
      />

      {/* What This Looks Like */}
      <section className="bg-[#F6F3EE] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8 text-center">What This Looks Like</h2>
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
            cardBgColor="#E8DFD4"
            tickColor="#A8927F"
          />
        </div>
      </section>

      {/* Platforms for Long-Term Authority */}
      <section className="bg-[#E8E2D8] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <EngageSection
            eyebrow="PLATFORMS FOR LONG-TERM AUTHORITY"
            heading="Positioning infrastructure that compounds over time."
            body="For leaders building sustained market presence, we work on the structures that compound over time — newsletters, research, podcast or video series, and where relevant, book development. These are not content calendars. They are positioning infrastructure."
          />
        </div>
      </section>

      {/* AI-Enabled Activation */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
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
