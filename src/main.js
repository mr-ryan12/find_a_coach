import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'

import App from './App.vue'
import CoachesSelection from './components/CoachesSelection.vue'
import TheRequests from './components/TheRequests.vue'
import ContactCoach from './components/ContactCoach.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/coaches', component: CoachesSelection },
    { path: '/requests', component: TheRequests },
    { path: '/coaches/:id/contact', component: ContactCoach, props: true},
  ]
})

const getDefaultState = () => {
  return {
    coaches: [
      { id: 1, firstName: 'Maximilian', lastName: 'Schwarzmüller', rate: 30, topics: ['frontend', 'backend', 'career'] },
      { id: 2, firstName: 'Julie', lastName: 'Jones', rate: 30, topics: ['frontend', 'career'] }
    ]
  }
}

const store = createStore({
  state() {
    return getDefaultState()
  },
  getters: {
    getCoaches(state) {
      return state.coaches
    }
  },
  mutations: {
    addCoach(state) {
      console.log(state.coaches)
    },
    resetState(state) {
      Object.assign(state, getDefaultState())
    },
    setFilteredCoachesMutation(state, payload) {
      state.coaches = payload.filteredCoaches
    }
  },
  actions: {
    setInitialState(context) {
      return context.commit('resetState')
    },
    setFilterCoaches(context, payload) {
      return context.commit('setFilteredCoachesMutation', payload)
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
