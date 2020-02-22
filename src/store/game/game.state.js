import { gamePhases } from '../../constants/gamePhases';
import { gameDifficulties } from '../../constants/gameDifficulties';

export const gameState = {
  settings: {
    ...gameDifficulties.beginner,
    difficulty: 'beginner',
  },
  phase: gamePhases.NOT_STARTED,
  flagsPlaced: 0,
  board: [[]],
  fieldsRemaining: 0,
  score: 0,
};
