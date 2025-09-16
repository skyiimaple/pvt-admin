import type { User } from '@/types/user/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const setUser = (userData: User) => {
    user.value = userData
  }
  return {
    user,
    setUser,
  }
})
