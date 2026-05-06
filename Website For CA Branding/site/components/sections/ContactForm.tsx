'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
      <h3 className="font-medium text-h3 text-white mb-8">Start the conversation</h3>

      {submitted ? (
        <div className="bg-aurora-blue-500/20 border border-aurora-blue-400/40 rounded-lg p-6 text-center">
          <p className="text-body text-white">Thank you. We&apos;ll be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-body text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-aurora-blue-400/30 transition-all backdrop-blur-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-body text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-aurora-blue-400/30 transition-all backdrop-blur-sm"
          />
          <textarea
            name="message"
            placeholder="What are you trying to solve or rethink?&#10;(e.g., repositioning, new market entry, portfolio clarity, narrative reset)"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-body text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-aurora-blue-400/30 transition-all resize-none backdrop-blur-sm"
          />
          <button
            type="submit"
            className="w-full border border-white/40 text-white font-medium text-cta px-6 py-3 rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          >
            Request a Conversation
          </button>
          <p className="font-light text-small text-white/60 text-center mt-4">
            We typically respond within 48 hours.
          </p>
        </form>
      )}
    </div>
  )
}
