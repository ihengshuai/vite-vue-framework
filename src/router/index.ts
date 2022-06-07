import {
  createWebHistory,
  createRouter as createVueRouter,
  createMemoryHistory,
  Router,
} from 'vue-router';

export const createRouter = (): Router => {
  return createVueRouter({
    history: __IS_SSR__ ? createWebHistory() : createMemoryHistory(),
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: 'home',
        },
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: {
          title: 'login',
        },
      },
    ],
  });
};
