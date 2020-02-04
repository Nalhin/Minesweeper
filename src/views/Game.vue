<template>
  <div>
    <NumberDisplay number="1" />
    <Timer />
    <button @click="addModal">Settings</button>
    <GameStatus />
    <Modal v-if="isSettingsModalOpen" @close-modal="closeModal">
      <GameSettings
        @save-settings="saveSettings"
        :difficulty="gameDifficulty"
      />
    </Modal>
    <Board />
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
import Modal from '../components/Modal';

export default {
  name: 'Game',
  components: { Modal, GameSettings, GameStatus, NumberDisplay, Board, Timer },
  computed: {
    ...mapGetters({
      isModalOpen: 'modal/isModalOpen',
    }),
    isSettingsModalOpen() {
      return this.isModalOpen(modalTypes.SETTINGS);
    },
    gameDifficulty() {
      return this.$store.state.game.settings.difficulty;
    },
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
    },
  },
};
</script>

<style scoped></style>
