<template>
    <b-table striped hover :items="opiniones"></b-table>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'opiniones-table',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['opiniones'])
    },
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