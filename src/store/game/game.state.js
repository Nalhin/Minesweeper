import { gamePhases } from '../../constants/gamePhases';

export const gameState = {
  settings: {
    difficulty: '',
    width: 0,
    height: 0,
    bombs: 0,
  },
  gamePhase: gamePhases.NOT_STARTED,
};
