<template>
  <div class="login-page">
    <login-box />
  </div>
</template>

<script>
import LoginBox from '~/components/auth/LoginBox';

export default {
  components: { LoginBox },
  middleware: ['noAuthenticated'],
  layout: 'login',
  data () {
    return {
      list_year: 1
    };
  },
  methods: {
    async callApi () {
      await this.$api.user.login();
    }
  },
  head: {
    title: 'Login - OMES',
    meta: [{ hid: 'robots', name: 'robots', content: 'noindex,nofollow' }],
    htmlAttrs: {
      class: 'auth-layout'
    }
  }
};
</script>
