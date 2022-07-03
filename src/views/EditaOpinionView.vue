<template>
    <section>
        <b-container>
            <b-row>
                <b-col>
                    <alert-message v-if="formInvalid" :mensaje="formAlertMessage"></alert-message>
                    <alert-message v-if="formSuccess" :dismissTime="5" type="success" mensaje="La opinion se ha editado con éxito!"></alert-message>
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
                        <b-button class="mt-3" block @click="goBack">Regresar</b-button>
                        <b-button class="mt-3" block @click="editOpinion(opinionId)">Guardar</b-button>
                    </form>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
import AlertMessage from '@/components/AlertMessage.vue'

export default {
    name: 'editaopinion-view',
    // props: {},
    data: function(){
        return {
            opinion: {
                nombre: null,
                opinionText: null,
            },
            formInvalid: null,
            formSuccess: false
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
        },
        formAlertMessage() {
            let message = ''
            if ( this.opinion.nombre == null || this.opinion.opinionText == null ) {
                message = 'Por favor ingresa todos los campos requeridos.'
            } else {
                message = 'Por favor corrige los campos para poder guardar.'
            }
            return message
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
            if ( this.$v.$invalid ) {
                this.$v.$touch()
                this.formInvalid = true
            } else {
                this.formInvalid = false
                this.formSuccess = true
                this.edit_opinion(values)
            }
        }
    },
    components: {
        'alert-message': AlertMessage
    },
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