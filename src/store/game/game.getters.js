export const gameGetters = {
  getSettings(state) {
    return state.settings;
  },
  getRemainingBombs(state) {
    return state.settings.mines - state.flagsPlaced;
  },
};
