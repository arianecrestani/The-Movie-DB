<template>
  <div class="app m-0 " >
    <Header />  
    <h1>Movies</h1>
    <button class="bg-blue-300 p-3 text-2xl rounded-md ml-4 text-white uppercase" v-on:click="loadMovies" >laden...</button>
    <br />
    <input v-model="inputValue" type="text"  class="rounded-md lg:w-2/12 bg-blue-300 pl-4 "/>
    <Movies :element="results" class="grid gap-3 sm:grid-cols-3 container mx-auto bg-red-300">
      <template v-slot:choice> choice the movie!</template> 
    </Movies>
  </div>
</template>

<script>

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
    })
  },
};
</script>
<style src="./assets/css/tailwind.css" />
