import Vue from 'vue';
import auth from '~/services/auth';
import admin from '~/services/admin';

export default function ({ $axios }, inject) {
  const api = {
    auth: auth({ $axios }),
    admin: admin({ $axios })
  };
  inject('api', api);
  const trickForDevelopment = false;
  if (trickForDevelopment) {
    Vue.prototype.$api = api;
  }
}
