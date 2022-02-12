// styles
import './styles/app.scss';

// vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './vue/router/router.js';
import App from "./vue/app.vue";
import store from "./vue/store/store";

// vue components
import PoodlNavigation from './vue/layouts/PoodlNavigation';
import PoodlNavigationButton from './vue/components/PoodlNavigationButton';

// adds Router and Store as plugins
Vue.use(VueRouter);
Vue.use(Vuex);

// add components global so we don't have to
// import them all the time
Vue.component('poodl-navigation', PoodlNavigation);
Vue.component('poodl-navigation-button', PoodlNavigationButton);

// Setup the Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");