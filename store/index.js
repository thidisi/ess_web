import { USER_TYPE } from '~/constants/common';

export const state = () => ({
  userInfo: {},
  accessToken: null,
  currentPageTitle: '',
  isSidebarOpen: false
});

export const getters = {
  isAdmin (state) {
    return state.userInfo && state.userInfo.type === USER_TYPE.ADMIN;
  },
  isLoggedIn (state) {
    return state.userInfo && state.userInfo.id;
  },
  accessToken (state) {
    return state.accessToken;
  },
  currentPageTitle (state) {
    return state.currentPageTitle;
  },
  isSidebarOpen (state) {
    return state.isSidebarOpen;
  }
};

export const mutations = {
  setAccessToken (state, token) {
    state.accessToken = token;
  },
  setUserInfo (state, user) {
    state.userInfo = user;
  },
  setCurrentPageTitle (state, title) {
    state.currentPageTitle = title;
  },
  toggleSidebar (state) {
    state.isSidebarOpen = !state.isSidebarOpen;
  }
};

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const accessToken = this.$cookiz.get('access_token');
      if (accessToken) {
        commit('setAccessToken', accessToken);
        const userInfo = await this.$api.auth.getProfile();
        if (userInfo) {
          commit('setUserInfo', userInfo);
        }
      }
    } catch (e) {}
  },
  async logout ({ commit }) {
    const { data } = await this.$api.auth.logout();
    console.log(data);
    if (data.status === 200) {
      await fetch('/server-middleware/auth', {
        method: 'DELETE'
      });
      commit('setUserInfo', {});
      await this.$router.push({ name: 'auth.login' });
    }
  }
};
