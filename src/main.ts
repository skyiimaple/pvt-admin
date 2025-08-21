import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/styles/index.css'
import { registerElementPlus } from '@/utils/common'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
//注册图标
registerElementPlus(app)
app.mount('#app')
