import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/',
        name: 'Home',
        component: () => import('../app/index.vue'),
    },
    {
        path: '/docs/form',
        name: 'Docs',
        component: () => import('../app/form.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
