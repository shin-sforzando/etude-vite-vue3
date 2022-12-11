<script setup lang="ts">
  import { provide, reactive } from 'vue'
  import { RouterView } from 'vue-router'
  import type { Member } from '@/interfaces'

  const memberList = new Map<number, Member>()
  memberList.set(1, {
    id: 1,
    name: 'John',
    email: 'jojn@example.com',
    points: 0,
  })
  memberList.set(2, {
    id: 2,
    name: 'Jane',
    email: 'jane@example.com',
    points: 0,
    note: 'Special Guest',
  })
  provide('memberList', reactive(memberList))
</script>

<template>
  <header>
    <h1>Sample of Vue Router</h1>
  </header>
  <main>
    <RouterView />
  </main>
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
    content: '>';
  }

  #breadcrumbs ul li:first-child::before {
    content: '';
  }

  #breadcrumbs ul li {
    display: inline;
    list-style-type: none;
  }
</style>
