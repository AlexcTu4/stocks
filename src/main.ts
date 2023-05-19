import './assets/main.css'

import { createApp } from 'vue'
//@ts-ignore
import App from './App.vue'
import router from './router'
// import Vuex from 'vuex'
import { store, key } from './store'
const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#app')
