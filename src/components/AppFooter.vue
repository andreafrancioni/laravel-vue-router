<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {

        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <nav>
        <div class="container">

        </div>
    </nav>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

nav {
    background-color: rgb(86, 86, 86);
}

.logo {
    height: 40px;
}

ul {
    height: 100%;

    li {
        list-style-type: none;
        padding: 10px;
        color: white;
    }
}

// ...qui eventuale SCSS di AppComponent</style>