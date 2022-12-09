<script setup lang="ts">
  const props = defineProps<{
    rand: number
  }>()

  const emits = defineEmits<{
    (e: 'createNewRand'): void
  }>()

  const onNewRandButtonClick = (): void => {
    emits('createNewRand')
  }
</script>

<template>
  <section class="box">
    <p>rand in Children: {{ rand }}</p>
    <button v-on:click="onNewRandButtonClick">New Random</button>
  </section>
</template>

<style scoped>
  .box {
    border: green 1px solid;
    margin: 10px;
  }
</style>
