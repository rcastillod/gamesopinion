<template>
    <b-container>
        <b-row>
            <b-col cols="4" v-for="(game, index) in Games" :key="index">
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
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['Games'])
    },
    //methods: {}
    // watch: {},
    components: {
        'card-game': CardGame
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>