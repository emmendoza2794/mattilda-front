import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#0ad528',
  cancelButtonColor: '#00E70E',
};


createApp(App)
.use(router)
.use(store)
.use(VueAxios, axios)
.use(VueSweetalert2, options)
.mount('#app')
