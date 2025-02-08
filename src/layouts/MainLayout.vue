<script setup>
// Conceptos Vue vs React:
// - <slot> === children prop
// - RouterLink === Link de react-router-dom
// - useShopStore === useContext/useSelector + useDispatch
// - active-class === activeClassName/activeStyle
// - template === return () de JSX
import { RouterLink } from 'vue-router'
import { useShopStore } from '../stores/shop'

const store = useShopStore()
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-6">
            <h1 class="text-xl font-bold text-gray-800">Vue Shop</h1>
            <div class="flex gap-4">
              <RouterLink
                to="/"
                class="text-gray-600 hover:text-gray-800 transition-colors"
                active-class="text-blue-600 font-medium"
              >
                Productos
              </RouterLink>
              <RouterLink
                to="/cart"
                class="text-gray-600 hover:text-gray-800 transition-colors"
                active-class="text-blue-600 font-medium"
              >
                Carrito ({{ store.cartItemsCount }})
              </RouterLink>
            </div>
          </div>
          <span class="font-bold">
            Total: €{{ store.cartTotal.toFixed(2) }}
          </span>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 px-4">
      <slot />
    </main>
  </div>
</template>
