import Vue from 'vue';
import Vuex from 'vuex';
import game from './game';
import modal from './modal';
import score from './score';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    modal,
    score,
  },
});
