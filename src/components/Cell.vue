<template>
  <div
    class="cell"
    :class="[stateClass, { clicked: isClicked }]"
    @click="onClick"
  >
    <div class="bomb-icon" v-if="showBomb" />
    <div class="nearby-bombs" v-if="showNearbyBombs">{{ bombsNearby }}</div>
  </div>
</template>

<script>
import { fieldTypes } from '../constants/fieldTypes';

export default {
  name: 'Cell',
  props: {
    fieldState: String,
    isClicked: Boolean,
    x: Number,
    y: Number,
    bombsNearby: Number,
  },
  methods: {
    onClick() {
      this.$emit('cell-clicked', { x: this.x, y: this.y });
    },
  },
  computed: {
    stateClass: function() {
      return this.fieldState.replace('_', '-').toLowerCase();
    },
    showBomb: function() {
      if (!this.isClicked) {
        return false;
      }
      return (
        this.fieldState === fieldTypes.BOMB ||
        this.fieldState === fieldTypes.BOMB_CLICKED ||
        this.fieldState === fieldTypes.BOMB_WRONG
      );
    },
    showNearbyBombs: function() {
      return this.isClicked && !this.showBomb && !!this.bombsNearby;
    },
  },
};
</script>

<style scoped>
.nearby-bombs {
  font-size: 20px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}

.cell {
  width: 50px;
  height: 50px;
  background: gray;
  border-style: outset;
  border-width: 5px;
  display: flex;
  align-content: center;
  justify-items: center;
}

.clicked {
  border-color: transparent;
}

.bomb-icon {
  background: #000;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
