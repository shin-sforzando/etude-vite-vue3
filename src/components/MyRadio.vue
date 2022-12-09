<script setup lang="ts">
  import { ref } from 'vue'

  const memberType = ref(1)
</script>

<template>
  <label>
    <input type="radio" name="memberType" v-model="memberType" value="1" />
    一般</label
  ><label>
    <input type="radio" name="memberType" v-model="memberType" value="2" />
    優良</label
  ><label>
    <input type="radio" name="memberType" v-model="memberType" value="3" />
    特別</label
  >
  <p>選択されたラジオボタン: {{ memberType }}</p>
</template>
