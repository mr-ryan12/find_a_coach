<template>
  <section class="requests-container">
    <base-container v-for="request in setRequests" :key="request.id">
      <p>Date: {{ request.date }}</p>
      <p>Time: {{ request.time }}</p>
      <p>Email: {{ request.email }}</p>
      <p>Message: {{ request.message }}</p>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '../ui/BaseContainer'

export default {
  components: {
    BaseContainer
  },
  computed: {
    setRequests() {
      return this.$store.getters.getRequests
    }
  }
}
</script>

<style lang="scss" scoped>
.requests-container {
  display: block;
}
</style>