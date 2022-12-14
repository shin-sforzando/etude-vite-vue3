<script setup lang="ts">
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router'
  import type { Member } from '@/interfaces'
  import { useMembersStore } from '@/stores/members'

  const memberStore = useMembersStore()
  memberStore.prepareMemberList()
  const memberList = computed((): Map<number, Member> => memberStore.memberList)
  const isMemberListEmpty = computed((): boolean => {
    return memberStore.isMemberListEmpty
  })
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
        <li v-if="isMemberListEmpty">会員が存在しません。</li>
        <li v-for="[id, member] in memberList" v-bind:key="id">
          <RouterLink v-bind:to="{ name: 'MemberDetail', params: { id: id } }">
            {{ id }}: {{ member.name }}
          </RouterLink>
        </li>
      </ul>
    </section>
  </section>
</template>
