<template>
  <div class="my-12 pl-12 pr-12 lg:pr-20 ">
    <h2 class="text-2xl border-b-2 font-bold">Services</h2>

    <div class="flex-col lg:grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-8 px-8 py-12">
        <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 my-12 lg:my-0 serv-1">
            <h2>Web Development</h2>
            <p> I possess extensive knowledge of the Web and its technologies. If you want your projects completed on time and need a Front End Engineer 
                with a track record, get in touch with me for a collaboration.
            </p>
        </div>

        <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 my-12 lg:my-0 serv-2">
            <h2>Data Analysis</h2>
            <p>
                If you're looking for someone to analyze your data, I am the perfect candidate.
                 I have a strong proficiency in Python, SQL, Power BI, and I can use these tools 
                 to uncover insights that will amaze you. Let me help you make sense of your data 
                 and turn it into actionable information.
            </p>

        </div>

        <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 my-12 lg:my-0 serv-1">
            <h2>Machine Learning</h2>
            <p>
                As demonstrated by the projects listed above, my participation in ML hackathons in the past
                 and my certificate from the prestigious DSN [Data Science Nigeria] have given me an advantage 
                 in my understanding of machine learning, from tabular data to Convolutional Neural Networks. Send
                me a message so we can talk more.
            </p>
        </div>

        <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 my-12 lg:my-0 serv-2">
            <h2>Critical Thinking</h2>
            <p>
                By participating in challenging platforms like Leetcode and Hackerrank, and solving over 350 questions across both platforms, 
                I have developed the ability to think critically and find the most efficient solutions to problems, in terms of both space and 
                time complexity. If you're interested in discussing problem-solving strategies, feel free to reach out to me. I would be happy 
                to chat with you.
                
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'ServicesComp',
    mounted(){
        this.scrollAnimation1()
        this.scrollAnimation2()
    },
    methods:{
       scrollAnimation1() {
      gsap.timeline({
      scrollTrigger: {
        
        trigger: ".service-div",
        start: "20% 75%",
        end: "75% 20%",
        scrub: true,
       
      }
    }).fromTo(
        '.serv-1', {
          opacity: 0,
            x: "-20%",
    },
    {
      duration: 0.5,
      opacity: 1,
      x: 0,
      ease: "power3.inOut",
      
    }
    )},
    scrollAnimation2() {
      gsap.timeline({
      scrollTrigger: {
        
        trigger: ".service-div",
        start: "top center",
        scrub: 1
       
      }}).fromTo(
        '.serv-2', {
          opacity: 0,
            y: "-20%",
    },
    {
      duration: 0.5,
      opacity: 1,
      x: 0,
      ease: "power3.inOut",
      
    }
    )
    }
}}
</script>

<style>

</style>