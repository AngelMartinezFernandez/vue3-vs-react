<script setup>
// En React sería:
// import { BrowserRouter } from 'react-router-dom'
import { RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

// <script setup> es similar a un componente funcional en React
// La diferencia es que no necesitamos declarar explícitamente el componente
// React: const App = () => { return (...) }

// Conceptos Vue vs React:
// - <script setup> === functional component
// - RouterView === <Routes> + <Outlet>
// - Composition API === React Hooks
// - ref/reactive === useState
// - computed === useMemo
// - watch/watchEffect === useEffect
</script>

<template>
  <!--
    En React sería:
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route ... />
        </Routes>
      </MainLayout>
    </BrowserRouter>

    La diferencia principal es que en Vue:
    1. El router ya está configurado en main.js (similar a un Router Provider)
    3. RouterView es el equivalente a Routes en React Router
  -->
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>
