import { fieldTypes } from '../../constants/fieldTypes';

export const gameMutations = {
  setSettings(state, settings) {
    state.settings = settings;
  },
  setPhase(state, phase) {
    state.phase = phase;
  },
  setBoard(state, board) {
    state.board = board;
  },
  setBoardFieldBombClicked(state, { x, y }) {
    state.board[x][y].fieldState = fieldTypes.BOMB_CLICKED;
    state.board[x][y].isClicked = true;
  },
  setClickedForBoardFields(state, { fields }) {
    fields.forEach(field => {
      state.board[field.x][field.y].isClicked = true;
    });
  },
  setChangeFlag(state, { x, y }) {
    state.board[x][y].isFlag = !state.board[x][y].isFlag;
  },
  setFieldsRemaining(state, amount) {
    state.fieldsRemaining = amount;
  },
  setNumberOfFlags(state, number) {
    state.numberOfFlags = number;
  },
};
