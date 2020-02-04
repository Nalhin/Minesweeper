export const scoreGetters = {
  getScores: state => {
    const beginner = Object.keys(state.scores.beginner).map(
      (key, position) => ({
        id: key,
        position,
        ...state.scores.beginner[key],
      }),
    );
    const intermediate = Object.keys(state.scores.intermediate).map(
      (key, position) => ({
        id: key,
        position,
        ...state.scores.intermediate[key],
      }),
    );
    const expert = Object.keys(state.scores.expert).map((key, position) => ({
      id: key,
      position,
      ...state.scores.expert[key],
    }));
    return { beginner, intermediate, expert };
  },
};
