/* eslint-disable */
export default ({ $moment }) => ({
  isEmail (str) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(str);
  },
  isHumanName (str) {
    const regex = /[0-9`~!@#$%^&*()\-_=+[{\]};:'",<\.>\/?\\|]/;
    return regex.test(str);
  },
  isPassword (str) {
    const regex = /(?=^.{8,16}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return regex.test(str);
  },
  isNumber (str) {
    const regex = /^\d+$/;
    return regex.test(str);
  },
  isCCCDNumber (str) {
    return /(?=^.{9,12}$)\d+$/.test(str);
  },
  isPhoneNumber (str) {
    return /(02|03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(str);
  },
  isValidBirthday (str) {
    return $moment(str).year() < $moment().subtract(18, 'year').year();
  }
});
