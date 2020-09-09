<template>
  <div class="app">
    <div class="app-1">
      <div class="div-0">
        <el-input v-model="input" style="width:220px;margin-left: 12px;" placeholder="模糊搜索"></el-input>
        <el-button style="margin-left: 10px;" type="primary">搜索</el-button>
        <el-button>重置</el-button>
      </div>
      <hr />
      <div class="div-1">
        <el-button style="margin-left: 10px;" type="primary" @click="add">新增</el-button>
        <el-button type="danger" @click="Alldelete">批量删除</el-button>
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
          <el-table-column align="center" prop="date" label="企业名称" width="120"></el-table-column>
          <el-table-column align="center" prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column align="center" prop="address" label="地址" show-overflow-tooltip></el-table-column>

          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="success" @click="sel(scope.row)">查看</el-button>
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
  name: "enterprise",
  data() {
    return {
      input: "",
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
          date: "AAAA企业",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "AAAasA企业",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "AA企业",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "AAA业",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "A企业",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "AAAaaA企业",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "AAAAvv企业",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      jies: [],
      indexs: ""
    };
  },
  mounted() {},
  created() {
    this.jies = this.$route.params.cc;
    this.indexs = this.$route.params.xia;
    this.tableData[this.indexs] = this.jies;
    this.axios
      .get("http://139.9.169.87:8081/examsystem/getProfessionalNoPage")
      .then(res => {
        const shuj = res.data;
        console.log(shuj);
      });
  },
  activated() {
    if (this.$route.params.items) {
      this.tableData.push(this.$route.params.items);
    }
  },
  methods: {
    add() {
      this.$router.push({
        path: "enterpriseadd"
      });
    },
    handleEdit(ind, vals) {
      this.$router.push({
        name: "enterpriseupd",
        params: { index: ind, select: vals }
      });
    },
    Alldelete() {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          for (let i = this.tableData.length; i > 0; i--) {
            for (let j = 0; j < this.multipleSelection.length; j++) {
              console.log(this.multipleSelection);
              if (this.tableData[i - 1] == this.multipleSelection[j]) {
                this.tableData.splice(i - 1, 1);
              }
            }
          }
          this.$message({
            message: "删除成功!"
          });
        })
        .catch(err => {
          this.$message({
            type: "error",
            message: err
          });
        });
      //this.tableData  原来的数组
      //this.multipleSelection  选择数据的数组
    },
    handleSelectionChange(val) {
      console.log("handleSelectionChange--", val);
      this.multipleSelection = val;
    },
    handleDelete(index) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            message: "删除成功!"
          });
        })
        .catch(err => {
          this.$message({
            type: "error",
            message: err
          });
        });
    },
    sel(val) {
      this.$router.push({
        name: "enterprisesel",
        params: { select: val }
      });
    },
    rowClass() {
      return "text-align: center;";
    }
  }
};
</script>
<style scoped>
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