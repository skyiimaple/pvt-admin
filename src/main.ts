import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/styles/index.css'
import { registerDirectives } from '@/core/hooks'
import VxeUIAll from 'vxe-pc-ui'
import VxeUITable from 'vxe-table'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.use(VxeUIAll)
app.use(VxeUITable)
//注册自定义指令
registerDirectives(app)
app.mount('#app')
