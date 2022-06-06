import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import { createStore } from 'vuex'

import App from './App.vue'
import router from './router/routes'
import store from './store'

// import CoachesSelection from './components/CoachesSelection.vue'
// import TheRequests from './components/TheRequests.vue'
// import ContactCoach from './components/ContactCoach.vue'
// import RegisterCoach from './components/RegisterCoach.vue'

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', redirect: '/coaches' },
//     { path: '/coaches', component: CoachesSelection },
//     { path: '/requests', component: TheRequests },
//     { path: '/register', component: RegisterCoach },
//     { path: '/coaches/:id/contact', component: ContactCoach, props: true},
//   ]
// })

// const store = createStore({
//   state() {
//     return {
//       coaches: [
//         { id: 1, firstName: 'Maximilian', lastName: 'Schwarzmüller', rate: 30, topics: ['frontend', 'backend', 'career'] },
//         { id: 2, firstName: 'Julie', lastName: 'Jones', rate: 30, topics: ['frontend', 'career'] }
//       ]
//     }
//   },
//   getters: {
//     getCoaches(state) {
//       return state.coaches
//     }
//   },
//   mutations: {
//     addCoach(state, payload) {
//       state.coaches.push(payload.newCoach)
//     }
//   },
//   actions: {
//     setAddCoach(context, payload) {
//       return context.commit('addCoach', payload)
//     }
//   }
// })

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
