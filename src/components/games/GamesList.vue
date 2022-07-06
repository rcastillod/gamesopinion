<template>
    <!-- <b-container>
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
    </b-container> -->
    <div>
        <preview-game
            :name="previewData.name"
            :rating="previewData.rating"
            :released="previewData.released"
            :updated="previewData.updated"
            :image="previewData.image"></preview-game>
        <div class="games-wrapper">
            <div class="game-item" v-for="(game, index) in Games" :key="index">
                <card-game
                    :id="index"
                    :name="game.name"
                    :rating="game.rating"
                    :released="game.released"
                    :updated="game.updated"
                    :image="game.background_image"
                    @getGameName="getGameName"></card-game>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PreviewGame from './PreviewGame.vue'
import CardGame from '@/components/games/CardGames.vue'

export default {
    name: 'games-list',
    data: function(){
        return {
            previewData: {
                name: null,
                rating: null,
                released: null,
                updated: null,
                image: null
            }
        }
    },
    computed: {
        ...mapState(['Games'])
    },
    methods: {
        getGameName(name) {
            let gamePrev = this.Games.filter(game => game.name === name)
            gamePrev.forEach(game => {
                this.previewData.name = game.name
                this.previewData.rating = game.rating
                this.previewData.released = game.released
                this.previewData.updated = game.updated
                this.previewData.image = game.background_image
            })
        }
    },
    components: {
        'preview-game': PreviewGame,
        'card-game': CardGame
    }
}
</script>

<style scoped lang="scss">
.games-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
    gap: 1.25rem;
    margin-top: 1.25rem;
    margin-inline: auto;
    padding-inline: 2rem;
    width: min(100% - 2rem, 93.75rem);
}
</style>