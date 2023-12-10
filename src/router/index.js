import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '../utils/auth'
import layou from '../layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: layou,
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
      },
      {
        path: '/approvals',
        name: 'approvals',
        component: () => import('../views/approvals/index.vue')
      },
      {
        path: '/securitySetting',
        name: 'securitySetting',
        component: () => import('../views/approvals/securitySetting/index.vue')
      },
      {
        path: '/permission',
        name: 'permission',
        component: () => import('../views/permission/index.vue')
      },
      {
        path: '/employees',
        name: 'employees',
        component: () => import('../views/employees/index.vue')
      },
      {

        path: '/detail',
        name: 'detail',
        component: () => import('../views/employees/detail/index.vue')
      },
      {
        path: '/company',
        name: 'company',
        component: () => import('../views/company/index.vue')
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
