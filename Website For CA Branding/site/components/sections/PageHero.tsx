import SectionLabel from '@/components/ui/SectionLabel'
import CTAButton from '@/components/ui/CTAButton'
import HorizontalRule from '@/components/ui/HorizontalRule'

interface PageHeroProps {
  label?: string
  heading: string
  lead: string
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
  fullHeight?: boolean
  bgImage?: string
  boldSans?: boolean
}

export default function PageHero({
  label,
  heading,
  lead,
  showCTA = false,
  ctaText = 'Start a Conversation',
  ctaHref = '/contact',
  fullHeight = false,
  bgImage,
  boldSans = false,
}: PageHeroProps) {
  const bgStyle = bgImage
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,${boldSans ? '0.7' : '0.6'}), rgba(0,0,0,${boldSans ? '0.7' : '0.6'})), url('/CABranding${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <section
      className={`${bgImage ? '' : 'bg-ground'} px-6 lg:px-8 ${
        fullHeight ? 'min-h-[80vh] flex flex-col justify-center' : 'py-24 lg:py-32'
      }`}
      style={bgStyle}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-5xl">
          {label && (
            <div>
              <SectionLabel className="mb-6">{label}</SectionLabel>
            </div>
          )}

          <h1 className={`${boldSans ? 'font-bold text-5xl lg:text-6xl' : 'font-light text-display'} ${bgImage ? 'font-bold text-white' : 'text-ink'}`}>
            {heading}
          </h1>

          <p className={`${boldSans || bgImage ? 'font-normal' : 'font-light'} ${boldSans ? 'text-lg' : 'text-lead'} ${bgImage ? 'text-white/90' : 'text-ink'} mt-8 max-w-4xl leading-relaxed`}>
            {lead}
          </p>

          {showCTA && (
            <div className="mt-10">
              <CTAButton href={ctaHref}>{ctaText} &rarr;</CTAButton>
            </div>
          )}
        </div>
      </div>

      <HorizontalRule className="mt-16 max-w-6xl mx-auto" />
    </section>
  )
}
