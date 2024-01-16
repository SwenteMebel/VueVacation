import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// import router file
import router from '@/routing/index'


createApp(App)
.use(router)
.mount('#app')
