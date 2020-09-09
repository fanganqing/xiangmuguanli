<template>
  <div class="hello">
    <chart ref="chart1" :options="option" style="width:500px" :auto-resize="true"></chart>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      option: {}
    };
  },
  mounted() {
    this.option = {
      title: {
        text: "折线图堆叠"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          type: "line",
          stack: "总量",
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped></style>