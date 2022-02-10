// styles
import './styles/app.scss';

// vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './vue/router/router.js';
import App from "./vue/app.vue";
import store from "./vue/store/store";

// adds Router and Store as plugins
Vue.use(VueRouter);
Vue.use(Vuex);

// Setup the Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");