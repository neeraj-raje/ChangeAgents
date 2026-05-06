interface InnerCardGridItem {
  title: string
  body: string
}

interface InnerCardGridProps {
  items: InnerCardGridItem[]
}

export default function InnerCardGrid({ items }: InnerCardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start p-5 rounded-lg bg-aurora-blue-50 border border-aurora-blue-100"
        >
          <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center mr-4 bg-aurora-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium text-body text-ink">{item.title}</p>
            {item.body && (
              <p className="font-normal text-small text-muted mt-1">{item.body}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
