<template>
  <nav>
    <section class="content-container">
      <h1 class="main-title">Find a Coach</h1>
      <section class="nav-link-container">
        <RouterLink to="/coaches" @click="setActiveButton" :class="{ active: isCoachesBtnActive }">All Coaches</RouterLink>
        <RouterLink to="/requests" @click="setActiveButton" :class="{ active: isRequestsBtnActive }">Requests</RouterLink>
      </section>
    </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isCoachesBtnActive: true,
      isRequestsBtnActive: false
    }
  },
  methods: {
    setActiveButton() {
      this.isCoachesBtnActive = !this.isCoachesBtnActive
      this.isRequestsBtnActive = !this.isRequestsBtnActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: $navColor;
  color: #fff;
  height: 10vh;
  width: 100%;
}

.content-container {
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.main-title {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 900;
}

.nav-link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
}

a {
  width: 9vw;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
  background: none;
  border: 1px solid transparent;
  color: #f391e3;
  font-size: 1.05rem;
  &:hover {
    border: 1px solid #f391e3;
  }
}

a.router-link-active {
  border: 1px solid #f391e3;
}

a {
  text-decoration: none;
}
</style>