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
  },
  data() {
    return {
      intervalId: '',
      timer: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = 0;
      this.invervalId = setInterval(() => {
        this.timer++;
      }, 1000);
    },
    stopTimer() {
      if (this.intervalId) {
        clearInterval(this.invervalId);
        this.invervalId = '';
      }
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
  },
  beforeDestroy() {
    this.stopTimer();
  },
};
</script>

<style scoped></style>
