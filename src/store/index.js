import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    scroll: 0,
    bussines: {
      shortName: 'SEIKERS',
      name: 'Seikers Contratistas Generales S.A.C',
      description: ''
    }
  },
  mutations: {
    setScroll(state, payload) {
      state.scroll = payload;
    },
  },
});
export default store;
