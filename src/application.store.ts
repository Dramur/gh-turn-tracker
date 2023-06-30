import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface State {
  turn: number
}

export const useApplication = defineStore('application', () => {
  const state = reactive<State>({
    turn: 0,
  })

  return {
    state,
  }
})
