<template>
  <header>
    <nav class="container">
   
        <img alt="logo-Imdb" id="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"><img>

    </nav>

  </header>

</template>

<script>


export default {
       name:'Header'
    }

</script>
<style scoped>
    header{
        background-color: var(--color-background-nav);
        height: 4em;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #logo {
        
        width:3em;
    }
    nav{
        display:flex;
        justify-content: space-between;
    }
</style>
