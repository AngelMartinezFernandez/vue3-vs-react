# Vue 3 vs React - Tienda Online

Proyecto de ejemplo para mostrar las similitudes y diferencias entre Vue 3 y React, implementando una tienda online básica.

## Características

- Vue 3 Composition API
- Pinia para gestión de estado
- Vue Router
- Tailwind CSS
- Fake API de Platzi
- Composables (Custom Hooks en React)

## Conceptos Vue vs React

- Composition API ≈ React Hooks
- Pinia ≈ Redux/Context
- Composables ≈ Custom Hooks
- Template Syntax ≈ JSX
- `<script setup>` ≈ Functional Components

## Configuración del Proyecto

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.template .env

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Linting
npm run lint
```

## Variables de Entorno

El proyecto usa las siguientes variables de entorno:

```env
VITE_API_BASE_URL=https://api.escuelajs.co/api/v1  # URL base de la API
```

> 💡 Copia `.env.template` a `.env` y ajusta los valores según necesites

## Estructura del Proyecto

```
src/
  ├── components/      # Componentes reutilizables
  ├── composables/     # Lógica reutilizable (similar a custom hooks)
  ├── layouts/         # Layouts de la aplicación
  ├── stores/          # Estado global con Pinia
  ├── views/           # Páginas/Vistas
  └── App.vue          # Componente raíz
```

## Extensiones Recomendadas VS Code

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
