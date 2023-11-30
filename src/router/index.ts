import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DestinationShow from '../views/DestinationShow.vue'
import DestinationDetail from '../views/DestinationDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // {
    //   path: '/destination/:slug/experience/:exp',
    //   name: 'Destination Show',
    //   component: DestinationShow
    // },

    {
      path: '/destination/:slug/',
      name: 'Destination Show',
      component: DestinationShow,
      children:[
        {
          path:"experience/:exp",
          component:DestinationDetail
        }
    ]
    },  
    

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
