import { Metadata } from 'next'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import EngageSection from '@/components/sections/EngageSection'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import HorizontalRule from '@/components/ui/HorizontalRule'

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
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">

          {/* Where We Focus */}
          <div>
            <h2 className="font-medium text-heading text-ink mb-4 text-center">Where We Focus</h2>
            <div
              className="w-12 h-1 mx-auto mb-8 rounded"
              style={{ background: 'linear-gradient(to right, #8AAB58, #C4D8A4)' }}
            />
            <InnerCardGrid
              items={[
                { title: 'Category positioning and definition',    body: '' },
                { title: 'Revenue narrative alignment',            body: '' },
                { title: 'Competitive differentiation',            body: '' },
                { title: 'India and global market positioning',    body: '' },
                { title: 'Analyst and ecosystem perception',       body: '' },
              ]}
            />
          </div>

          <HorizontalRule />

          {/* Typical Situations */}
          <div>
            <h2 className="font-medium text-heading text-ink mb-4 text-center">Typical Situations</h2>
            <div
              className="w-12 h-1 mx-auto mb-8 rounded"
              style={{ background: 'linear-gradient(to right, #8AAB58, #C4D8A4)' }}
            />
            <InnerCardGrid
              items={[
                { title: 'Scaling beyond early growth stage',                      body: '' },
                { title: 'Entering new markets or segments',                       body: '' },
                { title: 'Repositioning services or offerings',                    body: '' },
                { title: 'Strengthening enterprise credibility',                   body: '' },
                { title: 'Aligning leadership narrative with business strategy',   body: '' },
              ]}
            />
          </div>

          <HorizontalRule />

          {/* Our Approach */}
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
