import helper from '~/helpers/common';

const login = () => helper.interopDefault(import('~/pages/auth/login'));

export const authRoutes = [
  {
    name: 'login',
    path: '/',
    component: login
  }
];
