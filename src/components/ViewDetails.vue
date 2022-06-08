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
      <RouterLink :to="coachContactLink" class="contact-link">Contact</RouterLink>
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
    },
    coachContactLink() {
      return `/coaches/${this.$route.params.id}/contact`
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

.contact-link {
  height: 3vh;
  line-height: 3.5vh;
  margin: 0 1rem 0 0;
  padding: 15px;
  border-radius: 20px;
  background-color: #3d008d;
  color: #fff;
  border-color: #3d008d;
  text-decoration: none;
}
</style>