<script setup lang="ts">
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router'
  import type { Member } from '@/interfaces'
  import { useMembersStore } from '@/stores/members'

  const props = defineProps<{
    id: number
  }>()

  const memberStore = useMembersStore()
  const member = computed((): Member => memberStore.getById(props.id))
  const localNote = computed(() => {
    let localNote = '--'
    if (member.value.note) {
      localNote = member.value.note
    }
    return localNote
  })
</script>

<template>
  <h1>会員管理</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{ name: 'AppTop' }">TOP</RouterLink>
      </li>
      <li>
        <RouterLink v-bind:to="{ name: 'MemberList' }">会員管理</RouterLink>
      </li>
      <li>会員詳細情報</li>
    </ul>
  </nav>
  <section>
    <h2>会員詳細情報</h2>
    <dl>
      <dt>ID</dt>
      <dd>{{ member.id }}</dd>
      <dt>Name</dt>
      <dd>{{ member.name }}</dd>
      <dt>Email</dt>
      <dd>{{ member.email }}</dd>
      <dt>Points</dt>
      <dd>{{ member.points }}</dd>
      <dt>Note</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>
