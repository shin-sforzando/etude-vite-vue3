<script setup lang="ts">
  import { computed, ref } from 'vue'
  import OneMember, { Member } from '@/components/OneMember.vue'

  const memberListInit = new Map<number, Member>()
  memberListInit.set(1, {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    points: 10,
    note: 'Guest',
  })
  memberListInit.set(2, {
    id: 2,
    name: 'Jane',
    email: 'jane@example.com',
    points: 20,
  })
  const memberList = ref(memberListInit)

  const totalPoints = computed((): number => {
    let total = 0
    memberList.value.forEach((member) => {
      total += member.points
    })
    return total
  })
</script>

<template>
  <section>
    <h1>Member List</h1>
    <h2>Total Points: {{ totalPoints }}</h2>
    <OneMember
      v-for="[id, member] in memberList"
      v-bind:key="id"
      v-bind:id="id"
      v-bind:name="member.name"
      v-bind:email="member.email"
      v-model:points="member.points"
      v-bind:note="member.note"
    />
  </section>
</template>
