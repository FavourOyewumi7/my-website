<template>
  <div class="my-16 pl-12 pr-12 lg:pr-20  dark:text-gray-200">
    <div class="xl:grid xl:grid-cols-4 block ">
      <h1 class="text-6xl lg:text-8xl col-span-3">
        Hello, <br>
        I'm Favour Oyewumi - a curious 
        software engineer based in 
        Lagos, Nigeria.
      </h1>
    </div>

    <div class="py-8">
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
export default {
    name: 'LandingComp'
}
</script>

<style scoped>
.link:hover{
  font-weight: bolder;
  transition: ease-out 0.3s;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.1);
}

</style>>