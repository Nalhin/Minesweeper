export const modalMutations = {
  addModal(state, modal) {
    state.modals.push(modal);
  },
  closeModal(state, modalType) {
    state.modals = state.modals.filter(modal => modal !== modalType);
  },
};
