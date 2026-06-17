import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const cart = useCartStore((state) => state.cart)
  const clearCart = useCartStore((state) => state.clearCart)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + tax + shipping

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-luxury-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-luxury-black mb-4">Your Cart is Empty</h1>
          <Link to="/products" className="luxury-btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setOrderConfirmed(true)
      setIsProcessing(false)
      clearCart()
    }, 2000)
  }

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-luxury-cream flex items-center justify-center">
        <div className="max-w-md mx-auto text-center py-24 px-4 animate-slideUp">
          <div className="text-7xl mb-6">✓</div>
          <h1 className="font-serif text-4xl text-luxury-black mb-4">Order Confirmed!</h1>
          <p className="text-luxury-black/70 mb-6 leading-relaxed">
            Thank you for your purchase. Your order has been confirmed and you'll receive a confirmation email shortly.
          </p>
          <p className="text-sm text-luxury-black/60 mb-8">
            Order Number: #GR-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <Link to="/" className="luxury-btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-luxury-cream">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-luxury-rose/10 to-luxury-cream py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-luxury-black">Checkout</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="font-serif text-2xl text-luxury-black mb-6 pb-4 border-b-2 border-luxury-gold">
                  Shipping Information
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="luxury-input col-span-2"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="luxury-input w-full mb-4"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="luxury-input w-full mb-4"
                />

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State/Province"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="font-serif text-2xl text-luxury-black mb-6 pb-4 border-b-2 border-luxury-gold">
                  Payment Information
                </h2>

                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number (XXXX-XXXX-XXXX-XXXX)"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="luxury-input w-full mb-4"
                  maxLength="19"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                    maxLength="5"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                    maxLength="4"
                  />
                </div>

                <p className="text-xs text-luxury-black/60 mt-4">
                  💳 Your payment information is secure and encrypted. We do not store card details.
                </p>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full luxury-btn-primary text-lg ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isProcessing ? 'Processing Payment...' : 'Complete Purchase'}
              </button>

              <Link to="/cart" className="text-center block text-luxury-rose hover:text-luxury-rose-dark">
                ← Back to Cart
              </Link>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
              <h2 className="font-serif text-2xl text-luxury-black mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 mb-6 pb-6 border-b-2 border-luxury-gold/20">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-luxury-black/70">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium text-luxury-black">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 pb-6 border-b-2 border-luxury-gold/20">
                <div className="flex justify-between text-luxury-black/70">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-luxury-black/70">
                  <span>Tax (10%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-luxury-black/70">
                  <span>Shipping</span>
                  <span className="font-medium">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg">
                <span className="font-serif text-luxury-black">Total</span>
                <span className="font-serif text-2xl text-luxury-gold">${total.toFixed(2)}</span>
              </div>

              {subtotal < 100 && (
                <p className="text-xs text-luxury-black/60 mt-4 p-3 bg-luxury-cream-dark rounded text-center">
                  Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
