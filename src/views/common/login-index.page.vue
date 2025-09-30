<template>
  <div class="tw:h-full tw:flex tw:justify-center-safe tw:items-center">
    <div class="login-container">
      <div class="tw:pb-6">
        <img src="@/assets/image/fly.svg" alt="logo" class="tw:w-32 tw:h-32" />
      </div>
      <vxe-form ref="formRef" :data="form" :rules="rules">
        <vxe-form-item span="24" field="username" :item-render="{}">
          <vxe-input
            v-model="form.username"
            prefix-icon="vxe-icon-user-fill"
            placeholder="请输入用户名"
          >
          </vxe-input>
        </vxe-form-item>
        <vxe-form-item span="24" field="password" :item-render="{}">
          <vxe-password-input
            v-model="form.password"
            prefix-icon="vxe-icon-lock-fill"
            placeholder="请输入密码"
            show-password
            type="password"
          >
          </vxe-password-input>
        </vxe-form-item>
      </vxe-form>
      <div class="tw:p-2 tw:w-full">
        <vxe-button status="primary" @click="handleLogin" :loading="loading" class="tw:w-full">
          {{ loading ? '登录中' : '登录' }}
        </vxe-button>
      </div>
      <div class="tw:mt-3">还没有账号？去注册</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import http from '@/core/http'
import { VxeUI, type VxeFormInstance, type VxeFormPropTypes } from 'vxe-pc-ui'
const router = useRouter()
const form = reactive({
  username: 'admin',
  password: '123456',
})

const rules = ref<VxeFormPropTypes.Rules<typeof form>>({
  username: [{ required: true, message: '请填写用户名' }],
  password: [{ required: true, message: '请填写密码' }],
})

const formRef = ref<VxeFormInstance>()
const loading = ref(false)

const handleLogin = async () => {
  const result = await formRef.value?.validate()
  if (!result) {
    const formData = new FormData()
    formData.append('username', form.username)
    formData.append('password', form.password)
    loading.value = true
    http
      .post('/api/auth/login', formData)
      .then(() => {
        VxeUI.modal.message({ content: '登录成功', status: 'success' })
        loading.value = false
        router.push({ name: 'home' })
      })
      .finally(() => {
        loading.value = false
      })
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  box-sizing: content-box;
  width: 360px;
  padding: 64px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  img {
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    transition: all 0.3s ease-in-out;
  }
}
</style>
