<template>
  <div>
    <div class="headers">
      <p class="head_h1">项目管理平台</p>
    </div>
    <div class="bodys">
      <img class="aaaimg" src="/image/u70.png" alt />
      <div class="admins">
        <p class="ptadmin">平台登录</p>
        <el-input
          id="inputs"
          v-model="zhanghao"
          required
          style="font-size:12px;"
          placeholder="请输入账号"
          prefix-icon="el-icon-user"
        ></el-input>
        <el-input
          v-model="pwd"
          required
          style="margin-top:15px;font-size:12px;"
          placeholder="请输入登录密码"
          prefix-icon="el-icon-unlock"
        ></el-input>

        <el-button type="primary" @click="tol" style="width: 242px;margin: 27px;font-size:12px;">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhanghao: "",
      pwd: "",
      yzm: ""
    };
  },
  methods: {
    tol() {
      if (this.zhanghao != "" || this.pwd != "") {
        // sessionStorage.setItem("isLogin", "1");
        this.axios
          .post(
            "http://139.9.169.87:8081/examsystem/login?username=" +
              this.zhanghao +
              "&password=" +
              this.pwd
          )
          .then(res => {
            console.log(res.data.success);
            if (res.data.success == "true") {
              sessionStorage.setItem("token", res.data.data.token);
              this.$router.push({
                path: "/Home"
              });
            } else {
              this.$message("错磨皮");
            }
          })
          .catch(err => {
            this.$message("ss");
            console.log(err);
          });
      } else {
        this.$message("账号密码不能为空");
      }
    }
  }
};
</script>

<style scoped>
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 80%;
  margin-left: 29px;
  margin-top: 24px;
}
.dl {
  cursor: pointer;
  width: 80%;
  color: white;
  margin: 0 auto;
  text-align: center;
  height: 40px;
  line-height: 37px;
  margin-top: 32px;
  background: #2da9fa;
}
.el-input #inputs {
  width: 100px;
  border: none;
  outline: none !important;
  height: 31px;
  float: right;
  margin-right: 17px;
  margin-top: -4px;
}
.zhang {
  color: #666666;
  border-bottom: 1px solid #e4e4e4;
  width: 85%;
  margin: 15px auto;
  padding: 10px;
}
.ptadmin {
  color: #40b1fa;

  margin-left: 20px;
  margin-top: 15px;
}
.admins {
  width: 300px;
  height: 310px;
  background: white;
  float: right;
  margin-right: 100px;
  border: 1px solid #e3ebf1;
  box-shadow: 10px 1px 13px #e3ebf1;
  margin-top: 20px;
  border-radius: 10px;
}
.headers {
  background: #2da9fa;
  height: 80px;
  width: 100%;
}
.head_h1 {
  color: white;
  font-size: 27px;
  margin-left: 8%;
  padding-top: 20px;
}
.bodys {
  background: #eef7fe;
  width: 100%;
  height: 600px;
}
.aaaimg {
  width: 50%;
  margin-top: 39px;
  margin-left: 15px;
}
</style>