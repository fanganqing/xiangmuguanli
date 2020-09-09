<template>
  <div class="app">
    <div class="app-1">
      <div class="div-0">
        <div>
          <el-input style="width: 23%;margin: 14px;" v-model="inp" placeholder="请输入内容"></el-input>
          <el-input style="width: 23%;margin: 14px;" v-model="inp1" placeholder="请输入内容"></el-input>
          <el-button type="primary" @click="adds">保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      id: 19,
      inp: "",
      inp1: ""
    };
  },
  methods: {
    adds() {
      if (this.inp != "" && this.inp1 != "") {
        let data = qs.stringify({
          professionalName: this.inp,
          professionalDesc: this.inp1
        });
        this.axios
          .post("http://139.9.169.87:8081/examsystem/addCourse", data, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })

          .then(res => {
            console.log(this.inp + "qweqweqwe" + this.inp1);
            console.log(res.data.msg);
            this.$router.push({
              path: "/Home/director"
            });
          });
      } else {
        this.$message("不能为空!!!!!");
      }
    }
  }
};
</script>
<style scoped>
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