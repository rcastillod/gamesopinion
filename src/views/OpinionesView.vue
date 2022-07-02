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

    data: function(){
        return {}
    },
    components: {
        'opiniones-list': OpinionesList
    },
}
</script>

<style scoped>
    
</style>