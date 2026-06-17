import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, categories, filterProducts } from '../data/products'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedGender, setSelectedGender] = useState(searchParams.get('gender') || 'all')
  const [sortBy, setSortBy] = useState('featured')

  const categorySlug = searchParams.get('category') || ''

  const filtered = useMemo(() => {
    let result = filterProducts(categorySlug, priceRange, selectedGender === 'all' ? null : selectedGender)

    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result = [...result].reverse()
        break
      default:
        // featured - keep original order
        break
    }

    return result
  }, [categorySlug, priceRange, selectedGender, sortBy])

  const currentCategory = categories.find(c => c.slug === categorySlug)

  const handleCategoryChange = (slug) => {
    if (slug === '') {
      setSearchParams({})
    } else {
      setSearchParams({ category: slug })
    }
  }

  return (
    <div className="min-h-screen bg-luxury-cream">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-luxury-rose/10 to-luxury-cream py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-luxury-black mb-2">
            {currentCategory ? currentCategory.name : 'All Products'}
          </h1>
          <p className="text-luxury-black/70">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'} available
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="font-serif text-lg text-luxury-black mb-4 pb-3 border-b-2 border-luxury-gold">
                Categories
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('')}
                  className={`block w-full text-left px-3 py-2 rounded transition ${
                    !categorySlug
                      ? 'bg-luxury-rose text-white'
                      : 'text-luxury-black hover:text-luxury-rose'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`block w-full text-left px-3 py-2 rounded transition text-sm ${
                      categorySlug === cat.slug
                        ? 'bg-luxury-rose text-white'
                        : 'text-luxury-black hover:text-luxury-rose'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-serif text-lg text-luxury-black mb-4 pb-3 border-b-2 border-luxury-gold">
                Price Range
              </h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Gender Filter */}
            <div>
              <h3 className="font-serif text-lg text-luxury-black mb-4 pb-3 border-b-2 border-luxury-gold">
                For
              </h3>
              <div className="space-y-2">
                {['all', 'women', 'men', 'unisex'].map((gender) => (
                  <label key={gender} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      value={gender}
                      checked={selectedGender === gender}
                      onChange={(e) => setSelectedGender(e.target.value)}
                      className="mr-2 w-4 h-4"
                    />
                    <span className="text-sm text-luxury-black group-hover:text-luxury-rose transition capitalize">
                      {gender}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-serif text-lg text-luxury-black mb-4 pb-3 border-b-2 border-luxury-gold">
                Sort By
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border-2 border-luxury-gold rounded focus:outline-none focus:border-luxury-rose bg-luxury-cream"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-serif text-2xl text-luxury-black mb-2">No Products Found</h3>
                <p className="text-luxury-black/70 mb-6">
                  Try adjusting your filters or price range
                </p>
                <button
                  onClick={() => {
                    setPriceRange([0, 500])
                    setSelectedGender('all')
                    handleCategoryChange('')
                  }}
                  className="luxury-btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
