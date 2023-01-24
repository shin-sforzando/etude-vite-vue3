import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref<number>(0)
    const doubleCount = computed(() => count.value * 2)
    const increment = () => count.value++
    const decrement = () => count.value--
    const randomize = async () => (count.value = Math.floor(Math.random() * 10))
    const reset = () => (count.value = 0)
    return { count, doubleCount, increment, decrement, randomize, reset }
  },
  { persist: true }
)
