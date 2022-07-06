<template>
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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos culpa perferendis, atque in nulla quisquam explicabo numquam, nobis harum accusamus voluptatem accusantium. Tempore maxime, commodi animi rerum aliquid quisquam?</p>
            </div>
            <button class="button-opinion">Opinar</button>
        </div>
        <div class="preview-image" :style="{backgroundImage: `url('${image}')` }"></div>
    </div>
</template>

<script>
export default {
    name: 'preview-game',
    props: {
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
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
.preview-wrapper {
    display: grid;
    grid-template-columns: 30% 20% 50%;
    min-height: 28.125rem;
    padding-left: 5.625rem;
}
.preview-description {
    background: linear-gradient(to right, $dark-color 60%, rgba($dark-color, .9) 70%, rgba($dark-color, .7) 80%, transparent);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-block: 6.25rem;
    grid-column: 1 / 3;
    grid-row: 1 / -1;
    z-index: 1;
    .title {
        color: $secondary-color;
        font-size: 38px;
    }
    .meta {
        align-items: center;
        display: flex;
        gap: .9375rem;
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
    grid-column: 2 / 4;
    grid-row: 1 / -1;
}
</style>