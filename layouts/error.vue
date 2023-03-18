<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import Error404 from '@/components/error/404.vue';
import Error403 from '@/components/error/403.vue';
import Error429 from '@/components/error/429.vue';
import Error500 from '@/components/error/500.vue';

export default {
  name: 'NuxtError',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorPage () {
      if (this.error.statusCode === 404) {
        return Error404;
      }
      if (this.error.statusCode === 403) {
        return Error403;
      }
      if (this.error.statusCode === 429) {
        return Error429;
      }
      console.log(this.error);
      // Catch everything
      return Error500;
    }
  }
};
</script>
