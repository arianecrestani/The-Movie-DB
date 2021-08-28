<template>
  <div class="movie">
    <div class="title">
      {{ movie.title }}
    </div>
    <div class="overview">
      {{ movie.overview }}
    </div>
    <div class="poster">
      <img
        :src="`https://image.tmdb.org/t/p/w185/${movie.poster_path}`"
      /><img />
    </div>
    <div class="date">
      {{ formatDate }}
    </div>
    <div class="nota">
      {{ movie.vote_average }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  computed: {
    formatDate: function() {
      const date = new Date(this.movie.release_date)
      return date.getDate() + "/" + (1 + date.getMonth()) + "/" + date.getFullYear()
    },
  },
};
</script>

<style scoped>
.movie {
  background-color: white;
  padding: 3rem;
  margin: 2rem;
}
.title {
  color: brown;
  padding: 1rem;
}
.overview {
  color: blue;
}
</style>
