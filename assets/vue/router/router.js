import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import BuyPoodl from '../views/BuyPoodl.vue';
import Team from '../views/Team.vue';
import Games from '../views/Games.vue';
import Charity from '../views/Charity.vue';
import WhitePaper from '../views/WhitePaper.vue';
import ErrorFourZeroFour from '../views/errors/ErrorFourZeroFour.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/buy', component: BuyPoodl, name: 'buypoodl' },
    { path: '/team', component: Team, name: 'team' },
    { path: '/games', component: Games, name: 'games' },
    { path: '/charity', component: Charity, name: 'charity' },
    { path: '/whitepaper', component: WhitePaper, name: 'whitepaper' },
    { path: '*', component: ErrorFourZeroFour, name: 'error404' },
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
})

export default router;