<template>
  <div class="movie flex-col  bg-gray-200 py-6 w-60 rounded-md mt-5 text-center">
  
    <div class="flex justify-center">
      <img class="w-auto " :src="posterPath" />
    </div>
      <div class="title text-xl">
      {{ movie.title }}
    </div>
    <div class="overview">
      <button v-on:click="loadOverview">Overview</button>
      <div class="text-sl" v-show="showOverview">{{ movie.overview }}</div>
    </div>
    <div v-if="formatDate === 'NaN/NaN/NaN'" class="date">
      No results to show
    </div>
    <div v-else>{{ formatDate }}</div>
    <div class="nota" >
      <div
        class="text-red-700"
        v-if="movie.vote_average >= 8"
      >
        {{ movie.vote_average }}
      </div>
      <div v-else-if="movie.vote_average === 0">
        No results to show
      </div>
      <div v-else>
        {{ movie.vote_average }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  data: () => {
    return {
      showOverview: false,
    };
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
  methods: {
    loadOverview() {
      if (this.showOverview === true) {
        this.showOverview = false;
      } else {
        this.showOverview = true;
      }
    },
  },
};
</script>
