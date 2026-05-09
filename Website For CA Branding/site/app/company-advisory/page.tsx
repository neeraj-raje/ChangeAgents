import { Metadata } from 'next'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import EngageSection from '@/components/sections/EngageSection'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'Company Advisory — Change Agents',
  description:
    'Market architecture and category positioning for enterprise technology firms.',
}

export default function CompanyAdvisoryPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="STRATEGIC ADVISORY  FOR ENTERPRISE TECHNOLOGY"
        heading="Company Market Architecture"
        lead={`Market architecture is the structural foundation that determines how a firm — or its leadership — is positioned, perceived, and placed within a competitive market.

We work with enterprise technology firms to define how they are positioned in competitive markets — beyond product messaging and marketing narratives.`}
        bgColor="#0D0F1E"
        darkAurora={{
          bands: 'repeating-linear-gradient(100deg, #0D0F1E 0%, #141635 15%, #1E1B4B 30%, #2A2164 45%, #141635 60%, #0D0F1E 75%)',
          glow1: 'rgba(99, 90, 210, 0.15)',
          glow1Pos: { top: '-5%', left: '5%' },
          glow2: 'rgba(139, 92, 246, 0.09)',
          glow2Pos: { bottom: '-10%', right: '5%' },
        }}
      />

      {/* Where We Focus */}
      <section className="bg-[#F6F3EE] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8 text-center">Where We Focus</h2>
          <InnerCardGrid
            items={[
              { title: 'Category positioning and definition',    body: '' },
              { title: 'Revenue narrative alignment',            body: '' },
              { title: 'Competitive differentiation',            body: '' },
              { title: 'India and global market positioning',    body: '' },
              { title: 'Analyst and ecosystem perception',       body: '' },
            ]}
            cardBgColor="#E8DFD4"
            tickColor="#A8927F"
          />
        </div>
      </section>

      {/* Typical Situations */}
      <section className="bg-[#E8E2D8] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8 text-center">Typical Situations</h2>
          <InnerCardGrid
            items={[
              { title: 'Scaling beyond early growth stage',                      body: '' },
              { title: 'Entering new markets or segments',                       body: '' },
              { title: 'Repositioning services or offerings',                    body: '' },
              { title: 'Strengthening enterprise credibility',                   body: '' },
              { title: 'Aligning leadership narrative with business strategy',   body: '' },
            ]}
            cardBgColor="#D4CCBB"
            tickColor="#8B7D67"
          />
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <EngageSection
            eyebrow="OUR APPROACH"
            heading="We operate upstream of communications."
            body="Clarifying the strategic foundation before visibility and messaging are executed."
          />
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
