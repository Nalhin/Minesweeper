<template>
  <b-modal
    :active="true"
    has-modal-card
    trap-focus
    aria-role="dialog"
    aria-modal
    :on-cancel="this.closeModal"
  >
    <GameWon @save-score="saveScore" />
  </b-modal>
</template>

<script>
import { modalTypes } from '../../../constants/modalTypes';
import { modalMixin } from '../modalMixin';
import GameWon from './GameWon';
import { mapActions } from 'vuex';

export default {
  name: 'GameWonModal',
  components: { GameWon },
  mixins: [modalMixin(modalTypes.GAME_WON)],
  methods: {
    ...mapActions({ saveScore: 'score/SAVE_SCORE' }),
  },
};
</script>

<style scoped></style>
