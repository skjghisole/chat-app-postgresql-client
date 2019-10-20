import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  return !!token
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home'),
      beforeEnter: (to, from, next) => {
        if (!isAuthenticated()) next('/login')
        else next()
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "home" */ './views/About')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login'),
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) next('/')
        else next()
      }
    },
    {
      path: '/messages/:id',
      name: 'message',
      component: () => import(/* webpackChunkName: "messages" */ './views/Messages'),
      beforeEnter: (to, from, next) => {
        if (!isAuthenticated()) next('/login')
        else next()
      }
    }
  ]
})
