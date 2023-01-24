<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps({
    modelValue: {
      type: String,
      default: 'Hello World',
    },
  })
  const inputNameModel = ref(props.modelValue)
</script>

<template>
  <input type="text" v-model="inputNameModel" />
  <p>{{ inputNameModel }}</p>
</template>
