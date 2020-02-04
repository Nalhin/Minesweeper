import scoreApi from './score.api';

export const scoreActions = {
  async GET_SCORE({ commit }) {
    commit('setLoading', true);
    const [beginner, intermediate, expert] = await Promise.all([
      scoreApi.fetchGetScore('beginner'),
      scoreApi.fetchGetScore('intermediate'),
      scoreApi.fetchGetScore('expert'),
    ]);
    commit('setScore', {
      beginner: beginner.data ?? {},
      intermediate: intermediate.data ?? {},
      expert: expert.data ?? {},
    });
    commit('setLoading', false);
  },
  async SAVE_SCORE(action, score) {
    await scoreApi.fetchSaveScore(score);
  },
};
