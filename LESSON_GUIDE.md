# Guía de la Clase: Vue 3 vs React

## Objetivos

- Entender las similitudes y diferencias entre Vue 3 y React
- Implementar una tienda online básica
- Comprender los conceptos fundamentales de Vue 3

## Bloque 1: Configuración (30 min)

### 1.1 Crear Proyecto

```bash
npm create vue@latest
cd vue3-vs-react
npm install
```

### 1.2 Instalar Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 1.3 Configurar VS Code

- Instalar Volar
- Instalar Tailwind CSS IntelliSense
- Configurar settings.json:
  ```json
  {
    "css.lint.unknownAtRules": "ignore",
    "files.associations": {
      "*.css": "tailwindcss"
    },
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit"
    }
  }
  ```

> 💡 Crear carpeta `.vscode` en la raíz del proyecto y dentro crear `settings.json` con esta configuración

## Bloque 2: Estructura y Router (30 min)

### 2.1 Layouts

- Explicar concepto de layouts vs React
- Implementar MainLayout.vue
- Comparar slots vs children props

### 2.2 Router

- Configurar rutas
- Comparar con React Router
- Explicar RouterLink vs Link

## Bloque 3: Estado Global (30 min)

### 3.1 Pinia vs Redux/Context

- Configurar store
- Explicar actions vs reducers
- Mostrar reactividad automática

### 3.2 Implementación del Carrito

- Añadir productos
- Gestionar cantidades
- Calcular totales

## Bloque 4: Componentes y API (30 min)

### 4.1 Composables

- Crear useProducts
- Comparar con custom hooks
- Implementar fetch de datos

### 4.2 Componentes

- ProductCard (props y eventos)
- ProductList (v-for y condicionales)
- ShoppingCart (computed y watch)

## Bloque 5: Conceptos Avanzados (30 min)

### 5.1 Composition API

- ref vs reactive
- computed vs useMemo
- watch vs useEffect

### 5.2 Templates vs JSX

- Directivas Vue
- Sintaxis de eventos
- Binding de clases

## Recursos Adicionales

- [Documentación Vue 3](https://vuejs.org/)
- [Documentación Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Ejercicios Prácticos

1. Añadir filtro de productos
2. Implementar paginación
3. Añadir persistencia al carrito
4. Crear página de detalle del producto
