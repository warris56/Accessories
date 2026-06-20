import React from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export default function CartPage() {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const total = subtotal

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-luxury-cream flex items-center justify-center">
        <div className="text-center py-24">
          <div className="text-9xl mb-4">🛍️</div>
          <h1 className="font-serif text-4xl text-luxury-black mb-4">Your Cart is Empty</h1>
          <p className="text-luxury-black/70 mb-8">Start shopping to fill your cart with beautiful accessories</p>
          <Link to="/products" className="luxury-btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-luxury-cream">
      <section className="bg-gradient-to-b from-luxury-rose/10 to-luxury-cream py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-luxury-black">Shopping Cart</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cart.map((item, index) => (
                <div key={index} className="border-b border-luxury-gold/20 p-6 flex gap-6 hover:bg-luxury-cream/50 transition">

                  {/* Product Image */}
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-luxury-cream-dark rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} className="font-serif text-lg md:text-xl text-luxury-black hover:text-luxury-rose transition">
                      {item.name}
                    </Link>
                    <p className="text-luxury-black/70 text-sm mb-2">
                      {item.selectedColor}{item.selectedSize !== 'One Size' && ` • ${item.selectedSize}`}
                    </p>
                    <p className="text-xl text-luxury-gold font-serif mb-4">
                      ₦{item.price.toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                        className="px-3 py-1 border border-luxury-gold text-luxury-black hover:bg-luxury-gold/10"
                      >−</button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                        className="px-3 py-1 border border-luxury-gold text-luxury-black hover:bg-luxury-gold/10"
                      >+</button>
                      <span className="flex-1 text-right font-serif text-lg text-luxury-gold">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                    className="text-2xl hover:scale-110 transition self-start"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <Link to="/products" className="text-luxury-rose hover:text-luxury-rose-dark mt-6 inline-flex items-center gap-2">
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
              <h2 className="font-serif text-2xl text-luxury-black mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b-2 border-luxury-gold/20">
                <div className="flex justify-between text-luxury-black/70">
                  <span>Subtotal</span>
                  <span className="font-medium">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-luxury-black/70">
                  <span>Shipping</span>
                  <span className="font-medium text-luxury-black/50 text-sm">Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between mb-8 text-lg">
                <span className="font-serif text-luxury-black">Total</span>
                <span className="font-serif text-2xl text-luxury-gold">₦{total.toLocaleString()}</span>
              </div>

              <Link to="/checkout" className="w-full luxury-btn-primary block text-center text-lg mb-3">
                Proceed to Checkout
              </Link>
              <Link to="/products" className="w-full luxury-btn-secondary block text-center">
                Continue Shopping
              </Link>

              <p className="text-xs text-luxury-black/60 mt-4 p-3 bg-luxury-cream-dark rounded text-center">
                ✨ Free delivery available — contact us for details!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}