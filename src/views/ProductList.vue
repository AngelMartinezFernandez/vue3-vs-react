<script setup>
// Conceptos Vue vs React:
// - defineProps === props parameter
// - v-for === map()
// - :key === key prop
// - v-if/v-else === ternario/&&
// - @click === onClick
// - :class === className/classList
import { useShopStore } from '../stores/shop'
import { useProducts } from '../composables/useProducts'
import ProductCard from '../components/ProductCard.vue'
import { watch } from 'vue'

const store = useShopStore()
const { products, loading, error } = useProducts()

// Actualizamos el store cuando los productos cambian
watch(products, (newProducts) => {
  store.setProducts(newProducts)
})
</script>

<template>
  <div>
    <div v-if="loading" class="text-center py-10">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
      <p class="mt-2 text-gray-600">Cargando productos...</p>
    </div>

    <div v-else-if="error" class="text-center py-10 text-red-500">
      {{ error }}
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
    >
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
