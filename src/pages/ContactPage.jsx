import React, { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-luxury-rose/10 to-luxury-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center animate-slideUp">
          <h1 className="font-serif text-5xl md:text-6xl text-luxury-black mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-luxury-black/70">
            We'd love to hear from you. Reach out with any questions or feedback.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-8">
            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-serif text-xl text-luxury-black mb-2">Email</h3>
              <a
                href="mailto:hello@accessoriesbygrace.com"
                className="text-luxury-rose hover:text-luxury-rose-dark transition font-medium"
              >
                hello@accessoriesbygrace.com
              </a>
              <p className="text-sm text-luxury-black/60 mt-2">
                We'll get back to you within 24 hours
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-serif text-xl text-luxury-black mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-rose hover:text-luxury-rose-dark transition font-medium"
              >
                +1 (234) 567-8900
              </a>
              <p className="text-sm text-luxury-black/60 mt-2">
                Chat with us for quick inquiries
              </p>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-serif text-xl text-luxury-black mb-2">Instagram</h3>
              <a
                href="https://instagram.com/accessoriesbygrace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-rose hover:text-luxury-rose-dark transition font-medium"
              >
                @accessoriesbygrace
              </a>
              <p className="text-sm text-luxury-black/60 mt-2">
                Follow us for updates and inspiration
              </p>
            </div>

            {/* TikTok */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="font-serif text-xl text-luxury-black mb-2">TikTok</h3>
              <a
                href="https://tiktok.com/@accessoriesbygrace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-rose hover:text-luxury-rose-dark transition font-medium"
              >
                @accessoriesbygrace
              </a>
              <p className="text-sm text-luxury-black/60 mt-2">
                Join our creative community
              </p>
            </div>

            {/* Hours */}
            <div className="bg-luxury-cream-dark rounded-lg p-6 border-2 border-luxury-gold/30">
              <h3 className="font-serif text-lg text-luxury-black mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-luxury-black/70">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-serif text-3xl text-luxury-black mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-luxury-gold/20 text-luxury-gold rounded animate-slideUp">
                  ✓ Thank you for your message! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-luxury-black font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-luxury-black font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-luxury-black font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-luxury-black font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="luxury-input resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full luxury-btn-primary text-lg">
                  Send Message
                </button>
              </form>

              <p className="text-xs text-luxury-black/60 text-center mt-6">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-luxury-cream-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-serif text-3xl text-luxury-black text-center mb-12">Visit Our Store</h2>
          <div className="aspect-video bg-luxury-black/10 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-center">
              <div>
                <div className="text-7xl mb-4">📍</div>
                <p className="text-luxury-black text-lg font-serif">
                  123 Elegance Boulevard<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-luxury-cream-dark rounded-lg p-6 border-2 border-luxury-gold/30">
              <h3 className="font-serif text-lg text-luxury-black mb-2">What is your return policy?</h3>
              <p className="text-luxury-black/70">
                We offer a 30-day return policy on all products. Items must be unused and in original packaging.
              </p>
            </div>

            <div className="bg-luxury-cream-dark rounded-lg p-6 border-2 border-luxury-gold/30">
              <h3 className="font-serif text-lg text-luxury-black mb-2">How long does shipping take?</h3>
              <p className="text-luxury-black/70">
                Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business days.
              </p>
            </div>

            <div className="bg-luxury-cream-dark rounded-lg p-6 border-2 border-luxury-gold/30">
              <h3 className="font-serif text-lg text-luxury-black mb-2">Do you ship internationally?</h3>
              <p className="text-luxury-black/70">
                Yes! We ship to most countries worldwide. International shipping times vary by location.
              </p>
            </div>

            <div className="bg-luxury-cream-dark rounded-lg p-6 border-2 border-luxury-gold/30">
              <h3 className="font-serif text-lg text-luxury-black mb-2">Are your products authentic?</h3>
              <p className="text-luxury-black/70">
                All products sold through Accessories by Grace are 100% authentic. We work directly with manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
