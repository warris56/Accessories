import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      
      addToCart: (product) => set((state) => {
        const existingItem = state.cart.find(item => item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor)
        
        if (existingItem) {
          return {
            cart: state.cart.map(item =>
              item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            )
          }
        }
        
        return { cart: [...state.cart, { ...product, quantity: product.quantity || 1 }] }
      }),
      
      removeFromCart: (productId, size, color) => set((state) => ({
        cart: state.cart.filter(item => !(item.id === productId && item.selectedSize === size && item.selectedColor === color))
      })),
      
      updateQuantity: (productId, size, color, quantity) => set((state) => ({
        cart: state.cart.map(item =>
          item.id === productId && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
      })),
      
      clearCart: () => set({ cart: [] }),
      
      getTotalItems: () => {
        const state = useCartStore.getState()
        return state.cart.reduce((total, item) => total + item.quantity, 0)
      },
      
      getTotalPrice: () => {
        const state = useCartStore.getState()
        return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
      }
    }),
    {
      name: 'grace-cart-store'
    }
  )
)
