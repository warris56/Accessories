import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/products'

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-luxury-rose/10 to-luxury-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-luxury-black mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-luxury-black/70">
            Explore our 12 premium accessory categories
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="group animate-slideUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-luxury-rose/5 to-luxury-gold/5 flex items-center justify-center relative overflow-hidden">
                    <div className="text-9xl group-hover:scale-125 transition-transform duration-500">
                      {category.image}
                    </div>
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl md:text-2xl text-luxury-black group-hover:text-luxury-rose transition-colors duration-300 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-luxury-gold text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Explore Collection →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-luxury-cream-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-black mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-luxury-black/70 mb-8 text-lg">
            Browse our complete collection or contact us for personalized recommendations
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/products" className="luxury-btn-primary">
              Browse All Products
            </Link>
            <Link to="/contact" className="luxury-btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
