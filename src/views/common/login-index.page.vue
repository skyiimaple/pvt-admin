<template>
  <div class="tw:h-3/5 tw:flex tw:justify-center-safe tw:items-center">
    <div class="login-container">
      <el-avatar
        :size="70"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      >
        <app-icon name="el-User" />
      </el-avatar>
      <el-divider />
      <el-form
        size="large"
        :model="form"
        :rules="rules"
        ref="formRef"
        label-position="top"
        class="tw:w-full"
      >
        <el-form-item prop="username" class="tw:mt-3">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <app-icon name="el-User" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" class="tw:mt-3">
          <el-input v-model="form.password" placeholder="请输入密码" show-password type="password">
            <template #prefix>
              <app-icon name="el-Lock" />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-divider />
      <el-button
        size="large"
        type="primary"
        @click="handleLogin"
        :loading="loading"
        class="tw:w-full"
      >
        登录
      </el-button>
      <div class="tw:mt-3">还没有账号？<el-link type="primary">去注册</el-link></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppIcon from '@/components/app-icon.vue'
import { type FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
// import { login } from '@/api/common'

const router = useRouter()
const form = reactive({
  username: 'admin',
  password: '123456',
})

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

const formRef = ref<FormInstance>()
const loading = ref(false)

const handleLogin = async () => {
  const result = await formRef.value?.validate()
  if (result) {
    loading.value = true
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (form.username === 'admin' && form.password === '123456') {
          resolve('登录成功')
        } else {
          reject('登录失败')
        }
      }, 800)
    })
      .then((res) => {
        console.log(res)
        ElMessage.success('登录成功')
        loading.value = false
        router.push({ name: 'home' })
      })
      .catch((err) => {
        console.log(err)
        ElMessage.error('登录失败')
        form.password = ''
      })
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 450px;
  padding: 24px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}
</style>
