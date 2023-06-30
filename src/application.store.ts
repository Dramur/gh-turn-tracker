import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { Element, ElementalInfusion } from './interfaces'

interface State {
  turn: number,
  elements: Element[]
}

export const useApplication = defineStore('application', () => {
  const state = reactive<State>({
    turn: 1,
    elements: [
      {
        name: 'Fire',
        icon: 'fh-fire-color-icon.png',
        infusion: 0
      },
      {
        name: 'Ice',
        icon: 'fh-ice-color-icon.png',
        infusion: 0
      },
      {
        name: 'Earth',
        icon: 'fh-earth-color-icon.png',
        infusion: 0
      },
      {
        name: 'Air',
        icon: 'fh-air-color-icon.png',
        infusion: 0
      },
      {
        name: 'Light',
        icon: 'fh-light-color-icon.png',
        infusion: 0
      },
      {
        name: 'Dark',
        icon: 'fh-dark-color-icon.png',
        infusion: 0
      },
    ]
  })

  const infusedElements = computed(() => state.elements.filter(element => element.infusion > 0))

  const nextTurn = () => {
    state.turn++
    // all elements -1
    state.elements.forEach(element => element.infusion--)
  }

  const resetGame = () => {
    state.turn = 1
    // all elements = 0
    state.elements.forEach(element => element.infusion = 0)
  }

  const infuseElement = (element: Element) => {
    element.infusion = ElementalInfusion.STRONG
  }

  const consumeElement = (element: Element) => {
    element.infusion = ElementalInfusion.INERT
  }

  return {
    state,
    infusedElements,
    nextTurn,
    resetGame,
    infuseElement,
    consumeElement
  }
})
