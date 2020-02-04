<template>
  <b-navbar spaced>
    <template slot="start">
      <router-link :to="{ name: 'game' }">
        <b-navbar-item>
          Home
        </b-navbar-item>
      </router-link>
      <router-link :to="{ name: 'scores' }">
        <b-navbar-item>
          Scores
        </b-navbar-item>
      </router-link>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped></style>
