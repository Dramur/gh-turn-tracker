<script setup lang="ts">
import { useApplication } from '@/application.store'
import { toRefs } from 'vue'

const { infuseElement } = useApplication()
const { elements } = toRefs(useApplication().state)
</script>

<template>
  <div class="flex flex-wrap justify-content-center align-items-center mb-2">
    <div
      v-for="element in elements"
      :key="element.name"
      class="col"
    >
      <Button
        class="element-button"
        @click="infuseElement(element)"
      >
        <img
          :alt="element.name"
          :src="'./icons/' + element.icon"
        >
      </Button>
    </div>
  </div>
</template>

<style scoped>
</style>
