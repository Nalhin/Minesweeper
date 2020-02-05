<template>
  <div>
    <div class="settings__wrapper">
      <b-button class="settings__children" type="is-primary" @click="addModal"
        >Settings</b-button
      >
      <b-switch class="settings__children" v-model="shouldClickPlaceFlags">
        Place flags?
      </b-switch>
    </div>
    <div class="board__wrapper">
      <div class="board__container">
        <div class="score__container">
          <NumberDisplay :number="remainingBombs" />
          <Timer :is-running="isTimerRunning" :reset-timer="isGameNotStarted" />
        </div>
        <Board
          :shouldClickPlaceFlags="shouldClickPlaceFlags"
          :isGameOver="isGameOver"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Board from '../components/Board';
import NumberDisplay from '../components/NumberDisplay';
import Timer from '../components/Timer';
import { modalTypes } from '../constants/modalTypes';
import { mapGetters } from 'vuex';
import { gamePhases } from '../constants/gamePhases';

export default {
  name: 'Game',
  components: { NumberDisplay, Board, Timer },
  computed: {
    ...mapGetters({
      remainingBombs: 'game/getRemainingBombs',
      gamePhase: 'game/getPhase',
    }),
    isTimerRunning() {
      return this.gamePhase === gamePhases.IN_PROGRESS;
    },
    isGameOver() {
      return this.gamePhase === gamePhases.OVER;
    },
    isGameNotStarted() {
      return this.gamePhase === gamePhases.NOT_STARTED;
    },
    gameDifficulty() {
      return this.$store.state.game.settings.difficulty;
    },
  },
  data() {
    return { shouldClickPlaceFlags: false };
  },
  methods: {
    addModal() {
      this.$store.dispatch('modal/ADD_MODAL', modalTypes.SETTINGS);
    },
  },
};
</script>

<style scoped lang="scss">
.settings__children {
  margin: $space-small 0;
}

.settings__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.score__container {
  display: flex;
  justify-content: space-between;
}
.board__container {
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: max-content;
  margin: 0 auto;
}
.board__wrapper {
  @include flex-center();
}
</style>
