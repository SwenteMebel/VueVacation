import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// import router file
import router from '@/routing/index'
import store from '@/store/index'


createApp(App)
.use(store)
.use(router)
.mount('#app')
