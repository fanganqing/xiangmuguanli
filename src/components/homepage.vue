<template>
  <div style="display: flex;">
    <div class="homes">
      <!-- <p>{{aaa}}</p>
      <button @click="ddd()">aaa</button>-->
      <p class="tti">早上好，尊敬的超级管理员</p>
      <div class="head_1">
        <div class="asd" v-for="item in heads" :key="item.index">
          <div class="head_left" :style="item.style1">
            <i id="icons" class="el-icon-s-order"></i>
          </div>
          <div class="head_zhong">
            <div class="z_div">
              <span class="spans">{{item.name}}</span>
              <div class="font_x" :style="item.style1">{{item.names}}</div>
            </div>
            <div class="z_div1">{{item.num}}</div>
          </div>
        </div>
      </div>
      <div class="tab_div">
        <div class="tab_div1">
          <p class="tit_p">待处理项目</p>
          <el-table :show-header="false" :data="tableData" style="width: 100%;">
            <el-table-column prop="dome" label width="115"></el-table-column>
            <el-table-column prop="name" width="115"></el-table-column>
            <el-table-column prop="state" width="115"></el-table-column>
          </el-table>
        </div>
        <div class="tab_div1">
          <p class="tit_p">项目公告</p>
          <el-table :show-header="false" :data="tableData" style="width: 100%;">
            <el-table-column prop="name" label width="175"></el-table-column>
            <el-table-column prop="state" width="175"></el-table-column>
          </el-table>
        </div>
        <div class="tab_div1">
          <p class="tit_p">项目通知</p>
          <el-table :show-header="false" :data="tableData" style="width: 100%;">
            <el-table-column prop="name" label width="175"></el-table-column>
            <el-table-column prop="state" width="175"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="food">
        <div class="tit_p1">
          <span>项目上报统计</span>
          <span style="margin-left: 40%;">项目总投资</span>
        </div>
        <div class="food_1">
          <broken></broken>
          <!-- <p>{{times}}</p>
          <button @click="sj">sss</button>-->
        </div>
        <div class="food_1">
          <columnar></columnar>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import broken from "../echarts/broken";
import columnar from "../echarts/columnar";

export default {
  components: {
    broken,
    columnar
  },
  methods: {
    sj() {
      this.timer = setInterval(() => {
        this.times--;
        if (this.times === 0) {
          this.$router.push({
            path: "/"
          });
        }
      }, 1000);
    },
    ddd() {
      this.timer = setInterval(() => {
        this.aaa--;
      }, 1000);
    }
  },
  data() {
    return {
      aaa: "100",
      times: 5,
      tableData: [
        {
          dome: "某某某项目",
          name: "子公司一",
          state: "审核"
        },
        {
          dome: "某某某项目",
          name: "子公司二",
          state: "审核"
        },
        {
          dome: "某某某项目",
          name: "子公司三",
          state: "验收"
        },
        {
          dome: "某某某项目",
          name: "子公司四",
          state: "审核"
        },
        {
          dome: "某某某项目",
          name: "子公司五",
          state: "验收"
        }
      ],
      heads: [
        {
          style1: {
            background: " #5acfca"
          },
          name: "项目总填报数",
          names: "总",
          num: "500"
        },
        {
          style1: {
            background: "#FF9800"
          },
          name: "已完成项目",
          names: "完",
          num: "300"
        },
        {
          style1: {
            background: "#2DA9FA"
          },
          name: "项目总投资",
          names: "投",
          num: "70,000,000"
        },
        {
          style1: {
            background: " #5acfca"
          },
          name: "项目累计投资",
          names: "累",
          num: "30,000,000"
        },
        {
          style1: {
            background: "#FF9800"
          },
          name: "项目下单资金",
          names: "下",
          num: "15,000,000"
        }
      ]
    };
  }
};
</script>

<style>
.food_1 {
  width: 45%;

  float: left;
}
.el-table__body,
.el-table__footer,
.el-table__header {
  table-layout: fixed;
  border-collapse: separate;
  width: 100%;
}
.el-table__body,
.el-table__footer,
.el-table__header {
  table-layout: fixed;
  border-collapse: separate;
  width: 100%;
}
.food {
  width: 100%;
  /* height: 300px; */
  /* border: 1px solid firebrick; */
}
.tit_p1 {
  color: #2dbafc;
  background: #eef7fe;
  width: 97%;
  height: 42px;
  font-size: 15px;
  line-height: 41px;
  text-indent: 9px;
  margin: 0 auto;
  margin-top: 20px;
}
.tit_p {
  color: #2dbafc;
  background: #eef7fe;
  width: 100%;
  height: 42px;
  font-size: 15px;
  line-height: 41px;
  text-indent: 9px;
}
.tab_div1 {
  float: left;
  margin-left: 18px;
}
.tab_div {
  /* border: 1px solid aqua; */
  display: flex;
}
.el-table__footer-wrapper,
.el-table__header-wrapper {
  overflow: hidden;
  /* height: 0; */
}
.el-table .cell:nth-child(2) {
  text-align: center;
}
/* .el-table--enable-row-transition .el-table__body td {
  transition: background-color 0.25s ease;
  text-align: right;
  /* margin-right: 198px; */
/* display: inline-block; */

.font_x {
  width: 20px;

  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  float: right;
  margin-top: 12px;
  color: white;
}
.asd:nth-child(1) {
  margin-left: -183px;
}
.spans {
  color: #666666;
  font-size: 14px;
  line-height: 46px;
}
.z_div1 {
  width: 100%;
  height: 49%;
  text-align: center;
  color: #5acfca;
  font-size: 22px;
  line-height: 37px;
}
.z_div {
  border-bottom: 1px solid #e4e4e4;
  width: 100%;
  height: 50%;
}
.head_zhong {
  width: 71%;
  height: 91%;

  float: left;
  margin-left: 11px;
  margin-top: 3px;
}
.head_left {
  width: 40px;
  height: 100%;
  float: left;
}
#icons {
  text-align: center;
  display: block;
  color: white;
  font-size: 26px;
  padding-top: 24px;
}
.asd {
  width: 195px;
  float: left;
  border: 1px solid #e4e4e4;
  margin-left: 22px;
  height: 80px;
  border-radius: 5px;
  margin-top: 52px;
}
.head_1 {
  width: 100%;
  height: 160px;
}
.tti {
  color: #2da9fa;
  float: left;
  margin-left: 39px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
}
.homes {
  width: 97%;
  /* height: 400px; */
  /* border: 1px solid darkblue; */
  background: white;
  margin: 10px auto;
  border-radius: 10px;
}
</style>