import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  actions: {
    login({ state }, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout({ state }) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  modules: {},
});
