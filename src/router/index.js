import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home');
const Search = () => import('@/views/search/Search');
const Order = () => import('@/views/order/Order');
const Mine = () => import('@/views/mine/Mine');
const Shop = () => import('@/views/shop/Shop');

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/shop',
    component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
