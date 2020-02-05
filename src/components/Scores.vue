<template functional>
  <div>
    <b-table :data="props.scores" :loading="props.isLoading">
      <template slot-scope="props">
        <b-table-column label="Position" numeric>
          {{ props.row.position }}
        </b-table-column>
        <b-table-column label="Name">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column label="Score">
          {{ props.row.score }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Scores',
  props: {
    scores: Array,
    isLoading: Boolean,
  },
};
</script>

<style scoped lang="scss">
.scores {
  padding: $space-base;
}
</style>
