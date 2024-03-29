<template>
  <section class="main-container">
    <base-container>
      <h2 class="name">{{ fullName }}</h2>
      <p class="rate">{{ rate }}</p>
    </base-container>
    <base-container>
      <h2 class="form-title">Interested? Reach out now!</h2>
      <section class="form-container">
        <form @submit.prevent="handleSubmit">
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
    <base-container>
      <section class="topic-container">
        <base-topic
          v-for="topic in foundCoach.topics"
          :key="topic"
          :class="topic"
        >{{ topic.toUpperCase() }}</base-topic>
      </section>
      <p class="description">{{ foundCoach.description }}</p>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue'
import BaseTopic from '../ui/BaseTopic.vue'

export default {
  data() {
    return {
      email: '',
      message: '',
      foundCoach: {}
    }
  },
  components: {
    BaseContainer,
    BaseTopic
  },
  methods: {
    handleSubmit() {
      const universalDate = new Date()
      const timezoneOffset = new Date().getTimezoneOffset()
      const [date, time] = new Date(universalDate.getTime() - (timezoneOffset * 60 * 1000)).toISOString().split('T')
      const newRequest = {
        id: Date.now(),
        email: this.email,
        message: this.message,
        date: this.formatDate(date),
        time: this.formatTime(time)
      }

      this.$store.dispatch('addNewRequest', { newRequest })
    },
    formatDate(date) {
      const [year, month, day] = date.split('-')

      return [month, day, year].join('/')
    },
    formatTime(time) {
      let [hour, minutes] = time.split(':')
      let formattedTime;
    
      if (hour === '00') {
        hour = '12'
        formattedTime = [hour, minutes].join(':') + 'am'
      } else if (hour > 12) {
        hour -= 12
        formattedTime = [hour, minutes].join(':') + 'pm'
      } else {
        formattedTime = [hour, minutes].join(':') + 'am'
      }

      return formattedTime
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
    }
  }
}
</script>

<style scoped>
textarea {
  font-family: inherit;
}
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

.topic-container {
  display: flex;
}

.description {
  margin-top: 1rem;
  font-size: 1.25rem;
}
</style>