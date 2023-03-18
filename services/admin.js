export default ({ $axios }) => ({
  async getJob () {
    const { data } = await $axios.$get('jobs');
    return data;
  }
});
