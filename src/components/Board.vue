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
import { fieldTypes } from '../constants/fieldTypes';
import { mapGetters } from 'vuex';

export default {
  name: 'Board',
  components: { Cell },
  props: {
    shouldClickPlaceFlags: Boolean,
  },
  computed: {
    ...mapGetters({ gameSettings: 'game/getSettings' }),
  },
  data() {
    return {
      board: [[]],
    };
  },
  methods: {
    cellClicked({ x, y }) {
      if (this.shouldClickPlaceFlags) {
        this.board[x][y].fieldState = fieldTypes.FLAG;
      } else {
        this.board[x][y].isClicked = true;
      }
    },
  },
  watch: {
    gameSettings() {
      this.board = populateBoard(
        { width: this.gameSettings.width, height: this.gameSettings.height },
        this.gameSettings.mines,
      );
    },
  },
  mounted() {
    this.board = populateBoard(
      { width: this.gameSettings.width, height: this.gameSettings.height },
      this.gameSettings.mines,
    );
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  user-select: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
