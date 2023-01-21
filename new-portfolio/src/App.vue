<template>
  <div id="app" :class="{dark:darkMode,every:darkMode} " >
    <NavBar @value="dark($event)" />
    <LandingComp class=" dark:text-white" />
    <WorkComp id="works"  class=" dark:text-white "/>
    <ServicesComp class=" dark:text-white "/>
    <AboutComp id="about" class=" dark:text-white " />
    <ContactComp id="contact" class=" dark:text-white "/>
    <FooterBar class=" dark:text-white " />
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
  },
  data(){
    return{
      darkMode: '',
      
    }
  },
  methods:{
    dark(darkMode){
      this.darkMode = darkMode
     
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
*{
  scroll-behavior: smooth;
  
}
*.dark{
  background: black;
}
html.dark{
  
  color-scheme: dark;
}
html.every{
  background-color: black;
}
#app {
  font-family: 'Nunito', sans-serif;
  width: fit-content;
 
}

body.dark{
  background: black;
}

   /* width */
   ::-webkit-scrollbar {
    background: white;
    width: 5px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 01px grey; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background:  linear-gradient(75deg, rgba(13, 246, 250, 0.3) 14%, rgba(224, 91, 177, 0.3) 92% );
    border-radius: 20px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:  linear-gradient(75deg, rgba(13, 246, 250, 0.3) 14%, rgba(224, 91, 177, 0.3) 92% ); 
  }

</style>
