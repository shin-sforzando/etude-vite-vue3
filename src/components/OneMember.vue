<script setup lang="ts">
  import { Member } from '@/interfaces'
  import { computed, inject } from 'vue'

  const props = defineProps<{ id: number }>()
  const memberList = inject('memberList') as Map<number, Member>
  const member = computed((): Member => memberList.get(props.id) as Member)

  const localNote = computed((): string => {
    return member.value.note || '---'
  })
</script>

<template>
  <section class="box">
    <h4>{{ member.name }}</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ member.id }}</dd>
      <dt>Email</dt>
      <dd>{{ member.email }}</dd>
      <dt>Points</dt>
      <dd><input type="number" v-model.number="member.points" /></dd>
      <dt>Note</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>

<style scoped>
  .box {
    border: green 1px solid;
    margin: 10px;
  }
</style>
