<template>
  <nav>
    <section class="content-container">
      <h1>Find a Coach!</h1>
      <section class="nav-link-container">
        <h2>All Coaches</h2>
        <h2>Requests</h2>
      </section>
    </section>
  </nav>
</template>

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

.nav-link-container {
  display: flex;
  justify-content: space-between;
  width: 20vw;
}
</style>