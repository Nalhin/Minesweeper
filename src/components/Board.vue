<template>
  <div class="board">
    <div class="row" v-for="row in board" :key="row[0] && row[0].x">
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
</template>

<script>
import Cell from './Cell';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Board',
  components: { Cell },
  props: {
    shouldClickPlaceFlags: Boolean,
    isGameOver: Boolean,
  },
  computed: {
    ...mapGetters({
      gameSettings: 'game/getSettings',
      board: 'game/getBoard',
    }),
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
  created() {
    this.newGame();
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
