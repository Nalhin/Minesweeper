import { scoreGetters } from './score.getters';
import { scoreState } from './score.state';
import { scoreActions } from './score.actions';
import { scoreMutations } from './score.mutations';

export default {
  namespaced: true,
  state: scoreState,
  getters: scoreGetters,
  actions: scoreActions,
  mutations: scoreMutations,
};
