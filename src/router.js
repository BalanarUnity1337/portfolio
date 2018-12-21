import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/portfolio/:title?',
      name: 'Portfolio',
      component: () => import('@/views/Portfolio.vue')
    },
    {
      path: '/404',
      alias: '*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
});

router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start();
  }

  next();
});

router.afterEach(() => NProgress.done());

export default router;
