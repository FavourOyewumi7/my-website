<template>
    <div class="shadow-md shadow-slate-200 rounded-lg pb-12 hover:shadow-slate-300 cursor-pointer">
        <a :href="project.link" target="_blank">
            <div class="shadow-sm ">
                <img :src="require('@/assets/' + project.imageUrl + '')" alt="">
            </div>
            <div class="px-5 pt-5 ">
                <h2 class="text-xl font-bold">{{project.title}}</h2>
                <p>{{project.about}}</p>
                <ul class="flex pt-5 whitespace-normal break-words pr-4 md:px-0">
                    <li :key="index" v-for="(val,index) in project.tools" class="pr-5 ">
                        {{ val }}
                    </li>
                </ul>
        
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name:'WorkCard',
    props:{
        project:Object
    }
}
</script>

<style>

</style>