import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import StudyView from '../views/StudyVIew.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingView
    },
    {
      path: '/app',
      name: 'study',
      component: StudyView
    }
  ]
})

export default router
