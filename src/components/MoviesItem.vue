<template>
  <li :class= "{'title' :movie.title}">
      {{movie.original_title}}.{{movie.original_title}}
  </li>

  
</template>

<script>

export default {
    props: {
        movie:Object
    }
    
   
};
</script>
