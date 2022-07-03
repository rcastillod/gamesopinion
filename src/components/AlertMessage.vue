<template>
    <b-alert :show="dismissTime ? dismissTime : true" fade :variant="type">{{mensaje}}</b-alert>
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
        },
        dismissTime: {
            type: Number,
            require: false
        }
    },
    data: function(){
        return {}
    }
}
</script>

<style scoped>
    
</style>