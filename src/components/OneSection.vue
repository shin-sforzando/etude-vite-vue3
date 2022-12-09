<script setup lang="ts">
  import { reactive } from 'vue'

  const memberInfo = reactive({
    name: 'John',
    status: '連絡がつきません',
  })
</script>

<template>
  <section>
    <slot v-bind:memberInfo="memberInfo">
      <h1>{{ memberInfo.name }}</h1>
      <p>{{ memberInfo.status }}</p>
    </slot>
  </section>
</template>
