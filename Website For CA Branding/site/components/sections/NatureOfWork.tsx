interface WorkItem {
  label: string
  text: string
}

interface NatureOfWorkProps {
  items: WorkItem[]
  className?: string
}

export default function NatureOfWork({ items, className = '' }: NatureOfWorkProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-0 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="border-t border-rule pt-8 pb-10 pr-8">
          <p className="font-normal text-micro text-muted uppercase tracking-label mb-3">
            {item.label}
          </p>
          <p className="font-light text-heading text-ink">{item.text}</p>
        </div>
      ))}
    </div>
  )
}
