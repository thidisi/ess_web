export default ({ $axios }) => ({
  async login (params) {
    return await $axios.$post('auth/login', params);
  },
  async getProfile () {
    const { data } = await $axios.$get('user/profile');
    return data;
  },
  async logout () {
    return await $axios.$post('auth/logout');
  }
});
