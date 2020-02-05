<template>
  <div>
    <b-tabs position="is-centered" class="block">
      <b-tab-item label="Beginner">
        <Scores :scores="scores.beginner" :isLoading="isLoading" />
      </b-tab-item>
      <b-tab-item label="Intermediate">
        <Scores :scores="scores.intermediate" :isLoading="isLoading" />
      </b-tab-item>
      <b-tab-item label="Expert">
        <Scores :scores="scores.expert" :isLoading="isLoading" />
      </b-tab-item>
    </b-tabs>
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
