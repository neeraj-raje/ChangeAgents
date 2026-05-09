import Link from 'next/link'
import { cn } from '@/lib/utils'

interface DarkAurora {
  bands: string
  glow1: string
  glow1Pos: { top?: string; right?: string; bottom?: string; left?: string }
  glow2: string
  glow2Pos: { top?: string; right?: string; bottom?: string; left?: string }
}

interface InnerPageHeroProps {
  eyebrow?: string
  heading: string
  lead: string
  showCTA?: boolean
  ctaHref?: string
  ctaText?: string
  bgColor?: string
  darkAurora?: DarkAurora
  textColor?: 'light' | 'dark'
}

export default function InnerPageHero({
  eyebrow = 'STRATEGIC ADVISORY  FOR ENTERPRISE TECHNOLOGY',
  heading,
  lead,
  showCTA = true,
  ctaHref = '/contact',
  ctaText = 'Request a Conversation',
  bgColor = '#0D1520',
  darkAurora,
  textColor = 'light',
}: InnerPageHeroProps) {
  const isLightBg = textColor === 'dark'

  return (
    <section
      className="relative px-6 lg:px-8 py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {darkAurora && (
        <>
          {/* Animated aurora bands */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -inset-[10px] opacity-30 blur-[80px] animate-aurora will-change-[background-position]"
              style={{
                backgroundImage: darkAurora.bands,
                backgroundSize: '400% 100%',
              }}
            />
          </div>

          {/* Primary atmospheric glow blob */}
          <div
            className="absolute pointer-events-none w-[600px] h-[500px] rounded-full blur-[120px]"
            style={{
              background: `radial-gradient(ellipse, ${darkAurora.glow1} 0%, transparent 70%)`,
              ...darkAurora.glow1Pos,
            }}
          />

          {/* Secondary glow blob */}
          <div
            className="absolute pointer-events-none w-[400px] h-[350px] rounded-full blur-[100px]"
            style={{
              background: `radial-gradient(ellipse, ${darkAurora.glow2} 0%, transparent 70%)`,
              ...darkAurora.glow2Pos,
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mx-auto text-center max-w-4xl">
          {eyebrow && (
            <p className={cn(
              'font-light text-small uppercase tracking-label mb-6',
              isLightBg ? 'text-[#52606D]' : 'text-white/50'
            )}>
              {eyebrow}
            </p>
          )}

          <h1
            className={cn('font-bold', isLightBg ? 'text-[#111827]' : 'text-white')}
            style={{ fontSize: 'calc(3.5rem + 7px)' }}
          >
            {heading}
          </h1>

          <div className="mt-6 space-y-4 max-w-3xl mx-auto">
            {lead.split('\n\n').filter(Boolean).map((para, i) => (
              <p
                key={i}
                className={cn(
                  'font-normal text-lead',
                  isLightBg ? 'text-[#52606D]' : 'text-white/70'
                )}
              >
                {para.trim()}
              </p>
            ))}
          </div>

          {showCTA && (
            <div className="mt-10 flex justify-center">
              <Link
                href={ctaHref}
                className={cn(
                  'inline-block font-medium text-cta px-6 py-3 border rounded transition-all duration-200',
                  isLightBg
                    ? 'border-[#52606D] text-[#111827] bg-white/20 hover:bg-white/30'
                    : 'border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white/50'
                )}
              >
                {ctaText} &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
