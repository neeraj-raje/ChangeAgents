'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CTAButton from '@/components/ui/CTAButton'

export default function DarkCTAFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-gradient-to-br from-slate-900 via-aurora-blue-900 to-slate-900 px-6 lg:px-8 py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle aurora glow background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-aurora-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurora-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <div>
            <h2 className="font-medium text-heading text-white">
              Limited Engagements. Serious Conversations.
            </h2>
            <p className="font-normal text-lead text-white/70 mt-8">
              We work with a small number of enterprise leaders each year. Engagement begins with a
              confidential exploratory discussion.
            </p>
          </div>

          {/* Right side — CTA button */}
          <div id="footer-form" className="flex items-center justify-center lg:justify-end">
            <CTAButton href="/contact" variant="aurora-dark">
              Request a Conversation &rarr;
            </CTAButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
