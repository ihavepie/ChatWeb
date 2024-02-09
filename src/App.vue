<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Aside from '/src/components/Aside.vue'
</script>

<template>

  <div class="container">
    <Aside v-show="$route.meta.AsideShow"></Aside>
    <RouterView/>
  </div>



</template>


<style scoped>

</style>
