<template>
  <div class="app">
    <div class="app-1">
      <div class="div-0">企业详情</div>
      <hr />
      <div class="div-1">
        <table border="1" cellpadding="0" cellspacing="0">
          <tr>
            <td>日期</td>
            <td>{{sss.date}}</td>
          </tr>

          <tr>
            <td>姓名</td>
            <td>{{sss.name}}</td>
          </tr>
          <tr>
            <td>地址</td>
            <td>{{sss.address}}</td>
          </tr>
        </table>
        <el-button
          style="margin-left: 47.5%; margin-top: 200px;"
          size="small"
          @click="$router.go(-1)"
        >返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sss: []
    };
  },

  mounted() {},
  activated() {
    this.sss = this.$route.params.select;
  }
};
</script>
<style scoped>
tr td:nth-child(1) {
  background: #eef7fe;
  color: #2db0fb;
}
table {
  border-width: 0px 0px 1px 1px;
  border-style: solid;
  border-color: #cbd3da;

  margin: 0 auto;
}
td {
  padding: 10px;
  border-width: 1px 1px 0px 0px;
  border-style: solid;
  border-color: #cbd3da;
  width: 198px;
  text-align: center;
  font-size: 15px;
  color: #666;
}

.app-1 {
  width: 97%;
  /* height: 400px; */
  /* border: 1px solid darkblue; */
  background: white;
  margin: 10px auto;
  border-radius: 10px;
}
.app {
  display: flex;
}
.div-0 {
  margin: 15px;
}
.div-1 {
  margin: 15px;
}
</style>