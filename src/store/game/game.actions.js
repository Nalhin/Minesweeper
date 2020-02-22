import { gamePhases } from '../../constants/gamePhases';
import { gameDifficulties } from '../../constants/gameDifficulties';
import {
  boardUtilities,
  fieldsToOpen,
  openBombs,
} from '../../utils/boardUtilities';
import { fieldTypes } from '../../constants/fieldTypes';
import { modalTypes } from '../../constants/modalTypes';

export const gameActions = {
  CHANGE_SETTINGS({ commit, dispatch }, { difficulty }) {
    commit('setSettings', { difficulty, ...gameDifficulties[difficulty] });
    dispatch('NEW_GAME');
  },
  START_GAME({ commit }) {
    commit('setPhase', gamePhases.IN_PROGRESS);
  },
  END_GAME({ commit, dispatch }) {
    commit('setPhase', gamePhases.OVER);
    dispatch('modal/ADD_MODAL', modalTypes.GAME_WON, { root: true });
  },
  NEW_GAME({ commit, state }) {
    commit('setPhase', gamePhases.NOT_STARTED);
    commit(
      'setBoard',
      boardUtilities(
        { width: state.settings.width, height: state.settings.height },
        state.settings.mines,
      ),
    );
    commit('setFieldsRemaining', state.settings.width * state.settings.height);
  },
  CLICK_FIELD({ commit, state, dispatch, getters }, { x, y }) {
    const field = state.board[x][y];

    if (state.phase === gamePhases.NOT_STARTED) {
      dispatch('START_GAME');
    }
    if (field.fieldState === fieldTypes.BOMB) {
      commit('setPhase', gamePhases.OVER);
      commit('setBoardFieldBombClicked', { x, y });
      commit('setBoard', openBombs(state.board));
      return;
    }
    const fields = fieldsToOpen(state.board, { x, y });
    commit('setFieldsRemaining', state.fieldsRemaining - fields.length);
    commit('setClickedForBoardFields', { x, y, fields });
    if (getters.getIsGameWon) {
      dispatch('END_GAME');
    }
  },
  ADD_FLAG({ commit, dispatch, state }, { x, y }) {
    const field = state.board[x][y];

    if (state.phase === gamePhases.NOT_STARTED) {
      dispatch('START_GAME');
    }
    if (field.isFlag) {
      commit('setNumberOfFlags', state.flagsPlaced + 1);
    } else {
      commit('setNumberOfFlags', state.flagsPlaced - 1);
    }
    commit('setChangeFlag', { x, y });
  },
  SET_SCORE({ commit }, score) {
    commit('setScore', score);
  },
};
