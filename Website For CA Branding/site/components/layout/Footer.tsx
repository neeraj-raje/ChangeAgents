import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const navLinks = [
    { href: '/executive-advisory', label: 'Executive Advisory' },
    { href: '/company-advisory', label: 'Company Advisory' },
    { href: '/strategic-inflection', label: 'Strategic Inflection' },
    { href: '/communications', label: 'Communications' },
    { href: '/the-collective', label: 'The Collective' },
    { href: '/about', label: 'About' },
  ]

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">

        {/* Logo left, nav right */}
        <div className="flex items-end justify-between mb-12">
          <Link href="/" aria-label="Change Agents — Home">
            <Image
              src="/assets/logo/ChangeAgents_Logo_new.png"
              alt="Change Agents"
              width={179}
              height={51}
              className="h-[2.048rem] w-auto object-contain logo-white"
            />
          </Link>

          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white no-underline hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright centered below */}
        <div className="flex justify-center border-t border-white border-opacity-10 pt-8">
          <p className="font-light text-micro text-white opacity-40">
            &copy; 2025 Change Agents. All rights reserved. India.
          </p>
        </div>

      </div>
    </footer>
  )
}
