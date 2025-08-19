<template>
  <el-config-provider :locale="zhCn">
    <h1 class="tw:text-blue-500">You did it!</h1>
    <el-button @click="dialogOverflowVisible = true">Open Dialog</el-button>
    <el-dialog v-model="dialogOverflowVisible" title="Tips" width="500" draggable overflow>
      <span>It's a overflow draggable Dialog</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogOverflowVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogOverflowVisible = false"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ref } from 'vue'
const dialogOverflowVisible = ref(false)
</script>
