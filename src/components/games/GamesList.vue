<template>
    <b-container>
        <b-row>
            <b-col cols="12" sm="6" lg="4" v-for="(game, index) in Games" :key="index">
                <card-game
                    :id="index"
                    :name="game.name"
                    :rating="game.rating"
                    :released="game.released"
                    :updated="game.updated"
                    :image="game.background_image"></card-game>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState } from 'vuex'
import CardGame from '@/components/games/CardGames.vue'

export default {
    name: 'games-list',
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['Games'])
    },
    components: {
        'card-game': CardGame
    }
}
</script>

<style scoped>
    
</style>