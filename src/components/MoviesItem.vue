<template>
  <div class="movie flex-col bg-gray-100 py-5 w-60 rounded-md mt-5 text-center">
    <div class="flex justify-center">
      <img class="" :src="posterPath" />
    </div>
    <div class="title text-sm py-2 font-semibold">
      {{ movie.title }}
    </div>
    <div class="flex flew-row justify-center space-x-5 items-baseline" >
      <div v-if="formatDate === 'NaN/NaN/NaN'" class="date">
        No results to show
      </div>

      <div class="text-sm text-gray-400  " v-else>{{ formatDate }}</div>

      <div
        class=" flex justify-center nota text-gray-600 bg-gray-300 w-10 rounded-full "
      >
        <div class="text-red-700 " v-if="movie.vote_average >= 8">
          {{ movie.vote_average }}
        </div>
        <div v-else-if="movie.vote_average === 0">No note results</div>
        <div v-else>
          {{ movie.vote_average }}
        </div>
      </div>
    </div>
    <div class="overview">
      <button
        v-on:click="loadOverview"
        class="underline text-sm hover:text-gray-400"
      >
        overview
      </button>
      <div class="text-xs px-4 py-4 text-justify" v-show="showOverview">
        {{ movie.overview }}
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
