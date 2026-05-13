import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import AuroraHero from '@/components/sections/AuroraHero'
import ClientLogoGrid from '@/components/sections/ClientLogoGrid'

export const metadata: Metadata = {
  title: 'Strategic Advisory for Enterprise Technology — Change Agents',
  description:
    'Change Agents advises enterprise technology firms and senior leaders on strategic positioning, competitive architecture, and narrative alignment. India & APAC.',
  openGraph: {
    title: 'Strategic Advisory for Enterprise Technology — Change Agents',
    description:
      'Change Agents advises enterprise technology firms and senior leaders on strategic positioning, competitive architecture, and narrative alignment. India & APAC.',
    url: 'https://changeagents.in/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Strategic Advisory for Enterprise Technology — Change Agents',
    description:
      'Change Agents advises enterprise technology firms and senior leaders on strategic positioning, competitive architecture, and narrative alignment. India & APAC.',
  },
  alternates: { canonical: 'https://changeagents.in/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Change Agents',
      url: 'https://changeagents.in',
      logo: 'https://changeagents.in/assets/logo/ChangeAgents_Logo_new.png',
      sameAs: ['https://www.linkedin.com/company/change-agents/'],
    },
    {
      '@type': 'ProfessionalService',
      name: 'Change Agents',
      description:
        'Strategic advisory practice for enterprise technology firms and senior leaders. Market architecture, positioning, and narrative alignment.',
      url: 'https://changeagents.in',
      areaServed: ['India', 'Asia-Pacific'],
    },
    {
      '@type': 'Person',
      name: 'Shubhendu Nath',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'Change Agents' },
      url: 'https://changeagents.in/about/',
    },
  ],
}

const focusAreas = [
  {
    label: 'Executive Market Architecture',
    href: '/executive-advisory',
    heading: 'Strategic positioning for founders, CEOs, and senior leaders navigating growth, transition, and leadership visibility.',
    body: '',
  },
  {
    label: 'Company Market Architecture',
    href: '/company-advisory',
    heading: 'Category positioning, revenue narrative design, and competitive differentiation for enterprise technology firms.',
    body: '',
  },
  {
    label: 'Strategic Inflection Advisory',
    href: '/strategic-inflection',
    heading: 'High-trust advisory during leadership transitions, market entry, M&A, and structural repositioning.',
    body: '',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Aurora Hero */}
      <AuroraHero />

      {/* Strategic Statement */}
      <section className="bg-[#F6F3EE] px-6 lg:px-8 pt-24 lg:pt-28 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <h2 className="font-bold text-title text-[#111827] ">
                Strategy precedes visibility.
              </h2>
              <p className="font-normal text-lead text-[#1F2933] mt-8">
                Communications amplify positioning.
                <br />
                Positioning shapes perception.
              </p>
            </div>
            {/* Right Column */}
            <div>
              <p className="font-normal text-body text-[#52606D] max-w-[65ch]" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                Market architecture is how an enterprise technology firm — or its leadership — is structurally placed within a competitive market.
              </p>
              <p className="font-normal text-body text-[#52606D] max-w-[65ch] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                Not how it&apos;s described. How it&apos;s positioned.
              </p>
              <p className="font-normal text-body text-[#52606D] max-w-[65ch] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                It determines which conversations you&apos;re invited into, which categories you&apos;re associated with, how you&apos;re perceived at moments of growth or transition — and whether your narrative reflects your actual strategic trajectory.
              </p>
              <p className="font-normal text-body text-[#52606D] max-w-[65ch] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                Most firms manage their visibility. Few examine the architecture beneath it.
              </p>
              <p className="font-normal text-body text-[#52606D] max-w-[65ch] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                That&apos;s where we work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-b border-rule"></div>

      {/* Focus Areas */}
      <section className="bg-[#E8E2D8] px-6 lg:px-8 pt-12 lg:pt-20 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-bold text-title text-[#111827]">
              Focus Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-aurora-blue-100">
            {focusAreas.map((area) => (
              <div
                key={area.label}
                className="pt-8 lg:pt-0 lg:px-10 first:lg:pl-0 last:lg:pr-0"
              >
                <p className="font-medium text-[1.375rem] text-[#111827] ">
                  {area.label}
                </p>
                <p className="font-normal text-body text-[#52606D] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                  {area.heading}
                </p>
                {area.body && (
                  <p className="font-normal text-body text-[#52606D] max-w-[65ch] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                    {area.body}
                  </p>
                )}
                <Link
                  href={area.href}
                  className="inline-block font-normal text-cta text-[#35506B] mt-6 hover:opacity-60 transition-colors duration-200"
                >
                  Explore &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-b border-rule"></div>

      {/* Founder Statement */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 pt-12 lg:pt-20 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-3">
                <div className="rounded-lg overflow-hidden border-2 border-gray-300 shadow-sm">
                  <Image
                    src="/assets/team/shubhendu-nath.webp"
                    alt="Founder, Change Agents Strategic Advisory"
                    width={240}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-medium text-heading text-[#111827]">
                  Founder-Led Advisory
                </h2>
                <p className="font-normal text-body text-[#52606D] max-w-[65ch] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                  All strategic engagements are led directly by <span className="text-[#111827] font-medium">Shubhendu Nath</span>, drawing on two decades of enterprise technology ecosystem experience across India and Asia-Pacific.
                </p>
                <p className="font-normal text-body text-[#52606D] max-w-[65ch] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                  Change Agents is supported by institutional depth and execution capability where activation is required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-b border-rule"></div>

      {/* PR & Integrated Communications */}
      <section className="bg-[#F6F3EE] px-6 lg:px-8 pt-12 lg:pt-20 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="max-w-[65ch] mx-auto">
              <h2 className="font-medium text-heading text-[#111827]">
                PR & Integrated Communications
              </h2>
              <p className="font-normal text-body text-[#52606D] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                After defining the market architecture, we activate the narrative through media strategy and by engaging influencers and analysts.
              </p>
              <p className="font-normal text-body text-[#52606D] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                PR & Integrated communications aligns media, digital visibility, and strategic messaging into a cohesive narrative to build long term credibility and influence.
              </p>
              <p className="font-normal text-body text-[#52606D] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                The objective is not promotional campaigns, but sustained communication to create a consistent market perception.
              </p>
              <Link
                href="/communications"
                className="inline-block font-normal text-cta text-[#35506B] mt-6 hover:opacity-60 transition-colors duration-200"
              >
                Explore &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-b border-rule"></div>

      {/* Two Decades in Enterprise Technology */}
      <section className="bg-[#FAFBFC] px-6 lg:px-8 pt-12 lg:pt-20 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-medium text-heading text-[#111827]">
            Two Decades in Enterprise Technology
          </h2>
          <p className="font-normal text-body text-[#52606D] max-w-[65ch] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
            Our work spans infrastructure, cybersecurity, SaaS, distribution, and digital transformation ecosystems — across founders, country heads, and global technology firms.
          </p>
          <ClientLogoGrid />
        </div>
      </section>

      {/* Divider */}
      <div className="border-b border-rule"></div>

      {/* Dark CTA */}
      <DarkCTAFooter />
    </>
  )
}
