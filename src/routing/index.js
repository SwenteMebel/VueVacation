import { createRouter, createWebHistory} from 'vue-router'

// De components importeren
import VacationPicker from '@/components/VacationPicker.vue';
import ShowDetails from '@/components/ShowDetails.vue';
import AddCountry from '@/components/AddCountry.vue';
import DeleteCountry from '@/components/DeleteCountry.vue';


const routes = [
    // Hier komen alle routes
    {
        path: '/', // van url 
        name: 'home', // doel van de url 
        component: VacationPicker // de component naam 
    },
    {
        path: '/detail/:id/:name',
        name: 'detail',
        component: ShowDetails
    },
    {
        path: '/add',
        name: 'adding',
        component: AddCountry
    },
    {
        path: '/delete',
        name: 'deleting',
        component: DeleteCountry
    },
    {
        path: '/showall',
        name: 'showall',
        component: () => import(/**/'@/components/Allcountries.vue')
    },
 


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