import vm from 'vue';
import errorMessages from '~/constants/error';

export default function ({ $axios, $cookiz, $config, $helper, app, redirect, error, store }) {
  if (!$config.apiEndpoint) {
    throw new Error('Please config api endpoint in .env file.');
  }
  $axios.setBaseURL($config.apiEndpoint);
  $axios.onRequest((config) => {
    // Ignore handle error on response by flag
    const configData = config.data || {};
    const { clientOptions } = configData;
    if (clientOptions) {
      config.headers.common['Client-Error-Handler'] = clientOptions.errorHandler;
      if (typeof clientOptions === 'object') {
        delete configData.clientOptions;
      }
    }
    const accessToken = store.state.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  $axios.onResponseError((err) => {
    const statusCode = app.$lodash.get(err, 'response.status');
    let message = null;
    if (statusCode === 401) {
      message = 'Unauthorized';
      $cookiz.remove('access_token');
      $cookiz.remove('refresh_token');
      redirect('/');
    }
    if (statusCode === 403) {
      message = 'You do not have permission to access this resource.';
    }
    if (statusCode === 429) {
      message = 'You have sent too many requests in a given amount of time.';
    }
    if (process.server && statusCode && message) {
      error({ statusCode, message });
    }
  });

  $axios.onError((error) => {
    const statusCode = app.$lodash.get(error, 'response.status');
    const errorCode = app.$lodash.get(error, 'response.data.error_code');
    const errorMessage = app.$lodash.get(error, 'response.data.message');
    let message = errorMessage || errorCode || 'An error occurred. Please try again.';
    message = errorMessages[errorCode] ? errorMessages[errorCode] : message;

    if (process.client) {
      vm.$toast.error(message);
      $helper.loading.hide();
    } else {
      // error({ statusCode, message });
      console.log(`[${statusCode}] Server error: ` + message);
    }
  });
}
