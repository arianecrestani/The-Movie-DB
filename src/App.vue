<template>
  <div id="app">
    <Header />
    <h1>Movies</h1>
    <button v-on:click="loadMovies">laden...</button>
    <br />
    <input v-model="inputValue" type="text" />
    <Movies :element="results"></Movies>
  </div>
</template>

<script>
import "./src/style/global.css";
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
};
</script>
