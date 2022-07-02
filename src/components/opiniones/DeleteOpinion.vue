<template>
    <b-modal 
        :id="`modal-delete-${idOpinion}`" 
        size="sm" 
        title="Eliminar Modal"
        cancel-title="Cancelar"
        ok-title="Eliminar"
        ok-variant="danger"
        @ok="deleteOpinion(idOpinion)">
        ¿Estas seguro de eliminar el comentario?
    </b-modal>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'delete-opinion',
    props: {
        idOpinion: {
            type: Number,
            require: true
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['delete_opinion']),
        deleteOpinion(id) {
            this.$emit('opinionDeleted')
            this.delete_opinion(id)
        },
    }
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