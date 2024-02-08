import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import About from './pages/About.vue';
import EventList from './pages/EventList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/events',
            name: 'events',
            component: EventList
        },
    ]
});

export { router };