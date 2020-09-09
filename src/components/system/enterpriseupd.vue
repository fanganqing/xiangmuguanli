<template>
  <div class="appp">
    <div class="app-11">
      <div class="div-00">角色</div>
      <hr />
      <div class="div-11">
        <div class="div-1x">
          <div class="div_name">
            <span>姓名：</span>
            <el-input placeholder="请输入内容" style="width:200px" v-model="faq.name" clearable></el-input>
          </div>
          <div class="div_php">
            <span>地址：</span>
            <el-input placeholder="请输入内容" style="width:200px" v-model="faq.address" clearable></el-input>
          </div>
          <div class="div_php" style="margin-top: 21px">
            <span>企业名称：</span>
            <el-input placeholder="请输入内容" style="width:200px" v-model="faq.date" clearable></el-input>
          </div>

          <div class="bat">
            <el-button style="margin-left: 10px;" type="primary" size="small" @click="add()">保存</el-button>
            <el-button style="margin-bottom: 15px;" size="small" @click="$router.go(-1)">返回</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   input: "",
      //   inputp: "",
      //   inputps: "",
      faq: []
    };
  },
  activated() {
    this.faq = this.$route.params.select;
    this.find = this.$route.params.index;
  },
  methods: {
    add() {
      if (
        this.faq.name != "" &&
        this.faq.date != "" &&
        this.faq.address != ""
      ) {
        this.$router.push({
          name: "enterprise",
          params: {
            cc: this.faq,
            xia: this.find
          }
        });
      } else {
        this.$message("请填写完整！！！");
      }
    }
  }
};
</script>
<style scoped>
.bat {
  width: 200px;

  height: 33px;
  margin: 0 auto;
  text-align: center;
  margin-top: 300px;
}
.div_kg {
  margin-right: 37px;
  width: 40%;

  float: right;
  margin-top: 31px;
  text-align: left;
}
.div_sex {
  width: 40%;

  float: left;
  margin-top: 30px;
  text-align: left;
  padding-left: 63px;
}
.div_name {
  width: 40%;

  float: left;
  margin-top: 30px;
  text-align: right;
}
.div_php {
  width: 40%;

  margin-top: 91px;
  text-align: right;
}
.div_gsname {
  width: 40%;
  float: right;

  margin-right: 55px;
  margin-top: -103px;
  text-align: right;
}
.div_jsname {
  width: 40%;
  margin-right: 55px;
  float: right;

  text-align: right;
  margin-left: 27px;
  margin-top: -42px;
}
span {
  font-size: 15px;
  color: #666;
}
.div-1x {
  width: 69%;
  height: 480px;
  margin: 0 auto;
  border: 1px solid white;
  margin-top: 20px;
}
.app-11 {
  width: 97%;
  /* height: 400px; */
  /* border: 1px solid darkblue; */
  background: white;
  margin: 10px auto;
  border-radius: 10px;
}
.appp {
  display: flex;
}
.div-00 {
  margin: 15px;
  font-weight: bold;
}
.div-11 {
  width: 100%;
  height: 520px;
}
</style>