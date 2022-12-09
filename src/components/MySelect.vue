<script setup lang="ts">
  import { ref } from 'vue'

  const memberTypeSelect = ref(1)
</script>

<template>
  <select v-model="memberTypeSelect">
    <option value="1">一般</option>
    <option value="2">優良</option>
    <option value="3">特別</option>
  </select>
  <p>選択されたリスト: {{ memberTypeSelect }}</p>
</template>
