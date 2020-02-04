import scoreApi from './score.api';

export const scoreActions = {
  async GET_SCORE({ commit }) {
    const scores = await scoreApi.fetchGetScores();
    commit('score/setScore', scores);
  },
  async SAVE_SCORE(action, score) {
    await scoreApi.fetchSaveScore(score);
  },
};
