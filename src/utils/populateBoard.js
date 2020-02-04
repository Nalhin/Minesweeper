import { fieldTypes } from '../constants/fieldTypes';
import { dxdy } from '../constants/dxdy';
import { isWithinBounds } from './isWithinBounds';

export function populateBoard({ width, height }, numberOfBombs) {
  const board = generateEmptyBoard({ width, height });
  const bombPositions = generateBombPosition({ width, height }, numberOfBombs);
  bombPositions.forEach(position => {
    const x = Math.floor(position / width);
    const y = position % height;
    board[x][y].fieldState = fieldTypes.BOMB;
    addBombToNeighbours(board, { width, height }, { x, y });
  });

  return board;
}

function generateEmptyBoard({ width, height }) {
  return [...Array(height)].map((xEl, x) =>
    [...Array(width)].map((yEl, y) => ({
      x,
      y,
      fieldState: fieldTypes.EMPTY,
      isClicked: false,
      bombsNearby: 0,
    })),
  );
}

function generateBombPosition({ width, height }, numberOfBombs) {
  const nums = [...Array(width * height).keys()];
  const randomNumbers = [];

  while (randomNumbers.length < numberOfBombs - 1) {
    const j = Math.floor(Math.random() * nums.length);
    randomNumbers.push(...nums.splice(j, 1));
  }
  return randomNumbers;
}

function addBombToNeighbours(board, { width, height }, { x, y }) {
  dxdy.forEach(increase => {
    const newX = x + increase.dx;
    const newY = y + increase.dy;
    if (isWithinBounds(newX, height) && isWithinBounds(newY, width)) {
      board[newX][newY].bombsNearby++;
    }
  });
}
