<template>
    <section>
        <b-container>
            <b-row>
                <b-col>
                    <form 
                        ref="form" 
                        @submit.stop.prevent="handleSubmit"
                        novalidate="true"
                        validated="true">
                        <b-form-group
                            label="Nombre:"
                            label-for="name-input"
                            >
                            <b-form-input
                                id="name-input"
                                placeholder="Evan You"
                                v-model="$v.opinion.nombre.$model"
                                :state="validateState('nombre')"
                            ></b-form-input>
                            <b-form-invalid-feedback>El nombre es obligatorio y debe tener al menos 3 caracteres</b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group
                            label="Opiniones"
                            label-for="opinion-input"
                            >
                            <b-form-textarea
                                id="opinion-input"
                                placeholder="Tu opinión debe ir aquí..."
                                v-model="$v.opinion.opinionText.$model"
                                :state="validateState('opinionText')"
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                            <b-form-invalid-feedback>La opinion es obligatorio y debe tener al menos 10 caracteres</b-form-invalid-feedback>
                        </b-form-group>
                    </form>
                    <b-button class="mt-3" block @click="goBack">Regresar</b-button>
                    <b-button class="mt-3" block @click="editOpinion(opinionId)">Guardar</b-button>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'editaopinion-view',
    // props: {},
    data: function(){
        return {
            opinion: {
                nombre: null,
                opinionText: null,
            }
        }
    },
    validations: {
        opinion: {
            nombre: { 
                required, 
                minLength: minLength(3) 
            },
            opinionText: { 
                required, 
                minLength: minLength(10) 
            }
        }
    },
    computed: {
        ...mapState(['opiniones']),
        opinionId() {
            return parseInt(this.$route.params.id)
        },
        getOpinion() {
            return this.opiniones.find( opinion => opinion.idOpinion === this.opinionId )
        }
    },
    methods: {
        ...mapActions(['edit_opinion']),
        goBack() {
            this.$router.push('/administracion')
        },
        validateState(value) {
            const { $dirty, $error } = this.$v.opinion[value];
            return $dirty ? !$error : null;
        },
        editOpinion(id) {
            let values = [id, this.opinion.nombre, this.opinion.opinionText]
            this.edit_opinion(values)
        }
    },
    // components: {},
    // -- Lifecycle Methods
    created() {
        this.opinion.nombre = this.getOpinion.nombre
        this.opinion.opinionText = this.getOpinion.opinionText
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>