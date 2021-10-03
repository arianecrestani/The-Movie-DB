<template>
  <div>
    <Header />
    <div>
      <h3>{{ movie.title }}</h3>
      <h2>{{ movie. }}</h2>

    </div>

    <!-- show Image -->
    <!-- show title -->
    <!-- show description -->
    <!-- show rate -->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "MovieDetail",
  props: {
    movie: Object
  },
  components: {
    Header,
  },
  methods: {
  async loadMovie() {
     const movies = this.$store.state.movies
     return movies
      // storage
      // search movie 
      //saber qual filme irei mosntrar
      
    },
  },
  data() {
    return {
      // movie: {},
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loadMovie();
    });
  },
};

// tem que ir no store pegar os results e pesquisar e encontrar o filme que foi mostrado
</script>
