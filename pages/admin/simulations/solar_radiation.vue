<template>
  <section>
    <div class="page-simulation">
      <div class="row">
        <div class="col-md-12">
          <div class="page-bg">
            <div class="breadcrumbs">
              <ul>
                <li>
                  <a href="" class="font-noto-bold">発電所</a>
                </li>
                <li>
                  <a href="">石狩厚田発電所</a>
                </li>
              </ul>
            </div>

            <div class="box-connect">
              <ul>
                <li>
                  <button>
                    <span>20年間売電収支</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>20年間売電収支</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>月別予想日射量</span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="box-table">
              <div class="d-flex justify-content-between">
                <div class="monthly-solar--radiation">
                  <div class="monthly-solar--radiation__title">
                    月別予想日射量
                  </div>
                  <div class="monthly-solar--radiation__box">
                    <div class="monthly-solar--radiation__content">
                      <span>チャート表示</span>
                      <span>・潜在発電量</span>
                      <span>・月別発電量</span>
                      <span>・月平均日射量</span>
                    </div>
                  </div>
                </div>
                <div class="annual_power">
                  <div class="annual_power__title">
                    基本年間発電量
                  </div>
                  <div class="annual_power--box">
                    <div class="annual_power--table">
                      <div class="annual_power--table__title">
                        潜在発電量
                      </div>
                      <div class="annual_power--table__total">
                        1,836,883.62 <span>kWh</span>
                      </div>
                    </div>
                    <div class="annual_power--table">
                      <div class="annual_power--table__title">
                        月別発電量
                      </div>
                      <div class="annual_power--table__total">
                        1,836,883.62 <span>kWh</span>
                      </div>
                    </div>
                    <div class="annual_power--table">
                      <div class="annual_power--table__title">
                        月平均日射量
                      </div>
                      <div class="annual_power--table__total monthly-solar">
                        3.91<span>kWh/m/日</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="solar_radiation--table">
                <div class="content-table">
                  <table class="table">
                    <tbody>
                      <tr
                        v-for="item in table1"
                        :key="item.id"
                        :class="item.type ? item.type : null"
                      >
                        <th>{{ item.title }}</th>
                        <td v-for="each in item.total" :key="each">
                          <div v-if="item.id == 1" class="text-center">
                            {{ each }}
                          </div>
                          <div v-else>
                            <span>{{ each }}</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="separator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'admin',
  data () {
    return {
      pageTitle: 'シミュレーションデータ - 月別予想日射量',
      table1: [
        { id: 1, title: '期', type: '', total: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
        {
          id: 2,
          title: '潜在年間発電量',
          type: '',
          total: [
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884'
          ]
        },
        {
          id: 3,
          title: '潜在売電収入',
          type: '',
          total: [
            '22,042,603',
            '22,042,603',
            '22,042,603',
            '22,042,603',
            '22,042,603',
            '22,042,603',
            '22,042,603',
            '22,042,603',
            '22,042,603'
          ]
        },
        {
          id: 4,
          title: 'インバーター変換効率',
          type: '',
          total: [
            '98.00%',
            '98.00%',
            '98.00',
            '98.00%',
            '98.00%',
            '98.00',
            '98.00%',
            '98.00%',
            '98.00'
          ]
        },
        {
          id: 5,
          title: '特殊負荷率',
          type: 'rate_special',
          total: [
            '3.00%',
            '3.00%',
            '3.00',
            '3.00%',
            '3.00%',
            '3.00',
            '3.00%',
            '3.00%',
            '3.00'
          ]
        },
        {
          id: 6,
          title: 'モジュール性能低下率',
          type: 'rate_special',
          total: [
            '3.00%',
            '3.00%',
            '3.00',
            '3.00%',
            '3.00%',
            '3.00',
            '3.00%',
            '3.00%',
            '3.00'
          ]
        },
        {
          id: 7,
          title: '（有効稼働率）',
          type: '',
          total: [
            '98.00%',
            '98.00%',
            '98.00',
            '98.00%',
            '98.00%',
            '98.00',
            '98.00%',
            '98.00%',
            '98.00'
          ]
        },
        {
          id: 8,
          title: '予想年間発電量',
          type: '',
          total: [
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884'
          ]
        },
        {
          id: 9,
          title: '有効売電収入',
          type: '',
          total: [
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884'
          ]
        },
        {
          id: 10,
          title: '有効売電収入',
          type: 'total',
          total: [
            '21,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884',
            '1,836,884'
          ]
        }
      ]
    };
  },
  created () {
    this.$store.commit('setCurrentPageTitle', this.pageTitle);
  }
};
</script>

<style scoped lang="scss">
.table {
  margin: 0;
}

.table > :not(caption) > * > * {
  padding: 20px 28px;
  font-family: 'Noto Sans JP Medium';
  font-size: 18px;
  letter-spacing: 1.8px;
  line-height: 26px;
  border: 1px solid #d1d1d1;
}

.page-bg {
  background-color: #f7f7f7;
  margin-right: 50px;
  padding-bottom: 25px;
}

.mt-35 {
  margin-top: 35px;
}

.font-noto-bold {
  font-family: 'Noto Sans JP Bold' !important;
}

.page-simulation {
  margin-top: 160px;
  margin-left: 555px;
  max-width: 1396px;
  margin-bottom: 72px;
}

.breadcrumbs {
  height: 55px;
  background-color: #1d98c6;

  ul {
    padding: 0;
    display: flex;
    height: 100%;
    margin: 0;

    li {
      font-family: 'Noto Sans JP Medium';

      &:last-child {
        margin-right: 29px;
      }

      &:first-child {
        margin-left: 29px;
      }

      a {
        text-decoration: none;
        color: #ffff;

        &.font-noto-bold {
          font-size: 20px;
          letter-spacing: 2px;
          line-height: 29px;
          padding-top: 13px;
          padding-bottom: 13px;
        }

        display: block;
        padding-top: 14px;
        padding-bottom: 15px;
        font-size: 18px;
        letter-spacing: 1.8px;
        line-height: 26px;
      }
    }

    li + li {
      margin-left: 87px;
    }
  }
}

.box-connect {
  margin-left: 51px;
  margin-bottom: 63px;

  ul {
    margin: 50px 0 0 0;
    padding: 0;
    height: 100%;

    li {
      font-family: 'Noto Sans JP Medium';
      display: inline-block;

      button {
        background-color: #ffff;
        font-size: 21px;
        letter-spacing: 2.1px;
        line-height: 23px;
        padding: 16px 70px;
        text-align: center;
        border-top: #1d98c6 2px solid;
        border-left: #1d98c6 2px solid;
        border-right: #1d98c6 2px solid;
        border-bottom: #1d98c6 5px solid;
        border-radius: 5px;

        span {
          color: #1d98c6;
        }
      }
    }

    li + li {
      margin-left: 30px;
    }
  }
}

.box-table {
  margin-left: 29px;
  margin-right: 31px;

  .monthly-solar--radiation {
    margin-right: 38px;
    width: 746px;
    max-width: 746px;

    &__title {
      font-family: 'Noto Sans JP Bold';
      font-size: 20px;
      letter-spacing: 2px;
      line-height: 29px;
      margin-bottom: 12px;
    }

    &__box {
      height: 462px;
      position: relative;
      border: 1px solid #d1d1d1;
      background-color: #ffff;
    }

    &__content {
      max-width: 273px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      span {
        display: block;
        font-size: 39px;
        line-height: 56px;
        font-family: 'Noto Sans JP Black';
      }
    }
  }

  .annual_power {
    width: 453px;

    &__title {
      font-family: 'Noto Sans JP Bold';
      font-size: 20px;
      letter-spacing: 2px;
      line-height: 29px;
      margin-bottom: 12px;
    }
  }
  .annual_power--table {
    background-color: #ffff;
    border: 1px solid #d1d1d1;
    &__title {
      font-family: 'Noto Sans JP Medium';
      background-color: #e8e8e8;
      font-size: 18px;
      letter-spacing: 1.8px;
      line-height: 41px;
      padding-left: 29px;
    }
    &__total {
      &.monthly-solar {
        margin-right: 16px;
        span {
          margin-left: 8px;
        }
      }
      font-family: 'Noto Sans JP Regular';
      background-color: #ffff;
      font-size: 36px;
      text-align: end;
      margin-right: 54px;
      line-height: 74px;
      span {
        font-size: 14px;
      }
    }
  }
  .solar_radiation--table {
    margin-top: 58px;
    .content-table {
      table {
        tr th {
          &:first-child {
            background-color: #e8e8e8;
            width: 260px;
          }
        }

        tbody tr {
          background-color: #ffff;

          td {
            padding-left: 0;
            padding-right: 0;

            div {
              span {
                font-size: 14px;
                letter-spacing: 0.42px;
                font-family: 'Noto Sans JP Regular';
                display: block;
                margin-right: 10px;
                text-align: right;
              }
            }
          }

          &.total,
          &.result {
            th {
              color: #ffff;
              border-right: none;
              padding: 18px 28px;
            }

            td {
              text-align: center;
              padding: 0;
              border: none;
              position: relative;

              div {
                background-color: #ffff;
                border-top: 4px solid;
                border-bottom: 4px solid;

                span {
                  font-family: 'Noto Sans JP Medium';
                }

                &::before {
                  content: '';
                  position: absolute;
                  width: 1px;
                  height: calc(100% - 8px);
                  background-color: #d1d1d1;
                  right: -1px;
                  top: 4px;
                  z-index: 1;
                }

                line-height: 60px;
              }

              &:last-child {
                div {
                  &::before {
                    width: 4px;
                    height: 100%;
                    top: 0;
                    z-index: 1;
                  }
                }
              }
            }
          }

          &.total {
            th {
              background-color: #0379a5 !important;
            }

            td {
              div {
                border-color: #0379a5;

                span {
                  color: #0379a5;
                }
              }

              &:last-child {
                div {
                  &::before {
                    background-color: #0379a5;
                  }
                }
              }
            }
          }

          &.result {
            th {
              background: #fc9100 !important;
            }

            td {
              div {
                border-color: #fc9100 !important;

                span {
                  color: #fc9100;
                }
              }

              &:last-child {
                div {
                  &::before {
                    background-color: #fc9100;
                  }
                }
              }
            }
          }

          &.rate_special {
            td div span {
              &::before {
                content: '▲';
              }
            }
          }
        }
      }
    }
  }
  .separator {
    width: 808px;
    margin-top: 20px;
    margin-bottom: 37px;
    margin-right: 200px;
    margin-left: auto;
    height: 4px;
    background-color: #1d98c6;
    border-radius: 4px;
  }
}
</style>
