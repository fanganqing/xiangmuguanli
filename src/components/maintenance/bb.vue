<template>
  <div>
    <el-input style="width: 23%;margin: 14px;" v-model="ip" placeholder="请输入内容"></el-input>
    <el-input style="width: 23%;margin: 14px;" v-model="ip1" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="dianji">保存</el-button>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      aaa: 100,
      ip: this.$route.params.cc.professionalDesc,
      ip1: this.$route.params.cc.professionalName
    };
  },
  created() {},

  methods: {
    dianji() {
      if (this.ip != "" && ip1 != "") {
        let data = qs.stringify({
          id: this.$route.params.cc.id,
          professionalName: this.ip,
          professionalDesc: this.ip1
        });

        this.axios
          .post(
            "http://139.9.169.87:8081/examsystem/updateProfessional",
            data,
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(res => {
            console.log(this.inp);
            console.log(this.inp1);
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

<style>
</style>