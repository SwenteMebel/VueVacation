import { createRouter, createWebHistory} from 'vue-router'

// De components importeren
import VacationPicker from '@/components/VacationPicker.vue';


const routes = [
    // Hier komen alle routes
    {
        path: '/',
        name: 'home',
        component: VacationPicker
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



//  voor een Vue2.x versie 
// import Vue from 'vue';
// import Router from 'vue-router';
// Vue.use(Router)
// export default new Router({
    // routers: [
        //alle routes komen hier
    // ]
//})

export default router; 