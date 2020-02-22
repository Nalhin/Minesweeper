<template>
  <div>
    <div v-for="modal in openModals" :key="modal">
      <GameSettingsModal
        v-if="isGameSettingsModalOpen(modal)"
        @close-modal="closeModal"
      />
      <GameWonModal
        v-else-if="isGameWonModalOpen(modal)"
        @close-modal="closeModal"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GameSettingsModal from './GameSettings/GameSettingsModal';
import { modalTypes } from '../../constants/modalTypes';
import GameWonModal from './GameWon/GameWonModal';

export default {
  name: 'Modal',
  components: { GameWonModal, GameSettingsModal },
  computed: {
    ...mapGetters({
      openModals: 'modal/getOpenModals',
    }),
  },
  methods: {
    closeModal({ type }) {
      this.$store.dispatch('modal/CLOSE_MODAL', {
        type,
      });
    },
    isGameSettingsModalOpen(modal) {
      return modal === modalTypes.SETTINGS;
    },
    isGameWonModalOpen(modal) {
      return modal === modalTypes.GAME_WON;
    },
  },
};
</script>

<style scoped></style>
