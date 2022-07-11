<template>
    <section class="not-found">
        <b-container>
            <b-row>
                <b-col>
                    <div class="not-found-wrapper">
                        <div class="content">
                            <h1 class="content__title">404</h1>
                            <p class="content__subtitle">El link que buscaste no se encuentra o ha sido removido</p>
                            <a @click="toHome()" class="btn btn-game content__button">Regresar al Home</a>
                        </div>
                        <div class="image">
                            <img src="@/assets/images/not-found.svg" width="1300" alt="Página no encontrada">
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: 'not-found',
    data: function(){
        return {}
    },
    methods: {
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped lang="scss">
.not-found {
    display: grid;
    height: 100vh;
    place-items: center;
}
.not-found-wrapper {
    display: flex;
    justify-content: center;
    gap: 3.125rem;
}
.content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
}
.content__title {
    color: $secondary-color;
    font-family: $heading-font;
    font-size: 11.25rem;
}
.content__subtitle {
    font-family: $heading-font;
    font-size: 1.5rem;
    text-align: center;
}
</style>