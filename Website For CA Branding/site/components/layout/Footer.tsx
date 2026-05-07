import Link from 'next/link'
import Image from 'next/image'

const col1 = [
  { href: '/executive-advisory', label: 'Executive Advisory' },
  { href: '/company-advisory', label: 'Company Advisory' },
  { href: '/strategic-inflection', label: 'Strategic Inflection' },
]

const col2 = [
  { href: '/communications', label: 'Communications' },
  { href: '/the-collective', label: 'The Collective' },
]

const col3 = [
  { href: '/about', label: 'About' },
]

function NavColumn({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-white no-underline hover:opacity-60 transition-opacity"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="font-sohne bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">

        {/* Logo + nav grid */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-12">
          <Link href="/" aria-label="Change Agents — Home" className="flex-shrink-0">
            <Image
              src="/assets/logo/ChangeAgents_Logo_new.png"
              alt="Change Agents"
              width={179}
              height={51}
              className="h-[2.048rem] w-auto object-contain logo-white"
            />
          </Link>

          <nav className="grid grid-cols-3 gap-10 lg:gap-16" aria-label="Footer navigation">
            <NavColumn links={col1} />
            <NavColumn links={col2} />
            <NavColumn links={col3} />
          </nav>
        </div>

        {/* Copyright */}
        <div className="flex justify-center border-t border-white border-opacity-10 pt-8">
          <p className="font-light text-small text-white opacity-40">
            &copy; 2025 Change Agents. All rights reserved. India.
          </p>
        </div>

      </div>
    </footer>
  )
}
