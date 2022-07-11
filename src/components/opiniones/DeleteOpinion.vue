<template>
    <b-modal 
        :id="`modal-delete-${idOpinion}`" 
        size="sm" 
        title="Eliminar Modal"
        content-class="modal-delete"
        centered
        hide-header
        hide-footer>
        ¿Estas seguro de eliminar el comentario?
        <div class="buttons-wrapper">
            <b-button class="mt-3 btn-game" block @click="$bvModal.hide(`modal-delete-${idOpinion}`)">Cancelar</b-button>
            <b-button class="mt-3 btn-game__accent" block @click="deleteOpinion(idOpinion)">Eliminar</b-button>
        </div>
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
            this.$bvModal.hide(id)
        },
    }
}
</script>

<style scoped>
    
</style>