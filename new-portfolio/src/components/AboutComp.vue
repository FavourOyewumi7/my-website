<template>
  <div class="my-20 pl-12 pr-12 lg:pr-20 about-div">
    <h2 class="text-2xl border-b-2 font-bold">About</h2>
    <div class="block xl:grid xl:grid-cols-3">
      <p class="text-center xl:text-left text-xl col-span-2 my-4 pt-5 about">
        Hey there! I'm a curious cat with a passion for exploring the world and learning new things. 
        When I'm not busy tinkering with technology, you can find me out in nature, hiking  
        or sitting among the trees and breathing fresh beautiful air. I'm a big foodie and love watching cooking vids, food channels on youtube and experimenting 
        with different recipes in the kitchen. I'm also a bit of a gamer and enjoy getting lost in virtual 
        worlds from time to time. Overall, I'm just a fun-loving person who enjoys the simple things in life 
        and is always up for a good adventure!
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
    name: 'AboutComp',
    mounted(){
      this.scrollAnimation4()
    },
    methods:{
      scrollAnimation4() {
      gsap.timeline({
      scrollTrigger: {
        
        trigger: ".about-div",
        start: "top bottom",      
        scrub: 1,
       
      }}).fromTo(
        '.about', {
          opacity: 0.5,
            y: "100%",
    },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
      
    }
    )
    }
}}
</script>

<style>

</style>