<template>
  <b-navbar fixed-top>
    <template slot="start">
      <router-link :to="{ name: 'game' }" v-slot="{ isActiveExact, navigate }">
        <b-navbar-item :active="isActiveExact" @click="navigate">
          Home
        </b-navbar-item>
      </router-link>
      <router-link
        :to="{ name: 'scores' }"
        v-slot="{ isActiveExact, navigate }"
      >
        <b-navbar-item :active="isActiveExact" @click="navigate">
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
