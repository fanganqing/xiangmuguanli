  <template>
  <div class="app">
    <div class="app-1">
      <div class="div-0">
        <el-input
          v-model="searchValue"
          size="mini"
          clearable
          placeholder="请输入编号或城市"
          style="width:220px"
        ></el-input>
        <el-button type="primary" style="margin-left: 10px;" size="mini" @click="doFilter">搜索</el-button>
        <!-- <el-input v-model="input" style="width:220px" placeholder="模糊搜索"></el-input>
          <el-button style="margin-left: 10px;" type="primary">搜索</el-button>
        <el-button>重置</el-button>-->
      </div>
      <hr />
      <div class="div-1">
        <el-button style="margin-bottom: 15px;" @click="exportExcel()">导出</el-button>
        <el-table
          v-show="filterTableData==0"
          id="out-table"
          border
          :cell-style="rowClass"
          :header-cell-style="{background:'#EEF7FE',color:'#2DA9FA'}"
          style="width: 100%"
          ref="multipleTable"
          :data="resData"
          tooltip-effect="dark"
        >
          <!-- @selection-change="handleSelectionChange" -->
          <el-table-column type="selection" width="50" align="center"></el-table-column>
          <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
          <el-table-column label="日期" width="120" align="center">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column align="center" prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column align="center" prop="address" label="地址" show-overflow-tooltip></el-table-column>
        </el-table>
        <el-table
          v-show="filterTableData.length!=0"
          id="out-table"
          border
          :cell-style="rowClass"
          :header-cell-style="{background:'#EEF7FE',color:'#2DA9FA'}"
          style="width: 100%"
          ref="multipleTable"
          :data="filterTableData"
          tooltip-effect="dark"
        >
          <!-- @selection-change="handleSelectionChange" -->
          <el-table-column type="selection" width="50" align="center"></el-table-column>
          <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
          <el-table-column label="日期" width="120" align="center">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column align="center" prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column align="center" prop="address" label="地址" show-overflow-tooltip></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

  <script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  computed: {},
  data() {
    return {
      input: "",
      search: "",
      resData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "湖南岳阳"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      searchValue: "",
      tableData: [],
      currentPage: 1,
      pageSize: 8,
      totalItems: 0,
      filterTableData: [],
      flag: false,
      rowClass: ""
    };
  },

  methods: {
    exportExcel() {
      /* out-table关联导出的dom节点  */
      var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      /* get binary string as output */
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "表格.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },

    // 前端搜索功能需要区分是否检索,因为对应的字段的索引不同
    doFilter() {
      this.tableData = [];
      this.filterTableData = [];
      this.resData.filter(item => {
        if ("date" in item || "address" in item) {
          // 按编号或地区查询
          if (
            item.date.indexOf(this.searchValue.toUpperCase()) > -1 ||
            item.address.indexOf(this.searchValue) > -1
          ) {
            this.filterTableData.push(item);
            console.log(this.filterTableData);
          }
        }
      });

      // this.currentPage = 1;
      this.totalItems = this.filterTableData.length;
      // 渲染表格,根据值
      this.currentChangePage(this.filterTableData);
      // 页面初始化数据需要判断是否检索过
      this.flag = true;
    }
  },

  rowClass() {
    return "text-align: center;";
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