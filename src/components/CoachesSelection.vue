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

    </section>
  </section>
</template>

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
  // height: 10vh;
  margin-top: 5vh;
  box-shadow: 0px 0px 20px grey;
  padding: 20px;
  border-radius: 20px;
}
</style>