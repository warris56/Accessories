import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getFeaturedProducts, categories } from '../data/products'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-luxury-rose/10 via-luxury-cream to-luxury-cream-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center animate-slideUp">
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-4 leading-tight">
            Elegance in<br />Every Detail
          </h1>
          <p className="text-lg md:text-xl text-luxury-black/70 mb-8 font-light">
            Discover our curated collection of premium accessories for the modern woman and man
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/products" className="luxury-btn-primary">
              Shop Now
            </Link>
            <Link to="/categories" className="luxury-btn-secondary">
              Explore Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="section-title">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="animate-slideUp" style={{ animationDelay: `${product.id * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24 bg-luxury-cream-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="section-title">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-lg bg-luxury-cream shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square flex flex-col items-center justify-center p-4 group-hover:bg-luxury-rose/5 transition-colors">
                  <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {category.image}
                  </div>
                  <h3 className="font-serif text-sm md:text-base text-center text-luxury-black group-hover:text-luxury-rose transition font-medium">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Grace */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="section-title">Why Choose Grace</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-serif text-2xl text-luxury-black mb-3">Premium Quality</h3>
              <p className="text-luxury-black/70">Carefully curated accessories made with the finest materials</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-serif text-2xl text-luxury-black mb-3">Authentic & Secure</h3>
              <p className="text-luxury-black/70">100% authentic products with secure payment processing</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="font-serif text-2xl text-luxury-black mb-3">Fast Delivery</h3>
              <p className="text-luxury-black/70">Quick and reliable shipping to your doorstep</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
