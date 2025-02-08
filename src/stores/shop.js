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
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
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
      if (item) {
        item.quantity = quantity
      }
    },
  },
  getters: {
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    cartItemsCount: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
  },
})
