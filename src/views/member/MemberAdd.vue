<script setup lang="ts">
  import { inject, reactive } from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import type { Member } from '@/interfaces'

  const router = useRouter()

  const memberList = inject('memberList') as Map<number, Member>
  const member: Member = reactive({
    id: 0,
    name: '',
    email: '',
    points: 0,
    note: '',
  })

  const onAdd = (): void => {
    console.log(member)
    memberList.set(member.id, member)
    router.push({ name: 'MemberDetail', params: { id: member.id } })
  }
</script>

<template>
  <h1>会員管理</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{ name: 'AppTop' }">TOP</RouterLink>
      </li>
      <li>
        <RouterLink v-bind:to="{ name: 'MemberList' }">会員リスト</RouterLink>
      </li>
      <li class="current">会員情報追加</li>
    </ul>
  </nav>
  <section>
    <h2>会員管理</h2>
    <p>情報を入力してください。</p>
    <form v-on:submit.prevent="onAdd">
      <dl>
        <dt>ID</dt>
        <dd>
          <input
            type="number"
            name="addId"
            id="addId"
            v-model.number="member.id"
            required
          />
        </dd>
        <dt>Name</dt>
        <dd>
          <input
            type="text"
            name="addName"
            id="addName"
            v-model="member.name"
            required
          />
        </dd>
        <dt>Email</dt>
        <dd>
          <input
            type="email"
            name="addEmail"
            id="addEmail"
            v-model="member.email"
            required
          />
        </dd>
        <dt>Points</dt>
        <dd>
          <input
            type="number"
            name="addPoints"
            id="addPoints"
            v-model.number="member.points"
            required
          />
        </dd>
        <dt>Note</dt>
        <dd>
          <textarea
            name="addNote"
            id="addNote"
            v-model="member.note"
          ></textarea>
        </dd>
      </dl>
      <button type="submit">登録</button>
    </form>
  </section>
</template>
