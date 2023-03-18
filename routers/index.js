import Vue from 'vue';
import Router from 'vue-router';
import { adminRoutes } from './admin';
import { authRoutes } from './auth';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      // const timeOut = this.app.$route?.query?.page ? 0 : 180;
      const timeOut = 0;

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 });
        }, timeOut);
      });
    },
    routes: [
      ...authRoutes,
      ...adminRoutes
    ]
  });
}
