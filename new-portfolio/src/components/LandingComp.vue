<template>
  <div class="my-16 pl-12 pr-12 lg:pr-20  dark:text-gray-200">
    <div class="xl:grid xl:grid-cols-4 block ">
      <h1 class="text-6xl lg:text-8xl col-span-3 main-text">
        Hello, <br>
        I'm Favour Oyewumi - a curious 
        software engineer based in 
        Lagos, Nigeria.
      </h1>
    </div>

    <div class="py-8 list">
      <ul class="flex">
        <li class="pr-5 cursor-pointer link" > 
          <a href="https://www.github.com/FavourOyewumi7" target="_blank"> 
              Github 
          </a>
        </li>


        <li class="px-5 cursor-pointer link" >
            <a href="https://www.linkedin.com/in/favour-o-3610731a6/" target="_blank"> 
                LinkedIn 
            </a>
        </li>


        <li class="px-5 cursor-pointer link" >
            <a href="https://twitter.com/ayomideif" target="_blank"> 
                Twitter 
            </a>
        </li>


        <li class="px-5 cursor-pointer link" >
            <a href="mailto:oyewumifavour65@gmail.com" target="_blank">
                Email 
            </a>
        </li>


        <li class="px-5 cursor-pointer link" >
            <a href="https://instagram.com/ayomideof" target="_blank">
                Instagram 
            </a>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
import {gsap} from 'gsap'

export default {
    name: 'LandingComp',
    mounted(){
      gsap.fromTo(
        '.main-text', {
          
          opacity: 0,
      y: "-50%",
    },
    {
      duration: 2,
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
      
    }
    )


      gsap.fromTo(
      '.list',{
      
      opacity: 0,
      y: "100%",
    },
    {
      duration: 2,
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
      
    }
            )
    }
}
</script>

<style scoped>
.link{
  background: linear-gradient(to left, transparent 50%, rgba(224, 91, 177, 0.3) 50%) right;
  background-size: 200%;
  transition: .5s ease-out;
  cursor: pointer;
 }
 .link:hover{
    background-position: left;
    font-weight: bold;
 }

</style>>