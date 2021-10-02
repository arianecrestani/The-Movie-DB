<template>
  <ul>
    <MoviesDescription
      v-for="result in element"
      v-bind:key="result.id"
      :movie="result" />
  </ul>
</template>

<script>
import MoviesDescription from "./MoviesDescription";
export default {
  props: {
    element: Array,
  },
  components: {
    MoviesDescription,
  }
};
</script>
