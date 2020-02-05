<template>
  <NumberDisplay :number="timer" />
</template>

<script>
import NumberDisplay from './NumberDisplay';
export default {
  components: { NumberDisplay },
  name: 'Timer',
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
  methods: {
    startTimer() {
      this.invervalId = setInterval(() => {
        this.timer++;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.invervalId);
    },
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
};
</script>

<style scoped></style>
