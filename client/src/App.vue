<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavVue from './components/Nav.vue'
  import WelcomeUser from './components/WelcomeUserBanner.vue'
</script>

<template>

  <header>
    <WelcomeUser />
    <NavVue />
  </header>

  <div>
    <RouterView />
  </div>

</template>

<style scoped>
</style>
