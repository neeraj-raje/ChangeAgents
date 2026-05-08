'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import CTAButton from '@/components/ui/CTAButton'

interface InnerPageHeroProps {
  eyebrow?: string
  heading: string
  lead: string
  showCTA?: boolean
  ctaHref?: string
  ctaText?: string
  bgColor?: string
  auroraHighlight?: string
  auroraMid?: string
  auroraGradient?: string
  textColor?: 'light' | 'dark'
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
  bgColor = '#2C3E50',
  auroraHighlight = 'rgba(75, 100, 117, 0.3)',
  auroraMid = 'rgba(36, 56, 68, 0.15)',
  auroraGradient,
  textColor = 'light',
}: InnerPageHeroProps) {
  const boxShadowStyle = `inset 0 0 200px 100px ${auroraHighlight}, inset 200px 0 300px 150px ${auroraHighlight.replace('0.3', '0.2')}, inset 0 200px 300px 150px ${auroraMid}`;

  const isLightBg = textColor === 'dark';

  return (
    <section
      className="relative px-6 lg:px-8 py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundColor: bgColor,
        ...(auroraGradient ? {} : { boxShadow: boxShadowStyle }),
        ...(auroraGradient ? {
          '--aurora': auroraGradient,
        } as React.CSSProperties : {})
      }}
    >
      {auroraGradient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-80 blur-2xl"
            style={{
              background: auroraGradient,
            }}
          />
          <div
            className="absolute inset-0 opacity-60 blur-3xl"
            style={{
              background: auroraGradient,
            }}
          />
        </div>
      )}

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
              className={cn(
                "font-light text-small uppercase tracking-label mb-6",
                isLightBg ? "text-[#52606D]" : "text-white/60"
              )}
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            variants={fadeUp}
            className={cn(
              "font-bold",
              isLightBg ? "text-[#111827]" : "text-white"
            )}
            style={{ fontSize: 'calc(3.5rem + 7px)' }}
          >
            {heading}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 space-y-4 max-w-3xl mx-auto">
            {lead.split('\n\n').filter(Boolean).map((para, i) => (
              <p key={i} className={cn(
                "font-normal text-lead",
                isLightBg ? "text-[#52606D]" : "text-white/70"
              )}>
                {para.trim()}
              </p>
            ))}
          </motion.div>

          {showCTA && (
            <motion.div variants={fadeUp} className="mt-10 flex justify-center">
              <Link href={ctaHref} className={cn(
                "inline-block font-medium text-cta px-6 py-3 border rounded transition-all duration-200",
                isLightBg
                  ? "border-[#52606D] text-[#111827] bg-white/20 hover:bg-white/30"
                  : "border-white/60 text-white bg-white/10 hover:bg-white/20"
              )}>
                {ctaText} &rarr;
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
