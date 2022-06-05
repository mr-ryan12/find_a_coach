<template>
  <base-container>
    <h2 class="name">Ryan McBrizzle</h2>
    <p class="rate">$1,000,000/second</p>
  </base-container>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    BaseContainer
  }
}
</script>

<style scoped>
.name {
  font-size: 3vh;
  font-weight: 900;
  margin-bottom: 2vh;
}

.rate {
  font-weight: 900;
}
</style>