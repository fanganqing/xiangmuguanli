<template>
  <div class="hello">
    <ul>
      <li v-for="(item, index) in proData" :key="item">
        <label for>
          <input type="checkbox" :value="index" v-model="selectArr" />
        </label>
        {{item.name}}
      </li>：
    </ul>
    <button type @click="del">删除</button>
    {{selectArr}}
    <label>
      <input type="checkbox" class="checkbox" @click="selectAll" />全选
    </label>
  </div>
</template>
<script>
var proData = [
  {
    name: "j1ax"
  },
  {
    name: "j2ax"
  },
  {
    name: "j3ax"
  },
  {
    name: "j4ax"
  }
];
export default {
  name: "hello",
  data() {
    return {
      proData: proData,
      selectArr: []
    };
  },
  //   created() {
  //     this.$http.get("/api/home").then(function(response) {
  //       response = response.body;
  //       this.proData = response.data;
  //     });
  //   },
  methods: {
    del() {
      let arr = [];
      var len = this.proData.length;
      for (var i = 0; i < len; i++) {
        if (this.selectArr.indexOf(i) >= 0) {
          console.log(this.selectArr.indexOf(i));
        } else {
          arr.push(proData[i]);
        }
      }
      this.proData = arr;
      this.selectArr = [];
    },
    selectAll(event) {
      var _this = this;
      console.log(event.currentTarget);
      if (!event.currentTarget.checked) {
        this.selectArr = [];
      } else {
        //实现全选
        _this.selectArr = [];
        _this.proData.forEach(function(item, i) {
          _this.selectArr.push(i);
        });
      }
    }
  }
};
</script>