<template>
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
                    <button @click="deleteOpinion(opinion.idOpinion)" class="btn btn-danger">Eliminar</button>
                    <button @click="toEdit(opinion.idOpinion)" class="btn btn-primary">Editar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AlertMessage from '@/components/AlertMessage.vue'

export default {
    name: 'opiniones-table',
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['opiniones'])
    },
    methods: {
        ...mapActions(['delete_opinion']),
        deleteOpinion(id) {
            alert(id)
            this.delete_opinion(id)
        },
        toEdit(id) {
            this.$router.push(`/editaopinion/${id}`)
        }
    },
    components: {
        'alert-message': AlertMessage
    },
}
</script>

<style scoped>
    
</style>