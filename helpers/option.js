export default ({ store }) => ({
  get (key, value, isArrayConvert = true) {
    const options = store.getters.getOptionByKey(key, value);
    return isArrayConvert && options ? Object.values(options) : options;
  }
});
