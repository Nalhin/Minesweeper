<template>
  <div class="wrapper">
    <div class="board">
      <div class="row" v-for="row in board" :key="row[0].x">
        <Cell
          :isClicked="cell.isClicked"
          :fieldState="cell.fieldState"
          v-for="cell in row"
          :key="cell.x + '#' + cell.y"
          :x="cell.x"
          :y="cell.y"
          :bombsNearby="cell.bombsNearby"
          @cell-clicked="cellClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { populateBoard } from '../utils/populateBoard';
import Cell from './Cell';

const SIZE = 10;
const NUMBER_OF_BOMBS = 20;

export default {
  name: 'Board',
  components: { Cell },
  data() {
    return { board: populateBoard(SIZE, NUMBER_OF_BOMBS) };
  },
  methods: {
    cellClicked({ x, y }) {
      this.board[x][y].isClicked = true;
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  user-select: none;
  display: flex;
  justify-content: center;
}
.board {
  border: 10px #666666 outset;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
}
</style>
