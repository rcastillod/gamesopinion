<template>
    <div>
        <b-card
            :title="name"
            :img-src="image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <!-- <b-card-text>
                {{name}}
            </b-card-text> -->
            <b-button v-b-modal="`modal-opinion-${id}`" variant="primary">Opinion</b-button>
        </b-card>
        <b-modal 
            :id="`modal-opinion-${id}`" 
            :title="`Escribe tu opinión para el juego:${name}`"
            centered
            hide-footer
            >
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
            <b-button class="mt-3" block @click="$bvModal.hide(`modal-opinion-${id}`)">Cerrar</b-button>
            <b-button class="mt-3" block @click="addOpinion(name)">Guardar</b-button>
        </b-modal>
    </div>

</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

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
    computed: {},
    methods: {
        ...mapActions(['add_opinion']),
        validateState(value) {
            const { $dirty, $error } = this.$v.opinion[value];
            return $dirty ? !$error : null;
        },
        addOpinion(name) {
            // let validOpinion = true

            // if ( this.nombre == '' || this.opinion.nombre.length < 3) {
            //     validOpinion = false
            // }

            // if ( this.opinion == '' || this.opinion.opinionText.length < 10 ) {
            //     validOpinion = false
            // }

            // if(validOpinion) {
                //let opinion = {
                //    nombre: this.nombre,
                //    opinion: this.opinion
                //}
                this.opinion.nombreJuego = name
                this.add_opinion(this.opinion)
                this.nombre = ''
                this.opinion = ''
            // }
        }
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