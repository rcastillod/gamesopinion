<template>
  <div id="app">
    <div class="main-wrapper">
      <navigation></navigation>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/header/Navigation.vue'

export default {
    components: {
      'navigation': Navigation
    },
}
</script>

<style lang="scss">
/* -------------------------------------------------------------------------- */
/*                              CUSTOM PROPERTIES                             */
/* -------------------------------------------------------------------------- */
/* Colors */
$primary-color: 256 34% 17%;
$primary-color-shade: 256 33% 15%;
$primary-color-tint: 257 21% 45%;
$secondary-color: 342 92% 44%;
$secondary-color-shade: 337 85% 35%;
$accent-color: 173 52% 44%;
$text-color: 245 9% 75%;
$white-color: 0 0% 100%;

/* Font Familiy */
$heading-font: 'DM Sans', sans-serif;
$text-font: 'Raleway', sans-serif;

/* Font Weights */
$fw-thin: 100;
$fw-light: 300;
$fw-regular: 400;
$fw-semibold: 600;
$fw-bold: 700;

/* Border */
$br: 1.25rem;
$br-full: 50%;

/* -------------------------------------------------------------------------- */
/*                                   GLOBAL                                   */
/* -------------------------------------------------------------------------- */

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    color: hsl(var(--text-color));
    font-family: var(--text-font);
    font-weight: var(--fw-light);
    margin: 0;
}

h1,
h2,
h3,
h4 {
    font-family: var(--heading-font);
    margin: 0;
}

p {
    margin: 0;
}

img,
picture {
    max-width: 100%;
    display: block;
}

main,
section {
    position: relative;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: .625em;
}
::-webkit-scrollbar-track {
    background-color: hsl(var(--primary-color-shade) / .9);
}
::-webkit-scrollbar-thumb {
    background-color: hsl(var(--primary-color-tint));
    border-radius: var(--br);
}
</style>
