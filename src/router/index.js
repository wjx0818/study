import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import ListArticle from '../views/ListArticle'
import CreateArticle from '../views/CreateArticle' 
import EditArticle from '../views/EditArticle' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/articles/index'
  },
  {
    path: '/articles/index',
    name: 'list-article',
    component:ListArticle
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component:CreateArticle
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/articles/:id/edit/',
    name: 'edit-article',
    component:EditArticle
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
