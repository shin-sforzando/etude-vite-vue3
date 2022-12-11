<script setup lang="ts">
  import { inject } from 'vue'
  import { RouterLink } from 'vue-router'
  import type { Member } from '@/interfaces'

  const memberList = inject('memberList') as Map<number, Member>
</script>

<template>
  <h1>会員管理</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{ name: 'AppTop' }">TOP</RouterLink>
      </li>
      <li class="current">会員管理</li>
    </ul>
  </nav>
  <section>
    <h2>会員リスト</h2>
    <p><RouterLink v-bind:to="{ name: 'MemberAdd' }">新規登録</RouterLink></p>
    <section>
      <ul>
        <li v-for="[id, member] in memberList" v-bind:key="id">
          <RouterLink v-bind:to="{ name: 'MemberDetail', params: { id: id } }">
            {{ id }}: {{ member.name }}
          </RouterLink>
        </li>
      </ul>
    </section>
  </section>
</template>
