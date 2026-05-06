'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Executive Advisory', href: '/executive-advisory' },
  { label: 'Company Advisory', href: '/company-advisory' },
  { label: 'Strategic Inflection', href: '/strategic-inflection' },
  { label: 'Communications', href: '/communications' },
  { label: 'The Collective', href: '/the-collective' },
  { label: 'About', href: '/about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`font-sohne fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ground/95 backdrop-blur-sm border-b border-rule'
            : 'bg-ground'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-28">

            {/* Left: Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Change Agents — Home">
              <Image
                src="/assets/logo/ChangeAgents_Logo_new.png"
                alt="Change Agents"
                width={312}
                height={94}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Site navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink hover:opacity-60 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: Hamburger (mobile only) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[6px] flex-shrink-0"
              aria-label="Open menu"
            >
              <span className="block w-7 h-px bg-ink" />
              <span className="block w-7 h-px bg-ink" />
              <span className="block w-5 h-px bg-ink" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-sohne fixed inset-0 z-50 bg-ground flex flex-col"
          >
            {/* Overlay header */}
            <div className="flex items-center justify-between px-6 lg:px-10 h-28">
              <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Change Agents — Home">
                <Image
                  src="/assets/logo/ChangeAgents_Logo_new.png"
                  alt="Change Agents"
                  width={312}
                  height={94}
                  className="h-[3.25rem] w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-ink text-lg font-light"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <nav
              className="flex flex-col justify-center flex-1 px-10 lg:px-20 gap-6"
              aria-label="Site navigation"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-light text-title text-ink opacity-80 hover:opacity-100 transition-opacity duration-200 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to push content below fixed nav */}
      <div className="h-28" />
    </>
  )
}
