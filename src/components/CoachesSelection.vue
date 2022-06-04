<template>
  <section class="main-container">
    <section class="find-coach-container">
      <h2>Find Your Coach</h2>
      <br />
      <section class="checkbox-container">
        <input 
          type="checkbox"
          id="frontend"
          name="frontend"
        />
        <label for="frontend">Frontend</label>
        <input
          type="checkbox"
          id="backend"
          name="backend"
        />
        <label for="backend">Backend</label>
        <input
          type="checkbox"
          id="career"
          name="career"
        />
        <label for="career">Career</label>
      </section>
    </section>
    <section class="coaches-container">
      <section class="header-button-container">
        <button class="refresh-button">Refresh</button>
        <button class="register-button">Register as Coach</button>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      coaches: [
        { id: 1, firstName: 'Maximilian', lastName: 'Schwarzmüller', rate: 30, topics: ['frontend', 'backend', 'career'] },
        { id: 2, firstName: 'Julie', lastName: 'Jones', rate: 30, topics: ['frontend', 'career'] }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 3vh;
  font-weight: 900;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.find-coach-container,
.coaches-container {
  width: 50%;
  margin-top: 5vh;
  box-shadow: 0px 0px 20px grey;
  padding: 20px;
  border-radius: 20px;
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

.refresh-button {
  border: 1px solid #3d008d;
  background: none;
}

.register-button {
  background-color: #3d008d;
  color: #fff;
  border-color: #3d008d;
}
</style>