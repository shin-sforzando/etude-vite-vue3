<script setup lang="ts">
  import { computed } from 'vue'

  export interface Member {
    id: number
    name: string
    email: string
    points: number
    note?: string
  }
  const props = defineProps<Member>()

  const emits = defineEmits<{
    (event: 'update:points', points: number): void
  }>()

  const localNote = computed((): string => {
    let localNote = props.note
    if (!localNote) {
      localNote = '---'
    }
    return localNote
  })
  const onInput = (event: Event): void => {
    const target = event.target as HTMLInputElement
    const value = target.value
    emits('update:points', Number(value))
  }
</script>

<template>
  <section class="box">
    <h4>{{ name }}</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>Email</dt>
      <dd>{{ email }}</dd>
      <dt>Points</dt>
      <dd>
        <input type="number" v-bind:value="points" v-on:input="onInput" />
      </dd>
      <dt>Note</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>

<style scoped>
  .box {
    border: green 1px solid;
    margin: 10px;
  }
</style>
