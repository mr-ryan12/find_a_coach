<template>
  <base-container>
    <h2>Find Your Coach</h2>
    <br />
    <section class="checkbox-container">
      <input
        type="checkbox"
        id="frontend"
        name="frontend"
        value="frontend"
        checked
        @change="filterCoaches"
      />
      <label for="frontend">Frontend</label>
      <input
        type="checkbox"
        id="backend"
        name="backend"
        value="backend"
        checked
        @change="filterCoaches"
      />
      <label for="backend">Backend</label>
      <input
        type="checkbox"
        id="career"
        name="career"
        value="career"
        checked
        @change="filterCoaches"
      />
      <label for="career">Career</label>
    </section>
  </base-container>
  <base-container>
    <section class="header-button-container">
      <button class="refresh-button">Refresh</button>
      <button class="register-button">Register as Coach</button>
    </section>
    <section class="coach-card" v-for="coach in coaches" :key="coach.id">
      <h3 class="coach-name">{{ coach.firstName }} {{ coach.lastName }}</h3>
      <p>{{ `$${coach.rate}/hour` }}</p>
      <section class="label-container">
        <p v-for="topic in coach.topics" :key="topic" :class="topic">{{ topic.toUpperCase() }}</p>
      </section>
      <section class="contact-link-container">
        <a class="contact-link">Contact</a>
        <a class="view-details-link">View Details</a>
      </section>
    </section>
  </base-container>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue'

export default {
  data() {
    return this.initialState()
  },
  components: {
    BaseContainer
  },
  inject: ['topics'],
  methods: {
    initialState() {
      return {
        coaches: [
          { id: 1, firstName: 'Maximilian', lastName: 'Schwarzmüller', rate: 30, topics: ['frontend', 'backend', 'career'] },
          { id: 2, firstName: 'Julie', lastName: 'Jones', rate: 30, topics: ['frontend', 'career'] }
        ],
      }
    },
    filterCoaches(event) {
      if (!this.topics.includes(event.target.value) && event.target.checked) {
        this.topics.push(event.target.value)
      } else if (this.topics.length > 0 && !event.target.checked) {
        this.topics = this.topics.filter(topic => topic !== event.target.value)
      }
      this.reset()
      const filteredCoaches = []
      this.coaches.forEach(coach => {
        if (this.topics.some(topic => coach.topics.includes(topic))) {
          filteredCoaches.push(coach)
        }
      })
      this.coaches = filteredCoaches
    },
    reset() {
      return Object.assign(this.$data, this.initialState())
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 3vh;
  font-weight: 900;
}

.header-button-container {
  display: flex;
  justify-content: space-between;
}

.header-button-container > button {
  width: auto;
  border-radius: 20px;
  padding: 15px;
  font-size: 2vh;
}

.refresh-button,
.contact-link {
  border: 1px solid #3d008d;
  background: none;
}

.register-button,
.view-details-link {
  background-color: #3d008d;
  color: #fff;
  border-color: #3d008d;
}

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
</style>