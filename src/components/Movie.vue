<template>
  <div class="movie flex-col bg-gray-100 py-5 w-60 rounded-md  text-center">
    <div class="flex justify-center">
      <img class="" :src="posterPath" />
    </div>
    <div class="title text-sm py-2 font-semibold">
      {{ movie.title }}
    </div>
    <div class="flex flew-row justify-center space-x-5 items-baseline">
      <div v-if="formatDate === 'NaN/NaN/NaN'" class="date hidden"></div>
      <div class="text-sm text-gray-400  " v-else>{{ formatDate }}</div>
      <div
        class=" flex justify-center nota font-semibold text-gray-600 bg-gray-300 w-10 rounded-full "
      >
        <div class="text-green-500 " v-if="movie.vote_average >= 8">
          {{ movie.vote_average }}
        </div>
        <div class="text-sm bg-gray-100" v-else-if="movie.vote_average === 0">
          No results
        </div>
        <div v-else>
          {{ movie.vote_average }}
        </div>
      </div>
    </div>
    <div class="nav">
      <router-link :to="{ name: 'movieDetail', params: { movie: movie } }">
        Overview
      </router-link>
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
