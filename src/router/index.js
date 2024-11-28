import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import book from '@/components/book.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'book',
      component: book
    },
    // haven't do not found page yet



    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')

    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    // }
  ]
})

export default router
