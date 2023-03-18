<template>
  <div class="login-box">
    <div class="login-logo">
      <img src="~/assets/images/logo_black.png" class="img-fluid" alt="Wingle">
    </div>

    <h1 class="form-header">
      <p>太陽光発電システム</p>
      <p>発電分析ソフト</p>
    </h1>

    <form id="login_form" class="login-form" action="" method="POST">
      <div class="form-group text-left">
        <label for="email">メールアドレス</label>
        <input
          id="email"
          v-model="dataForm.email"
          type="email"
          class="form-control"
        >
      </div>
      <div class="form-group text-left">
        <label for="password">パスワード</label>
        <input
          id="password"
          v-model="dataForm.password"
          type="password"
          class="form-control"
        >
      </div>
      <div class="form-group">
        <button
          type="button"
          class="btn btn-primary btn-block"
          @click.prevent="onSubmit"
        >
          ログイン
        </button>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input
            id="customCheck1"
            v-model="dataForm.save_password"
            type="checkbox"
            class="custom-control-input"
          >
          <label class="custom-control-label" for="customCheck1">パスワードを保存する</label>
        </div>
      </div>
      <div class="form-group">
        <a href="#" class="forgot-link">パスワードを忘れた方はこちら</a>
      </div>
    </form>
  </div>
</template>
<script>
import { USER_TYPE } from '~/constants/common';

export default {
  name: 'LoginBox',
  middleware: ['noAuthenticated'],
  data () {
    return {
      dataForm: {
        email: null,
        password: null,
        save_password: false
      },
      USER_TYPE,
      showModal: false
    };
  },
  methods: {
    async onSubmit () {
      if (!this.dataForm.email || !this.dataForm.password) {
        this.$toast.error('アカウントとパスワールドを入力してください。');
      } else {
        try {
          this.$helper.loading.show();
          const { data } = await this.$api.auth.login(this.dataForm);
          const { token, expires_in: tokenExpiredAt } = data;
          await fetch('/server-middleware/auth', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
          });
          this.$cookiz.set('token_expired_at', tokenExpiredAt, {
            path: '/'
          });
          this.$store.commit('setAccessToken', token);
          const userInfo = await this.$api.auth.getProfile();
          this.$store.commit('setUserInfo', userInfo);
          this.$helper.loading.hide();
          await this.$router.push({ path: '/dashboard' });
        } catch (e) {
          if (e.response.status === 422) {
            this.$toast.error('アカウントとパスワールドを入力してください。');
          }
          this.$helper.loading.hide();
        }
      }
    }
  }
};
</script>
