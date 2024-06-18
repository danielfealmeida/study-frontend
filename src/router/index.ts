import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import StudyView from '../views/StudyView.vue'
import LoginView from '../views/LoginView.vue'
import SigninView from '../views/SigninView.vue'

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
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/signin",
      name: "signin",
      component: SigninView
    }
  ]
})

export default router
