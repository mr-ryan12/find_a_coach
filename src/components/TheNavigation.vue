<template>
  <nav>
    <section class="content-container">
      <h1 class="main-title">Find a Coach</h1>
      <section class="nav-link-container">
        <h2 class="all-coaches-btn">All Coaches</h2>
        <h2 class="requests-btn">Requests</h2>
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
  font-size: 1.25rem;
  color: #f391e3;
}

.all-coaches-btn,
.requests-btn {
  padding: 12px;
  &:hover {
    border: 1px solid #f391e3;
  }
}
</style>