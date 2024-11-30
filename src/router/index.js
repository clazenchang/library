import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import book from '@/components/book.vue'
import booklist from '@/assets/books_bk.json'
import NotFoundPage from '@/components/notFoundPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/book/:id',
      name: 'book',
      component: book,
      beforeEnter: (to, from, next ) => {
        const bookId = to.params.id;
        const bookIds = booklist.map((item) => item.id)
        const bookExists = bookIds.includes(Number(bookId))
        if(!bookExists){
          next({name:'not-found'})
        }else{
          next()
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage
    }

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
