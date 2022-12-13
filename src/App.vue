<script setup lang="ts">
  import { computed } from 'vue'
  import { useCounterStore } from '@/stores/counter'

  const counterStore = useCounterStore()

  const count = computed((): number => counterStore.counter)
  const doubleCount = computed((): number => counterStore.doubleCounter)
  const onIncrementalClick = () => counterStore.increment()
</script>

<template>
  <p>Current Point: {{ count }}</p>
  <p>Double: {{ doubleCount }}</p>
  <button v-on:click="onIncrementalClick">加算</button>
</template>

<style>
  main {
    border: blue 1px solid;
    padding: 10px;
  }

  #breadcrumbs {
    margin-left: 0;
  }

  #breadcrumbs ul {
    padding-left: 0;
  }

  #breadcrumbs ul .current {
    color: red;
  }

  #breadcrumbs ul li::before {
    content: ' > ';
  }

  #breadcrumbs ul li:first-child::before {
    content: '';
  }

  #breadcrumbs ul li {
    display: inline;
    list-style-type: none;
  }
</style>
