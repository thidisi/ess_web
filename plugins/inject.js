import Vue from 'vue';
import commonHelper from '../helpers/common';
import validateHelper from '../helpers/validate';
import datetimeHelper from '../helpers/datetime';
import optionHelper from '../helpers/option';
import fileHelper from '../helpers/file';
import loadingHelper from '../helpers/loading';
import * as constants from '../constants';
import eventBus from './event-bus';
import lodash from '~/plugins/lodash';

export default function ({ store, app, options }, inject) {
  const alert = (params, option = null) => {
    if (typeof params === 'object') {
      if (!params.onHide) {
        params.onHide = () => {};
      }
      eventBus.$emit('initAlert', params);
    }
  };

  const { $moment } = app;
  const helper = {
    ...commonHelper,
    file: fileHelper,
    loading: loadingHelper,
    validate: validateHelper({ $moment }),
    datetime: datetimeHelper({ $moment })
  };

  inject('lodash', lodash);
  inject('const', constants);
  inject('alert', alert);
  inject('helper', helper);
  inject('option', optionHelper({ store }));
  inject('user', () => {
    return store.state.userInfo;
  });

  // Trick to suggestion in jetbrains ide
  const trickForDevelopment = false;
  if (trickForDevelopment) {
    Vue.prototype.$lodash = lodash;
    Vue.prototype.$const = constants;
    Vue.prototype.$alert = alert;
    Vue.prototype.$helper = helper;
    Vue.prototype.$option = optionHelper({ store });
  }
}
