<template>
    <section class="opiniones-admin">
        <b-container>
            <b-row>
                <b-col>
                    <h3 class="mb-5">Administración de opiniones</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <opiniones-table></opiniones-table>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import OpinionesTable from '@/components/opiniones/OpinionesTable.vue'

export default {
    name: 'administracion-view',
    data: function(){
        return {}
    },
    components: {
        'opiniones-table': OpinionesTable
    },
}
</script>

<style scoped>
    
</style>