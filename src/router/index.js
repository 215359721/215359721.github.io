import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    // component: () => import('@/views/fontend/index')
    component: () => import('@/views/example/index')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/index'),
    redirect: '/admin-item',
    children: [
      {
        path: '/admin-layout',
        name: 'admin-layout',
        component: () => import('@/views/admin/layout/index')
      },
      {
        path: '/admin-item',
        name: 'admin-item',
        component: () => import('@/views/admin/item/index')
      },
      {
        path: '/admin-menu',
        name: 'admin-menu',
        component: () => import('@/views/admin/menu/index')
      },
    ]
  },
  {
    path: '/schdule',
    name: 'schdule',
    component: () => import('@/views/example/schdule')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/example/login')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('@/views/example/reactive')
  },
  {
    path: '/newsInfo',
    name: 'newsInfo',
    component: () => import('@/views/example/newsInfo')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
