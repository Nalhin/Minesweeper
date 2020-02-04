<template>
  <div>
    <div class="wrapper">
      <Scores
        :title="'Beginner'"
        :scores="scores.beginner"
        :isLoading="isLoading"
      />
      <Scores
        :title="'Intermediate'"
        :scores="scores.intermediate"
        :isLoading="isLoading"
      />
      <Scores
        :title="'Expert'"
        :scores="scores.expert"
        :isLoading="isLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Scores from '../components/Scores';

export default {
  name: 'ScoresPage',
  components: {
    Scores,
  },
  computed: {
    ...mapGetters({ scores: 'score/getScores' }),
    isLoading() {
      return this.$store.state.score.isLoading;
    },
  },
  methods: {
    loadScores() {
      this.$store.dispatch('score/GET_SCORE');
    },
  },
  mounted() {
    this.loadScores();
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, min-content);
}
</style>
