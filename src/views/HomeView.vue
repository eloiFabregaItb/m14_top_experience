<script setup lang="ts">

import img_brazil from "../assets/img/brazil.avif"
import img_hawaii from "../assets/img/hawaii.jpg"
import img_jamaica from "../assets/img/jamaica.avif"
import img_panama from "../assets/img/panama.jpg"

import { RouterLink } from "vue-router"

</script>

<template>
  <main>
      <ul>
        <li>
        <RouterLink to="/destination/brazil/">
            <h2>Brazil</h2>
            <img :src="img_brazil" alt="">
        </RouterLink>
        </li>

        <li>
            <RouterLink to="/destination/panama/">
                <h2>panama</h2>
                <img :src="img_panama" alt="">
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/destination/hawaii/">
              <h2>hawaii</h2>
              <img :src="img_hawaii" alt="">
            </RouterLink>
          </li>

          <li>
        <RouterLink to="/destination/jamaica/">
          <h2>jamaica</h2>
          <img :src="img_jamaica" alt="">
        </RouterLink>
      </li>
      
      
      </ul>
  </main>
</template>


<style scoped>

  ul{
    list-style: none;
    display: flex;
  }


  li{

  }

  li img{
    width: 170px;
    height: 100px;
  }
</style>