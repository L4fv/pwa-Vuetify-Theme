import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VSpeedDial,
  VTextField,
  VTextarea,
  VCard,
  VDivider,
  VAvatar

} from 'vuetify'
import {
  Scroll
} from 'vuetify/es5/directives'

import '../node_modules/vuetify/src/stylus/app.styl'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import VueImg from 'v-img';

Vue.use(VueImg);
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
import store from '@/store/index.js';
import VeeValidate from 'vee-validate';
import 'animate.css/animate.min.css';
import 'hover.css/css/hover-min.css';
import VueLazyload from 'vue-lazyload'
import VueAnalytics from "vue-analytics";
Vue.use(VueLazyload)
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VSpeedDial,
    VTextField,
    VTextarea,
    VCard,
    VDivider,
    VAvatar

  },
  theme: {
    primary: '#B71C1C',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  directives: {
    Scroll
  }
})
Vue.use(VueAnalytics, {
  id: "UA-121463614-1",
  router,
  checkDuplicatedScript: true,
  autoTracking: {
    skipSamePath: true
  }
});
Vue.use(VeeValidate);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
