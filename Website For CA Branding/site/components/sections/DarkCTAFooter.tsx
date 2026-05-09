import CTAButton from '@/components/ui/CTAButton'

export default function DarkCTAFooter() {
  return (
    <section className="bg-[#0B1F33] px-6 lg:px-8 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-aurora-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurora-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-medium text-heading text-[#F3F6F8]">
              Limited Engagements. Serious Conversations.
            </h2>
            <p className="font-normal text-lead text-[#A9BAC8] mt-8" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
              We work with a small number of enterprise leaders each year. Engagement begins with a
              confidential exploratory discussion.
            </p>
          </div>

          <div id="footer-form" className="flex items-center justify-center lg:justify-end">
            <CTAButton href="/contact" variant="aurora-dark">
              Request a Conversation &rarr;
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
