<template>
    <b-alert show :variant="type">{{mensaje}}</b-alert>
</template>

<script>
export default {
    name: 'alert-message',
    props: {
        mensaje: {
            type: String,
            require: true
        },
        type: {
            type: String,
            default: 'danger',
            require: false
        }
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