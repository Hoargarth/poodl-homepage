import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './vue/components/Home.vue';
import Games from './vue/components/Games.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/games', component: Games, name: 'games' },
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
})

Vue.use(VueRouter)

new Vue({
    router,
}).$mount('#app')