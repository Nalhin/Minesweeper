<template>
  <b-modal
    :active="true"
    has-modal-card
    trap-focus
    aria-role="dialog"
    aria-modal
    :on-cancel="this.closeModal"
  >
    <GameSettings @save-settings="saveSettings" :difficulty="gameDifficulty" />
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';
import { modalTypes } from '../../../constants/modalTypes';
import GameSettings from './GameSettings';
import { modalMixin } from '../modalMixin';

export default {
  name: 'GameSettingsModal',
  components: {
    GameSettings,
  },
  mixins: [modalMixin(modalTypes.SETTINGS)],
  computed: {
    ...mapGetters({ gameDifficulty: 'game/getGameDifficulty' }),
  },
  methods: {
    saveSettings({ difficulty }) {
      this.$store.dispatch('game/CHANGE_SETTINGS', {
        difficulty,
      });
      this.closeModal();
      this.$buefy.notification.open({
        message: 'Settings saved!',
        type: 'is-success',
        position: 'is-bottom',
      });
    },
  },
};
</script>

<style scoped></style>
