import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const cart = useCartStore((state) => state.cart)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-luxury-cream border-b-2 border-luxury-gold/20">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="font-serif text-2xl md:text-3xl text-luxury-rose font-bold tracking-wider">
            GRACE
          </div>
          <div className="text-xs text-luxury-gold font-light">accessories by grace</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-luxury-black hover:text-luxury-rose transition text-sm font-medium">HOME</Link>
          <Link to="/categories" className="text-luxury-black hover:text-luxury-rose transition text-sm font-medium">CATEGORIES</Link>
          <Link to="/products" className="text-luxury-black hover:text-luxury-rose transition text-sm font-medium">SHOP</Link>
          <Link to="/about" className="text-luxury-black hover:text-luxury-rose transition text-sm font-medium">ABOUT</Link>
          <Link to="/contact" className="text-luxury-black hover:text-luxury-rose transition text-sm font-medium">CONTACT</Link>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative group">
            <div className="text-2xl md:text-3xl cursor-pointer group-hover:scale-110 transition">🛍️</div>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-luxury-rose text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-luxury-gold/20 bg-luxury-cream-dark py-4 px-4 space-y-3 animate-slideUp">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-luxury-black hover:text-luxury-rose py-2 font-medium">HOME</Link>
          <Link to="/categories" onClick={() => setIsMobileMenuOpen(false)} className="block text-luxury-black hover:text-luxury-rose py-2 font-medium">CATEGORIES</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="block text-luxury-black hover:text-luxury-rose py-2 font-medium">SHOP</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-luxury-black hover:text-luxury-rose py-2 font-medium">ABOUT</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-luxury-black hover:text-luxury-rose py-2 font-medium">CONTACT</Link>
        </div>
      )}
    </header>
  )
}
