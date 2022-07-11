<template>
    <div>
        <div class="preview-wrapper">
            <div class="preview-description">
                <h2 class="title">{{name}}</h2>
                <div class="meta">
                    <div class="rating">
                        {{rating}}
                    </div>
                    <div class="released">Released: <span>{{released}}</span></div>
                    <div class="updated">Updated: <span>{{updated}}</span></div>
                </div>
                <div class="description">
                    <p>{{description}}</p>
                </div>
                <button class="button-opinion" v-b-modal="`modal-opinion-${id}`">Opinar</button>
            </div>
            <div class="preview-image" :style="{backgroundImage: `url('${image}')` }"></div>
        </div>
        <modal-opinion 
            :id="id"
            :name="name"
            ></modal-opinion>
    </div>
</template>

<script>
import ModalOpinion from '@/components/opiniones/ModalOpinion.vue'

export default {
    name: 'preview-game',
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
        description: {
            type: String,
            require: true
        }
    },
    data: function(){
        return {}
    },
    components: {
        'modal-opinion': ModalOpinion
    }
}
</script>

<style scoped lang="scss">
.preview-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 35rem;
    padding-inline: 0;
    @media ( min-width: 576px ) {
        padding-left: 2.325rem;
    }
    @media ( min-width: 992px ) {
        grid-template-columns: 30% 20% 50%;
        padding-left: 5.625rem;
    }
}
.preview-description {
    background: linear-gradient(to right, $dark-color 40%, rgba($dark-color, .9) 50%, rgba($dark-color, .7) 60%, transparent);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-block: 6.25rem;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index: 1;
    @media ( max-width: 575px ) {
        padding-inline: .9375rem;
    }
    @media ( min-width: 992px ) {
        background: linear-gradient(to right, $dark-color 60%, rgba($dark-color, .9) 70%, rgba($dark-color, .7) 80%, transparent);
        grid-column: 1 / 3;
        grid-row: 1 / -1;
    }
    .title {
        color: $secondary-color;
        font-size: 38px;
    }
    .meta {
        display: flex;
        flex-direction: column;
        gap: .9375rem;
        @media ( min-width: 576px ) {
            align-items: center;
            flex-direction: row;
        }
    }
    .rating {
        background-color: $primary-color;
        border-radius: 50%;
        color: $white-color;
        display: grid;
        font-weight: $fw-bold;
        place-items: center;
        height: 3.125rem;
        width: 3.125rem;
    }
    .released > span,
    .updated > span {
        color: $secondary-color;
        font-weight: $fw-bold;
    }
    .button-opinion {
        align-self: flex-start;
        background-color: $secondary-color;
        border: none;
        border-radius: .3125em;
        color: $white-color;
        font-size: 1.25rem;
        margin-top: 1.875rem;
        padding: .625em 3.125em;
        transition: background 300ms ease-in-out;
        &:hover,
        &:focus {
            background-color: $secondary-color-shade;
        }
    }
}
.preview-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    opacity: .2;
    @media ( min-width: 992px ) {
        grid-column: 2 / 4;
        grid-row: 1 / -1;
        opacity: 1;
    }
}
</style>