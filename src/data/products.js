export const categories = [
  { id: 1, name: 'Jewellery', slug: 'jewellery', image: '💎' },
  { id: 2, name: 'Earrings', slug: 'earrings', image: '✨' },
  { id: 3, name: 'Necklaces', slug: 'necklaces', image: '🔗' },
  { id: 4, name: 'Knuckle Rings', slug: 'knuckle-rings', image: '💍' },
  { id: 5, name: 'Face Masks', slug: 'face-masks', image: '😷' },
  { id: 6, name: 'Bracelets', slug: 'bracelets', image: '✨' },
  { id: 7, name: 'Bangles', slug: 'bangles', image: '⭐' },
  { id: 8, name: 'Wristwatches', slug: 'wristwatches', image: '⌚' },
  { id: 9, name: 'Steel Necklaces for Men', slug: 'steel-necklaces', image: '🔗' },
  { id: 10, name: 'Luxury Tote Bags', slug: 'tote-bags', image: '👜' },
  { id: 11, name: 'Handbags', slug: 'handbags', image: '👛' },
  { id: 12, name: 'Arm Cuffs', slug: 'arm-cuffs', image: '💫' },
]

export const products = [
  // Jewellery
  {
    id: 1,
    name: 'Gold Layered Pendant',
    category: 'jewellery',
    price: 129.99,
    image: '💎',
    gender: 'women',
    description: 'Elegant layered gold pendant with delicate chain',
    sizes: ['One Size'],
    colors: ['Gold', 'Rose Gold'],
    featured: true
  },
  {
    id: 2,
    name: 'Diamond Stud Set',
    category: 'jewellery',
    price: 249.99,
    image: '✨',
    gender: 'women',
    description: 'Premium cubic zirconia diamond studs',
    sizes: ['One Size'],
    colors: ['Clear', 'Rose Gold'],
    featured: true
  },

  // Earrings
  {
    id: 3,
    name: 'Pearl Drop Earrings',
    category: 'earrings',
    price: 89.99,
    image: '✨',
    gender: 'women',
    description: 'Timeless pearl drops with gold findings',
    sizes: ['One Size'],
    colors: ['White Pearl', 'Rose Pearl'],
    featured: true
  },
  {
    id: 4,
    name: 'Rose Gold Hoops',
    category: 'earrings',
    price: 69.99,
    image: '✨',
    gender: 'women',
    description: 'Classic rose gold hoop earrings',
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Rose Gold'],
  },
  {
    id: 5,
    name: 'Crystal Chandelier Earrings',
    category: 'earrings',
    price: 159.99,
    image: '✨',
    gender: 'women',
    description: 'Stunning crystal chandelier design',
    sizes: ['One Size'],
    colors: ['Clear', 'Rose Quartz'],
  },

  // Necklaces
  {
    id: 6,
    name: 'Gold Rope Necklace',
    category: 'necklaces',
    price: 179.99,
    image: '🔗',
    gender: 'women',
    description: 'Luxurious twisted gold rope necklace',
    sizes: ['16in', '18in', '20in'],
    colors: ['Gold', 'Rose Gold'],
    featured: true
  },
  {
    id: 7,
    name: 'Delicate Gold Chain',
    category: 'necklaces',
    price: 99.99,
    image: '🔗',
    gender: 'women',
    description: 'Fine delicate gold chain necklace',
    sizes: ['16in', '18in'],
    colors: ['Gold', 'White Gold'],
  },
  {
    id: 8,
    name: 'Statement Collar Necklace',
    category: 'necklaces',
    price: 219.99,
    image: '🔗',
    gender: 'women',
    description: 'Bold statement collar with gems',
    sizes: ['One Size'],
    colors: ['Gold with Clear Gems', 'Rose Gold with Pink Gems'],
  },

  // Knuckle Rings
  {
    id: 9,
    name: 'Gold Knuckle Rings Set',
    category: 'knuckle-rings',
    price: 59.99,
    image: '💍',
    gender: 'women',
    description: 'Set of 3 delicate knuckle rings',
    sizes: ['One Size (Adjustable)'],
    colors: ['Gold', 'Rose Gold', 'Silver'],
  },
  {
    id: 10,
    name: 'Crystal Knuckle Ring',
    category: 'knuckle-rings',
    price: 39.99,
    image: '💍',
    gender: 'women',
    description: 'Single crystal-accented knuckle ring',
    sizes: ['One Size (Adjustable)'],
    colors: ['Gold with Clear', 'Rose Gold with Pink'],
  },

  // Face Masks
  {
    id: 11,
    name: 'Silk Sleep Mask',
    category: 'face-masks',
    price: 49.99,
    image: '😷',
    gender: 'unisex',
    description: 'Premium silk eye mask for better sleep',
    sizes: ['One Size'],
    colors: ['Cream', 'Rose', 'Black'],
    featured: true
  },
  {
    id: 12,
    name: 'Luxury Skincare Mask Pack',
    category: 'face-masks',
    price: 79.99,
    image: '😷',
    gender: 'women',
    description: 'Set of 5 premium hydrating masks',
    sizes: ['One Size'],
    colors: ['Assorted'],
  },

  // Bracelets
  {
    id: 13,
    name: 'Gold Tennis Bracelet',
    category: 'bracelets',
    price: 189.99,
    image: '✨',
    gender: 'women',
    description: 'Elegant tennis bracelet with cubic zirconia',
    sizes: ['6.5in', '7in', '7.5in', '8in'],
    colors: ['Gold', 'Rose Gold'],
    featured: true
  },
  {
    id: 14,
    name: 'Pearl Beaded Bracelet',
    category: 'bracelets',
    price: 129.99,
    image: '✨',
    gender: 'women',
    description: 'Luxurious pearl beaded bracelet',
    sizes: ['6.5in', '7in', '7.5in'],
    colors: ['White Pearl', 'Rose Pearl'],
  },
  {
    id: 15,
    name: 'Link Chain Bracelet',
    category: 'bracelets',
    price: 149.99,
    image: '✨',
    gender: 'women',
    description: 'Sophisticated link chain design',
    sizes: ['7in', '7.5in', '8in'],
    colors: ['Gold', 'Rose Gold', 'Silver'],
  },

  // Bangles
  {
    id: 16,
    name: 'Gold Bangle Set',
    category: 'bangles',
    price: 99.99,
    image: '⭐',
    gender: 'women',
    description: 'Set of 3 classic gold bangles',
    sizes: ['S', 'M', 'L'],
    colors: ['Gold'],
  },
  {
    id: 17,
    name: 'Enamel Bangle Bracelet',
    category: 'bangles',
    price: 79.99,
    image: '⭐',
    gender: 'women',
    description: 'Colorful enamel finish bangle',
    sizes: ['M', 'L'],
    colors: ['Rose Gold', 'Gold', 'White Gold'],
  },

  // Wristwatches
  {
    id: 18,
    name: 'Rose Gold Luxury Watch',
    category: 'wristwatches',
    price: 299.99,
    image: '⌚',
    gender: 'women',
    description: 'Elegant rose gold watch with leather strap',
    sizes: ['One Size'],
    colors: ['Rose Gold', 'Gold'],
    featured: true
  },
  {
    id: 19,
    name: 'Classic Gold Watch',
    category: 'wristwatches',
    price: 259.99,
    image: '⌚',
    gender: 'women',
    description: 'Timeless gold wristwatch',
    sizes: ['One Size'],
    colors: ['Gold', 'Rose Gold'],
  },
  {
    id: 20,
    name: 'Steel Sports Watch',
    category: 'wristwatches',
    price: 189.99,
    image: '⌚',
    gender: 'men',
    description: 'Professional stainless steel sports watch',
    sizes: ['One Size'],
    colors: ['Silver', 'Black'],
  },

  // Steel Necklaces for Men
  {
    id: 21,
    name: 'Stainless Steel Chain',
    category: 'steel-necklaces',
    price: 129.99,
    image: '🔗',
    gender: 'men',
    description: 'Durable stainless steel chain necklace',
    sizes: ['20in', '22in', '24in'],
    colors: ['Silver', 'Black'],
    featured: true
  },
  {
    id: 22,
    name: 'Pendant Steel Necklace',
    category: 'steel-necklaces',
    price: 159.99,
    image: '🔗',
    gender: 'men',
    description: 'Steel necklace with pendant',
    sizes: ['20in', '22in'],
    colors: ['Silver', 'Gold'],
  },

  // Luxury Tote Bags
  {
    id: 23,
    name: 'Canvas Tote Luxury',
    category: 'tote-bags',
    price: 349.99,
    image: '👜',
    gender: 'women',
    description: 'Premium canvas tote with leather handles',
    sizes: ['One Size'],
    colors: ['Cream', 'Black', 'Rose'],
    featured: true
  },
  {
    id: 24,
    name: 'Woven Tote Bag',
    category: 'tote-bags',
    price: 299.99,
    image: '👜',
    gender: 'women',
    description: 'Elegant woven luxury tote',
    sizes: ['One Size'],
    colors: ['Cream', 'Tan'],
  },

  // Handbags
  {
    id: 25,
    name: 'Crossbody Leather Bag',
    category: 'handbags',
    price: 279.99,
    image: '👛',
    gender: 'women',
    description: 'Soft leather crossbody handbag',
    sizes: ['One Size'],
    colors: ['Rose', 'Cream', 'Black'],
    featured: true
  },
  {
    id: 26,
    name: 'Clutch Evening Bag',
    category: 'handbags',
    price: 199.99,
    image: '👛',
    gender: 'women',
    description: 'Elegant clutch for evening occasions',
    sizes: ['One Size'],
    colors: ['Gold', 'Rose Gold', 'Black'],
  },
  {
    id: 27,
    name: 'Shoulder Bag Classic',
    category: 'handbags',
    price: 249.99,
    image: '👛',
    gender: 'women',
    description: 'Timeless shoulder bag in classic design',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Cream'],
  },

  // Arm Cuffs
  {
    id: 28,
    name: 'Gold Arm Cuff',
    category: 'arm-cuffs',
    price: 139.99,
    image: '💫',
    gender: 'women',
    description: 'Statement gold arm cuff bracelet',
    sizes: ['One Size (Adjustable)'],
    colors: ['Gold', 'Rose Gold'],
    featured: true
  },
  {
    id: 29,
    name: 'Crystal Arm Cuff',
    category: 'arm-cuffs',
    price: 179.99,
    image: '💫',
    gender: 'women',
    description: 'Luxurious crystal-studded arm cuff',
    sizes: ['One Size (Adjustable)'],
    colors: ['Gold with Clear', 'Rose Gold with Pink'],
  },
]

export const getFeaturedProducts = () => products.filter(p => p.featured).slice(0, 6)

export const getProductsByCategory = (categorySlug) => products.filter(p => p.category === categorySlug)

export const getProductById = (id) => products.find(p => p.id === id)

export const getProductsByGender = (gender) => products.filter(p => p.gender === gender || p.gender === 'unisex')

export const filterProducts = (categorySlug, priceRange, gender) => {
  let filtered = products

  if (categorySlug) {
    filtered = filtered.filter(p => p.category === categorySlug)
  }

  if (gender && gender !== 'all') {
    filtered = filtered.filter(p => p.gender === gender || p.gender === 'unisex')
  }

  if (priceRange) {
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
  }

  return filtered
}
