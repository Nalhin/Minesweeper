import { gamePhases } from '../../constants/gamePhases';
import { gameDifficulties } from '../../constants/gameDifficulties';

export const gameState = {
  settings: {
    ...gameDifficulties.beginner,
  },
  gamePhase: gamePhases.NOT_STARTED,
  flagsPlaced: 0,
};
