import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppTop from '@/views/AppTop.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppTop',
    component: AppTop,
  },
  {
    path: '/member/memberList',
    name: 'MemberList',
    component: async () => {
      return await import('@/views/member/MemberList.vue')
    },
  },
  {
    path: '/member/memberDetail/:id',
    name: 'MemberDetail',
    component: async () => {
      return await import('@/views/member/MemberDetail.vue')
    },
    props: (routes) => {
      return { id: Number(routes.params.id) }
    },
  },
  {
    path: '/member/add',
    name: 'MemberAdd',
    component: async () => {
      return await import('@/views/member/MemberAdd.vue')
    },
  },
]

const router = (type: 'history' | 'memory' = 'history') => {
  const history =
    type === 'memory'
      ? createMemoryHistory(import.meta.env.BASE_URL)
      : createWebHistory(import.meta.env.BASE_URL)
  return createRouter({ history, routes })
}

export default router
