<script setup lang="ts">

const tokenGlobal = useCookie('token')

const router = useRouter()
const pages = router.getRoutes()
</script>

<template>
  <div id="app">
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav class="nav">
      <RouterLink v-for="page in pages" :key="page.path" :to="page.path">{{ page.path }}</RouterLink>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  .nav {
    display: flex;
    gap: 1rem;
  }
  .nav a {
    text-decoration: none;
    color: #000;
  }
  .nav a:hover {
    text-decoration: underline;
  }
</style>


