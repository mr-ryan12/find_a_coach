<template>
  <section class="coach-card">
    <h3 class="coach-name">{{ fullName }}</h3>
    <p>{{ hourlyRate }}</p>
    <section class="label-container">
      <p v-for="topic in topics" :key="topic" :class="topic">{{ topic.toUpperCase() }}</p>
    </section>
    <section class="contact-link-container">
      <RouterLink :to="coachContactLink" class="contact-link">Contact</RouterLink>
      <a class="view-details-link">View Details</a>
    </section>
  </section>
</template>

<script>
export default {
  props: ['firstName', 'lastName', 'rate', 'topics', 'id'],
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

.label-container > p {
  width: 7rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  color: #fff;
  font-weight: 900;
  border: 1px solid black;
  border-radius: 20px;
  margin: 1rem 1rem 0 0;
}

.frontend {
  background-color: #3d008d;
}

.backend {
  background-color: #71008d;
}

.career {
  background-color: #8d006e;
}

.contact-link-container {
  display: flex;
  justify-content: flex-end;
}

.contact-link,
.view-details-link {
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