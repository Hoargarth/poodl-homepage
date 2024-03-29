// styles
import 'swiper/css/bundle';
import './styles/app.scss';

// vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './vue/router/router.js';
import App from "./vue/app.vue";
import store from "./vue/store/store.js";
import VueI18n from 'vue-i18n';
import messages from "./vue/i18n/i18n.js";

// utilities
import links from './vue/utilities/links.js';

// vue components
import PoodlNavigation from './vue/layouts/PoodlNavigation';
import PoodlFooter from './vue/layouts/PoodlFooter';
import PoodlRow from './vue/layouts/PoodlRow';
import PoodlColumn from './vue/layouts/PoodlColumn';
import PoodlNavigationButton from './vue/components/PoodlNavigationButton';
import PoodlSection from './vue/components/PoodlSection';
import PoodlHeading from './vue/components/PoodlHeading';
import PoodlTextblock from './vue/components/PoodlTextblock';
import PoodlButton from './vue/components/PoodlButton';
import PoodlImage from './vue/components/PoodlImage';
import PoodlUSP from './vue/components/PoodlUSP';
import PoodlRoadmap from './vue/components/PoodlRoadmap';
import PoodlRoadmapItem from './vue/components/PoodlRoadmapItem';
import PoodlCarousel from './vue/components/PoodlCarousel';
import PoodlFloatingBuyButton from './vue/components/PoodlFloatingBuyButton';
import PoodlTeamCard from './vue/components/PoodlTeamCard';

// external components
import Swiper from 'swiper/bundle'; // see swiperjs.com/get-started
import VueEllipseProgress from 'vue-ellipse-progress'; // see github.com/setaman/vue-ellipse-progress

// add global variables to vue
Vue.prototype.$swiper = Swiper;
Vue.prototype.LINKS = links;

// adds Router and Store as plugins
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueEllipseProgress);

// add components global so we don't have to
// import them all the time
Vue.component('poodl-navigation', PoodlNavigation);
Vue.component('poodl-footer', PoodlFooter);
Vue.component('poodl-row', PoodlRow);
Vue.component('poodl-column', PoodlColumn);
Vue.component('poodl-navigation-button', PoodlNavigationButton);
Vue.component('poodl-section', PoodlSection);
Vue.component('poodl-heading', PoodlHeading);
Vue.component('poodl-textblock', PoodlTextblock);
Vue.component('poodl-button', PoodlButton);
Vue.component('poodl-image', PoodlImage);
Vue.component('poodl-usp', PoodlUSP);
Vue.component('poodl-roadmap', PoodlRoadmap);
Vue.component('poodl-roadmap-item', PoodlRoadmapItem);
Vue.component('poodl-carousel', PoodlCarousel);
Vue.component('poodl-floating-buy', PoodlFloatingBuyButton);
Vue.component('poodl-team-card', PoodlTeamCard);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

// Setup the Vue instance
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");