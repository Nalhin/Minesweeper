export const modalActions = {
  ADD_MODAL({ commit, state }, modal) {
    if (!state.modals.some(modalType => modalType === modal)) {
      commit('addModal', modal);
    }
  },
  CLOSE_MODAL({ commit }, { type }) {
    commit('closeModal', type);
  },
};
