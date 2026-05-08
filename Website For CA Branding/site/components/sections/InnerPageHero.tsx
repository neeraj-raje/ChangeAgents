'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'

interface InnerPageHeroProps {
  eyebrow?: string
  heading: string
  lead: string
  showCTA?: boolean
  ctaHref?: string
  ctaText?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function InnerPageHero({
  eyebrow = 'STRATEGIC ADVISORY  FOR ENTERPRISE TECHNOLOGY',
  heading,
  lead,
  showCTA = true,
  ctaHref = '/contact',
  ctaText = 'Request a Conversation',
}: InnerPageHeroProps) {
  return (
    <section className="relative bg-ground px-6 lg:px-8 py-24 lg:py-32 overflow-hidden">
      {/* Subtle light aurora shimmer — top-right quadrant only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -inset-[10px] opacity-[0.07] blur-[24px] will-change-transform animate-aurora"
          style={{
            backgroundImage:
              'repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)',
            backgroundSize: '300% 200%',
            maskImage: 'radial-gradient(ellipse at 90% 10%, black 10%, transparent 65%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 90% 10%, black 10%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="mx-auto text-center max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {eyebrow && (
            <motion.p
              variants={fadeUp}
              className="font-light text-small text-ink/50 uppercase tracking-label mb-6"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            variants={fadeUp}
            className="font-bold text-title text-ink"
          >
            {heading}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 space-y-4 max-w-3xl mx-auto">
            {lead.split('\n\n').filter(Boolean).map((para, i) => (
              <p key={i} className="font-normal text-lead text-muted">
                {para.trim()}
              </p>
            ))}
          </motion.div>

          {showCTA && (
            <motion.div variants={fadeUp} className="mt-10 flex justify-center">
              <Link href={ctaHref} className="inline-block font-medium text-cta px-6 py-3 border rounded transition-all duration-200 border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white">
                {ctaText} &rarr;
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16">
        <hr className="border-t border-rule" />
      </div>
    </section>
  )
}
