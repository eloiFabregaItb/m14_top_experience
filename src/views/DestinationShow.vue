<script setup lang="ts">
  import router from '@/router';

  import data from "../assets/data.json"

  import { ref } from 'vue';


  type Country = {
  name: string;
  slug: string;
  image: string;
  id: number;
  description: string;
  experiences: Experience[];
};

type Experience = {
  name: string;
  slug: string;
  image: string;
  description: string;
};


  const destination = ref<Country | null>(null)
  const experience = ref<Experience | null>(null)

  const slug_dest = router.currentRoute.value.params.slug
  const slug_exp = router.currentRoute.value.params.exp
  console.log("dest",slug_dest,"exp",slug_exp,router.currentRoute.value.params)
  destination.value = data.destinations.find(x=>x?.slug===slug_dest)
  experience.value = destination.value?.experiences.find(x=>x?.slug === slug_exp)

  console.log(experience)

</script>

<template>
  <main>
    <h4>dest</h4>
      
      <div v-if="destination">
        <h1>{{ destination.name }}</h1>
        <p>{{ destination.description }}</p>
        
        <div>
          <h2>Top experiences</h2>
          <ul>
            <li v-for="experience in destination.experiences">
              <RouterLink
                :to="`experience/${experience.slug}`"
              >
                <h3>{{ experience.name }}</h3>
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>
      <div v-else>
        <h2>Destination not found</h2>
      </div>



  </main>
</template>
