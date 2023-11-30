<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/destination/brazil/">Brazil</RouterLink>
        <RouterLink to="/destination/panama/">Panama</RouterLink>
        <RouterLink to="/destination/hawaii/">Hawaii</RouterLink>
        <RouterLink to="/destination/jamaica/">Jamaica</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/itb">ITB</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  width: 100%;
  background-color: aquamarine;
}

nav{
  display: flex;
  width: 100%;
}

nav a{
  padding: 1rem;
  text-decoration: none;
  color: blueviolet;
}

nav a:hover{
  background-color: darkcyan;
  color: lightcoral;
}

</style>
