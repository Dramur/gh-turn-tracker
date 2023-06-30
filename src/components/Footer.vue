<script setup lang="ts">
import { useApplication } from '@/application.store'
import { toRefs } from 'vue'

const { infuseElement } = useApplication()
const { elements } = toRefs(useApplication().state)
</script>

<template>
  <div class="flex justify-content-center align-items-center mb-2">
    <Button
      v-for="element in elements"
      :key="element.name"
      class="element-button"
      @click="infuseElement(element)"
    >
      <img
        alt="logo"
        :src="'/assets/icons/' + element.icon"
      >
    </Button>
  </div>
</template>

<style scoped>
</style>
