<template>
    <div>
        <preview-game
            :id="previewData.id"
            :name="previewData.name"
            :rating="previewData.rating"
            :released="previewData.released"
            :updated="previewData.updated"
            :image="previewData.image"
            :description="previewData.description"></preview-game>
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
                id: null,
                name: null,
                rating: null,
                released: null,
                updated: null,
                image: null,
                description: null
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
                this.previewData.id = game.id
                this.previewData.name = game.name
                this.previewData.rating = game.rating
                this.previewData.released = game.released
                this.previewData.updated = game.updated
                this.previewData.image = game.background_image
                this.previewData.description = game.description
            })
        }
    },
    components: {
        'preview-game': PreviewGame,
        'card-game': CardGame
    },
    created() {
        let [firstGame] = this.Games
        this.previewData.id = firstGame.id
        this.previewData.name = firstGame.name
        this.previewData.rating = firstGame.rating
        this.previewData.released = firstGame.released
        this.previewData.updated = firstGame.updated
        this.previewData.image = firstGame.background_image
        this.previewData.description = firstGame.description
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
    position: relative;
    width: min(100% - 2rem, 93.75rem);
    z-index: 1;
}
</style>