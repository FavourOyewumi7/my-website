<template>
  <div class="">
    <NavBar />
    <LandingComp />
    <ExpComp />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import LandingComp from './components/LandingComp.vue';
import ExpComp from './components/ExpComp.vue'
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    LandingComp,
    ExpComp,
    FooterBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
}
</style>
