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
        <p className="font-normal text-small uppercase tracking-widest text-muted mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-bold text-title text-ink mb-6">{heading}</h2>
      {/* Olive-green gradient line — matches the inverted G in the logo */}
      <div
        className="w-12 h-1 mx-auto mb-8 rounded"
        style={{
          background: 'linear-gradient(to right, #8AAB58, #C4D8A4)',
        }}
      />
      <p className="font-normal text-body text-muted">{body}</p>
      {children}
    </div>
  )
}
