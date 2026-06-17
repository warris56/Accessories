import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-luxury-black text-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-luxury-gold/30">
          <h3 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4 text-center">Join Our Exclusive Circle</h3>
          <p className="text-center text-luxury-cream/80 mb-6">Get early access to new collections and special offers</p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-luxury-black-light border-2 border-luxury-gold text-luxury-cream placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-rose"
            />
            <button type="submit" className="luxury-btn-secondary">
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="text-center text-luxury-gold mt-3 animate-fadeIn">✓ Thank you for subscribing!</p>
          )}
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-serif text-lg text-luxury-gold mb-4">About Grace</h4>
            <p className="text-luxury-cream/80 text-sm leading-relaxed">
              Elegance in every detail. Premium accessories for the modern woman and man.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-luxury-gold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-luxury-cream/80 hover:text-luxury-gold transition">All Products</Link></li>
              <li><Link to="/categories" className="text-luxury-cream/80 hover:text-luxury-gold transition">Categories</Link></li>
              <li><Link to="/about" className="text-luxury-cream/80 hover:text-luxury-gold transition">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif text-lg text-luxury-gold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-luxury-cream/80 hover:text-luxury-gold transition">Shipping Info</a></li>
              <li><a href="#" className="text-luxury-cream/80 hover:text-luxury-gold transition">Returns</a></li>
              <li><a href="#" className="text-luxury-cream/80 hover:text-luxury-gold transition">FAQ</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-serif text-lg text-luxury-gold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-luxury-gold transition">📱</a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-luxury-gold transition">💬</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-luxury-gold transition">🎵</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-luxury-gold/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-luxury-cream/60">
          <p>&copy; 2024 Accessories by Grace. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-luxury-gold transition">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-gold transition">Terms of Service</a>
            <a href="mailto:hello@accessoriesbygrace.com" className="hover:text-luxury-gold transition">hello@accessoriesbygrace.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
