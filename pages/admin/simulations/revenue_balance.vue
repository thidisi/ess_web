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
              <div class="title-table">
                20年間売電収支
              </div>
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

            <div class="box-table mt-35 rate-table">
              <div class="content-table">
                <table class="table">
                  <tbody>
                    <tr
                      v-for="item in table2"
                      :key="item.id"
                      :class="item.type ? item.type : null"
                    >
                      <th>{{ item.title }}</th>
                      <td v-for="each in item.total" :key="each">
                        <div>
                          <span>{{ each }}</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="box-btn">
          <button>保 存</button>
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
      pageTitle: 'シミュレーションデータ - 売電収支',
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
      ],
      table2: [
        {
          id: 1,
          title: '期',
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
          id: 2,
          title: '主任技術者',
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
          title: 'PCSメーカー点検',
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
          id: 4,
          title: '保険',
          type: 'rate_special',
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
          id: 5,
          title: '通信料',
          type: 'rate_special',
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
          id: 6,
          title: '電気使用量',
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
          id: 7,
          title: '固定資産税',
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
          id: 8,
          title: '償却資産税',
          type: '',
          total: [
            '1304,000',
            '1304,000',
            '1304,000',
            '1304,000',
            '1304,000',
            '1304,000',
            '1304,000',
            '1304,000',
            '1304,000'
          ]
        },
        {
          id: 9,
          title: '予備費',
          type: '',
          total: ['0', '0', '0', '0', '0', '0', '0', '0', '0']
        },
        {
          id: 10,
          title: '費用計',
          type: 'total',
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
          id: 11,
          title: 'NOI(営業利益)',
          type: 'result',
          total: [
            '15,047,432',
            '15,047,432',
            '15,047,432',
            '15,047,432',
            '15,047,432',
            '15,047,432',
            '15,047,432',
            '15,047,432',
            '15,047,432'
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
  margin-bottom: 50px;

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
  .title-table {
    font-family: 'Noto Sans JP Bold';
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 29px;
    margin-bottom: 12px;
    margin-top: 33px;
  }

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

  &.rate-table {
    margin-top: 35px;
    padding-bottom: 37px;
    .content-table {
      table {
        tr {
          th,
          td {
            z-index: 1;
            position: relative;
          }

          th {
            &:first-child {
              background-color: #e8e8e8;
            }

            &::after {
              content: '';
              position: absolute;
              width: calc(100% - 24px);
              height: calc(100% - 24px);
              background: #ffff;
              top: 12px;
              left: 12px;
              border-radius: 4px;
              z-index: -1;
            }
          }

          td {
            background-color: #ffff;

            div span {
              margin-right: 14px;
            }

            &::after {
              content: '';
              position: absolute;
              width: calc(100% - 24px);
              height: calc(100% - 24px);
              background: #e8e8e8;
              top: 12px;
              left: 12px;
              border-radius: 4px;
              z-index: -1;
            }
          }

          &.total,
          &.result {
            th {
              &::after {
                width: 0;
                height: 0;
              }
            }

            td {
              z-index: inherit;

              &::after {
                width: 0;
                height: 0;
              }

              div span {
                margin-right: 11px;
              }
            }
          }
        }
      }
    }
  }
}

.box-btn {
  margin-top: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 50px;
    outline: none;
    border: none;
    background-color: #0379a5;
    color: #ffff;
    font-family: 'Noto Sans JP Medium';
    font-size: 21px;
    letter-spacing: 2.1px;
    line-height: 28px;
    padding: 16px 100px;
    border-radius: 4px;
  }
}
</style>
