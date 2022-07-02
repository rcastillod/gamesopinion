<template>
    
    <alert-message v-if="opiniones.length == 0" mensaje="No existen opiniones para mostrar."></alert-message>

    <div v-else class="accordion" role="tablist">
        <b-card v-for="(opinion, index) in opiniones" :key="index" no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle="`accordion-${index}`">
                Opinion creada por: {{opinion.nombre}}. Para el juego {{opinion.nombreJuego}}
            </b-card-header>
            <b-collapse :id="`accordion-${index}`" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{opinion.opinionText}}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
    
</template>

<script>
import { mapState } from 'vuex'
import AlertMessage from '@/components/AlertMessage.vue'

export default {
    name: 'opiniones-list',
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['opiniones'])
    },
    components: {
        'alert-message': AlertMessage
    }
}
</script>

<style scoped>
    
</style>