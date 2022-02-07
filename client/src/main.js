import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './style.css'

import Home from '@/components/Home.vue'
import Create from '@/components/Create.vue'
import Detail from '@/components/Detail.vue'
import Navigation from '@/components/Navigation.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/house/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/house/edit/:id',
    name: 'Edit',
    component: Create
  },
  {
    path: '/house/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/navigation/:id',
    name: 'Navigation',
    component: Navigation
  },
  

]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
