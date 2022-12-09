<script setup lang="ts">
  import { ref } from 'vue'

  const inputNameModel = ref('John')
</script>

<template>
  <input type="text" v-model="inputNameModel" />
  <p>{{ inputNameModel }}</p>
</template>
