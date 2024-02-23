import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('@/views/DetailsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('@/views/ErrorPageView.vue')
    },
    {
      path: '/error',
      name: 'vercelError',
      component: () => import('@/views/ErrorPageView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
