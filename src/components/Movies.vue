<template>
  <ul>
    <Movie
      v-for="movie in movies"
      v-bind:key="movie.id"
      :movie="movie" />
  </ul>
</template>

<script>
import Movie from "./Movie";
export default {
  props: {
    movies: Array,
  },
  components: {
    Movie,
  }
};
</script>
