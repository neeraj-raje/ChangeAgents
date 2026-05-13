import { Metadata } from 'next'
import Image from 'next/image'
import InnerPageHero from '@/components/sections/InnerPageHero'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'About Change Agents — Strategic Advisory Practice, India',
  description:
    'Change Agents is a founder-led strategic advisory practice working at the level of enterprise market architecture. Meet the team behind the work.',
  openGraph: {
    title: 'About Change Agents — Strategic Advisory Practice, India',
    description:
      'Change Agents is a founder-led strategic advisory practice working at the level of enterprise market architecture. Meet the team behind the work.',
    url: 'https://changeagents.in/about/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Change Agents — Strategic Advisory Practice, India',
    description:
      'Change Agents is a founder-led strategic advisory practice working at the level of enterprise market architecture. Meet the team behind the work.',
  },
  alternates: { canonical: 'https://changeagents.in/about/' },
}

const team = [
  {
    image: '/assets/team/shubhendu-nath.webp',
    alt: 'Shubhendu Nath — Founder and Lead Advisor, Change Agents',
    title: 'Strategic Advisory',
    subtitle: 'Led directly by Shubhendu Nath',
    body: 'All engagements are shaped at the level of enterprise market architecture, positioning, and narrative alignment.',
  },
  {
    image: '/assets/team/neeraj-raje.webp',
    alt: 'Neeraj Raje — Digital and Narrative Strategy, Change Agents',
    title: 'Digital & Narrative Strategy and Activation',
    subtitle: 'Led by Neeraj Raje',
    body: 'Where required, strategic thinking is translated into visible platforms through content, digital presence, and narrative amplification.',
  },
  {
    image: '/assets/team/krishnananda.webp',
    alt: 'Krishnananda — Institutional and Execution Lead, Change Agents',
    title: 'Institutional & Execution Backbone',
    subtitle: 'Anchored by Krishnananda',
    body: 'Ensuring continuity, operational depth, and execution capability when activation is required.',
  },
]

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="STRATEGIC ADVISORY  FOR ENTERPRISE TECHNOLOGY"
        heading="About Change Agents"
        bgColor="#0A0F1A"
        darkAurora={{
          bands: 'repeating-linear-gradient(100deg, #0A0F1A 0%, #0D1628 15%, #0F1C35 30%, #122040 45%, #0D1628 60%, #0A0F1A 75%)',
          glow1: 'rgba(30, 58, 138, 0.18)',
          glow1Pos: { top: '-5%', left: '0%' },
          glow2: 'rgba(17, 24, 39, 0.6)',
          glow2Pos: { bottom: '-10%', right: '5%' },
        }}
        lead={`Some positioning problems look like communications problems. They're not. They're structural — rooted in how a firm or its leadership is placed within a competitive market, how its narrative aligns with its actual trajectory, and whether the architecture underneath the messaging can hold weight.

We work at that level. Before amplification. Before visibility. At the point where clarity either exists — or doesn't.

We work with enterprise technology leaders and firms who want to determine their own position in the market — not the way market forces have placed them.`}
        showCTA={false}
      />

      {/* Founder */}
      <section className="bg-[#F6F3EE] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="aspect-square w-full max-w-xs overflow-hidden rounded-lg border border-rule">
                <Image
                  src="/assets/team/shubhendu-nath.webp"
                  alt="Shubhendu Nath — Founder and Lead Advisor, Change Agents"
                  width={320}
                  height={320}
                  className="grayscale-photo w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-medium text-heading text-[#111827]">Shubhendu Nath</h2>
              <SectionLabel className="mt-2">Founder, Change Agents</SectionLabel>

              <div className="mt-6 max-w-prose space-y-4">
                <p className="font-normal text-body text-[#52606D]">
                  Two decades of working inside enterprise technology ecosystems — across founders, country
                  heads, scaling firms, and market transitions — produce a particular kind of clarity.
                </p>
                <p className="font-normal text-body text-[#52606D]">
                  You begin to see where positioning breaks. Where narrative drifts from strategic reality.
                  Where leaders are well-regarded but structurally misplaced in their own market.
                </p>
                <p className="font-normal text-body text-[#52606D]">
                  That&apos;s the work Shubhendu does. Directly, with a small number of leaders and firms
                  each year.
                </p>
                <p className="font-normal text-body text-[#52606D]">
                  His experience spans enterprise technology across India and Asia-Pacific — infrastructure,
                  cybersecurity, SaaS, distribution, and digital transformation — at moments of growth,
                  transition, and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-[#E8E2D8] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827] mb-8">How We Work</h2>
          <p className="font-normal text-body text-[#52606D] max-w-2xl mb-12">
            Change Agents operates as a founder-led strategic advisory practice, working with a limited
            number of enterprise technology leaders and firms each year. Each engagement is anchored in
            direct involvement at the strategic level, and supported by complementary expertise where
            required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.title} className="flex flex-col">
                <div className="aspect-square w-full max-w-[200px] overflow-hidden rounded-lg border border-rule mb-5">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width={200}
                    height={200}
                    className="grayscale-photo w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-body text-[#111827]">{member.title}</h3>
                <p className="font-normal text-small text-[#52606D] italic mt-1 mb-3">
                  {member.subtitle}
                </p>
                <p className="font-normal text-body text-[#52606D]">{member.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
