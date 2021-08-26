<template>
  <li :id= "{'title' :movieTitle.title}">
      {{movieTitle.original_title}}
  </li>

  
</template>

<script>

export default {
    props: {
        movieTitle:Object,
    },
    
   
};
</script>
