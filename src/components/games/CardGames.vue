<template>
    <div>
        <div class="game-card" @click="sendGameName(name)">
            <div class="game-card__image">
                <img :src="image" :alt="name">
            </div>
            <h4 class="game-card__title">{{name}}</h4>
        </div>
        <!-- <b-card
            :title="name"
            :img-src="image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-button v-b-modal="`modal-opinion-${id}`" variant="primary">Opinion</b-button>
        </b-card>

        <b-modal 
            :id="`modal-opinion-${id}`" 
            :title="`Escribe tu opinión para el juego:${name}`"
            centered
            hide-footer
            >
            <alert-message v-if="formInvalid" :mensaje="formAlertMessage"></alert-message>
            <alert-message v-if="formSuccess" type="success" mensaje="La opinion se ha guardado con éxito!"></alert-message>
            <button v-if="formSuccess" class="btn btn-primary" @click="toOpiniones()">Ver opiniones</button>
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
                    <b-button class="mt-3" block @click="$bvModal.hide(`modal-opinion-${id}`)">Cerrar</b-button>
                    <b-button class="mt-3" block @click="addOpinion(name)">Guardar</b-button>
            </form>
        </b-modal> -->
    </div>

</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
//import AlertMessage from '@/components/AlertMessage.vue'

export default {
    name: 'game-card',
    props: {
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        rating: {
            type: Number,
            require: true
        },
        released: {
            type: String,
            require: true
        },
        updated: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
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
        sendGameName(name) {
            this.$emit('getGameName', name )
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
        //'alert-message': AlertMessage
    }
}
</script>

<style scoped lang="scss">
.game-card {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}
.game-card__image {
    height: 18.75rem;
    width: 12.5rem;
    & > img {
        border-radius: $br;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
}
.game-card__title {
    font-size: 1.25rem;
    text-align: center;
    width: 12.5rem;
}
</style>