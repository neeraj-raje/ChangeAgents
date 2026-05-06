'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import AuroraHero from '@/components/sections/AuroraHero'
import HorizontalRule from '@/components/ui/HorizontalRule'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function FadeInSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  )
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
      {/* Aurora Hero */}
      <AuroraHero />

      {/* Strategic Statement */}
      <section className="bg-ground px-6 lg:px-8 py-24 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <h2 className="font-bold text-title text-ink">
                Strategy precedes visibility.
              </h2>
              <p className="font-normal text-lead text-ink mt-8">
                Communications amplify positioning.
                <br />
                Positioning shapes perception.
              </p>
            </div>
            {/* Right Column */}
            <div>
              <p className="font-normal text-body text-muted max-w-[65ch]">
                Market architecture is how an enterprise technology firm — or its leadership — is structurally placed within a competitive market.
              </p>
              <p className="font-normal text-body text-muted max-w-[65ch] mt-4">
                Not how it&apos;s described. How it&apos;s positioned.
              </p>
              <p className="font-normal text-body text-muted max-w-[65ch] mt-4">
                It determines which conversations you&apos;re invited into, which categories you&apos;re associated with, how you&apos;re perceived at moments of growth or transition — and whether your narrative reflects your actual strategic trajectory.
              </p>
              <p className="font-normal text-body text-muted max-w-[65ch] mt-4">
                Most firms manage their visibility. Few examine the architecture beneath it.
              </p>
              <p className="font-normal text-body text-muted max-w-[65ch] mt-4">
                That&apos;s where we work.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <HorizontalRule className="max-w-6xl mx-auto" />

      {/* Focus Areas */}
      <section className="bg-white px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="mb-12">
            <h2 className="font-bold text-title text-ink">
              Focus Areas
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-aurora-blue-100">
            {focusAreas.map((area) => (
              <FadeInSection
                key={area.label}
                className="pt-8 lg:pt-0 lg:px-10 first:lg:pl-0 last:lg:pr-0"
              >
                <p className="font-medium text-[1.125rem] text-ink">
                  {area.label}
                </p>
                <p className="font-normal text-body text-muted mt-4">
                  {area.heading}
                </p>
                {area.body && (
                  <p className="font-normal text-body text-muted max-w-[65ch] mt-4">
                    {area.body}
                  </p>
                )}
                <Link
                  href={area.href}
                  className="inline-block font-medium text-cta text-aurora-blue-600 mt-6 hover:text-aurora-blue-500 transition-colors duration-200"
                >
                  Explore &rarr;
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <HorizontalRule className="max-w-6xl mx-auto" />

      {/* Founder Statement */}
      <section className="bg-gradient-to-b from-aurora-blue-50 to-white px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-3">
                <div className="rounded-lg overflow-hidden border-2 border-aurora-blue-200 shadow-sm">
                  <Image
                    src="/assets/team/shubhendu-nath.jpg"
                    alt="Shubhendu Nath"
                    width={240}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-medium text-heading text-ink">
                  Founder-Led Advisory
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-aurora-blue-400 to-aurora-violet-300 mt-6 mb-6"></div>
                <p className="font-normal text-body text-muted max-w-[65ch] mt-4">
                  All strategic engagements are led directly by <span className="text-ink font-medium">Shubhendu Nath</span>, drawing on two decades of enterprise technology ecosystem experience across India and Asia-Pacific.
                </p>
                <p className="font-normal text-body text-muted max-w-[65ch] mt-4">
                  Change Agents is supported by institutional depth and execution capability where activation is required.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <HorizontalRule className="max-w-6xl mx-auto" />

      {/* Integrated Communications */}
      <section className="bg-white px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="bg-gradient-to-br from-aurora-blue-100 via-aurora-indigo-300 to-aurora-violet-300 border border-aurora-blue-300 rounded h-72"></div>
              <div>
                <h2 className="font-medium text-heading text-ink">
                  Integrated Communications, When Required
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-aurora-blue-400 to-aurora-violet-300 mt-4 mb-6"></div>
                <p className="font-normal text-body text-muted max-w-[65ch] mt-2">
                  Once market architecture is defined, we support its execution through media strategy, analyst engagement, and narrative activation.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <HorizontalRule className="max-w-6xl mx-auto" />

      {/* Two Decades in Enterprise Technology */}
      <section className="bg-white px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-medium text-[1.5rem] text-ink">
                  Two Decades in Enterprise Technology
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-aurora-blue-400 to-aurora-violet-300 mt-6 mb-6"></div>
                <p className="font-normal text-body text-muted max-w-[65ch] mt-4">
                  Our work spans infrastructure, cybersecurity, SaaS, distribution, and digital transformation ecosystems — across founders, country heads, and global technology firms.
                </p>
              </div>
              <div className="bg-gradient-to-br from-aurora-blue-100 via-aurora-indigo-300 to-aurora-violet-300 border border-aurora-blue-300 rounded h-72"></div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <HorizontalRule className="max-w-6xl mx-auto" />

      {/* Dark CTA */}
      <DarkCTAFooter />
    </>
  )
}
