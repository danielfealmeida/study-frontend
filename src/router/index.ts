import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"

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
      component: StudyView,
      meta: {
        requiresAuth: true
      }
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

// This code creates a promise that will return the current user if there is one logged in
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListerner = onAuthStateChanged(getAuth(), (user) => {
      removeListerner();
      resolve(user)
    }, reject)
  })
}

// This code will take the result from the previous one and check if there is a user logged in before letting someone enter the "requireAuth: true" pages
router.beforeEach(async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/")
    }
  } else {
    next();
  }
})

export default router
