import { gameMutations } from './game.mutations';
import { gameState } from './game.state';
import { gameGetters } from './game.getters';
import { gameActions } from './game.actions';

export default {
  namespaced: true,
  state: gameState,
  getters: gameGetters,
  actions: gameActions,
  mutations: gameMutations,
};
