<template>
  
    <div class="relative py-8 px-12  nav-div">
      <div class="absolute inset-0 nav-class blur" >

      </div>
      <div class="flex justify-between relative dark:text-white  nav">
        <span class="font-bold ">
          <h2>  Favour Oyewumi. </h2>
        </span>

        <span class="pr-8 ">
          <ul class="md:flex hidden">
            <li class="px-2 flex flex-row justify-center link" > <a href="#works" class="flex flex-row justify-center" > Work</a></li>
            <li class="px-2 flex flex-row justify-center link"><a href="#about" class="flex flex-row justify-center">About</a></li>
            <li class="px-2 flex flex-row justify-center link"><a href="https://drive.google.com/drive/folders/1566eOzngy9zmjbWqCDHn6DSXVfujh22s?usp=sharing" class="flex flex-row justify-center">Resume</a></li>
            <li class="pl-4 pr-8 link"><a href="#contact" class="flex flex-row justify-center">Contact </a></li>
            
          </ul>
        </span>
        <!-- this is the sunlight icon -->
        <span @click="dark()" class="flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6  " v-show="darkMode">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" v-show="!darkMode">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          
        </span>

        <!-- this is the hamburger and x menu part -->
        <span class="md:hidden flex justify-end transition hover:transform hover:rotate-360" @click="navopen()" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 " v-show="show">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg> 
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition ease-in delay-3000" v-show="!show">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>

        
        
      </div>

      
    </div>
    <div class="mx-auto dark:text-white dark:bg-black w-screen mt-20" v-show="!show" :style="show ? navStyle:''" >
      <div>
        <ul class="flex">
          <li class="px-2 flex flex-row justify-center link" > <a href="#works" class="" > Work</a></li>
          <li class="px-2 flex flex-row justify-center link"><a href="#about" class="flex flex-row justify-center">About</a></li>
          <li class="px-2 flex flex-row justify-center link"><a href="https://drive.google.com/drive/folders/1566eOzngy9zmjbWqCDHn6DSXVfujh22s?usp=sharing" class="flex flex-row justify-center">Resume</a></li>
          <li class="pl-4 pr-8 link"><a href="#contact" class="flex flex-row justify-center">Contact </a></li>
          
        </ul>
      </div>
    </div>
</template>

<script>
import {gsap} from 'gsap'

export default {
    name: 'NavBar',
    data(){
      return{
        show:true,
        darkMode:false,
        navStyle:{
          transition: '0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
        },
        navnotStyle:{
          height:'0vh',
          display:'hidden'
        }
      }
    },
    methods:{
      navopen(){
        this.show = !this.show
      },
      dark(){
        this.darkMode = !this.darkMode
        this.$emit('value', this.darkMode)
      }

    },
    mounted(){
      gsap.fromTo(
        '.nav', {
          opacity: 0,
      x: "-20%",
    },
    {
      duration: 2,
      opacity: 1,
      x: 0,
      ease: "power3.inOut",
      
    }
    )
    }

}
</script>

<style>
 .nav-class{
    background-image: linear-gradient(75deg, rgba(13, 246, 250, 0.3) 14%, rgba(224, 91, 177, 0.3) 92% );
 }
 .link{
  background: linear-gradient(to left, transparent 50%, rgba(13, 246, 250, 0.3)  50%) right;
  background-size: 200%;
  transition: .5s ease-out;
 }
 .link:hover{
    background-position: left;
    font-weight: bold;
    
 }
 
  

</style>