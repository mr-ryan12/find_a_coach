import { createRouter, createWebHistory } from 'vue-router'

import CoachesSelection from '../components/CoachesSelection.vue'
import TheRequests from '../components/TheRequests.vue'
import ContactCoach from '../components/ContactCoach.vue'
import RegisterCoach from '../components/RegisterCoach.vue'
import ViewDetails from '../components/ViewDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesSelection },
    { path: '/requests', component: TheRequests },
    { path: '/register', component: RegisterCoach },
    { path: '/coaches/:id/contact', component: ContactCoach, props: true},
    { path: '/coaches/:id/details', component: ViewDetails, props: true},
  ]
})

export default router