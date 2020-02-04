<template>
  <nav id="nav">
    <router-link :to="{ name: 'game' }">Home</router-link>
    |
    <router-link :to="{ name: 'scores' }">Scores</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped></style>
