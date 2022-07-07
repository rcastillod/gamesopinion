<template>
    <div>
        <div class="game-card" @click="sendGameName(name)">
            <div class="game-card__image">
                <img :src="image" :alt="name">
            </div>
            <h4 class="game-card__title">{{name}}</h4>
        </div>
    </div>

</template>

<script>

export default {
    name: 'game-card',
    props: {
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        rating: {
            type: Number,
            require: true
        },
        released: {
            type: String,
            require: true
        },
        updated: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
    },
    data: function(){
        return {}
    },
    methods: {
        sendGameName(name) {
            this.$emit('getGameName', name )
        },
    }
}
</script>

<style scoped lang="scss">
.game-card {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    &:hover {
        .game-card__image img {
            box-shadow: 0 15px 30px -20px rgba($secondary-color, .4);
        }
        .game-card__title {
            color: $secondary-color;
        }
    }
}
.game-card__image {
    height: 18.75rem;
    width: 12.5rem;
    & > img {
        border-radius: $br;
        object-fit: cover;
        height: 100%;
        width: 100%;
        transition: all 400ms ease-in-out;
    }
}
.game-card__title {
    font-size: 1.25rem;
    text-align: center;
    width: 12.5rem;
    transition: all 400ms ease-in-out;
}
</style>