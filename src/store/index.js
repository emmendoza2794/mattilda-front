import { createStore } from 'vuex'
import jwt_decode from "jwt-decode";

const store = createStore({

  state () {
    return {
      token : '',
      name: '',
      rol: '',
      email: '',
      header: {
        Authorization: ''
      }
    }
  },
  mutations: {
    saveToken(state, value) {

      localStorage.setItem('token', value)

      store.commit('setToken', value)

    },
    setToken(state, value) {

      state.token = value

      let decoded = jwt_decode(state.token)

      state.name = decoded.name
      state.rol = decoded.rol
      state.email = decoded.email
      state.header.Authorization = 'Bearer '+value

    },
    getToken(state){

      let token = localStorage.getItem('token')

      if (token) {
        store.commit('setToken', token)
      }else{

        state.token = ''
        state.name = ''
        state.rol = ''
        state.email = ''
        state.header.Authorization = ''

      }
    },
    destroyedToken(state){

      localStorage.removeItem('token')
      
      state.token = ''
      state.name = ''
      state.rol = ''
      state.email = ''
      state.header.Authorization = ''

    }
  }

})

export default store