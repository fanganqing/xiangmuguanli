<template>
  <div class="app">
    <div class="app-1">
      <div class="div-0">
        <el-select v-model="value" placeholder="请选择公司">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择公司">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择公司">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input v-model="inputs" style="width:220px;margin-left: 12px;" placeholder="模糊搜索"></el-input>
        <el-button style="margin-left: 10px;" type="primary">搜索</el-button>
        <el-button>重置</el-button>
      </div>
      <hr />
      <div class="div-1">
        <el-button style="margin-left: 10px;" type="primary" @click="add">新增</el-button>
        <el-button type="danger" @click="Alldelete()">批量删除</el-button>
        <el-button style="margin-bottom: 15px;">重置密码</el-button>
        <el-table
          border
          :cell-style="rowClass"
          :header-cell-style="{background:'#EEF7FE',color:'#2DA9FA'}"
          style="width: 100%"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="50" align="center"></el-table-column>
          <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>

          <el-table-column align="center" prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column align="center" prop="phone" label="电话号码" width="120"></el-table-column>
          <el-table-column align="center" prop="sex" label="性别" width="120"></el-table-column>
          <el-table-column align="center" prop="gsname" label="公司名称" width="120"></el-table-column>
          <el-table-column align="center" prop="address" label="角色" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="status" label="任务开关">
            <template slot-scope="scope">
              <el-switch
                class="switchStyle"
                v-model="scope.row.on"
                active-color="#7958b5"
                inactive-color="#e8e4f3"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "某某子公司"
        },
        {
          value: "选项2",
          label: "某某子公司"
        },
        {
          value: "选项3",
          label: "某某子公司"
        }
      ],
      value: "",
      tableData: [
        {
          phone: 1111138211,
          name: "王小虎",
          address: "超级管理员",
          sex: "男",
          gsname: "某某子公司"
        },
        {
          phone: 1111138211,
          name: "王小虎",
          address: "审核人",
          sex: "男",
          gsname: "某某子公司"
        },
        {
          phone: 1111138211,
          name: "王小虎",
          address: "领导",
          sex: "男",
          gsname: "某某子公司"
        },
        {
          phone: 1111138211,
          name: "王小虎",
          address: "填报人",
          sex: "男",
          gsname: "某某子公司"
        },
        {
          phone: 1111138211,
          name: "王小虎",
          address: "填报人",
          sex: "男",
          gsname: "某某子公司"
        },
        {
          phone: 1111138211,
          name: "王小虎",
          address: "填报人",
          sex: "男",
          gsname: "某某子公司"
        },
        {
          phone: 1111138211,
          name: "王小虎",
          address: "填报人",
          sex: "男",
          gsname: "某某子公司"
        }
      ],
      multipleSelection: [],
      inputs: ""
    };
  },
  mounted() {},
  activated() {
    if (this.$route.params.items) {
      this.tableData.push(this.$route.params.items);
    }
  },
  methods: {
    handleDelete(handleSelectionChange, i) {
      this.tableData.splice(i, 1);
      this.$message("删除成功！");
    },
    add() {
      this.$router.push({
        path: "roleadd"
      });
    },
    rowClass() {
      return "text-align: center;";
    },
    handleSelectionChange(val) {
      console.log("handleSelectionChange--", val);
      this.multipleSelection = val;
    },
    Alldelete() {
      //this.tableData  原来的数组
      //this.multipleSelection  选择数据的数组
      for (let i = this.tableData.length; i > 0; i--) {
        for (let j = 0; j < this.multipleSelection.length; j++) {
          console.log(this.multipleSelection);
          if (this.tableData[i - 1] == this.multipleSelection[j]) {
            this.tableData.splice(i - 1, 1);
          }
        }
      }
    }
  }
};
</script>
<style scoped>
.switchStyle .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
.switchStyle .el-switch__label--left {
  z-index: 9;
  left: 6px;
}
.switchStyle .el-switch__label--right {
  z-index: 9;
  left: -14px;
}
.switchStyle .el-switch__label.is-active {
  display: block;
}
.switchStyle.el-switch .el-switch__core,
.el-switch .el-switch__label {
  width: 50px !important;
}
.el-select {
  display: inline-block;
  position: relative;
  margin-left: 12px;
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