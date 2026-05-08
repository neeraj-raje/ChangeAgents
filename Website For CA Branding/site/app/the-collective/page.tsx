import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InnerPageHero from '@/components/sections/InnerPageHero'
import InnerCardGrid from '@/components/sections/InnerCardGrid'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import HorizontalRule from '@/components/ui/HorizontalRule'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'The Collective — Change Agents',
  description:
    'A curated group of independent senior advisors who collaborate with Change Agents on select engagements.',
}

export default function TheCollectivePage() {
  return (
    <>
      <InnerPageHero
        eyebrow="STRATEGIC ADVISORY  FOR ENTERPRISE TECHNOLOGY"
        heading="The Change Agents Collective"
        lead="A curated group of independent senior advisors who collaborate with Change Agents on select engagements requiring a broader combination of perspectives."
        showCTA={false}
      />

      {/* Context */}
      <section className="bg-[#F6F3EE] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-title text-[#111827] mb-6">
              Change Agents operates as a founder-led strategic advisory practice.
            </h2>
            <p className="font-normal text-body text-[#52606D]">
              In situations where business challenges extend beyond positioning into leadership, behaviour,
              or organisational alignment, we work with a select group of independent advisors. These are
              individuals who bring deep experience and operate in their own right — and collaborate with
              us where required.
            </p>
          </div>
        </div>
      </section>

      {/* How This Works */}
      <section className="bg-[#E8E2D8] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8 text-center">How This Works</h2>
          <InnerCardGrid
            items={[
              { title: 'Independent identity',        body: 'Each advisor maintains an independent identity and practice' },
              { title: 'Selective engagement',        body: 'Engagement with Change Agents is selective and context-driven' },
              { title: 'Trust-based collaboration',   body: 'Collaboration is based on trust, relevance, and problem fit' },
              { title: 'Not a marketplace',           body: 'We do not operate as a network or marketplace' },
              { title: 'Intentionally small',         body: 'The Collective is intentionally small and curated' },
            ]}
            cardBgColor="#D4CCBB"
            tickColor="#8B7D67"
          />
        </div>
      </section>

      {/* When the Collective Is Engaged */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8 text-center">When the Collective Is Engaged</h2>
          <InnerCardGrid
            items={[
              { title: 'Leadership alignment required',       body: 'Strategic positioning requires leadership alignment' },
              { title: 'Organisational transitions',          body: 'Business transitions require behavioural or organisational shifts' },
              { title: 'Leadership and market perception',    body: 'Founder or leadership journeys intersect with market perception' },
              { title: 'Multiple lenses needed',             body: 'Complex situations require multiple perspectives beyond communication' },
            ]}
            cardBgColor="#D9E9F5"
            tickColor="#5A7FA8"
          />
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <SectionLabel className="mb-8 text-center block">ADVISORS</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Sharbari Chakraborty */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-5 border border-rule">
                <Image
                  src="/assets/images/SharbariChakraborty_ProfilePic.png"
                  alt="Sharbari Chakraborty"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover grayscale-photo"
                />
              </div>
              <h3 className="font-medium text-body text-[#111827]">Sharbari Chakraborty</h3>
              <p className="font-normal text-small text-[#52606D] mt-1">
                Leadership Coach | Organisational Transformation
              </p>
              <Link
                href="/the-collective/sharbari-chakraborty"
                className="inline-block font-medium text-cta text-[#35506B] mt-4 hover:opacity-60 transition-opacity"
              >
                View Profile &rarr;
              </Link>
            </div>

            {/* Placeholder 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-5 bg-aurora-blue-50 border border-aurora-blue-100 flex items-center justify-center">
                <span className="text-4xl text-muted/30 font-light">JD</span>
              </div>
              <h3 className="font-medium text-body text-[#111827]">John Doe</h3>
              <p className="font-normal text-small text-[#52606D] mt-1">Advisory Role</p>
              <span className="inline-block font-medium text-cta text-muted mt-4 cursor-not-allowed opacity-50">
                View Profile &rarr;
              </span>
            </div>

            {/* Placeholder 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-5 bg-aurora-blue-50 border border-aurora-blue-100 flex items-center justify-center">
                <span className="text-4xl text-muted/30 font-light">JD</span>
              </div>
              <h3 className="font-medium text-body text-[#111827]">Jane Doe</h3>
              <p className="font-normal text-small text-[#52606D] mt-1">Advisory Role</p>
              <span className="inline-block font-medium text-cta text-muted mt-4 cursor-not-allowed opacity-50">
                View Profile &rarr;
              </span>
            </div>

          </div>

          <p className="font-normal text-small text-[#52606D] text-center mt-10 max-w-xl mx-auto">
            Engagements are structured based on context, with Change Agents anchoring strategic direction.
          </p>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
