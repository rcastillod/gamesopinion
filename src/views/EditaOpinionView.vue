<template>
    <section class="edita-opinion">
        <b-container>
            <b-row>
                <b-col>
                    <h3 class="mb-5">Editar opinion</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <edita-opinion></edita-opinion>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import EditaOpinion from '@/components/opiniones/EditaOpinion.vue'

export default {
    name: 'editaopinion-view',
    // props: {},
    data: function(){
        return {}
    },
    components: {
        'edita-opinion': EditaOpinion
    }
}
</script>

<style scoped>
    
</style>