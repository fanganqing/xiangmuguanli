<template>
  <div class="app">
    <div class="app-1">
      <div class="div-0">
        <el-input v-model="input" style="width:220px" placeholder="模糊搜索"></el-input>
        <el-button style="margin-left: 10px;" type="primary">搜索</el-button>
        <el-button>重置</el-button>
      </div>
      <hr />
      <div class="div-1">
        <el-button style="margin-left: 10px;margin-bottom: 15px;" type="primary">新增</el-button>
        <el-button style="margin-bottom: 15px;" type="danger" @click="Alldelete">批量删除</el-button>
        <el-button>导出</el-button>
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

          <el-table-column align="center" prop="teacherName" label="teacherName" width="120"></el-table-column>
          <el-table-column
            align="center"
            prop="teacherPosition"
            label="teacherPosition"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column align="center" prop="id" label="id" width="120"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [],
      multipleSelection: []
    };
  },

  methods: {
    rowClass() {
      return "text-align: center;";
    }
  },
  created() {
    this.axios
      .get("http://139.9.169.87:8081/examsystem/getAllTeacherNoPage")
      .then(res => {
        const data = res.data;
        console.log(data);
        this.tableData = data.rows;
      });
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