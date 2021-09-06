<template>
  <div class="bg-gray-100 w-2/4 p-5 list-none cursor-default">
    <ul>
      <li>{{ $store.state.searchHistory[0] }}</li>
      <li>AutoComplete</li>
      <li>AutoComplete</li>
      <li>AutoComplete</li>
      <li>AutoComplete</li>
      <li>AutoComplete</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchHistory",
};
</script>

<style></style>
