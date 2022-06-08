<template>
  <section class="coach-card">
    <h3 class="coach-name">{{ fullName }}</h3>
    <p>{{ hourlyRate }}</p>
    <section class="label-container">
      <base-topic
        v-for="topic in topics"
        :key="topic"
        :class="topic"
      >{{ topic.toUpperCase() }}</base-topic>
    </section>
    <section class="contact-link-container">
      <RouterLink :to="coachContactLink" class="contact-link">Contact</RouterLink>
      <a class="view-details-link">View Details</a>
    </section>
  </section>
</template>

<script>
import BaseTopic from '../ui/BaseTopic'

export default {
  props: ['firstName', 'lastName', 'rate', 'topics', 'id'],
  components: {
    BaseTopic
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    hourlyRate() {
      return `$${this.rate}/hour`
    },
    coachContactLink() {
      return `/coaches/${this.id}/contact`
    }
  }
}
</script>

<style>
.coach-card {
  border: 1px solid black;
  padding: 1.5rem;
  margin: 1rem 0rem;
}

.coach-name {
  font-size: 2rem;
}

.label-container {
  display: flex;
}

.contact-link-container {
  display: flex;
  justify-content: flex-end;
}

.contact-link,
.view-details-link {
  height: 3vh;
  line-height: 3.5vh;
  margin: 0 1rem 0 0;
  padding: 15px;
  border-radius: 20px;
}

.contact-link {
  border: 1px solid #3d008d;
  background: none;
  text-decoration: none;
}

.view-details-link {
  background-color: #3d008d;
  color: #fff;
  border-color: #3d008d;
}
</style>