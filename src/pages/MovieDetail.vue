<template>
  <div>
    <Header />
    <router-link to= "/" active-class="active">
      <a class="bg-green-300">home</a></router-link>

      <h3>{{ movie.title }}</h3>
      <h3>{{ movie.overview}}</h3>
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
  // async loadMovie() {
  //    const movies = this.$store.state.movies
  //     // storage
  //     // search movie
  //       // for, serch find,  
  //     // movie.title
  //     // this.movie = filqueque tu achou no array
  //   },
  },
  data() {
    return {
      // movies: {}
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
