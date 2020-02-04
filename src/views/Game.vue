<template>
  <div>
    <NumberDisplay :number="remainingBombs" />
    <Timer />
    <b-switch v-model="shouldClickPlaceFlags">
      Place flags?
    </b-switch>
    <b-button type="is-primary" @click="addModal">Settings</b-button>
    <GameStatus />
    <b-modal
      :active="isSettingsModalOpen"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
      :on-cancel="closeModal"
    >
      <GameSettings
        @save-settings="saveSettings"
        :difficulty="gameDifficulty"
      />
    </b-modal>
    <Board :shouldClickPlaceFlags="shouldClickPlaceFlags" />
  </div>
</template>

<script>
import Board from '../components/Board';
import NumberDisplay from '../components/NumberDisplay';
import GameStatus from '../components/GameStatus';
import GameSettings from '../components/GameSettings';
import Timer from '../components/Timer';
import { modalTypes } from '../constants/modalTypes';
import { mapGetters } from 'vuex';

export default {
  name: 'Game',
  components: { GameSettings, GameStatus, NumberDisplay, Board, Timer },
  computed: {
    ...mapGetters({
      isModalOpen: 'modal/isModalOpen',
      remainingBombs: 'game/getRemainingBombs',
    }),
    isSettingsModalOpen() {
      return this.isModalOpen(modalTypes.SETTINGS);
    },
    gameDifficulty() {
      return this.$store.state.game.settings.difficulty;
    },
  },
  data() {
    return { shouldClickPlaceFlags: true };
  },
  methods: {
    addModal() {
      this.$store.dispatch('modal/ADD_MODAL', modalTypes.SETTINGS);
    },
    closeModal() {
      this.$store.dispatch('modal/CLOSE_MODAL', modalTypes.SETTINGS);
    },
    saveSettings({ difficulty }) {
      this.$store.dispatch('game/CHANGE_SETTINGS', {
        difficulty,
      });
      this.closeModal();
      this.$buefy.notification.open({
        message: 'Settings saved!',
        type: 'is-success',
      });
    },
  },
};
</script>

<style scoped></style>
