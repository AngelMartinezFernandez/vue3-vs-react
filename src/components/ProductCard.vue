<script setup>
// Conceptos Vue vs React:
// - defineProps === props destructuring
// - defineEmits === callback props
// - v-bind(:) === {}
// - template === return implícito
// - scoped CSS === CSS Modules/styled-components
import { useShopStore } from '../stores/shop'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const store = useShopStore()

const addToCart = () => {
  store.addToCart(props.product)
}
</script>

<template>
  <div class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-48 object-cover rounded-md mb-4"
    />
    <h2 class="text-xl font-bold mb-2">{{ product.name }}</h2>
    <p class="text-gray-600 mb-4">€{{ product.price }}</p>
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-500">Stock: {{ product.stock }}</span>
      <button
        @click="addToCart"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Añadir al carrito
      </button>
    </div>
  </div>
</template>
