<template>
  <base-container>
    <section class="main-container">
      <h2 class="register-title">Register as a Coach Now!</h2>
      <form>
        <section class="form-text-container">
          <label for="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            v-model="firstName"
          />
          <label for="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            v-model="lastName"
          />
          <label for="description">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            v-model="description"
          />
          <label for="rate">Hourly Rate</label>
          <input
            type="text"
            id="rate"
            name="rate"
            v-model="rate"
          />
        </section>
        <label for="expertise-container">Areas of Expertise</label>
        <section id="expertise-container" class="expertise-container">
          <div>
            <input
              type="checkbox"
              id="frontend"
              name="frontend"
              value="frontend"
              v-model="expertise"
            />
            <label for="frontend">Frontend Development</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="backend"
              name="backend"
              value="backend"
              v-model="expertise"
            />
            <label for="backend">Backend Development</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="career"
              name="career"
              value="career"
              v-model="expertise"
            />
            <label for="career">Career Development</label>
          </div>
        </section>
        <RouterLink to="/" class="register-button" @click.prevent="handleSubmit">Register</RouterLink>
      </form>
    </section>
  </base-container>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: '',
      expertise: []
    }
  },
  components: {
    BaseContainer
  },
  methods: {
    handleSubmit() {
      const newCoach = {
        id: Date.now(),
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.rate,
        topics: this.expertise
      }
      this.$store.dispatch('setAddCoach', { newCoach })
      this.clearInputs()
    },
    clearInputs() {
      this.firstName = ''
      this.lastName = ''
      this.description = ''
      this.rate = ''
      this.expertise = []
    }
  }
}
</script>

<style scoped>
.main-container {
  padding: 20px;
}

input[type="text"],
textarea {
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #CDCDCD;
}

textarea {
  height: 10vh;
}

.register-title {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

.form-text-container > input,
.form-text-container > label {
  display: block;
}

.form-text-container > label {
  font-weight: 900;
  font-size: 1.05rem;
}

.expertise-container {
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 1.5rem;
  height: 5vh;
  width: 8vw;
  border-radius: 15px;
  background-color: #3d008d;
  color: #fff;
  border-color: #3d008d;
}
</style>