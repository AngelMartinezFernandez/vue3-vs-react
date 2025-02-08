<script setup>
// Conceptos Vue vs React:
// - Reactividad automática === useState + useEffect
// - Methods === funciones normales
// - Computed === useMemo/useCallback
// - Store injection === Context consumption
// - Template refs === useRef
import { useShopStore } from '../stores/shop'

const store = useShopStore()

const updateQuantity = (item, newQuantity) => {
  if (newQuantity > 0 && newQuantity <= item.stock) {
    store.updateQuantity(item.id, newQuantity)
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-2xl font-bold mb-4">Tu Carrito</h2>

    <div v-if="store.cart.length === 0" class="text-gray-500">
      El carrito está vacío
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="item in store.cart"
        :key="item.id"
        class="flex justify-between items-center p-4 border rounded"
      >
        <div>
          <h3 class="font-medium">{{ item.name }}</h3>
          <p class="text-gray-600">€{{ item.price }} x {{ item.quantity }}</p>
          <p class="font-medium">Total: €{{ (item.price * item.quantity).toFixed(2) }}</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <button
              @click="updateQuantity(item, item.quantity - 1)"
              class="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              -
            </button>
            <span class="w-8 text-center">{{ item.quantity }}</span>
            <button
              @click="updateQuantity(item, item.quantity + 1)"
              class="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              +
            </button>
          </div>
          <button
            @click="store.removeFromCart(item.id)"
            class="text-red-500 hover:text-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>

      <div class="pt-4 border-t mt-6">
        <p class="text-xl font-bold">
          Total: €{{ store.cartTotal.toFixed(2) }}
        </p>
      </div>
    </div>
  </div>
</template>
