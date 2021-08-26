<template>
  <div :class="{ title: movie.title }">
    {{ movie.original_title }}
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
.title {
  color: brown;
}
</style>
