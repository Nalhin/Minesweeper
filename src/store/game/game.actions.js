import { gamePhases } from '../../constants/gamePhases';
import { gameDifficulties } from '../../constants/gameDifficulties';

export const gameActions = {
  CHANGE_SETTINGS({ commit }, { difficulty }) {
    commit('setSettings', { difficulty, ...gameDifficulties[difficulty] });
  },
  START_GAME({ commit }) {
    commit('setPhase', gamePhases.IN_PROGRESS);
  },
  GAME_OVER({ commit }) {
    commit('setPhase', gamePhases.OVER);
  },
};
