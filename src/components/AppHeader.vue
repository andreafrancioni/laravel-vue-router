<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppHeader",
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
            <div class="row">
                <div class="col-2 d-flex flex-column flex-wrap align-items-end">
                    <img class="logo" src="../assets/vue.svg" alt="">
                </div>
                <div class="col-10">
                    <ul class="d-flex align-items-center">
                        <li class="nav-item" v-for="(item, index) in this.store.menuLinks" :key="index">
                            <router-link :to="{ name: item.routeName }" class="nav-link">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>

                </div>
            </div>
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

// ...qui eventuale SCSS di AppComponent
</style>