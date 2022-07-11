import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionesView from '@/views/OpinionesView'
import AdministracionView from '@/views/AdministracionView'
import EditaOpinionView from '@/views/EditaOpinionView'
import NotFoundView from '@/views/NotFoundView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: OpinionesView
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: AdministracionView
  },
  {
    path: '/editaopinion/:id',
    name: 'editaopinion',
    component: EditaOpinionView
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFoundView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
