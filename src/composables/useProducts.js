// Conceptos Vue vs React:
// - composable === custom hook
// - ref/reactive === useState
// - onMounted === useEffect(() => {}, [])
// - try/catch === try/catch en useEffect

import { ref, onMounted } from 'vue'

export function useProducts() {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
      const data = await response.json()

      // Aplicamos patrón mapper para transformar los datos de la API y hacerlos nuestros, definiendo la estructura de los datos que queremos
      // de esta manera si trabajamos con API's externas, podemos adaptar los datos a nuestras necesidades y en caso de que la API cambie, no afecte a nuestro código ya que solo modificamos el mapper
      products.value = data.map((product) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        stock: Math.floor(Math.random() * 10) + 1, // Número aleatorio entre 1 y 10
        image: product.images[0],
      }))
    } catch (e) {
      error.value = 'Error al cargar los productos'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchProducts)

  return {
    products,
    loading,
    error,
    fetchProducts,
  }
}
