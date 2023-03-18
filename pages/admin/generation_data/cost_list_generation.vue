<template>
  <section>
    <div class="generation-data">
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
                    <span>発電データ入力</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>CSVインポート</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>発電データ表示</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>経費一覧</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>売電収支</span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="box-table">
              <div class="title-table">
                年間発電量
              </div>
              <div class="search">
                <div>
                  <select id="" class="search-select-1" name="">
                    <option value="">
                      ▶︎ 年度を選択してください
                    </option>
                  </select>
                  <img
                    :src="require('~/assets/images/icons/Polygon 1.svg')"
                    class=""
                    alt="light"
                  >
                </div>
                <div class="search-btn">
                  <button>選 択</button>
                </div>
              </div>
              <div class="content-table cost-list">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        月日
                      </th>
                      <th scope="col">
                        経費項目
                      </th>
                      <th scope="col">
                        取引先
                      </th>
                      <th scope="col">
                        金 額
                      </th>
                      <th scope="col">
                        備 考
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in table1" :key="item.id">
                      <th>{{ item.time ? item.time : '-' }}</th>
                      <td v-for="each in item.total" :key="each">
                        {{ each }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="add-cost">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      id="Path_70"
                      data-name="Path 70"
                      d="M17-8.82H11.2v-5.8H8.8v5.8H3v2.4s4.35-1.45,5.8,0,0,5.8,0,5.8h2.4v-5.8H17Z"
                      transform="translate(-3 14.62)"
                      fill="#1d98c6"
                    />
                  </svg>
                  <span>行を追加</span>
                </button>
              </div>
            </div>
          </div>
          <div class="box-btn">
            <button>保 存</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
  layout: 'admin',
  data () {
    return {
      pageTitle: '経費一覧',
      table1: [
        {
          id: 1,
          time: '2022-06-01',
          total: ['経費項目', '取引先', '金 額', '備 考']
        },
        {
          id: 2,
          time: '2022-06-01',
          total: ['1,836,884', '1,836,884', '1,836,884', '1,836,884']
        },
        {
          id: 3,
          time: '2022-06-01',
          total: ['22,042,603', '22,042,603', '22,042,603', '22,042,603']
        },
        {
          id: 4,
          time: 'インバー',
          total: ['98.00%', '98.00%', '98.00', '98.00%']
        },
        {
          id: 5,
          time: '2022-06-01',
          total: ['3.00%', '3.00%', '3.00', '3.00%']
        },
        {
          id: 6,
          time: '2022-06-01',
          total: ['3.00%', '3.00%', '3.00', '3.00%']
        },
        {
          id: 7,
          time: '',
          total: ['98.00%', '98.00%', '98.00', '98.00%']
        },
        {
          id: 8,
          time: '2022-06-01',
          total: ['1,836,884', '1,836,884', '1,836,884', '1,836,884']
        },
        {
          id: 9,
          time: '',
          total: ['1,836,884', '1,836,884', '1,836,884', '1,836,884']
        },
        {
          id: 10,
          time: '',
          total: ['21,836,884', '1,836,884', '1,836,884', '1,836,884']
        }
      ]
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
  padding-bottom: 30px;
}

.mt-35 {
  margin-top: 35px;
}

.font-noto-bold {
  font-family: 'Noto Sans JP Bold' !important;
}

.generation-data {
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
        padding: 18px 30px 16px 30px;
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
  }

  .content-table {
    margin-bottom: 30px;
    table {
      thead tr th {
        background-color: #e8e8e8;
        text-align: center;
      }
      tr {
        th {
          background-color: #fff;
        }
        td {
          z-index: 1;
          position: relative;
          background-color: #ffff;
          text-align: center;
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
      }
    }
  }
  .search {
    display: flex;
    gap: 20px;
    margin-bottom: 28px;

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
      appearance: none;
    }

    .search-select-1 {
      padding: 13px 85px 11px 24px;
      border: 1px solid #d1d1d1;
      position: relative;
      font-size: 15px;
      color: #7c7c7c;
    }

    img {
      position: absolute;
      margin-top: 19px;
      margin-left: -32px;
      pointer-events: none;
    }

    button {
      padding: 10px 20px 8px 19px;
      color: #fff;
      background: #1d98c6;
      border-radius: 7px;
      border: none;
      font-size: 21px;
      font-family: 'Noto Sans JP Medium';
    }

    .search-select-2 {
      padding: 13px 47px 11px 24px;
      font-size: 15px;
      color: #7c7c7c;
      border: 1px solid #d1d1d1;
    }
  }

  .add-cost {
    display: flex;
    justify-content: flex-end;
    button {
      display: flex;
      align-items: center;
      padding: 12px 19px 11px 14px;
      font-size: 15px;
      letter-spacing: 0.45px;
      line-height: 18px;
      font-family: 'Noto Sans JP Medium';
      border: 1px solid #1d98c6;
      border-radius: 4px;
      background-color: #ffff;
      span {
        color: #1d98c6;
        margin-left: 10px;
      }
    }
  }
}
.box-btn {
  margin-top: 42px;
  margin-bottom: 90px;
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
