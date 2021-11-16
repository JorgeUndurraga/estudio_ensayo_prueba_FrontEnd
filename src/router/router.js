import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Prueba_conexion from '../views/Prueba_conexion.vue'
import Login from '../views/Login.vue'
import Error404 from '@/views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '*',
  //   redirect: '/login'
  //   },
  //   {
  //   path: '/',
  //   redirect: '/login'
  //   },
  {
    path:'/login',
    name:'Login',
    component:Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      privado:true,
    }
  },
  
  {
    path: '/about',
    name: 'About',
     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  //página de prueba de conexion de la instalación de Vuetify 
  {
    path: '/prueba',
    name: 'Prueba',
    component: Prueba_conexion,
    meta:{
      privado:true,
    }
  },
  ///página de error
  {
    path:'*',
    component: Error404,
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
