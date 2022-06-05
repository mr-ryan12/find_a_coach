<template>
  <base-container>
    <h2>Register as a Coach Now!</h2>
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
        <textarea
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
            v-model="expertise"
          />
          <label for="frontend">Frontend Development</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="backend"
            name="backend"
            v-model="expertise"
          />
          <label for="backend">Backend Development</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="career"
            name="career"
            v-model="expertise"
          />
          <label for="career">Career Development</label>
        </div>
      </section>
    </form>
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
  }
}
</script>

<style>
.form-text-container > input,
.form-text-container > label {
  display: block;
}

.expertise-container {
  display: flex;
  flex-direction: column;
}
</style>