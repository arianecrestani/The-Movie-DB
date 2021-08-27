<template>
  <div class= "movie">
    <div class= "title">
      {{ movie.title }}  
    </div>
    <div class= "overview">
      {{ movie.overview }}  
    </div>
     <div class= "Poster">
      {{ movie.poster_path}}  
    </div>
     <div class= "date">
      {{ movie.release_date}}  
    </div>
     <div class= "nota">
      {{ movie.vote_average}}  
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
};
</script>
<style scoped>
.movie {
  background-color: white;
  padding: 3rem;
  margin: 2rem;
}
.title {
  color: brown;
  padding: 1rem;
}
.overview {
    color:blue;
}
</style>
