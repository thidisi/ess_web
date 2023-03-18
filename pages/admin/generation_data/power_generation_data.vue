<template>
  <section>
    <div class="generation-data">
      <div class="row">
        <div class="col-md-12 p-0 generation">
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
              発電データ
            </div>
            <div class="search">
              <div>
                <select id="" class="search-select-1" name="">
                  <option value="">
                    ▶︎ 年度を選択してください
                  </option>
                </select>
                <img
                  src="~/assets/images/icons/Polygon 1.svg"
                  class=""
                  alt="light"
                >
              </div>
              <div>
                <select id="" class="search-select-2" name="">
                  <option value="">
                    ▶︎ 月を選択してください
                  </option>
                </select>
                <img
                  src="~/assets/images/icons/Polygon 1.svg"
                  class=""
                  alt="light"
                >
              </div>
              <div class="search-btn">
                <button>選 択</button>
              </div>
            </div>
            <div class="content-table">
              <table class="table">
                <tbody>
                  <tr>
                    <th class="th-first">
                      月日
                    </th>
                    <th>発電量</th>
                    <th>潮流調整</th>
                    <th>電力都合</th>
                    <th>O&M</th>
                    <th>主任技術者</th>
                    <th>出力制御</th>
                    <th>その他<br>(事故等)</th>
                    <th class="th-end">
                      備考
                    </th>
                  </tr>
                  <tr class="generation-slot">
                    <td>2022-06-01</td>
                    <td class="td-empty">
                      <div class="empty" />
                    </td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td class="td-empty">
                      <div class="empty" />
                    </td>
                  </tr>
                </tbody>
              </table>
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
    return {};
  }
};
</script>

<style scoped lang="scss">
th {
  width: 111px;
  background-color: #e8e8e8;
  text-align-last: center;
  font-family: 'Noto Sans JP Medium';
  font-size: 18px;
  letter-spacing: 1.8px;
  line-height: 26px;
  border: 1px solid #d1d1d1;
  vertical-align: middle;
}

.th-first {
  width: 173px;
}

.th-end {
  width: 293px;
}

.td-empty {
  padding: 12px 7px !important;

  .empty{
    height: 43px;
    background-color: #F4F4F4;
    border-radius: 5px;
  }
}

td {
  background: #fff;
  text-align-last: center;
  font-family: 'Noto Sans JP Medium';
  font-size: 18px;
  letter-spacing: 1.8px;
  line-height: 26px;
  border: 1px solid #d1d1d1;
  vertical-align: middle;
}

.mt-35 {
  margin-top: 35px;
}

.font-noto-bold {
  font-family: 'Noto Sans JP Bold' !important;
}

.generation-data {
  margin-top: 160px;
  margin-right: 50px;
  margin-left: 555px;
  max-width: 1396px;

  .generation {
    background-color: #f7f7f7;
  }
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
  margin-right: 50px;

  ul {
    margin: 50px 0 0 0;
    padding: 0;
    height: 100%;

    li {
      background: #fff;
      font-family: 'Noto Sans JP Medium';
      display: inline-block;

      button {
        background: #fff;
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
  margin-left: 28px;
  margin-right: 30px;
  margin-bottom: 35px;

  .title-table {
    font-family: 'Noto Sans JP Bold';
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 29px;
    margin-bottom: 12px;
    margin-top: 33px;
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

  .generation-slot {
    td {
      padding: 20px 28px;
    }
  }
}

.box-btn {
  margin: 72px 0;
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
  }
}
</style>
