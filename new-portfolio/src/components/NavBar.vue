<template>
  
    <div class="relative py-8 px-12 nav ">
      <div class="absolute inset-0 nav-class blur" >

      </div>
      <div class="flex justify-between relative dark:text-white  ">
        <span class="font-bold ">
          <h2>  Favour Oyewumi. </h2>
        </span>

        <span class="pr-8 ">
          <ul class="md:flex hidden">
            <li class="px-4 link" > <a href="#works"> Work</a></li>
            <li class="px-4 link"><a href="#about">About</a></li>
            <li class="px-4 link"><a href="https://drive.google.com/drive/folders/1Dury17tPkN6ZNL7XdcTNRX4ZX32P5wjO">Resume</a></li>
            <li class="pl-4 pr-8 link"><a href="#contact">Contact </a></li>
            
          </ul>
        </span>

        <span @click="dark()" class="flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </span>

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
          <li class="py-4 link" > <a href="#works"> Works</a></li>
          <li class="py-4 link"><a href="#about">About</a></li>
          <li class="py-4 link"><a href="https://drive.google.com/drive/folders/1Dury17tPkN6ZNL7XdcTNRX4ZX32P5wjO">Resume</a></li>
          <li class="py-4 pr-8 link"><a href="#contact">Contact </a></li>
          
        </ul>
      </div>
    </div>
</template>

<script>


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

    }

}
</script>

<style>
 .nav-class{
    background-image: linear-gradient(75deg, rgba(13, 246, 250, 0.3) 14%, rgba(224, 91, 177, 0.3) 92% );
 }
 .link:hover{
    font-weight: bolder;
    transition: ease-out 0.3s;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.1);
    
 }
 
  

</style>