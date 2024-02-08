import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Homepage.vue';
import AboutUs from './pages/About.vue';

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