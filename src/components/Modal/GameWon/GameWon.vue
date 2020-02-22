<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Game Won!</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Name">
        <b-input v-model="name" />
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button type="is-primary" @click="$emit('save-score', { name })">
        Send score!
      </b-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'GameWon',
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style scoped></style>
