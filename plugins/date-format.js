import Vue from 'vue';

export default ({ $moment }) => {
  Vue.filter('formatDate', (value, format = 'Y年M月D日') => {
    if (value === '-') {
      return '-';
    }
    return $moment(value).format(format);
  });
};
