<template>
  <div class="wrapper">
    <div class="background">
      <button @click="$emit('close-modal')">Close</button>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background {
  background: #7f7f7f;
}
</style>
