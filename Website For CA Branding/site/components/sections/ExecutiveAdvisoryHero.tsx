'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

interface ExecutiveAdvisoryHeroProps {
  label?: string
  heading: string
  lead: string
  illustration?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ExecutiveAdvisoryHero({
  label,
  heading,
  lead,
  illustration = '/assets/images/executive-advisory-illustration.png',
}: ExecutiveAdvisoryHeroProps) {
  return (
    <section
      className="relative px-6 lg:px-8 py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#7A8B5F' }}
    >
      {/* Subtle aurora shimmer — greens and off-whites only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -inset-[10px] opacity-10 blur-[20px] will-change-transform
            animate-aurora"
          style={{
            backgroundImage:
              'repeating-linear-gradient(100deg,#d4e3b5_0%,#a8c070_15%,#f5f0e8_30%,#8aab58_45%,#c8dba0_60%,#f5f0e8_75%,#7A8B5F_90%)',
            backgroundSize: '300% 100%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {label && (
              <motion.div variants={fadeUp}>
                <SectionLabel className="mb-6 text-white/70">{label}</SectionLabel>
              </motion.div>
            )}

            <motion.h1
              variants={fadeUp}
              className="font-bold text-title text-white"
            >
              {heading}
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-8 space-y-4 max-w-[55ch]">
              {lead.split('\n\n').filter(Boolean).map((para, i) => (
                <p key={i} className="font-normal text-body text-white/80">
                  {para.trim()}
                </p>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Illustration with aurora card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Image — no border/card so bg merges seamlessly */}
            <div className="relative w-full max-w-[480px]">
              <Image
                src={illustration}
                alt="Executive Market Architecture"
                width={480}
                height={480}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
