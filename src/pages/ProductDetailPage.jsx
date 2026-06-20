import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { getProductById } from '../data/products'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(Number(productId))
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || 'One Size')
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Default')
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAdded, setShowAdded] = useState(false)
  const addToCart = useCartStore((state) => state.addToCart)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-luxury-black mb-4">Product Not Found</h1>
          <Link to="/products" className="luxury-btn-primary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const images = product.images || [product.image]

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      selectedSize,
      selectedColor,
      quantity,
    })
    setShowAdded(true)
    setTimeout(() => setShowAdded(false), 2000)
  }

  const handleBuyNow = () => {
    handleAddToCart()
    setTimeout(() => navigate('/cart'), 500)
  }

  return (
    <div className="min-h-screen bg-luxury-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex items-center gap-2 text-sm">
        <Link to="/" className="text-luxury-rose hover:text-luxury-rose-dark">Home</Link>
        <span className="text-luxury-black/50">/</span>
        <Link to="/products" className="text-luxury-rose hover:text-luxury-rose-dark">Products</Link>
        <span className="text-luxury-black/50">/</span>
        <span className="text-luxury-black">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Product Images */}
          <div>
            <div className="w-full aspect-square bg-luxury-cream-dark rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail row — only show if multiple images */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === index ? 'border-luxury-rose' : 'border-luxury-gold/30'
                    }`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="animate-slideUp">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 bg-luxury-gold/20 text-luxury-gold rounded-full font-medium uppercase">
                {product.category.replace('-', ' ')}
              </span>
              {product.gender !== 'unisex' && (
                <span className="text-xs px-3 py-1 bg-luxury-rose/20 text-luxury-rose rounded-full font-medium uppercase">
                  {product.gender}
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-luxury-black mb-2">{product.name}</h1>

            <div className="mb-6">
              <p className="text-3xl text-luxury-gold font-serif">₦{product.price.toLocaleString()}</p>
              {product.priceNote && (
                <p className="text-sm text-luxury-black/60 mt-1">{product.priceNote}</p>
              )}
            </div>

            <p className="text-luxury-black/80 text-lg mb-8 leading-relaxed">{product.description}</p>

            {/* Size */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <h3 className="font-serif text-lg text-luxury-black mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded border-2 transition ${
                        selectedSize === size
                          ? 'border-luxury-rose bg-luxury-rose text-white'
                          : 'border-luxury-gold text-luxury-black hover:border-luxury-rose'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="font-serif text-lg text-luxury-black mb-3">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded border-2 transition ${
                        selectedColor === color
                          ? 'border-luxury-rose bg-luxury-rose text-white'
                          : 'border-luxury-gold text-luxury-black hover:border-luxury-rose'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-luxury-black mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border-2 border-luxury-gold text-luxury-black hover:bg-luxury-gold/10"
                >−</button>
                <span className="text-2xl font-serif text-luxury-black w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border-2 border-luxury-gold text-luxury-black hover:bg-luxury-gold/10"
                >+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 mb-8">
              <button onClick={handleBuyNow} className="w-full luxury-btn-primary text-lg">Buy Now</button>
              <button
                onClick={handleAddToCart}
                className={`w-full luxury-btn-secondary text-lg transition-all ${showAdded ? 'bg-luxury-gold text-luxury-cream' : ''}`}
              >
                {showAdded ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            {/* Info */}
            <div className="border-t-2 border-luxury-gold/20 pt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-serif text-luxury-black font-medium">Premium Quality</h4>
                  <p className="text-luxury-black/70 text-sm">Crafted with finest materials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <h4 className="font-serif text-luxury-black font-medium">Fast Shipping</h4>
                  <p className="text-luxury-black/70 text-sm">Ships within 2-3 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">↩️</span>
                <div>
                  <h4 className="font-serif text-luxury-black font-medium">Easy Returns</h4>
                  <p className="text-luxury-black/70 text-sm">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}