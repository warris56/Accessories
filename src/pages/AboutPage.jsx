import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-luxury-rose/10 via-luxury-cream to-luxury-cream-dark py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center animate-slideUp">
          <h1 className="font-serif text-5xl md:text-6xl text-luxury-black mb-6">
            About Accessories by Grace
          </h1>
          <p className="text-xl text-luxury-black/70 leading-relaxed">
            Every piece tells a story of elegance, craftsmanship, and timeless beauty.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-6xl text-center">👑</div>
            <div className="animate-slideUp">
              <h2 className="font-serif text-4xl text-luxury-black mb-6">Our Story</h2>
              <p className="text-luxury-black/80 mb-4 leading-relaxed text-lg">
                Accessories by Grace was born from a simple yet powerful belief: that true elegance lies in the details. What began as a personal passion for discovering and curating the finest accessories has blossomed into a luxury brand that celebrates the modern, sophisticated woman and man.
              </p>
              <p className="text-luxury-black/80 mb-4 leading-relaxed text-lg">
                Founded by Grace Morgan in 2020, our brand emerged from a desire to create a space where quality, style, and accessibility converge. Every collection is carefully selected to reflect the latest trends while honoring timeless classics that never go out of style.
              </p>
              <p className="text-luxury-black/80 leading-relaxed text-lg">
                Today, we're proud to serve thousands of customers worldwide who share our commitment to elegance, authenticity, and personal expression through beautiful accessories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-luxury-cream-dark">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Quality</h3>
              <p className="text-luxury-black/70">
                We never compromise on quality. Every piece is crafted with attention to detail and made to last.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Elegance</h3>
              <p className="text-luxury-black/70">
                Elegance is not about being loud. It's about the perfect balance of simplicity and sophistication.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Authenticity</h3>
              <p className="text-luxury-black/70">
                We believe in being true to ourselves and our customers. Authenticity is at the heart of everything we do.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Responsibility</h3>
              <p className="text-luxury-black/70">
                We're committed to ethical sourcing and sustainable practices in everything we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Founder */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-luxury-rose/5 to-luxury-gold/5 rounded-lg p-8 md:p-12 border-2 border-luxury-gold/30">
            <h2 className="font-serif text-3xl text-luxury-black mb-6">A Message from Grace</h2>
            <div className="text-lg text-luxury-black/80 space-y-4 leading-relaxed">
              <p>
                "When I started this journey, I had a simple dream: to create a space where every person could find accessories that not only looked beautiful but made them feel confident and elegant."
              </p>
              <p>
                "Over the years, I've had the privilege of meeting hundreds of amazing customers who've entrusted us with their special moments. From everyday elegance to unforgettable occasions, your stories inspire me to continuously improve and innovate."
              </p>
              <p>
                "Each piece in our collection is handpicked with you in mind. I believe that accessories are more than just adornments—they're a form of self-expression, a way to tell your unique story to the world."
              </p>
              <p>
                "Thank you for being part of the Grace family. Your support means everything to us, and we're committed to providing you with nothing but the best."
              </p>
              <p className="italic text-luxury-rose font-serif text-xl pt-4">
                With warmest regards,<br />
                Grace Morgan<br />
                Founder & Creative Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-luxury-black text-luxury-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-luxury-gold mb-12">Why Customers Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-serif text-xl text-luxury-gold mb-3">Curated Selection</h3>
              <p className="text-luxury-cream/80">
                Our team personally selects every item to ensure it meets our high standards for quality and style.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-serif text-xl text-luxury-gold mb-3">Customer Care</h3>
              <p className="text-luxury-cream/80">
                Your satisfaction is our priority. Our dedicated team is here to help you with any questions or concerns.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="font-serif text-xl text-luxury-gold mb-3">Global Community</h3>
              <p className="text-luxury-cream/80">
                We're proud to serve customers from around the world who share our passion for elegance and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-luxury-cream-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-black mb-6">
            Ready to Discover Your Perfect Accessory?
          </h2>
          <p className="text-luxury-black/70 mb-8 text-lg">
            Explore our exclusive collections and find the pieces that speak to your unique style.
          </p>
          <Link to="/products" className="luxury-btn-primary">
            Shop Our Collections
          </Link>
        </div>
      </section>
    </div>
  )
}
