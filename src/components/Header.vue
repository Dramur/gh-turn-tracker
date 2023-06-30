<script setup lang="ts">
import { useApplication } from '@/application.store'
import { toRefs } from 'vue'

const { nextTurn, resetGame } = useApplication()
const { turn } = toRefs(useApplication().state)
</script>

<template>
  <div class="flex align-items-center justify-content-center">
    Turn {{ turn }}
    <Button
      icon="pi pi-step-forward"
      class="m-2"
      @click="nextTurn"
    />
    <Button
      icon="pi pi-refresh"
      class="m-2"
      @click="resetGame"
    />
  </div>
</template>

<style scoped>
</style>
