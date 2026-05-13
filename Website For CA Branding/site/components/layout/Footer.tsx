import Link from 'next/link'
import Image from 'next/image'

type NavItem = { href: string; label: string; external?: boolean }

const col1: NavItem[] = [
  { href: '/executive-advisory', label: 'Executive Advisory' },
  { href: '/company-advisory', label: 'Company Advisory' },
  { href: '/strategic-inflection', label: 'Strategic Inflection' },
]

const col2: NavItem[] = [
  { href: '/communications', label: 'PR & Communications' },
  { href: '/the-collective', label: 'The Collective' },
]

const col3: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const col4: NavItem[] = [
  { href: 'https://www.linkedin.com/company/change-agents/', label: 'LinkedIn', external: true },
  { href: 'https://changeagentspr.wordpress.com/', label: 'Blog', external: true },
]

function NavColumn({ links }: { links: NavItem[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.href}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#E8EDF2] no-underline hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className="text-sm text-[#E8EDF2] no-underline hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="font-sohne bg-[#0B1F33] text-white">
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

          <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-16" aria-label="Footer navigation">
            <NavColumn links={col1} />
            <NavColumn links={col2} />
            <NavColumn links={col3} />
            <NavColumn links={col4} />
          </nav>
        </div>

        {/* Copyright */}
        <div className="flex justify-center border-t border-white border-opacity-10 pt-8">
          <p className="font-light text-small text-[#A9BAC8]">
            &copy; 2025 Change Agents. All rights reserved. India.
          </p>
        </div>

      </div>
    </footer>
  )
}
