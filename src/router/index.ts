import { createWebHistory, createRouter } from 'vue-router';
import { useCommonStore } from '../store';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: 'home',
      },
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: 'login',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? document.title;
  const { setTitle } = useCommonStore();
  setTitle(document.title);
  next();
});

export default router;
