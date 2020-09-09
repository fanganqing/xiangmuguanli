<template>
  <div class="appp">
    <div class="app-11">
      <div class="div-00">角色</div>
      <hr />
      <div class="div-11">
        <div class="div-1x">
          <div class="div_name">
            <span>姓名：</span>
            <el-input placeholder="请输入内容" style="width:200px" v-model="input" clearable></el-input>
          </div>
          <div class="div_php">
            <span>电话号：</span>
            <el-input placeholder="请输入内容" style="width:200px" v-model="inputp" clearable></el-input>
          </div>
          <div class="div_gsname">
            <span>公司名称：</span>
            <el-select v-model="valuese" placeholder="请选择公司">
              <el-option
                v-for="(item,index) in options"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="div_jsname">
            <span>角色：</span>
            <el-select v-model="values" placeholder="请选择角色">
              <el-option
                v-for="item in optionsa"
                :key="item.label"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="div_sex">
            <span>性别：</span>
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </div>
          <div class="div_kg">
            <span>是否启用：</span>
            <el-switch v-model="valueas" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
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
      input: "",
      inputp: "",
      radio: "1",
      values: "",
      valuese: "",
      valueas: true,
      options: [
        {
          value: "某某子公司1",
          label: "某某子公司"
        },
        {
          value: "某某子公司2",
          label: "某某子公司"
        },
        {
          value: "某某子公司3",
          label: "某某子公司"
        }
      ],
      optionsa: [
        {
          value: "填报人",
          label: "填报人"
        },
        {
          value: "审核人",
          label: "审核人"
        },
        {
          value: "领导",
          label: "领导"
        }
      ],
      value: ""
    };
  },

  methods: {
    add() {
      if (
        this.input != "" &&
        this.inputp != "" &&
        this.values != "" &&
        this.valuese != ""
      ) {
        let sz = {
          phone: this.inputp,
          name: this.input,
          address: this.values,
          sex: this.radio == 1 ? "男" : "女",
          gsname: this.valuese
        };
        // console.log(sz);
        this.$router.push({
          name: "role",
          params: { items: sz }
        });
      } else {
        alert(3);
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