<template>
    <div class="mt-12 pl-12 pr-12 lg:pr-20 mb-20 work-div">
        <h2 class="text-2xl border-b-2 font-bold  ">Works</h2>
    
        <div class="flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-8 my-12">
            <WorkCard v-for="project in projects" :key="project.id" :project="project" class="my-12 lg:my-0 work" />
        </div>

        <p class="font-bold "> N.B If you want to know more about my Machine Learning Journey, you can check out my   <a href="https://zindi.africa/users/FavourOyewumi/competitions" target="_blank" class="underline underline-offset-4 decoration-1 text-[#0df6fae6]"> Zindi </a> or <a href="https://www.kaggle.com/favouroyewumi1" target="_blank" class="underline underline-offset-4 decoration-1 text-[#e05bb1e6]">Kaggle </a>  accounts</p>
      </div>
</template>

<script>
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import WorkCard from './WorkCard.vue'
export default {
    name:'WorkComp',
    components:{WorkCard},
    data(){
      return{
        projects:[{
          title:'Crypto Library',
          about:'A web library where you can learn everything from cryptocurrency to Web3',
          imageUrl:'cryptolib.jpg',
          link:'',
          tools:['Vue', 'Tailwind', 'Vue Router'],
          id:1,
          visible:false
        },
        {
          title:'GetLinked Hackathon',
          about:'A small web app submitted for an online hackathon',
          imageUrl:'getlinked.png',
          link:'https://get-linked-solution.vercel.app/',
          tools:['Vue', 'Tailwind', 'Vue Router','REST'],
          id:1,
          visible:false
        },
        {
          title:'Todo App',
          about:'My First app while learning Vue, learnt alot of the dynamics of Vue here',
          imageUrl:'todoapp.jpg',
          link:'https://vue-todo-app-using-state-management.vercel.app/',
          tools:['Vue', 'Tailwind', 'Vuex'],
          id:2,
          visible:false
        },
        {
          title:'Weather App',
          about:'Built a weather app to check the weather for the day and days ahead',
          imageUrl:'weather-app.jpg',
          link:'https://weather-app-bice-omega.vercel.app/',
          tools:['Vue', 'Tailwind','GSAP','REST'],
          id:8,
          visible:false  
        },
        {
          title:'Movie Finder',
          about:'Developed a movie search app, where you can see info about movies',
          imageUrl:'movie-finder.jpg',
          link:'https://movie-search-woad.vercel.app/',
          tools:['Vue', 'Tailwind','Vue Router', 'REST'],
          id:9,
          visible:false  
        },
        {
          title:'Face Recognition App',
          about:'You cannot see a live app, cause i did not attach a frontend to it, but you can click to go to the github repository',
          imageUrl:'facerecognition.jpg',
          link:'https://github.com/FavourOyewumi7/face-recognition-project',
          tools:['Python', 'OpenCV', 'Machine Learning'],
          id:6,
          visible:false
        },
        {
          title:'Machine Learning/Deep Learning Practice',
          about:'This is me building models, playing with data, participating in ML hackathons',
          imageUrl:'deeplearning.jpg',
          link:'https://github.com/FavourOyewumi7/deeplearning',
          tools:['Python', 'OpenCV', 'Tensorflow', 'Scikit Learn','Pytorch'],
          id:7,
          visible:false  
        },
        {
          title:'PSF Hub',
          about:'A revamped website for the Pastors Seed Family, a youth arm in my church (not responsive yet, work ongoing)',
          imageUrl:'psfhub.jpg',
          link:'https://staging.psalmzy.com/',
          tools:['Vue', 'Tailwind', 'Vue Router'],
          id:3,
          visible:true
        },
        {
          title:'Church Template Design',
          about:'Made a church website design template (not responsive)',
          imageUrl:'daystar-static.jpg',
          link:'https://daystar-lac.vercel.app/ ',
          tools:['HTML', 'CSS', 'JS'],
          id:4,
          visible:true
        },
        {
          title:'Hackathon Web Design',
          about:'We made a web design cms, where I was required to build some templates (not responsive)',
          imageUrl:'ohw-static-2.jpg',
          link:'https://favouroyewumi7.github.io/',
          tools:['HTML', 'CSS', 'JS'],
          id:5,
          visible:true
        },
        
    ]
      }
    },
    mounted(){
      this.scrollAnimation0()
    },
    methods:{
      scrollAnimation0() {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".work-div",
            start: "top 80%",
            end:'bottom center',
            scrub:1,
            toggleActions:'none none none none'
       
      }
        }).from(
        '.work', {
          opacity: 0,
          x:"-100%",
          stagger:0.5, 
          
    })
    // .to(
    //   {
    //   duration: 2,
    //   opacity: 1,
    //   x:0,
    //   stagger: 0.3,
    //   ease: "power3.inOut",
      
    // }
    //)
  }
    }
}
</script>

<style>

</style>