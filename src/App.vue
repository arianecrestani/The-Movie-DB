<template>
  <div id="app">
    <Header />
    <router-view path = "$router.key"/>
    <div class="">
      <div class="flex flex-col justify-center py-12 items-center">
        <input
          v-on:click="clickInput"
          v-model="inputValue"
          type="text"
          class=" w-2/4 outline-none bg-gray-200 p-4 rounded-md"
          placeholder="Hey choose the Movie"/>
        <SearchHistory v-show="showHistory" v-on:valueselected="onSearchValueSelect"/>
        <br />
        <button
          class="flex justify-center bg-blue-100 w-2/4 p-2 text-2xl text-white uppercase rounded-md"
          v-on:click="loadMovies"
          @click="resetInput"
          >
          Search
        </button>
      </div>
    </div>
    <Movie :element="results" class=" gap-3 w-full flex flex-wrap justify-center py-12 mx-3 ">
      <br />
    </Movie>
  </div>
</template>
<script>
import "./index.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import SearchHistory from "./components/SearchHistory";

export default {
  name: "App",
  components: {
    Header,
    Movie,
    SearchHistory,
  },
  data: () => {
    return {
      results: [],
      inputValue: "",
      showHistory: false // inicial state of search
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
      if(this.inputValue === "") return;

      this.$store.dispatch("saveSearch", this.inputValue); // save proprietie

      let apiUrl = `https://api.themoviedb.org/3/search/movie?language=en-US&query=${this.inputValue}&page=1&api_key=af4c11d1c7c756c2429ca0c3cf65c08c`;
      try {
        let response = await this.axios.get(apiUrl);
        console.log(response.data.results);
        this.results = response.data.results;
      } catch (e) {
        console.error(e);
      }
    },
    clickInput() {
    if (this.showHistory === true) {
        this.showHistory = false;
      } else {
        this.showHistory = true;
      }
    },
    resetInput() {
      this.inputValue = "";
    },
    onSearchValueSelect(item) {
      this.inputValue = item  
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadMovieDiscover();
    });
  },
};
</script>
