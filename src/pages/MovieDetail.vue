<template>
  <div>
    <Header />
    <div class="flex flex-col justify-center py-12 items-center">
      <router-link to="/" active-class="active">
        <a class="bg-green-300">home</a></router-link
      >
      <button back @click="backToHome">backToHome</button>
      <h3>{{ movie.title }}</h3>
      <div class="movie flex-col bg-gray-100 py-9 rounded-md  text-center">
        <h3>{{ movie.overview }}</h3>
      </div>
      <!-- show Image -->
      <!-- show title -->
      <!-- show description -->
      <!-- show rate -->
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "MovieDetail",
  props: {
    movie: Object,
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
    backToHome() {
      this.$router.push({ path: "/" });
    },
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
