import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export default function ProductCard({ product, showAddToCart = true }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showAdded, setShowAdded] = useState(false)
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      selectedSize: product.sizes?.[0] || 'One Size',
      selectedColor: product.colors?.[0] || 'Default',
      quantity: 1,
    })
    setShowAdded(true)
    setTimeout(() => setShowAdded(false), 2000)
  }

  return (
    <div className="product-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square bg-luxury-cream-dark overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-luxury-black/20 animate-fadeIn"></div>
          )}
        </div>
      </Link>

      <div className="p-4 md:p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg md:text-xl text-luxury-black mb-2 line-clamp-2 hover:text-luxury-rose transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-luxury-black-light text-sm mb-3 line-clamp-1">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('-', ' ')}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-serif text-luxury-gold">₦{product.price.toLocaleString()}</span>
            {product.priceNote && (
              <p className="text-xs text-luxury-black/60 mt-1">{product.priceNote}</p>
            )}
          </div>
          {product.gender !== 'unisex' && (
            <span className="text-xs px-3 py-1 bg-luxury-rose/20 text-luxury-rose rounded-full font-medium">
              {product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}
            </span>
          )}
        </div>

        {showAddToCart && (
          <button onClick={handleAddToCart} className="w-full luxury-btn-primary group relative overflow-hidden">
            <span className={`transition-all duration-300 ${showAdded ? 'opacity-0' : 'opacity-100'}`}>
              Add to Cart
            </span>
            {showAdded && (
              <span className="absolute inset-0 flex items-center justify-center">✓ Added!</span>
            )}
          </button>
        )}
        {!showAddToCart && (
          <Link to={`/product/${product.id}`} className="block w-full luxury-btn-secondary text-center">
            View Details
          </Link>
        )}
      </div>
    </div>
  )
}