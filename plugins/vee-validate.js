import Vue from 'vue';
import { ValidationProvider, ValidationObserver, configure, extend } from 'vee-validate';
import { required, min, max, between, email, numeric, confirmed } from 'vee-validate/dist/rules';

Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);

// If any option you want to change common
configure({ bails: false });

// Continue to add the necessary rule
extend('min', {
  ...min,
  message: 'Dữ liệu nhập vào lớn hơn {length} ký tự.'
});
extend('max', {
  ...max,
  message: 'Dữ liệu nhập vào nhỏ hơn {length} ký tự.'
});
extend('required', {
  ...required,
  message: field => `${field}を入力してください。`
});
extend('required-custom', {
  message: field => `${field}を入力してください。`,
  validate: (value) => {
    return /[a-z]+/.test(value);
  }
});
extend('between', {
  ...between,
  params: ['min', 'max'],
  message: 'Dữ liệu nhập vào lớn hơn {min} ký tự và nhỏ hơn {max} ký tự.'
});
extend('email', {
  ...email,
  message: 'Địa chỉ email không đúng định dạng.'
});
extend('numeric', {
  ...numeric,
  message: '入力データは数字でなければなりません。'
});
extend('confirmed', {
  ...confirmed,
  message: '間違ったパスワード。'
});
extend('phone', {
  message: '電話番号の形式が正しくありません。',
  validate: (value) => {
    return /^0[789]0-?\d{4}-?\d{4}$/.test(value);
    // return /(02|03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value);
  }
});
extend('password', {
  message: 'パスワードは6〜16文字で構成され、少なくとも1つの数字、1つの大文字、1つの小文字、1つの特殊文字が含まれます。',
  validate: (value) => {
    if (value === '') {
      return false;
    } else {
      return /(?=^.{6,16}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
    }
  }
});
extend('password-reset', {
  message: 'パスワードが要件を満たしていません',
  validate: (value) => {
    if (value === '') {
      return false;
    } else {
      return /(?=^.{8,50}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
    }
  }
});
extend('date-feature', {
  message: field => `${field}を入力してください。`,
  validate: (value) => {
    return value;
  }
});
extend('hour-feature', {
  message: field => `${field}を入力してください。`,
  validate: (value) => {
    return value;
  }
});
extend('text-jp', {
  message: '診療科に日本語で入力してください。',
  validate: (value) => {
    return /^[ぁ-んァ-ン一-龥]/.test(value);
  }
});
extend('date-payment', {
  message: '現在または将来の日付を入力してください。',
  validate: (value) => {
    return value;
  }
});
extend('date-end-examination', {
  message: '現在または将来の日付を入力してください。',
  validate: (value) => {
    return value;
  }
});
extend('time-examination', {
  message: '終了時間は診察時間より後である必要があります。',
  validate: (value) => {
    return value;
  }
});
extend('date-end-request', {
  message: '新規依頼は前日の午後12時〆切です。',
  validate: (value) => {
    return value;
  }
});
