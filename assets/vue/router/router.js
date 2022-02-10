import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Games from '../views/Games.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/games', component: Games, name: 'games' },
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
})

export default router;