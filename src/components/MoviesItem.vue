<template>
  <div class="movie">
    <div class="title">
      {{ movie.title }}
    </div>
    <div class="overview">
      {{ movie.overview }}
    </div>
    <div><img :src="posterPath" />;</div>

    <div class="date">
      {{ formatDate }}
    </div>
    <div class="bg-red-400 p-3 rounded-md border-radius-2"  v-if="movie.vote_average >= 8">
      {{ movie.vote_average }} 
    </div>
    <div v-else-if="movie.vote_average === 0">
      No results
    </div>
    <div v-else>
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
    posterPath: function() {
      if (this.movie.poster_path === null) {
        return `https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png`;
      } else {
        return `https://image.tmdb.org/t/p/w185/${this.movie.poster_path}`;
      }
    },
    formatDate: function() {
      const date = new Date(this.movie.release_date);
      return (
        date.getDate() + "/" + (1 + date.getMonth()) + "/" + date.getFullYear()
      );
    },
  },
};
</script>
