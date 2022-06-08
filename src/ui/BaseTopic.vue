<template>
  <p>
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
.frontend {
  background-color: #3d008d;
}

.backend {
  background-color: #71008d;
}

.career {
  background-color: #8d006e;
}

p {
  width: 7rem;
  height: 2.5rem;
  line-height: 2.7rem;
  text-align: center;
  color: #fff;
  font-weight: 900;
  border: 1px solid black;
  border-radius: 20px;
  margin: 1rem 1rem 0 0;
}
</style>