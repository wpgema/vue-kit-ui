import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/',
        name: 'Home',
        component: () => import('../app/index.vue'),
    },
    {
        path: '/docs/form',
        name: 'Form',
        component: () => import('../app/form.vue'),
    },
    {
        path: '/docs/elements',
        name: 'Elements',
        component: () => import('../app/elements.vue'),
    },
    {
        path: '/form/test',
        name: 'FormTest',
        component: () => import('../app/formTest.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
