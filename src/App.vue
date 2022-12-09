<script setup lang="ts">
  import { provide, reactive } from 'vue'
  import BaseSection from '@/components/BaseSection.vue'
  import { Member } from '@/interfaces'

  const memberList = new Map<number, Member>()
  memberList.set(1, {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    points: 10,
    note: 'Special Guest',
  })
  memberList.set(2, {
    id: 2,
    name: 'Jane',
    email: 'jane@example.com',
    points: 20,
  })
  provide('memberList', reactive(memberList))
</script>

<template>
  <BaseSection />
</template>
