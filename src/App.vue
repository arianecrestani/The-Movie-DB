<template>
  <div id="app">
    <Header />
    <div class="Wrapper">
      <button
        class="bg-blue-300 p-5 text-2xl rounded-md ml-4 text-white uppercase"
        v-on:click="loadMovies"
      >
        laden...
      </button>
      <br />
      <input
        v-model="inputValue"
        type="text"
        class="rounded-md lg:w-2/12 bg-yellow-300 pl-6 "
      />
      <p v-if="inputValue.length == 0">
        Hey choose the Movie
      </p>
    </div>
    <br />
    <br />
    <br />
    <Movies
      :element="results"
      class=" grid sm:grid-cols-3 w-full flex-wrap justify-center py-12 pr-0 pl-40"
    >
      <br />
    </Movies>
  </div>
</template>
<script>
import "./index.css";
import Header from "./components/Header";
import Movies from "./components/Movies";

export default {
  name: "App",
  components: {
    Header,
    Movies,
  },
  data: () => {
    return {
      results: [],
      inputValue: "",
    };
  },
  methods: {
    async loadMovieDiscover() {
      let apiUrl = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&api_key=af4c11d1c7c756c2429ca0c3cf65c08c`;
      try {
        let response = await this.axios.get(apiUrl);
        console.log(response.data.results);
        this.results = response.data.results;
      } catch (e) {
        console.error(e);
      }
    },
    async loadMovies() {
      let apiUrl = `https://api.themoviedb.org/3/search/movie?language=en-US&query=${this.inputValue}&page=1&api_key=af4c11d1c7c756c2429ca0c3cf65c08c`;
      try {
        let response = await this.axios.get(apiUrl);
        console.log(response.data.results);
        this.results = response.data.results;
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.loadMovieDiscover();
    });
  },
};
</script>
<style scoped>
.Wrapper {
  @apply flex flex-wrap justify-center py-8 space-x-2;
}
</style>
