import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/',
        name: 'Home',
        component: () => import('../app/index.vue'),
    },
    {
        path: '/docs/forms',
        name: 'Forms',
        component: () => import('../app/forms.vue'),
    },
    {
        path: '/docs/elements',
        name: 'Elements',
        component: () => import('../app/elements.vue'),
    },
    {
        path: '/docs/components',
        name: 'Components',
        component: () => import('../app/components.vue'),
    },
    {
        path: '/forms/test',
        name: 'FormTest',
        component: () => import('../app/formTest.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
