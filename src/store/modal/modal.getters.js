export const modalGetters = {
  isModalOpen: state => modalType => {
    return state.modals.some(modal => modal === modalType);
  },
  getOpenModals(state) {
    return state.modals;
  },
};
