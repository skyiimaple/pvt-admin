<template>
  <component :is="currentComponent">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <transition name="slide-top" mode="out-in">
          <component :is="Component" />
        </transition>
      </template>
    </router-view>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LayoutDefault from '@/layouts/mode/layout-default.vue'
import LayoutClassic from '@/layouts/mode/layout-classic.vue'
import LayoutDouble from '@/layouts/mode/layout-double.vue'
import LayoutLine from '@/layouts/mode/layout-line.vue'
import { useConfigStore } from '@/stores/config'

defineOptions({
  components: {
    'layout-default': LayoutDefault,
    'layout-classic': LayoutClassic,
    'layout-double': LayoutDouble,
    'layout-line': LayoutLine,
  },
})

const config = useConfigStore()

const currentComponent = computed(() => {
  return 'layout-' + config.layout.layoutMode.toLocaleLowerCase()
})
</script>

<style lang="scss" scoped></style>
