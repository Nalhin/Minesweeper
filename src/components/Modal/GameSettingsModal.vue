<template>
  <b-modal
    :active="true"
    has-modal-card
    trap-focus
    aria-role="dialog"
    aria-modal
    :on-cancel="closeModal"
  >
    <GameSettings @save-settings="saveSettings" :difficulty="gameDifficulty" />
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';
import { modalTypes } from '../../constants/modalTypes';
import GameSettings from '../GameSettings';

export default {
  name: 'GameSettingsModal',
  components: {
    GameSettings,
  },
  props: {},
  computed: {
    ...mapGetters({ gameDifficulty: 'game/getGameDifficulty' }),
  },
  methods: {
    closeModal() {
      this.$emit('close-modal', { type: modalTypes.SETTINGS });
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
