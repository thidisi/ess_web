<template>
  <header>
    <div class="admin-header">
      <div class="header-right">
        <div class="logo">
          <img
            src="~/assets/images/icons/logo-light.svg"
            class="img-fluid"
            alt="Wingle"
          >
        </div>
      </div>
      <h1 class="page-title">
        {{ currentPageTitle }}
      </h1>
      <div class="header-left">
        <span class="datetime font-montserrat">
          {{ time }}
        </span>
        <div class="header-action user">
          <img src="~/assets/images/icons/user.svg" alt="user">
          <span class="font-montserrat-medium">{{ userInfo.name }}</span>
        </div>
        <div class="header-action logout" @click="onLogout()">
          <img src="~/assets/images/icons/logout.svg" alt="logout">
          <span>ログアウト</span>
        </div>
      </div>
      <div class="humbugger">
        <div class="humbugger-icon" @click="toggleSidebar()">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      interval: null,
      time: null
    };
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapState(['currentPageTitle'])
  },
  beforeDestroy () {
    clearInterval(this.interval);
  },
  created () {
    this.interval = setInterval(() => {
      this.time = this.timeClock();
    }, 1000);
  },
  mounted () {},
  methods: {
    timeClock () {
      return this.$moment().format('YYYY/MM/DD HH:mm:ss');
    },
    async onLogout () {
      try {
        this.$helper.loading.show();
        await this.$store.dispatch('logout');
        this.$helper.loading.hide();
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      } finally {
        this.$helper.loading.hide();
      }
    },
    toggleSidebar () {
      this.$store.commit('toggleSidebar');
    }
  }
};
</script>
