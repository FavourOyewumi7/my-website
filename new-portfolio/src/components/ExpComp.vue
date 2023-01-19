<template>
  <div class="my-12 pl-12 pr-20 ">
    <h2 class="text-2xl border-b-2 font-bold">Works</h2>

    <div class="grid grid-cols-2 ">
        <ExpCompCard  />
    </div>
  </div>
</template>

<script>
import ExpCompCard from './ExpCompCard.vue';

export default {
    name: "ExpComp",
    components: [
        ExpCompCard
    ],
   
}
</script>

<style>

</style>