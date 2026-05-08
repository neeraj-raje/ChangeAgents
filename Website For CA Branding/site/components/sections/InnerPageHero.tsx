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
  bgColor?: string
  auroraGradient?: string
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
  auroraGradient = 'repeating-linear-gradient(100deg,#4a6fa5_10%,#6b8ec8_15%,#5a7fa8_20%,#7b9fc8_25%,#5a8fba_30%)',
}: InnerPageHeroProps) {
  return (
    <section className="relative px-6 lg:px-8 py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: bgColor }} >
      <div style={{
        '--aurora': auroraGradient,
        '--dark-gradient': 'repeating-linear-gradient(100deg,#1a2a3a_0%,#1a2a3a_7%,transparent_10%,transparent_12%,#1a2a3a_16%)',
        '--white-gradient': 'repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)',
      } as React.CSSProperties}>
      {/* Aurora effect — customizable colors per page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-30 blur-[24px] will-change-transform after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-multiply after:content-[''] after:pointer-events-none [mask-image:radial-gradient(ellipse_at_90%_10%,black_10%,transparent_70%)]"
        ></div>
      </div>
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
              className="font-light text-small text-white/60 uppercase tracking-label mb-6"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            variants={fadeUp}
            className="font-bold text-white"
            style={{ fontSize: 'calc(3.5rem + 7px)' }}
          >
            {heading}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 space-y-4 max-w-3xl mx-auto">
            {lead.split('\n\n').filter(Boolean).map((para, i) => (
              <p key={i} className="font-normal text-lead text-white/70">
                {para.trim()}
              </p>
            ))}
          </motion.div>

          {showCTA && (
            <motion.div variants={fadeUp} className="mt-10 flex justify-center">
              <Link href={ctaHref} className="inline-block font-medium text-cta px-6 py-3 border rounded transition-all duration-200 border-white/60 text-white bg-white/10 hover:bg-white/20">
                {ctaText} &rarr;
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
