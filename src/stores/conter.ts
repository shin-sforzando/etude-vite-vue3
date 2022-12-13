import { defineStore } from 'pinia'

interface State {
  counter: number
}

export const useCounterStore = defineStore({
  id: 'counter',
  state: (): State => ({
    counter: 0,
  }),
  getters: {
    doubleCounter(): number {
      return this.counter * 2
    },
  },
  actions: {
    increment(): void {
      this.counter++
    },
  },
})
