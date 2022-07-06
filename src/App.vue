<template>
  <div id="app">
    <div class="main-wrapper">
      <navigation></navigation>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/header/Navigation.vue'

export default {
    components: {
      'navigation': Navigation
    },
}
</script>

<style lang="scss">
.main-wrapper {
    display: grid;
    grid-template-columns: 5rem auto;
}
</style>
