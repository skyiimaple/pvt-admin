<template>
  <div class="tw:h-full" v-center>
    <vxe-empty content="404"> </vxe-empty>
    <div class="tw:flex">
      <span>页面不存在,</span>
      <router-link to="/home">
        <vxe-button mode="text" status="danger">返回登录页</vxe-button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
