import requestsMutations from './mutations'

export default {
  state() {
    return {
      requests: [
        {id: 1, email: 'mr.ryan444@gmail.com', message: 'Hello! Thank you for providing this amazing service. Do you have time to chat about some frontend training at your convenience? Thank you and have a great day!'}
      ]
    }
  },
  mutations: requestsMutations
}