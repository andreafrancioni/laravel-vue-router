import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import About from './pages/About.vue';

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
    ]
});

export { router };