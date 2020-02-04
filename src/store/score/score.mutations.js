export const scoreMutations = {
  setScore(state, scores) {
    state.scores = scores;
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
};
