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
      <RouterLink to="/register" class="register-button">Register as Coach</RouterLink>
    </section>
    <CoachCard
      v-for="coach in setCoaches"
      :key="coach.id"
      :id="coach.id"
      :firstName="coach.firstName"
      :lastName="coach.lastName"
      :rate="coach.rate"
      :topics="coach.topics"
    />
  </base-container>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue'
import CoachCard from './CoachCard.vue'

export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  components: {
    BaseContainer,
    CoachCard
  },
  methods: {
    filterCoaches(event) {
      const filterId = event.target.id
      const isActive = event.target.checked
      const updatedFilters = {
        ...this.activeFilters,
        [filterId]: isActive
      }
      this.activeFilters = updatedFilters
    }
  },
  computed: {
    setCoaches() {
      const coaches = this.$store.getters.getCoaches
      
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.topics.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && coach.topics.includes('backend')) {
          return true
        }
        if (this.activeFilters.career && coach.topics.includes('career')) {
          return true
        }
        return false
      })
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

.header-button-container > button,
.header-button-container > a {
  width: auto;
  border-radius: 20px;
  padding: 15px;
  font-size: 2vh;
  text-decoration: none;
}

.refresh-button {
  border: 1px solid #3d008d;
  background: none;
  text-decoration: none;
}

.register-button {
  height: 3vh;
  background-color: #3d008d;
  color: #fff;
  border-color: #3d008d;
  line-height: 3.5vh;
}
</style>