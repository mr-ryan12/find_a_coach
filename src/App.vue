<template>
  <main>
    <TheNavigation />
    <RouterView />
  </main>
</template>


<script>
import TheNavigation from './components/TheNavigation'

export default {
  components: {
    TheNavigation
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Anek+Telugu&display=swap');
@import './styles/reset.scss';

button:hover {
	cursor: pointer;
}
</style>