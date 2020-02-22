<template>
  <NumberDisplay :number="timer" />
</template>

<script>
import NumberDisplay from './NumberDisplay';
export default {
  name: 'Timer',
  components: { NumberDisplay },
  props: {
    isRunning: Boolean,
    resetTimer: Boolean,
  },
  data() {
    return {
      intervalId: '',
      timer: 0,
    };
  },
  watch: {
    isRunning() {
      if (this.isRunning) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    },
    resetTimer() {
      if (this.resetTimer) {
        this.timer = 0;
      }
    },
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
    setScore() {
      this.$store.dispatch('game/SET_SCORE', { score: this.timer });
    },
    startTimer() {
      this.invervalId = setInterval(() => {
        this.timer++;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.invervalId);
    },
  },
};
</script>

<style scoped></style>
