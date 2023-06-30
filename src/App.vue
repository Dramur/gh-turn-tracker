<script setup lang="ts">
import Header from './components/Header.vue'
import InfusedElementsList from './components/InfusedElementsList.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />

  <InfusedElementsList />

  <Footer />
</template>

<style scoped>
img.logo {
  width: 10rem;
  height: 10rem;
}

img.small {
  width: 5rem;
  height: 5rem;
}
</style>
