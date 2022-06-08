<template>
  <section class="requests-container">
    <base-container v-for="request in setRequests" :key="request.id">
      <p>Email: {{ request.email }}</p>
      <p>Message: {{ request.message }}</p>
      <p>date: {{ setDate }}</p>
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
    },
    setDate() {
      return new Date().toISOString()

    }
  }
}
</script>

<style lang="scss" scoped>
.requests-container {
  display: block;
}
</style>