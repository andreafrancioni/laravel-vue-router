<script>
import { store } from "../store.js"
import axios from "axios";
export default {
    name: "EventDetail",
    props: ["id"],
    data() {
        return {
            store,
            event: null
        }
    },
    mounted() {
        this.getEventDetail();
    },
    methods: {
        //Compone chiamata API verso back-end recuperando i dettagli del singolo evento tramite l'id passato dalla props e lo inserisce in data event.
        getEventDetail() {
            let url = this.store.apiUrl + this.store.apiEvent + this.id;

            axios.get(url).then(result => {
                if (result.status === 200 && result.data.success) {
                    this.event = result.data.results;
                } else {
                    console.error("Si è verificato un errore");
                }
            }).catch(errore => {
                console.error(errore);
            });
        }
    }
}
</script>


<template>
    <div class="container">
        <div class="row d-flex flex-column align-items-center justify-content-center">
            <!-- Popola la card -->
            <div class="card">
                <h1 class="mb-3">Nome evento: {{ event?.name }}</h1>
                <h3 class="mb-3">Utente: {{ event?.user.name }}</h3>
                <h5 class="mb-3"> Email: {{ event?.user.email }}</h5>
                <h3 class="mb-3">Data dell'evento: {{ event?.date }}</h3>
                <h3 class="mb-3">Tag: <span class="mx-2 badge rounded-pill text-bg-info" v-for="tag in event?.tags">{{
                    tag.name }}</span></h3>
                <h3 class="mb-3">Biglietti rimanenti: {{ event?.available_tickets }}</h3>
            </div>
            <!-- Torna alla lista eventi -->
            <router-link :to="{ name: 'events' }" class="btn btn-primary">
                <span>Torna agli eventi</span>
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    padding: 10px;

    .row {

        .card {
            width: 50rem;

        }

        .btn {
            width: 10rem;
            margin: 3rem;
        }
    }
}
</style>
