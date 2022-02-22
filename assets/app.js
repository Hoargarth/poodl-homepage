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
import PoodlRow from './vue/layouts/PoodlRow';
import PoodlColumn from './vue/layouts/PoodlColumn';
import PoodlNavigationButton from './vue/components/PoodlNavigationButton';
import PoodlSection from './vue/components/PoodlSection';
import PoodlHeading from './vue/components/PoodlHeading';
import PoodlTextblock from './vue/components/PoodlTextblock';
import PoodlButton from './vue/components/PoodlButton';
import PoodlImage from './vue/components/PoodlImage';

// adds Router and Store as plugins
Vue.use(VueRouter);
Vue.use(Vuex);

// add components global so we don't have to
// import them all the time
Vue.component('poodl-navigation', PoodlNavigation);
Vue.component('poodl-row', PoodlRow);
Vue.component('poodl-column', PoodlColumn);
Vue.component('poodl-navigation-button', PoodlNavigationButton);
Vue.component('poodl-section', PoodlSection);
Vue.component('poodl-heading', PoodlHeading);
Vue.component('poodl-textblock', PoodlTextblock);
Vue.component('poodl-button', PoodlButton);
Vue.component('poodl-image', PoodlImage);

// Setup the Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");