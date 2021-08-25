<template>

  <div id="app">
    <Header/>
    <h1>Movies</h1>
    <button v-on:click="loadMovies">laden...</button>
    <ul>
      <li v-for="result in results" v-bind:key="result.id">
        {{result.title}}.{{result.overview}}
      </li>
    </ul>
  </div>
</template>

<script>
import "./src/style/global.css";
import Header from './components/Header'
export default {
  name: "App",
  components: {
  Header
},
  data: () => {
    return {
      results: [],
    };
  },
  methods: {
    async loadMovies() {
      const query = "lord of the rings";
      let apiUrl =
        `https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=1&api_key=af4c11d1c7c756c2429ca0c3cf65c08c`;
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
