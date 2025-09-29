import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/styles/index.css'
import { registerElementPlus } from '@/utils/common'
import { registerDirectives } from '@/core/hooks'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
//注册图标
registerElementPlus(app)
//注册自定义指令
registerDirectives(app)
app.mount('#app')
