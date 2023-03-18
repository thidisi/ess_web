<template>
  <div class="sidebar-wrapper">
    <ul class="sidebar">
      <li class="light-bg">
        <nuxt-link to="/dashboard">
          <img
            src="~/assets/images/icons/home.svg"
            class="sidebar-icon"
            alt="home"
          >
          <span>ダッシュボード</span>
        </nuxt-link>
      </li>

      <li id="lightMenu">
        <nuxt-link to="" @click.native="toggleSubmenu('lightMenu')">
          <img
            src="~/assets/images/icons/light.svg"
            class="sidebar-icon"
            alt="light"
          >
          <span>発電データ</span>
          <img
            src="~/assets/images/icons/dropdown.svg"
            class="dropdown-icon"
            alt="light"
          >
        </nuxt-link>

        <ul class="sidebar-submenu">
          <li>
            <nuxt-link to="/">
              <span>発電データ表示</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <span>発電データ入力</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <span>CSVインポート</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <span>売電収支</span>
            </nuxt-link>
          </li>
        </ul>
      </li>

      <li id="pencilMenu" class="light-bg">
        <nuxt-link to="" @click.native="toggleSubmenu('pencilMenu')">
          <img
            src="~/assets/images/icons/pencil.svg"
            class="sidebar-icon"
            alt="light"
          >
          <span>シミュレーション</span>
          <img
            src="~/assets/images/icons/dropdown.svg"
            class="dropdown-icon"
            alt="light"
          >
        </nuxt-link>

        <ul class="sidebar-submenu">
          <li>
            <nuxt-link to="/">
              <span>データ作成</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <span>データ閲覧</span>
            </nuxt-link>
          </li>
        </ul>
      </li>

      <li id="electricMenu">
        <nuxt-link to="" @click.native="toggleSubmenu('electricMenu')">
          <img
            src="~/assets/images/icons/electric.svg"
            class="sidebar-icon"
            alt="light"
          >
          <span>発電所情報</span>
          <img
            src="~/assets/images/icons/dropdown.svg"
            class="dropdown-icon"
            alt="light"
          >
        </nuxt-link>

        <ul class="sidebar-submenu">
          <li>
            <nuxt-link to="/">
              <span>発電所一覧</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <span>発電所新規登録</span>
            </nuxt-link>
          </li>
        </ul>
      </li>

      <li class="light-bg">
        <nuxt-link to="/dashboard">
          <img
            src="~/assets/images/icons/setting.svg"
            class="sidebar-icon"
            alt="home"
          >
          <span>マスタ</span>
        </nuxt-link>
      </li>
      <div class="sidebar-action sp">
        <nuxt-link to="">
          <img
            src="~/assets/images/icons/user-blue.svg"
            class="sidebar-icon"
            alt="home"
          >
          <span class="font-montserrat-medium">{{ userInfo.name }}</span>
        </nuxt-link>
        <nuxt-link to="" @click.native="onLogout()">
          <img
            src="~/assets/images/icons/logout-blue.svg"
            class="sidebar-icon"
            alt="home"
          >
          <span>ログアウト</span>
        </nuxt-link>
      </div>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import $ from 'jquery';

export default {
  props: {},
  computed: {
    ...mapState(['userInfo']),
    ...mapState(['isSidebarOpen'])
  },
  watch: {
    isSidebarOpen (value) {
      if (value) {
        $('.sidebar-wrapper').slideDown();
      } else {
        $('.sidebar-wrapper').slideUp();
      }
    }
  },
  mounted () {
    $('.sidebar-submenu').hide();

    $('.open .sidebar-submenu').show();

    if ($(window).width() < 1200) {
      $('.sidebar-wrapper').hide();
    }

    $(window).resize(() => {
      if ($(window).width() < 1200) {
        $('.sidebar-wrapper').hide();
      } else {
        $('.sidebar-wrapper').show();
      }
    });
  },
  methods: {
    toggleSubmenu (id) {
      const selector = `#${id} .sidebar-submenu`;
      $(selector).slideToggle();
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
    }
  }
};
</script>
