import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout/LayoutMain.vue';
import LayoutService from '../layout/LayoutService.vue';
import LayoutAbout from '../layout/LayoutAbout.vue';

Vue.use(Router);
function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/pages/${view}.vue`);
}
export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    children: [{
      path: '',
      component: loadView('index'),
    }],
  },
  {
    path: '/nosotros',
    component: LayoutAbout ,
    children: [
    {
      path: '',
      component: loadView('nosotros/index'),
    },
  ]},
  {
    path: '/servicios',
    component:LayoutService ,
    children: [
    {
      path: 'acabados',
      component: loadView('servicios/acabados/index'),
    },
    {
      path: 'acero-inoxidable',
      component: loadView('servicios/acero-inoxidable/index'),
    },
    {
      path: 'construccion-civil',
      component: loadView('servicios/construccion/index'),
    },
    {
      path: 'drywall',
      component: loadView('servicios/drywall/index'),
    },

    {
      path: 'electricidad',
      component: loadView('servicios/electricidad/index'),
    },
    {
      path: 'gasfiteria',
      component: loadView('servicios/gasfiteria/index'),
    }
  ],
  },
  ],
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    const position = {};
    position.x = 0;
    position.y = 0;
    return position;
  },
});
