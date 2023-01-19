<template>
  <div id="app">
    <NavBar />
    <LandingComp />
    <WorkComp />
    <ServicesComp />
    <AboutComp id="about" />
    <ContactComp id="contact" />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import LandingComp from './components/LandingComp.vue';
import WorkComp from './components/WorkComp.vue';
import ServicesComp from './components/ServicesComp.vue'
import AboutComp from './components/AboutComp.vue';
import ContactComp from './components/ContactComp.vue';
import FooterBar from './components/FooterBar.vue';



export default {
  name: 'App',
  components: {
    NavBar,
    LandingComp,
    WorkComp,
    ServicesComp,
    AboutComp,
    ContactComp,
    FooterBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
*{
  scroll-behavior: smooth;
}
#app {
  font-family: 'Nunito', sans-serif;
  

  
}
</style>
