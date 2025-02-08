import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => ({
    cart: [],
    products: [],
  }),
  actions: {
    setProducts(products) {
      this.products = products
    },
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id)
      const cartQuantity = existingItem ? existingItem.quantity : 0

      if (cartQuantity < product.stock) {
        if (existingItem) {
          existingItem.quantity++
        } else {
          this.cart.push({ ...product, quantity: 1 })
        }
      }
    },
    removeFromCart(productId) {
      const index = this.cart.findIndex((item) => item.id === productId)
      if (index > -1) {
        this.cart.splice(index, 1)
      }
    },
    updateQuantity(productId, quantity) {
      const item = this.cart.find((item) => item.id === productId)
      const product = this.products.find((p) => p.id === productId)
      if (item && product && quantity > 0 && quantity <= product.stock) {
        item.quantity = quantity
      }
    },
  },
  getters: {
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    cartItemsCount: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
    getItemQuantityInCart: (state) => (productId) => {
      const item = state.cart.find((item) => item.id === productId)
      return item ? item.quantity : 0
    },
  },
})
