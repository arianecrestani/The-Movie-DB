<template>
  <div id="app">
    <!-- <Header /> -->
    <h1>Movies</h1>
    <button v-on:click="loadMovies">laden...</button>
  </div>
</template>

<script>

import'./src/style/global.css';

const movie_Api = "af4c11d1c7c756c2429ca0c3cf65c08c";
const baseUrl = (endpoint) => {
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = `${movie_Api}`;
  return `${baseUrl}/${endpoint}&api_key=${apiKey}`;
};

const apiRequest = async (endpoint) => {
  return await this.axios.get(baseUrl(endpoint))
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const getMovie = (query) => `search/movie?language=en-US&query=${query}&page=1`;

// import Header from './components/Header';
export default {
  name: 'App',
  methods: {
    async loadMovies() {
        apiRequest(getMovie("lord of the rings")) // trocar por text field
    }
  }
}
  // components: {
  //   Header
  // }
</script>