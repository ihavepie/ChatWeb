import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css'
import './assets/base.css'

import localforage from "localforage";
import { Loading, message } from '@/utils'

const app = createApp(App)

app.config.globalProperties.$msg = message
app.config.globalProperties.$Loading = Loading


app.config.globalProperties.$localforage = localforage
localforage.config({
    name: 'ChatWeb'
});

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')



export default app