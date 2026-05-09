interface TwoColumnStatementProps {
  heading: string
  children: React.ReactNode
  className?: string
}

export default function TwoColumnStatement({
  heading,
  children,
  className = '',
}: TwoColumnStatementProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 ${className}`}>
      <div className="lg:col-span-4">
        <h2 className="font-light text-heading text-ink">{heading}</h2>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </div>
  )
}
