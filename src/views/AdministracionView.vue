<template>
    <b-container>
        <b-row>
            <b-col>
                <opiniones-table></opiniones-table>
            </b-col>
        </b-row>
    </b-container>
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