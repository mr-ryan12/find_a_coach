<template>
  <section>
    <base-container>
      <h2 class="name">Ryan McBrizzle</h2>
      <p class="rate">$1,000,000/second</p>
    </base-container>
    <base-container>
      <h2 class="form-title">Interested? Reach out now!</h2>
      <section class="form-container">
        <form>
          <label for="email">Your E-Mail</label>
          <input 
            type="email"
            name="email"
            v-model="email"
          />
          <label for="message">Message</label>
          <input
            type="textarea"
            name="message"
            v-model="message"
          />
          <button>Send Message</button>
        </form>
      </section>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue'

export default {
  data() {
    return {
      email: '',
      message: ''
    }
  },
  components: {
    BaseContainer
  },
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>
.name,
.form-title {
  font-size: 3vh;
  font-weight: 900;
  margin-bottom: 2vh;
}

.rate {
  font-weight: 900;
}

form {
  align-self: center;
  border: 1px solid grey;
  height: 90%;
  width: 70%;
  padding: 20px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>