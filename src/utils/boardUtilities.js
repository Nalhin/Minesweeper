import { fieldTypes } from '../constants/fieldTypes';
import { dxdy } from '../constants/dxdy';
import { isWithinBounds } from './isWithinBounds';

export function boardUtilities({ width, height }, numberOfBombs) {
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
      isFlag: false,
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

export function openBombs(board) {
  board.forEach(row =>
    row.forEach(col => {
      if (col.fieldState === fieldTypes.BOMB) {
        col.isClicked = true;
      } else if (col.isFlag) {
        col.fieldState = fieldTypes.BOMB_WRONG;
      }
    }),
  );
  return board;
}

/*
  Flood fill algorithm with stack
 */

export function fieldsToOpen(board, { x, y }) {
  const stack = [{ x, y }];
  const map = new Map();
  while (stack.length > 0) {
    const { x, y } = stack.pop();
    if (
      !isWithinBounds(x, board.length) ||
      !isWithinBounds(y, board[0].length)
    ) {
      continue;
    }
    if (map.get(`${x}${y}`)) {
      continue;
    }
    map.set(`${x}${y}`, { x, y });
    if (board[x][y].bombsNearby !== 0) {
      continue;
    }
    dxdy.map(increase => {
      stack.push({ x: x + increase.dx, y: y + increase.dy });
    });
  }
  return [...map.values()];
}
