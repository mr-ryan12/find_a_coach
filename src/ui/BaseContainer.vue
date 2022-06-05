<template>
  <section class="main-container">
    <section class=sub-container>
      <slot></slot>
    </section>
  </section>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sub-container {
  width: 50%;
  margin-top: 5vh;
  box-shadow: 0px 0px 20px grey;
  padding: 20px;
  border-radius: 20px;
}
</style>