<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Modal />
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Modal from './components/Modal/Modal';

export default {
  components: { Navigation, Modal },
  name: 'app',
};
</script>

<style lang="scss">
#app {
}
</style>
