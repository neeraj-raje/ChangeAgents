import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HorizontalRule from '@/components/ui/HorizontalRule'

export const metadata: Metadata = {
  title: 'Sharbari Chakraborty — The Collective — Change Agents',
  description:
    'Sharbari Chakraborty works with senior leaders, founders and organizations on communication strategy, narrative development and leadership presence.',
}

const areasOfWork = [
  'Communication strategy and narrative development',
  'Personal and organizational storytelling',
  'Leadership communication and presence',
  'Founder and executive positioning',
  'Coaching leaders through transition and growth',
  'Enabling organizational alignment through communication',
]

const engagementModel = [
  'Independent advisory and coaching engagements',
  'Select collaboration with Change Agents',
  'Long-term or project-based work depending on context',
]

const whenRelevant = [
  'Leadership narrative and organizational reality need alignment',
  'Strategic positioning requires stronger internal and external communication',
  'Founders or senior leaders are navigating transition, visibility or scale',
]

export default function SharbariChakrabortyPage() {
  return (
    <div className="bg-ground min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-10 pb-2">
        <nav className="flex items-center gap-2 text-small text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ink transition-colors duration-200">
            Home
          </Link>
          <span className="opacity-40">/</span>
          <Link
            href="/the-collective"
            className="hover:text-ink transition-colors duration-200"
          >
            The Collective
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-ink">Sharbari Chakraborty</span>
        </nav>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — Image */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="aspect-square w-full max-w-xs overflow-hidden rounded-lg border border-rule">
                <Image
                  src="/assets/team/sharbari-chakraborty.jpg"
                  alt="Sharbari Chakraborty"
                  width={400}
                  height={400}
                  className="grayscale-photo w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="mt-6">
                <Link
                  href="/the-collective"
                  className="font-medium text-cta text-aurora-blue-600 hover:text-aurora-blue-500 transition-colors duration-200"
                >
                  &larr; Back to The Collective
                </Link>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Name & Role */}
            <div>
              <h1 className="font-bold text-title text-ink">Sharbari Chakraborty</h1>
              <p className="font-normal text-lead text-muted mt-2">
                Communication Advisor | Narrative Strategist | Coach
              </p>
            </div>

            <HorizontalRule />

            {/* Overview */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-muted mb-4">
                Overview
              </p>
              <div className="space-y-4">
                <p className="font-normal text-body text-muted">
                  Sharbari works with senior leaders, founders and organizations on communication
                  strategy, narrative development and leadership presence.
                </p>
                <p className="font-normal text-body text-muted">
                  Her work sits at the intersection of communication, narrative and leadership —
                  helping individuals and organizations align how they think, speak and show up,
                  especially when communication starts to impact clarity, alignment or decision making.
                </p>
              </div>
            </div>

            <HorizontalRule />

            {/* Areas of Work */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-muted mb-6">
                Areas of Work
              </p>
              <ul className="space-y-3">
                {areasOfWork.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-aurora-blue-600" />
                    <span className="font-normal text-body text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <HorizontalRule />

            {/* Approach */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-muted mb-4">
                Approach
              </p>
              <div className="space-y-4">
                <p className="font-normal text-body text-muted">
                  Sharbari&apos;s work is grounded in deep listening and contextual understanding,
                  with a strong focus on clarity of thinking as the foundation for effective communication.
                </p>
                <p className="font-normal text-body text-muted">
                  She works closely with leaders to uncover what they truly want to say — and helps
                  them translate that into communication that is clear, intentional and grounded in
                  their reality.
                </p>
                <p className="font-normal text-body text-muted">
                  Her approach goes beyond messaging to align thinking, behavior and communication in
                  real situations. This often involves working beneath the surface — not just on what
                  is being said, but on what is shaping it.
                </p>
              </div>
            </div>

            <HorizontalRule />

            {/* Experience */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-muted mb-4">
                Experience
              </p>
              <div className="space-y-4">
                <p className="font-normal text-body text-muted">
                  Sharbari brings over two decades of experience working with senior leaders across
                  industries including technology, biotechnology, finance and retail, as well as NGOs
                  and social impact organizations.
                </p>
                <p className="font-normal text-body text-muted">
                  Her experience spans global organizations including Walmart Global Tech, Société
                  Générale, Novozymes (now Novonesis) and Sonata Software, across both agency and
                  corporate environments.
                </p>
              </div>
            </div>

            <HorizontalRule />

            {/* Working with Change Agents */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-muted mb-4">
                Working with Change Agents
              </p>
              <p className="font-normal text-body text-muted mb-6">
                Sharbari collaborates with Change Agents on select engagements that require a
                combination of strategic positioning and leadership communication alignment.
                This is typically relevant in situations where:
              </p>
              <ul className="space-y-3">
                {whenRelevant.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-aurora-blue-600" />
                    <span className="font-normal text-body text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <HorizontalRule />

            {/* Engagement Model */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-muted mb-6">
                Engagement Model
              </p>
              <ul className="space-y-3">
                {engagementModel.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-aurora-blue-600" />
                    <span className="font-normal text-body text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <HorizontalRule />

            {/* Perspective */}
            <div className="bg-aurora-blue-50 border border-aurora-blue-100 rounded-lg p-8 lg:p-10">
              <p className="font-normal text-small uppercase tracking-widest text-muted mb-6">
                Sharbari&apos;s Perspective
              </p>
              <blockquote>
                <p className="font-light italic text-lead text-ink leading-relaxed">
                  &ldquo;The most powerful stories are not always the loudest. They are the clearest.&rdquo;
                </p>
              </blockquote>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
