<template>
  <main>
    <!-- <h1>Hello {{ userInfo.name }}</h1> -->
    <section class="dashboard">
      <div class="dashboard-content">
        <p class="dashboard-content__title">
          {{ content_1.title }}
        </p>
        <div class="dashboard-content__body">
          <a
            v-for="ele in content_1.elements"
            :key="ele.id"
            class="dashboard-content__body-item"
          >
            <div class="dashboard-content__body-item-img">
              <img :src="ele.icon" alt="">
            </div>
            <p class="dashboard-content__body-item-label" :class="ele.class">
              {{ ele.label }}
            </p>
          </a>
        </div>
      </div>
      <div class="dashboard-content">
        <p class="dashboard-content__title">
          {{ content_2.title }}
        </p>
        <div class="dashboard-content__body">
          <a
            v-for="ele in content_2.elements"
            :key="ele.id"
            class="dashboard-content__body-item"
          >
            <div class="dashboard-content__body-item-img">
              <img :src="ele.icon" alt="">
            </div>
            <p class="dashboard-content__body-item-label" :class="ele.class">
              {{ ele.label }}
            </p>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { mapState } from 'vuex';

export default {
  layout: 'admin',
  data () {
    return {
      pageTitle: '発電所情報',
      content_1: {
        title: '発電データ',
        elements: [
          {
            id: 1,
            label: '発電データ表示',
            icon: require('~/assets/images/icons/light-1.svg'),
            class: null
          },
          {
            id: 2,
            label: 'データ入力',
            icon: require('~/assets/images/icons/edit.svg'),
            class: 'label--bg-color-1'
          },
          {
            id: 3,
            label: 'CSVインポート',
            icon: require('~/assets/images/icons/export-csv.svg'),
            class: 'label--bg-color-2'
          },
          {
            id: 4,
            label: '経費一覧',
            icon: require('~/assets/images/icons/cost-list.svg'),
            class: 'label--bg-color-3'
          },
          {
            id: 5,
            label: '売電収支',
            icon: require('~/assets/images/icons/statistics.svg'),
            class: 'label--bg-color-4'
          }
        ]
      },
      content_2: {
        title: 'シミュレーション',
        elements: [
          {
            id: 1,
            label: 'シミュレーション作成',
            icon: require('~/assets/images/icons/create-simulation.svg'),
            class: 'label--bg-color-5'
          },
          {
            id: 2,
            label: 'シミュレーション閲覧',
            icon: require('~/assets/images/icons/approval-simulation.svg'),
            class: 'label--bg-color-6'
          },
          {
            id: 3,
            label: '発電所情報',
            icon: require('~/assets/images/icons/info-electrics.svg'),
            class: 'label--bg-color-6'
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
    this.$store.commit('setCurrentPageTitle', this.pageTitle);
  }
};
</script>
