<template>
  <div id="app">
    <Header />
  <h1>Movies</h1>
  <button v-on:click="loadMovies">laden...</button>
  </div>
</template>

<script>

import'./src/style/global.css';

import Header from './components/Header';
export default {
  name: 'App',
  methods: {
    loadMovies(){
      console.log("button wurde geglickt")
    }
  },
  components: {
    Header
  }
}
</script>


