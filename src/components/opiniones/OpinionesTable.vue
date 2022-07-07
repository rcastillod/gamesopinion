<template>
    <div>
        <alert-message v-if="deleted" type="success" :dismissTime="5" mensaje="La opinion ha sido eliminada."></alert-message>
        <alert-message v-if="opiniones.length == 0" mensaje="No existen opiniones por administrar."></alert-message>
        <table v-else class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Nombre Juego</th>
                    <th scope="col">Opinion</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(opinion, index) in opiniones" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{opinion.nombre}}</td>
                    <td>{{opinion.nombreJuego}}</td>
                    <td>{{opinion.opinionText}}</td>
                    <td>
                        <b-button v-b-modal="`modal-delete-${opinion.idOpinion}`" class="btn-game__accent">Eliminar</b-button>
                        <b-button @click="toEdit(opinion.idOpinion)" class="btn-game">Editar</b-button>
                        <delete-opinion-modal @opinionDeleted="opinionDeleted" :idOpinion="opinion.idOpinion"></delete-opinion-modal>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import AlertMessage from '@/components/AlertMessage.vue'
import DeleteOpinion from '@/components/opiniones/DeleteOpinion.vue'

export default {
    name: 'opiniones-table',
    data: function(){
        return {
            deleted: false
        }
    },
    computed: {
        ...mapState(['opiniones'])
    },
    methods: {
        opinionDeleted() {
            this.deleted = true
        },
        toEdit(id) {
            this.$router.push(`/editaopinion/${id}`)
        }
    },
    components: {
        'alert-message': AlertMessage,
        'delete-opinion-modal': DeleteOpinion,
    },
}
</script>

<style scoped>
    
</style>