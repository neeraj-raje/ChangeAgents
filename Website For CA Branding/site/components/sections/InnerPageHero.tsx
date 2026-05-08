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
}: InnerPageHeroProps) {
  return (
    <section className="relative px-6 lg:px-8 py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* Radial lighting layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Accent glow - from top right */}
        <div
          className="absolute -top-1/2 -right-1/4 w-full h-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 900px 700px at 120% 10%, rgba(75, 100, 117, 0.25) 0%, rgba(75, 100, 117, 0.08) 35%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        ></div>

        {/* Mid-tone center highlight */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 700px 600px at 50% 50%, rgba(36, 56, 68, 0.15) 0%, rgba(36, 56, 68, 0.04) 45%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        ></div>

        {/* Top right accent glow */}
        <div
          className="absolute -top-1/4 right-0 w-full h-96 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 600px 500px at 85% -20%, rgba(75, 100, 117, 0.2) 0%, transparent 50%)',
            filter: 'blur(100px)',
          }}
        ></div>

        {/* Bottom shadow depth */}
        <div
          className="absolute -bottom-1/3 left-0 w-full h-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 500px 400px at 50% 120%, rgba(12, 19, 25, 0.12) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        ></div>
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
