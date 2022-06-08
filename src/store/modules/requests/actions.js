export default {
  addNewRequest(context, payload) {
    return context.commit('addRequest', payload)
  }
}