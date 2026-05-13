import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full py-24">
        <p className="font-light text-small text-muted uppercase tracking-widest mb-4">404</p>
        <h1 className="font-medium text-heading text-ink mb-6">Page not found</h1>
        <p className="font-normal text-body text-muted max-w-[52ch] mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-block font-normal text-cta text-[#35506B] hover:opacity-60 transition-opacity"
        >
          Return to home &rarr;
        </Link>
      </div>
    </section>
  )
}
