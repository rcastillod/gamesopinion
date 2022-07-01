<template>
  <div class="home">
    <games-list></games-list>
  </div>
</template>

<script>
import GamesList from '@/components/games/GamesList.vue'

export default {
  name: 'HomeView',
  components: {
    'games-list': GamesList
  }
}
</script>
