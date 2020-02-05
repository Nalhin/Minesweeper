<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Game Difficulty</p>
    </header>
    <section class="modal-card-body">
      <div class="field">
        <b-radio native-value="beginner" v-model="selectedDifficulty">
          <div>
            Beginner
          </div>
        </b-radio>
      </div>
      <div class="field">
        <b-radio native-value="intermediate" v-model="selectedDifficulty">
          Intermediate
        </b-radio>
      </div>
      <div class="field">
        <b-radio native-value="expert" v-model="selectedDifficulty">
          Expert</b-radio
        >
      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button
        type="is-primary"
        @click="$emit('save-settings', { difficulty: selectedDifficulty })"
      >
        Set settings
      </b-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'GameSettings',
  props: {
    difficulty: String,
  },
  data() {
    return { selectedDifficulty: 'beginner' };
  },
  mounted() {
    this.selectedDifficulty = this.difficulty;
  },
};
</script>

<style scoped></style>
