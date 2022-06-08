<template>
  <section>
    <base-container>
      <h2>{{ fullName }}</h2>
      <p>{{ rate }}</p>
    </base-container>
    <base-container>
      <h2>Interested? Reach out now!</h2>
      <a>Contact</a>
    </base-container>
    <base-container>
      <base-topic></base-topic>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '../ui/BaseContainer'
import BaseTopic from '../ui/BaseTopic'

export default {
  components: {
    BaseContainer,
    BaseTopic
  },
  data() {
    return {
      foundCoach: {}
    }
  },
  mounted() {
    const coaches = this.$store.getters.getCoaches
    const coachId = Number(this.$route.params.id)
    const foundCoach = coaches.find(coach => coach.id === coachId)
    console.log(foundCoach)
    this.foundCoach = foundCoach
  },
  computed: {
    fullName() {
      return this.foundCoach.firstName + ' ' + this.foundCoach.lastName
    },
    rate() {
      return '$' + this.foundCoach.rate + '/hour'
    }
  }
}
</script>