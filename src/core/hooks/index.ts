import type { App } from 'vue'
import { vScreen } from './v-screen/v-screen'
import { vCenter } from './v-center/v-center'

// 注册所有指令

// 注册指令
export function registerDirectives(app: App) {
  app.directive('screen', vScreen)
  app.directive('center', vCenter)
}
