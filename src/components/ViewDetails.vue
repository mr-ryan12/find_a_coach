<template>
  <section>
    <base-container>
      <h2 class="container-header">{{ fullName }}</h2>
      <br />
      <p class="rate">{{ rate }}</p>
    </base-container>
    <base-container>
      <h2 class="container-header">Interested? Reach out now!</h2>
      <br />
      <a>Contact</a>
    </base-container>
    <base-container>
      <section class="topics-container">
        <base-topic
          v-for="topic in foundCoach.topics"
          :key="topic"
          :class="topic"
        >{{ topic.toUpperCase() }}</base-topic>
      </section>
      <br />
      <p class="description">{{ description }}</p>
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
    },
    description() {
      return this.foundCoach.description
    }
  }
}
</script>

<style lang="scss" scoped>
.topics-container {
  display: flex;
}

.description {
  font-size: 1.25rem;
}

.container-header {
  font-size: 1.75rem;
  font-weight: 900;
}

.rate {
  font-size: 1.50rem;
  font-weight: 900;
}
</style>