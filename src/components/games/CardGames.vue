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
            hide-footer
            >
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                    label="Nombre:"
                    label-for="name-input"
                    invalid-feedback="El nombre es obligatorio"
                    >
                    <b-form-input
                        id="name-input"
                        placeholder="Evan You"
                        v-model="nombre"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Opiniones"
                    label-for="opinion-input"
                    invalid-feedback="La opinión es obligatoria">
                    <b-form-textarea
                        id="opinion-input"
                        placeholder="Tu opinión debe ir aquí..."
                        v-model="opinion"
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                </b-form-group>
            </form>
            <b-button class="mt-3" block @click="$bvModal.hide(`modal-opinion-${id}`)">Cerrar</b-button>
            <b-button class="mt-3" block @click="addOpinion()">Guardar</b-button>
        </b-modal>
    </div>

</template>

<script>
import { mapActions } from 'vuex'

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
            nombre: null,
            opinion: null
        }
    },
    // computed: {},
    methods: {
        ...mapActions(['add_opinion']),
        addOpinion() {
            let opinion = {
                nombre: this.nombre,
                opinion: this.opinion
            }
            this.add_opinion(opinion)
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