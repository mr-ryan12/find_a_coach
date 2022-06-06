import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  state() {
    return {
      coaches: [
        {
          id: 1,
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          rate: 30,
          description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          topics: ['frontend', 'backend', 'career']
        },
        {
          id: 2,
          firstName: 'Julie',
          lastName: 'Jones',
          rate: 30,
          description: 'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          topics: ['frontend', 'career']
        }
      ]
    }
  },
  getters,
  actions,
  mutations
}