<template>
  <div class="admin-layout">
    <client-only>
      <admin-header :is-action-sidebar-menu.sync="isActionSidebarMenu" />
      <nuxt />

      <admin-sidebar :is-action-sidebar-menu.sync="isActionSidebarMenu" />
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AdminHeader from '~/components/admin/partial/Header';
import AdminSidebar from '~/components/admin/partial/SideBar';

export default {
  // middleware: ['authenticated'],
  components: { AdminHeader, AdminSidebar },
  data () {
    return {
      isActionSidebarMenu: false
    };
  },
  computed: mapState(['userInfo']),
  methods: {
    openShowModal () {
      this.isActionSidebarMenu = !this.isActionSidebarMenu;
    }
  }
};
</script>
<style lang="scss" scoped></style>
