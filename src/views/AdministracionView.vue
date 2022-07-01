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
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'opiniones-table': OpinionesTable
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>