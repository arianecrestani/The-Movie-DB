<template>
  <div class=" bg-gray-100 w-2/4  list-none cursor-default">
    <ul v-for="item in $store.state.searchHistory" v-bind:key="item">
      <li class="hover:bg-red-700 p-3" @click="setResult(item)" >{{ item }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "SearchHistory",
  methods: {
    setResult (item) {
       this.$store.dispatch("setResult", item); // save paramenter
    }
  }
};
</script>

<style></style>
