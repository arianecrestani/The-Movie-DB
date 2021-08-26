<template>
  <ul>
    <MoviesItem
      v-for="result in element"
      v-bind:key="result.id"
      :movie="result"
    ></MoviesItem>
  </ul>
</template>

<script>
import MoviesItem from "./MoviesItem";
export default {
  props: {
    element: Array,
  },
  components: {
    MoviesItem,
  },
};
</script>
