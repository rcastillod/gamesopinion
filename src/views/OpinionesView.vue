<template>
    <b-container>
        <b-row>
            <b-col>
                <opiniones-list></opiniones-list>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import OpinionesList from '@/components/opiniones/OpinionesList.vue'

export default {
    name: 'opiniones-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'opiniones-list': OpinionesList
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>