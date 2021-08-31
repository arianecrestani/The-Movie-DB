<template>
  <div id="app">
    <Header />
    <div class="">
      <div class="Wrapper flex flex-wrap justify-center py-10 space-x-3">
          <input
          v-model="inputValue"
          type="text"
          class="rounded-md w-2/4 outline-none bg-gray-200 p-3"
          placeholder="Hey choose the Movie"/>
        <button
          class="bg-blue-100 p-2 text-2xl rounded-md ml-4 text-white uppercase"
          v-on:click="loadMovies"
        >
          Search
        </button>
        <br />
      
      </div>
      <Movies
        :element="results"
        class=" grid gap-10 sm:grid-cols-4 w-full flex-wrap justify-center py-12 pl-14  "
      >
        <br />
      </Movies>
    </div>
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
