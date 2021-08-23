<template>
  <div id="app">
    <!-- <Header /> -->
  <h1>Movies</h1>
  <button v-on:click="loadMovies">laden...</button>
  </div>
</template>

<script>

import'./src/style/global.css';

// const movie_Api = "af4c11d1c7c756c2429ca0c3cf65c08c";
// const baseUrl = (endpoint) => {
//   const baseUrl = "https://api.themoviedb.org/3";
//   const apiKey = `${movie_Api}`;
//   return `${baseUrl}/${endpoint}&api_key=${apiKey}`;
// };

// const apiRequest = async (endpoint) => {
//   return await fetch(baseUrl(endpoint))
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// };

// import Header from './components/Header';
export default {
  name: 'App',
  methods: {
    
   async loadMovies(){
    let apiUrl =  "https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=1&api_key=af4c11d1c7c756c2429ca0c3cf65c08c"
    console.log("button wurde geglickt");
    this.axios.get(apiUrl).then((response) => {
        console.log(response.data)
      });
    return await this.axios.get(apiUrl)
    .then((response) => response.json())
    .catch((error) => console.log(error));

      }
    }
  }
  // components: {
  //   Header
  // }

</script>


