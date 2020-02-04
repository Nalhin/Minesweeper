<template>
  <NumberDisplay :number="timer" />
</template>

<script>
import NumberDisplay from './NumberDisplay';
export default {
  components: { NumberDisplay },
  name: 'Timer',
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
      if (this.intervalId) {
        clearInterval(this.invervalId);
        this.invervalId = '';
      }
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
};
</script>

<style scoped></style>
