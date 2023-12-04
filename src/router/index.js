import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getToken } from '../util/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/framework',
        name: 'framework',
        component: () => import('../views/framework/index.vue')
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = getToken()
  if (!token && to.path != '/login') {
    next('/login')
  } else if (token && to.path == '/login') {
    next('/')
  } else {
    next()
  }
})

export default router
