<template>
  <div class="my-16 pl-12 pr-20">
    <h1 class="text-8xl">
      Hello, <br>
      I'm Favour Oyewumi - a <br> curious 
       software engineer <br> based in 
      Lagos, Nigeria.
    </h1>

    <div class="py-8">
      <ul class="flex">
        <li class="pr-5 cursor-pointer link" > <a href="https://www.github.com/FavourOyewumi7"></a> Github  </li>
        <li class="px-5 cursor-pointer link" ><a href="https://www.linkedin.com/in/favour-o-3610731a6/"></a> LinkedIn </li>
        <li class="px-5 cursor-pointer link" ><a href="https://twitter.com/ayomideif"></a> Twitter </li>
        <li class="px-5 cursor-pointer link" ><a href="mailto:oyewumifavour65@gmail.com"></a> Email </li>
        <li class="px-5 cursor-pointer link" ><a href=""></a> Instagram </li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
    name: 'LandingComp'
}
</script>

<style>
.link:hover{
  font-weight: bolder;
  transition: ease-out 0.3s;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.1);
}

</style>