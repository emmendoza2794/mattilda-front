import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Deposit from '@/views/Deposit.vue'
import Balances from '@/views/Balances.vue'
import Withdraw from '@/views/Withdraw.vue'
import Users from '@/views/Users.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/store'


const routes = [
  {
    path: '/', 
    name: 'home', 
    component: Home, 
    meta: { requiresAuth: true }
  },
  {
    path: '/login', 
    name: 'login', 
    component: Login,
    meta: { login:true }
  },
  {
    path: '/deposit', 
    name: 'deposit', 
    component: Deposit,
    meta: { requiresAuth: true }
  },
  {
    path: '/withdraw', 
    name: 'withdraw', 
    component: Withdraw,
    meta: { requiresAuth: true }
  },
  {
    path: '/balances', 
    name: 'balances', 
    component: Balances,
    meta: { requiresAuth: true }
  },
  {
    path: '/users', 
    name: 'users', 
    component: Users,
    meta: { requiresAuth: true }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {

  store.commit('getToken')

  const token = store.state.token

  if(to.meta.requiresAuth){

    if (token == ''){
      return { path: '/login' }
    }

    axios.get('https://mattilda-back.malusoft.co/validateToken?token='+token).then((response) => {

      if (response.status != 202){
        return { path: '/login' }
      }

    }).catch((error) => {
      console.log(error)
      router.push('login')
    })

  }

  if (to.meta.login) {

    axios.get('https://mattilda-back.malusoft.co/validateToken?token='+token).then((response) => {

      if (response.status == 202){
        router.push('/')
      }

    }).catch((error) => {
      console.log(error)
    })

  }

})

export default router