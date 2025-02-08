<script setup>
// Conceptos Vue vs React:
// - defineProps === props destructuring
// - defineEmits === callback props
// - v-bind(:) === {}
// - template === return implícito
// - scoped CSS === CSS Modules/styled-components
import { useShopStore } from '../stores/shop'
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const store = useShopStore()

const quantityInCart = computed(() => store.getItemQuantityInCart(props.product.id))
const isMaxStock = computed(() => quantityInCart.value >= props.product.stock)

const addToCart = () => {
  if (!isMaxStock.value) {
    store.addToCart(props.product)
  }
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
      <span class="text-sm text-gray-500">
        Stock: {{ product.stock }}
        <span v-if="quantityInCart" class="ml-1">
          ({{ quantityInCart }} en carrito)
        </span>
      </span>
      <button
        @click="addToCart"
        :disabled="isMaxStock"
        class="bg-blue-500 text-white px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        :class="{ 'hover:bg-blue-600': !isMaxStock }"
      >
        {{ isMaxStock ? 'Stock máximo' : 'Añadir al carrito' }}
      </button>
    </div>
  </div>
</template>
