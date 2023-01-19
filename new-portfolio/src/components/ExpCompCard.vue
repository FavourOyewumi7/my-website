<template>
  <div>
    <div>
        <img :src="require('@/assets/' + ImageUrl + '')" alt="">

    </div>
    <div>
        <h2>{{title}}</h2>
        <p>{{about}}</p>
        <ul>
            <li :key="index" v-for="(val,index) in vals">
                {{ val }}
            </li>
        </ul>

    </div>

  </div>
</template>

<script>
export default {
    name:'ExpCompCard',
    data(){
        return {
            'vals':this.tools,
            'num':10
        }
    },
    props:{
        ImageUrl: String,
        about: String,
        title:String,
        tools:Array
    }
}
</script>

<style>

</style>