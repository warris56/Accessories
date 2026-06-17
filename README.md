# 👑 Accessories by Grace - Premium E-Commerce Website

A stunning, luxurious e-commerce website for a premium accessories brand featuring elegant design, full shopping functionality, and a warm feminine aesthetic.

## ✨ Features

### Pages
- **Homepage** - Hero banner with tagline, featured products, category grid, and newsletter signup
- **Product Categories** - Beautiful grid display of all 12 product categories
- **Product Listing** - Browse all products with advanced filters (category, price, gender)
- **Product Detail** - Detailed product views with size/color options and quantity selection
- **Shopping Cart** - Cart management with quantity controls and order summary
- **Checkout** - Complete checkout flow with shipping and payment information
- **About Page** - Brand story, values, and founder's message
- **Contact Page** - Contact form, social links, hours, and FAQs

### Design Features
- **Luxury Aesthetic** - Rose gold, cream, soft black, and gold color scheme
- **Typography** - Elegant serif fonts (Playfair Display) for headings, clean sans-serif (Poppins) for body
- **Responsive Design** - Fully mobile-responsive across all devices
- **Smooth Animations** - Elegant transitions and hover effects
- **Gold Accents** - Premium gold accents throughout

### Product Categories
1. Jewellery
2. Earrings
3. Necklaces
4. Knuckle Rings
5. Face Masks
6. Bracelets
7. Bangles
8. Wristwatches (Men & Women)
9. Steel Necklaces for Men
10. Luxury Tote Bags
11. Handbags
12. Arm Cuffs

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management (shopping cart)
- **Playwright** - Browser automation (optional, for testing)

## 📦 Project Structure

```
grace_project/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx      # Navigation header with cart
│   │   ├── Footer.jsx      # Footer with newsletter
│   │   └── ProductCard.jsx # Product display card
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx
│   │   ├── CategoriesPage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── store/              # State management
│   │   └── cartStore.js    # Zustand cart store
│   ├── data/               # Mock data
│   │   └── products.js     # Product database
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd Grace_project
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### Production Build

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Color Palette

- **Luxury Rose**: `#E8BFB0` - Primary accent color
- **Cream**: `#FAF7F2` - Primary background
- **Gold**: `#D4AF37` - Premium accent
- **Deep Black**: `#2C2C2C` - Text color
- **Rose Gold**: `#D4A19A` - Secondary accent

## 💳 Features in Detail

### Shopping Cart
- Add/remove products
- Update quantities
- Real-time cart updates
- Persistent cart state
- Free shipping on orders over $100

### Product Filtering
- Filter by category
- Filter by price range
- Filter by gender (Women/Men/Unisex)
- Sort by price or newest
- Real-time filter updates

### Checkout
- Shipping information form
- Payment information form
- Order summary
- Tax calculation (10%)
- Order confirmation

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔒 Security

- Form validation on all inputs
- Secure payment field handling
- No sensitive data stored in browser
- HTTPS recommended for production

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Mock Data

The website comes with 29 pre-populated products across all categories. To add more products or modify existing ones, edit `src/data/products.js`.

## 🎯 Future Enhancements

- Product search functionality
- User accounts and wishlists
- Real payment gateway integration
- Product reviews and ratings
- Order tracking
- Inventory management
- Analytics integration

## 📞 Contact

For questions or support:
- Email: hello@accessoriesbygrace.com
- Instagram: @accessoriesbygrace
- WhatsApp: +1 (234) 567-8900

## 📄 License

© 2024 Accessories by Grace. All rights reserved.

---

**Made with ❤️ for elegant, sophisticated accessories lovers worldwide.**
