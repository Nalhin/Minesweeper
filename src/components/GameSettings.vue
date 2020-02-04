<template>
  <div class="settings-wrapper">
    <input
      type="radio"
      id="beginner"
      value="beginner"
      v-model="selectedDifficulty"
    />
    <label for="beginner">Beginner</label>
    <input
      type="radio"
      id="intermediate"
      value="intermediate"
      v-model="selectedDifficulty"
    />
    <label for="intermediate">Intermediate</label>
    <input
      type="radio"
      id="expert"
      value="expert"
      v-model="selectedDifficulty"
    />
    <label for="expert">Expert</label>
    <button @click="$emit('save-settings', { difficulty: selectedDifficulty })">
      Set settings
    </button>
  </div>
</template>

<script>
export default {
  name: 'GameSettings',
  props: {
    difficulty: String,
  },
  data() {
    return { selectedDifficulty: '' };
  },
  mounted() {
    this.selectedDifficulty = this.difficulty;
  },
};
</script>

<style scoped>
.settings-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
