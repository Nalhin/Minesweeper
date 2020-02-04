import { fieldTypes } from '../constants/fieldTypes';
import { isWithinBounds } from './isWithinBounds';
import { dxdy } from '../constants/dxdy';

export function populateBoard(size, numberOfBombs) {
  const board = generateEmptyBoard(size);
  const bombPositions = generateBombPosition(size, numberOfBombs);
  bombPositions.forEach(position => {
    const x = Math.floor(position / size);
    const y = position % size;
    board[x][y].fieldState = fieldTypes.BOMB;
    addBombToNeightbours(board, size, { x, y });
  });

  return board;
}

function generateEmptyBoard(size) {
  return [...Array(size)].map((xEl, x) =>
    [...Array(size)].map((yEl, y) => ({
      x,
      y,
      fieldState: fieldTypes.EMPTY,
      isClicked: false,
      bombsNearby: 0,
    })),
  );
}

function generateBombPosition(size, numberOfBombs) {
  const nums = [...Array(size * size).keys()];
  const randomNumbers = [];

  while (randomNumbers.length < numberOfBombs - 1) {
    const j = Math.floor(Math.random() * nums.length);
    randomNumbers.push(...nums.splice(j, 1));
  }
  return randomNumbers;
}

function addBombToNeightbours(board, size, { x, y }) {
  dxdy.forEach(increase => {
    const newX = x + increase.dx;
    const newY = y + increase.dy;
    if (isWithinBounds(newX, size) && isWithinBounds(newY, size)) {
      board[newX][newY].bombsNearby++;
    }
  });
}
