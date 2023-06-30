<script setup lang="ts">
import { useApplication } from '@/application.store'
import { toRefs } from 'vue'

const { nextTurn, resetGame } = useApplication()
const { turn } = toRefs(useApplication().state)
</script>

<template>
  <Toolbar>
    <template #center>
      <p class="turn-counter">
        Turn {{ turn }}
      </p>
    </template>

    <template #end>
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
    </template>
  </Toolbar>
</template>

<style scoped>
</style>
