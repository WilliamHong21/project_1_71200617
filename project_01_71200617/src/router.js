import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Profile from './views/profile'
import Home from './views/home'
import TambahPesanan from './views/tambah-pesanan'
import CheckOut from './views/check-out'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'tambahPesanan',
      path: '/tambah-pesanan',
      component: TambahPesanan,
    },
    {
      name: 'checkOut',
      path: '/check-out',
      component: CheckOut,
    },
  ],
})
