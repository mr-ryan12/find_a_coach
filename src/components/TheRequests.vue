<template>
  <section class="requests-container">
    <base-container v-for="request in setRequests" :key="request.id">
      <p>Date: {{ request.date }}</p>
      <p>Time: {{ request.time }}</p>
      <p>Email: <a :href="`mailto:${request.email}`" target="_blank" class="email">{{ request.email }}</a></p>
      <p class="message-header">Message</p>
      <p>{{ request.message }}</p>
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
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0.5rem;
}

.message-header {
  margin-top: 2rem;
}

.email {
  text-decoration: none;
}
</style>