<template>
  <div
    class="cell"
    :class="[
      {
        clicked: isClicked,
        'bomb-clicked': bombClicked,
        'is-flag': !isClicked && isFlag,
      },
    ]"
    @click="onClick"
  >
    <div class="bomb-icon" v-if="showBomb" />
    <div class="nearby-bombs" v-else-if="showNearbyBombs" v-bind:style="color">
      {{ bombsNearby }}
    </div>
  </div>
</template>

<script>
import { fieldTypes } from '../constants/fieldTypes';

const colors = {
  1: '#0501FB',
  2: '#017B00',
  3: '#FE030D',
  4: '#00048C',
  5: '#880008',
  6: '#00847A',
  7: '#060606',
  8: '#818181',
};

export default {
  name: 'Cell',
  props: {
    fieldState: String,
    isClicked: Boolean,
    x: Number,
    y: Number,
    bombsNearby: Number,
    isFlag: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('cell-clicked', { x: this.x, y: this.y });
    },
  },
  computed: {
    color() {
      return { color: colors[this.bombsNearby] };
    },
    bombClicked() {
      return this.fieldState === fieldTypes.BOMB_CLICKED;
    },
    showBomb() {
      if (!this.isClicked) {
        return false;
      }
      return (
        this.fieldState === fieldTypes.BOMB ||
        this.fieldState === fieldTypes.BOMB_CLICKED
      );
    },
    showNearbyBombs() {
      return this.isClicked && !this.showBomb && !!this.bombsNearby;
    },
  },
};
</script>

<style scoped lang="scss">
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
  width: 18px;
  height: 18px;
  border-width: 3px;

  @include tablet {
    width: 30px;
    height: 30px;
    border-width: 4px;
  }

  @include desktop {
    width: 40px;
    height: 40px;
    border-width: 5px;
  }

  background: #7f7f7f;
  border-style: outset;
  display: flex;
  align-content: center;
  justify-items: center;
}

.bomb-clicked {
  background: red;
}

.clicked {
  border-color: transparent;
}
.is-flag {
  background: blue;
}

.bomb-icon {
  background: #000;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
