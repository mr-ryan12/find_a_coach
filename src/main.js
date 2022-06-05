import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import CoachesSelection from './components/CoachesSelection.vue'
import TheRequests from './components/TheRequests.vue'
import ContactCoach from './components/ContactCoach.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/coaches', component: CoachesSelection },
    { path: '/coaches/:id/contact', component: ContactCoach, props: true},
    { path: '/requests', component: TheRequests },
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
