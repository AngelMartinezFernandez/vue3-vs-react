import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ShoppingCart from '../views/ShoppingCart.vue'

// Conceptos Vue vs React:
// - createRouter === createBrowserRouter
// - history === BrowserRouter
// - routes array === Route components
// - component prop === element prop
// - path === path
// - name (no existe en React Router, es una ventaja de Vue)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductList,
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart,
    },
  ],
})

export default router
