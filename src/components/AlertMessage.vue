<template>
    <b-alert show variant="danger">{{mensaje}}</b-alert>
</template>

<script>
export default {
    name: 'alert-message',
    props: {
        mensaje: {
            type: String,
            require: true
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