<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()
</script>

<template>
  <h1>TOP</h1>
  <h2>Counter</h2>
  <label for="count">Count: </label>
  <input type="number" id="count" v-model="store.count" />
  <button v-on:click="store.increment">+</button>
  <button v-on:click="store.decrement">-</button>
  <button v-on:click="store.randomize">Random</button>
  <button v-on:click="store.reset">Reset</button>
  <nav id="breadcrumbs">
    <ul>
      <li>TOP</li>
    </ul>
  </nav>
  <section>
    <p>
      <RouterLink v-bind:to="{ name: 'MemberList' }"
        >会員管理はこちら</RouterLink
      >
    </p>
  </section>
</template>
