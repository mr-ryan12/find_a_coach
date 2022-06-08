<template>
  <section>
    <base-container>
      <!-- <h2 class="name">Ryan McBrizzle</h2> -->
      <h2 class="name">{{ fullName }}</h2>
      <p class="rate">{{ rate }}</p>
    </base-container>
    <base-container>
      <h2 class="form-title">Interested? Reach out now!</h2>
      <section class="form-container">
        <form>
          <label for="email" class="email">Your E-Mail</label>
          <input 
            type="email"
            id="email"
            name="email"
            v-model="email"
          />
          <br />
          <label for="message" class="message">Message</label>
          <textarea
            id="message"
            name="message"
            v-model="message"
          />
          <br />
          <section class="button-container">
            <button>Send Message</button>
          </section>
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
      message: '',
      foundCoach: {}
    }
  },
  components: {
    BaseContainer
  },
  mounted() {
    console.log(this.$route.params.id)
    const coaches = this.$store.getters.getCoaches
    console.log('coaches>>>>', coaches)
    const coachId = Number(this.$route.params.id)
    console.log('coachId>>>>>', coachId)
    const foundCoach = coaches.find(coach => coach.id === coachId)
    console.log('foundCoach>>>>', foundCoach)

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
  border: 1px solid #CDCDCD;
  height: 90%;
  width: 70%;
  padding: 20px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

input,
label {
  display: block;
}

label {
  font-size: 2.25vh;
}

input,
textarea {
  width: 100%;
  border: 1px solid #CDCDCD;
}

textarea {
  height: 10vh;
}

.button-container {
  display: flex;
  justify-content: center;
}

button {
  margin-top: 2vh;
  background-color: #3d008d;
  color: #fff;
  border: none;
  height: 5vh;
  width: 9vw;
  border-radius: 15px;
}
</style>