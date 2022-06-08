export default {
  addRequest(state, payload) {
    console.log(payload.newRequest)
    state.requests.push(payload.newRequest)
  }
}