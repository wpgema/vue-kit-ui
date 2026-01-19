import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/',
    redirect: '/index', 
    component: () => import('../App.vue'),
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('../app/docs/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
