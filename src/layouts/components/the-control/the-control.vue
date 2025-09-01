<template>
  <div class="the-control">
    <!-- 首页 -->
    <router-link to="/" title="首页">
      <el-button text>
        <app-icon name="el-Monitor"></app-icon>
      </el-button>
    </router-link>
    <!-- 控制面板 -->
    <!-- TODO -->
    <!-- 全屏 -->
    <el-button text title="全屏" @click="handleFullscreen">
      <app-icon name="el-FullScreen"></app-icon>
    </el-button>
    <!-- 头像 -->
    <!-- // TODO -->
    <!-- 设置 -->
    <el-button text title="设置" @click="handleSetting">
      <app-icon name="el-Setting"></app-icon>
    </el-button>
  </div>
  <part-setting-drawer v-if="settingDrawer" v-model:visible="settingDrawer" />
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import AppIcon from '@/components/app-icon.vue'
import { ref } from 'vue'
import PartSettingDrawer from './part-setting.drawer.vue'
const configStore = useConfigStore()

function handleFullscreen() {
  configStore.setFullscreen(!configStore.layout.isFullscreen)
}

const settingDrawer = ref(false)
const handleSetting = () => {
  settingDrawer.value = true
}
</script>

<style lang="scss" scoped>
.the-control {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
  // background-color: #f5f5f5;
  .el-button {
    &:hover {
      .icon {
        animation: twinkle 0.3s ease-in-out;
      }
    }
  }
}
@keyframes twinkle {
  0% {
    transform: scale(0.5);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
