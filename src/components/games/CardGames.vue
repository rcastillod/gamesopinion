<template>
    <b-card
        :title="name"
        :img-src="image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
        <!-- <b-card-text>
            {{name}}
        </b-card-text> -->
        <b-button href="#" variant="primary">Opinion</b-button>
    </b-card>
</template>

<script>
export default {
    name: 'component-name',
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

<style scoped>
    
</style>