<template>
  <base-container>
    <h2>Ryan McBride</h2>
    <p>$30/hour</p>
  </base-container>
  <base-container>
    <h2>Interested? Reach out now!</h2>
    <a>Contact</a>
  </base-container>
  <base-container>
    <base-topic></base-topic>
  </base-container>
</template>

<script>
import BaseContainer from '../ui/BaseContainer'
import BaseTopic from '../ui/BaseTopic'

export default {
  components: {
    BaseContainer,
    BaseTopic
  }
}
</script>