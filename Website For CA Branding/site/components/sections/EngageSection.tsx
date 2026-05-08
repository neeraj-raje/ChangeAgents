interface EngageSectionProps {
  eyebrow?: string
  heading: string
  body: string
  children?: React.ReactNode
}

export default function EngageSection({
  eyebrow,
  heading,
  body,
  children,
}: EngageSectionProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <p className="font-normal text-small uppercase tracking-widest text-[#52606D] mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-bold text-title text-[#111827] mb-8">{heading}</h2>
      <p className="font-normal text-body text-[#52606D]" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>{body}</p>
      {children}
    </div>
  )
}
