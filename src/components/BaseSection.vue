<script setup lang="ts">
  import { Member } from '@/interfaces'
  import { computed, inject } from 'vue'
  import OneMember from '@/components/OneMember.vue'

  const memberList = inject('memberList') as Map<number, Member>
  const totalPoints = computed((): number => {
    let total = 0
    for (const member of memberList.values()) {
      total += member.points
    }
    return total
  })
</script>

<template>
  <section>
    <h2>Member List</h2>
    <h3>Total Points: {{ totalPoints }}</h3>
    <OneMember v-for="id in memberList.keys()" v-bind:key="id" v-bind:id="id" />
  </section>
</template>

<style scoped>
  section {
    border: orange 1px dashed;
    margin: 10px;
  }
</style>
