<template>
    <div class="mt-12 pl-12 pr-12 lg:pr-20 mb-20 ">
        <h2 class="text-2xl border-b-2 font-bold">Works</h2>
    
        <div class="flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-8 my-12">
            <WorkCard v-for="project in projects" :key="project.id" :project="project" class="my-12 lg:my-0" />
        </div>

        <p class="font-bold"> N.B If you want to know more about my Machine Learning Journey, you can check out my   <a href="https://zindi.africa/users/FavourOyewumi/competitions" target="_blank" class="underline underline-offset-4 decoration-1"> Zindi </a> or <a href="https://www.kaggle.com/favouroyewumi1" target="_blank" class="underline underline-offset-4 decoration-1">Kaggle </a>  accounts</p>
      </div>
</template>

<script>
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
          title:'Todo App',
          about:'My First app while learning Vue, learnt alot of the dynamics of Vue here',
          imageUrl:'todoapp.jpg',
          link:'https://vue-todo-app-using-state-management.vercel.app/',
          tools:['Vue', 'Tailwind', 'Vuex'],
          id:2,
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
          title:'My Portfolio Website',
          about:'This is the website you are looking at',
          imageUrl:'newportfolio.jpg',
          link:'https://favouroyewumi.vercel.app',
          tools:['Vue', 'Tailwind'],
          id:4,
          visible:false
        },
        {
          title:'Church Template Design',
          about:'Made a church website design template (not responsive)',
          imageUrl:'daystar-static.jpg',
          link:'https://daystar-lac.vercel.app/ ',
          tools:['HTML', 'CSS', 'JS'],
          id:5,
          visible:true
        },
        {
          title:'Hackathon Web Design',
          about:'We made a web design cms, where I was required to build some templates (not responsive)',
          imageUrl:'ohw-static-2.jpg',
          link:'https://favouroyewumi7.github.io/',
          tools:['HTML', 'CSS', 'JS'],
          id:6,
          visible:true
        },
        {
          title:'Face Recognition App',
          about:'You cannot see a live app, cause i did not attach a frontend to it, but you can click to go to the github repository',
          imageUrl:'facerecognition.jpg',
          link:'https://github.com/FavourOyewumi7/face-recognition-project',
          tools:['Python', 'OpenCV', 'Machine Learning'],
          id:7,
          visible:false
        },
        {
          title:'Machine Learning/Deep Learning Practice',
          about:'This is me building models, playing with data, participating in ML hackathons',
          imageUrl:'deeplearning.jpg',
          link:'https://github.com/FavourOyewumi7/deeplearning',
          tools:['Python', 'OpenCV', 'Tensorflow', 'Scikit Learn','Pytorch'],
          id:8,
          visible:false  
        }

        
    ]
      }
    }
}
</script>

<style>

</style>