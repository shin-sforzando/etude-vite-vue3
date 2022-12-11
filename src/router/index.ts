import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
