import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component:() => import('../views/Introduction.vue'),
      meta: {
        AsideShow: false,
        LoginCache: false,
      }
    },

    {
      path: '/login',
      name: 'login',
      component:() => import('../views/LoginView.vue'),
      meta: {
        AsideShow: false
      },
    },

    {
      path: '/register',
      name: 'register',
      component:() => import('../views/RegisterView.vue')
    },

    {
      path: '/home',
      name: 'home',
      component:() => import('../views/HomeView.vue'),
      meta: {
        AsideShow: false
      }
    },

    {
      path: '/cancel',
      name: 'cancel',
      component:() => import('../views/CancelView.vue'),
      meta: {
        AsideShow: false
      }
    },

    {
      path: '/user',
      name: 'user',
      component:() => import('../views/UserView.vue'),
      meta: {
        AsideShow: true,
      }
    },

    {
      path: '/404',
      name: '404',
      component: () =>
          import ('../views/404View.vue')
    },

    {
      path: '/:catchAll(.*)',//匹配未定义的路由
      redirect: '/404'//重定向
    }
  ]
})

export default router
