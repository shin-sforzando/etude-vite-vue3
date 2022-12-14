import { defineStore } from 'pinia'
import type { Member } from '@/interfaces'

interface State {
  memberList: Map<number, Member>
}

export const useMembersStore = defineStore({
  id: 'members',
  state: (): State => {
    return {
      memberList: new Map<number, Member>(),
    }
  },
  getters: {
    getById: (state) => {
      return (id: number): Member => {
        return state.memberList.get(id) as Member
      }
    },
    isMemberListEmpty: (state): boolean => {
      return state.memberList.size === 0
    },
  },
  actions: {
    prepareMemberList(): void {
      let memberList = new Map<number, Member>()
      const memberListJsonStr = sessionStorage.getItem('memberList')
      if (memberListJsonStr != null) {
        const memberListJson = JSON.parse(memberListJsonStr)
        memberList = new Map<number, Member>(memberListJson)
      }
      this.memberList = memberList
    },
    insertMember(member: Member): void {
      this.memberList.set(member.id, member)
      sessionStorage.setItem('memberList', JSON.stringify([...this.memberList]))
    },
  },
})
