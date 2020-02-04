<template functional>
  <div class="clock">{{ props.number | formatNumber }}</div>
</template>

<script>
const EXPECTED_LENGTH = 3;

export default {
  name: 'NumberDisplay',
  props: {
    number: Number,
  },
  filters: {
    formatNumber(number) {
      return ('0'.repeat(EXPECTED_LENGTH) + number).slice(-EXPECTED_LENGTH);
    },
  },
};
</script>

<style scoped>
.clock {
  font-family: 'Orbitron', sans-serif;
}
</style>
