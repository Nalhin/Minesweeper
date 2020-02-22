export const gameGetters = {
  getSettings(state) {
    return state.settings;
  },
  getRemainingBombs(state) {
    return state.settings.mines - state.flagsPlaced;
  },
  getBoard(state) {
    return state.board;
  },
  getPhase(state) {
    return state.phase;
  },
  getIsGameWon(state) {
    return !state.fieldsRemaining;
  },
  getGameDifficulty(state) {
    return state.settings.difficulty;
  },
  getScore(state) {
    return state.score;
  },
};
