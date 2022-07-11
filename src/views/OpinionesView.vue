<template>
    <section class="opiniones">
        <b-container>
            <b-row>
                <b-col>
                    <h3 class="mb-5">Listado de opiniones</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <opiniones-list></opiniones-list>
                </b-col>
            </b-row>
        </b-container>
    </section>
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