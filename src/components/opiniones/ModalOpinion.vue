<template>
    <b-modal 
        :id="`modal-opinion-${id}`" 
        :title="`Escribe tu opinión para el juego: ${name}`"
        content-class="modal-opinion"
        centered
        hide-header
        hide-footer
        >
        <div class="modal-opinion-header">
            <div class="header-title">
                <h5>Escribe tu opinion del juego: <span>{{name}}</span></h5>
            </div>
            <button type="button" aria-label="Close" class="close" @click="$bvModal.hide(`modal-opinion-${id}`)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </button>
        </div>
        <alert-message v-if="formInvalid" :mensaje="formAlertMessage"></alert-message>
        <alert-message v-if="formSuccess" type="success" mensaje="La opinion se ha guardado con éxito!"></alert-message>
        <b-button v-if="formSuccess" class="btn-game btn-primary" @click="toOpiniones()">Ver opiniones</b-button>
        <form
            v-else
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
                <div class="buttons-wrapper">
                    <b-button class="mt-3 btn-game" block @click="$bvModal.hide(`modal-opinion-${id}`)">Cerrar</b-button>
                    <b-button class="mt-3 btn-game__accent" block @click="addOpinion(name)">Guardar</b-button>
                </div>
        </form>
    </b-modal>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
import AlertMessage from '@/components/AlertMessage.vue'

export default {
    name: 'modal-opinion',
    props: {
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        }
    },
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
        ...mapActions(['add_opinion']),
        toOpiniones() {
            this.$router.push('/opiniones')
        },
        validateState(value) {
            const { $dirty, $error } = this.$v.opinion[value];
            return $dirty ? !$error : null;
        },
        addOpinion(name) {
            let randomNumber = Math.floor(Math.random() * 1000)
            let randomId = `00${randomNumber}`

            this.opinion.idOpinion = parseInt(randomId)
            this.opinion.nombreJuego = name
            if ( this.$v.$invalid ) {
                this.$v.$touch()
                this.formInvalid = true
            } else {
                this.formInvalid = false
                this.formSuccess = true
                this.add_opinion(this.opinion)
                this.nombre = ''
                this.opinion = ''
            }
        }
    },
    components: {
        'alert-message': AlertMessage
    }
}
</script>

<style lang="scss">
.modal-content.modal-opinion {
    background-color: rgba($dark-color, .7);
    backdrop-filter: blur(5px);
    border: 0;
    padding: 1.875rem;
    .modal-opinion-header {
        padding-block: 1.25rem;
    }
    .header-title {
        border-bottom: 1px solid $secondary-color;
        h5 {
            display: flex;
            flex-direction: column;
            gap: .3125rem;
            margin-bottom: .9375rem;
            span {
                font-weight: $fw-bold;
            }
        }
    }
    .close {
        background-color: transparent;
        border: none;
        line-height: 1;
        position: absolute;
        top: -0.625rem;
        right: -0.625rem;
        svg {
            fill: $white-color;
            transition: fill 300ms ease-in-out;
            width: 1.5625rem;
            &:hover,
            &:focus {
                fill: $secondary-color;
            }
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
    .form-group label {
        margin-bottom: .625rem;
    }
    .form-group input,
    .form-group textarea {
        background-color: transparent;
        border-color: $secondary-color;
        color: $white-color;
        padding-block: .625rem;
        &:focus {
            box-shadow: none;
            outline: none;
        }
    }
    .buttons-wrapper {
        display: flex;
        gap: 1.25rem;
    }
}
</style>