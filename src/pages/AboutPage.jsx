import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-luxury-rose/10 via-luxury-cream to-luxury-cream-dark py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center animate-slideUp">
          <h1 className="font-serif text-5xl md:text-6xl text-luxury-black mb-6">
            About Us
          </h1>
          <p className="text-xl text-luxury-black/70 leading-relaxed italic">
            Style. Confidence. Elegance.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-6xl text-center">👑</div>
            <div className="animate-slideUp">
              <h2 className="font-serif text-4xl text-luxury-black mb-6">
                Welcome to Everything Accessories by Grace
              </h2>
              <p className="text-luxury-black/80 mb-4 leading-relaxed text-lg">
                Everything Accessories by Grace was born out of a desire to look good and help others do the same. We believe that the right accessories do more than complete an outfit—they boost confidence, express personality, and add a touch of elegance to everyday life.
              </p>
              <p className="text-luxury-black/80 mb-4 leading-relaxed text-lg">
                Driven by a passion for style and an eye for quality, we carefully curate fashionable and affordable accessories for women who love to look their best without compromising on value. From trendy bags and watches to beautiful jewellery and other fashion essentials, each piece is selected with our customers in mind.
              </p>
              <p className="text-luxury-black/80 mb-4 leading-relaxed text-lg">
                Our mission is to make style accessible, helping every woman express her unique personality through accessories that inspire confidence and leave a lasting impression.
              </p>
              <p className="text-luxury-black/80 leading-relaxed text-lg">
                At Everything Accessories by Grace, we are committed to providing not just products, but a pleasant shopping experience built on trust, quality, and excellent customer service. Thank you for choosing us. We are delighted to be part of your style journey.
              </p>
              <p className="text-luxury-rose font-serif text-xl mt-6 italic">
                Because looking good should be within everyone's reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 md:py-24 bg-luxury-cream-dark">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Quality</h3>
              <p className="text-luxury-black/70">
                We are committed to offering accessories that meet high standards of style, durability, and value. Every item is carefully selected with our customers in mind.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💕</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Customer Satisfaction</h3>
              <p className="text-luxury-black/70">
                Our customers are at the heart of everything we do. We strive to provide a pleasant shopping experience through excellent service, prompt communication, and genuine care.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Elegance</h3>
              <p className="text-luxury-black/70">
                We believe that elegance is not defined by price but by confidence and self-expression. We help our customers embrace their unique style with accessories that enhance their everyday look.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Integrity</h3>
              <p className="text-luxury-black/70">
                We value honesty, transparency, and trust. We aim to build lasting relationships by delivering exactly what we promise.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Affordability</h3>
              <p className="text-luxury-black/70">
                Looking good shouldn't be out of reach. We are dedicated to making stylish and quality accessories accessible at prices our customers can appreciate.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">Excellence</h3>
              <p className="text-luxury-black/70">
                We continuously seek to improve, paying attention to the little details that make a big difference in the products we offer and the service we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Grace */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-luxury-rose/5 to-luxury-gold/5 rounded-lg p-8 md:p-12 border-2 border-luxury-gold/30">
            <h2 className="font-serif text-3xl text-luxury-black mb-6">A Message from Grace</h2>
            <div className="text-lg text-luxury-black/80 space-y-4 leading-relaxed">
              <p>Dear Valued Customer,</p>
              <p>
                Thank you for visiting Everything Accessories by Grace.
              </p>
              <p>
                This brand was born out of a simple desire — to look good and help others do the same. I have always believed that when you look good, you feel more confident, carry yourself differently, and show up as the best version of yourself.
              </p>
              <p>
                That belief inspired me to create a space where women can find stylish, quality, and affordable accessories that complement their personality and elevate their everyday look.
              </p>
              <p>
                Every item you see here has been thoughtfully selected with you in mind. My goal is not just to sell accessories, but to help you express your unique style with confidence and elegance.
              </p>
              <p>
                Thank you for choosing to support this dream. Your trust means so much to me, and I look forward to serving you with excellence.
              </p>
              <p className="italic text-luxury-rose font-serif text-xl pt-4">
                With love,<br />
                Grace<br />
                Founder, Everything Accessories by Grace
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-luxury-black text-luxury-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-gold mb-6">
            Ready to Find Your Perfect Accessory?
          </h2>
          <p className="text-luxury-cream/80 mb-8 text-lg">
            Explore our exclusive collections and find pieces that speak to your unique style.
          </p>
          <Link to="/products" className="luxury-btn-primary">
            Shop Our Collections
          </Link>
        </div>
      </section>
    </div>
  )
}