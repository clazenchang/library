// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from '@/router'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

const app = createApp(App)


// app.use(bootstrap).mount('#app')
app.use(router).mount('#app')
