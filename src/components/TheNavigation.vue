<template>
  <nav>
    <section class="content-container">
      <h1 class="main-title">Find a Coach</h1>
      <section class="nav-link-container">
        <button class="all-coaches-btn">All Coaches</button>
        <button class="requests-btn">Requests</button>
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

.all-coaches-btn,
.requests-btn {
  width: 9vw;
  height: 5vh;
  background: none;
  border: none;
  color: #f391e3;
  font-size: 1.05rem;
}

.all-coaches-btn,
.requests-btn:hover {
  border: 1px solid #f391e3
}
</style>