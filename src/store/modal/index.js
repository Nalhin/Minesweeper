import { modalActions } from './modal.actions';
import { modalGetters } from './modal.getters';
import { modalState } from './modal.state';
import { modalMutations } from './modal.mutations';

export default {
  namespaced: true,
  state: modalState,
  getters: modalGetters,
  actions: modalActions,
  mutations: modalMutations,
};
