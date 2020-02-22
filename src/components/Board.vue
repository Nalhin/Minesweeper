<template>
  <div class="board">
    <div class="row" v-for="row in board" :key="row[0] && row[0].x">
      <Cell
        v-for="cell in row"
        :key="cell.x + '#' + cell.y"
        :isClicked="cell.isClicked"
        :fieldState="cell.fieldState"
        :x="cell.x"
        :y="cell.y"
        :bombsNearby="cell.bombsNearby"
        :isFlag="cell.isFlag"
        @cell-clicked="cellClicked"
      />
    </div>
  </div>
</template>

<script>
import Cell from './Cell';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { Cell },
  computed: {
    ...mapGetters({
      gameSettings: 'game/getSettings',
      board: 'game/getBoard',
    }),
  },
  created() {
    this.newGame();
  },
  methods: {
    ...mapActions({
      clickField: 'game/CLICK_FIELD',
      addFlag: 'game/ADD_FLAG',
      newGame: 'game/NEW_GAME',
    }),
    cellClicked(point) {
      if (this.isGameOver) {
        return;
      }

      if (this.shouldClickPlaceFlags) {
        this.addFlag(point);
      } else {
        this.clickField(point);
      }
    },
  },
  name: 'Board',
  props: {
    isGameOver: Boolean,
    shouldClickPlaceFlags: Boolean,
  },
};
</script>

<style scoped lang="scss">
.board {
  user-select: none;
  border: 10px #666666 outset;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: $space-large;
}

.row {
  display: flex;
  flex-direction: row;
}
</style>
