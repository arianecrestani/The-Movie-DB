<template>
  <div class=" bg-gray-100 w-2/4  list-none cursor-default">
    <ul v-for="item in $store.state.searchHistory" v-bind:key="item">
      <li class="hover:bg-red-700 p-3" >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchHistory",
};
</script>

<style></style>
