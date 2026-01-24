import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/about', component: { template: '<div>About</div>' } },
        { path: '/contact', component: { template: '<div>Contact</div>' } }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
