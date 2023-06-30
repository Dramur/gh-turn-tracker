<script setup lang="ts">
import { useApplication } from '@/application.store'

const store = useApplication()
</script>

<template>
  <div class="flex flex-wrap align-items-center">
    <div
      v-for="element in store.infusedElements"
      :key="element.name"
      class="col"
    >
      <Button
        class="element-button"
        :class="element.infusion === 2 ? 'strong' : 'waning'"
        @click="store.consumeElement(element)"
      >
        <img
          alt="logo"
          :src="'/icons/' + element.icon"
        >
      </Button>
    </div>
  </div>
</template>

<style scoped>
</style>
