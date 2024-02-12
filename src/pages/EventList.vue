<script>
import { store } from "../store.js" //state management

export default {
    name: "EventList",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>
        <h1 class="text-center">Eventi</h1>

        <div class="container">
            <div class="row">

                <div class="col-md-4 gy-4" v-for="event in store.eventArray">
                    <div class="card h-100">
                        <div class="card-header">{{ event.date }}</div>
                        <div class="card-body">
                            <h5 class="card-title">{{ event.name }}</h5>
                            <p class="card-text">Restano <b>{{ event.available_tickets }}</b> biglietti disponibili.
                            </p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                                <router-link :to="{ name: 'event-detail', params: { id: event.id } }"
                                    class="btn btn-primary">
                                    <span>Details</span>
                                </router-link>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped></style>