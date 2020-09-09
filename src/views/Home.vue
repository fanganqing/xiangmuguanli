<template>
  <div class="home">
    <div class="ul_ba">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#2F3A4F"
        text-color="#fff"
      >
        <el-menu-item>
          <span slot="title">项目平台管理</span>
        </el-menu-item>
        <router-link tag="div" to="/Home">
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">系统管理</span>
          </template>
          <router-link to="log" tag="div">
            <el-menu-item index="2-1">操作日志</el-menu-item>
          </router-link>
          <router-link to="role" tag="div">
            <el-menu-item index="2-2">角色管理</el-menu-item>
          </router-link>
          <router-link to="permissions" tag="div">
            <el-menu-item index="2-3">权限管理</el-menu-item>
          </router-link>
          <router-link to="enterprise" tag="div">
            <el-menu-item index="2-4">企业管理</el-menu-item>
          </router-link>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-operation"></i>
            <span slot="title">基础维护</span>
          </template>

          <router-link to="company" tag="div">
            <el-menu-item index="3-1">公司维护</el-menu-item>
          </router-link>
          <router-link to="department" tag="div">
            <el-menu-item index="3-2">科室维护</el-menu-item>
          </router-link>
          <router-link to="support" tag="div">
            <el-menu-item index="3-3">支持方式</el-menu-item>
          </router-link>
          <router-link to="director" tag="div">
            <el-menu-item index="3-4">主管部门</el-menu-item>
          </router-link>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-message-solid"></i>
            <span slot="title">公告发布</span>
          </template>
          <router-link to="project" tag="div">
            <el-menu-item index="4-1">项目发布</el-menu-item>
          </router-link>
          <router-link to="inform" tag="div">
            <el-menu-item index="3-2">通知发布</el-menu-item>
          </router-link>
          <router-link to="reference" tag="div">
            <el-menu-item index="4-3">参考材料</el-menu-item>
          </router-link>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-management"></i>
            <span slot="title">项目填报</span>
          </template>
          <router-link to="capital" tag="div">
            <el-menu-item index="5-1">资金类填报</el-menu-item>
          </router-link>
          <router-link to="honor" tag="div">
            <el-menu-item index="5-2">荣誉类填报</el-menu-item>
          </router-link>
          <router-link to="science" tag="div">
            <el-menu-item index="5-3">科技类填报</el-menu-item>
          </router-link>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-data-line"></i>
            <span slot="title">进度管理</span>
          </template>
          <router-link to="money" tag="div">
            <el-menu-item index="6-1">资金类进度</el-menu-item>
          </router-link>
          <router-link to="keji" tag="div">
            <el-menu-item index="6-2">科技类进度</el-menu-item>
          </router-link>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-s-claim"></i>
            <span slot="title">验收管理</span>
          </template>
          <router-link to="moneys" tag="div">
            <el-menu-item index="7-1">资金类验收</el-menu-item>
          </router-link>
          <router-link to="kejis" tag="div">
            <el-menu-item index="7-2">科技类验收</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span slot="title">项目档案</span>
          </template>
          <router-link to="xmfiles" tag="div">
            <el-menu-item index="8-1">项目文件</el-menu-item>
          </router-link>
          <router-link to="audit" tag="div">
            <el-menu-item index="8-2">审计报告</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-s-grid"></i>
            <span slot="title">项目总览</span>
          </template>
          <el-menu-item index="9-1">项目总览</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="heads">
      <i
        v-show="this.isCollapse==false"
        style="color:#fff;font-size: 23px;margin: 10px  15px;"
        :class="aaa"
        @click="aaas()"
      ></i>
      <i
        v-show="this.isCollapse"
        style="color:#fff;font-size: 23px;margin: 10px  15px;"
        :class="bbb"
        @click="aaas()"
      ></i>
      <i class="el-icon-s-home" style="color:#fff;font-size: 23px;margin: 10px  15px;"></i>
      <i class="el-icon-wallet" style="color:#fff;font-size: 23px;margin: 10px  15px;"></i>
      <i
        @click="$router.go(0)"
        class="el-icon-refresh-right"
        style="color:#fff;font-size: 23px;margin: 10px  15px;"
      ></i>
      <span class="times">{{ nowDate + ' ' + nowWeek + ' ' + nowTime }}</span>
    </div>
    <div class="aaa"></div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      aaa: "el-icon-s-fold",
      bbb: "el-icon-s-unfold",
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      nowWeek: "" // 当前星期
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    aaas() {
      this.isCollapse = !this.isCollapse;
    },
    currentTime() {
      setInterval(this.getDate, 500);
    },

    getDate: function() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let week = new Date().getDay();
      let hh = new Date().getHours();
      let sec = new Date().getSeconds();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      if (week == 1) {
        this.nowWeek = "星期一";
      } else if (week == 2) {
        this.nowWeek = "星期二";
      } else if (week == 3) {
        this.nowWeek = "星期三";
      } else if (week == 4) {
        this.nowWeek = "星期四";
      } else if (week == 5) {
        this.nowWeek = "星期五";
      } else if (week == 6) {
        this.nowWeek = "星期六";
      } else {
        this.nowWeek = "星期日";
      }
      _this.nowTime = hh + ":" + mf + ":" + sec;
      _this.nowDate = yy + "年" + mm + "月" + dd + "日";
    }
  },
  mounted() {
    this.currentTime();
  },
  // 销毁定时器
  beforeDestroy: function() {
    if (this.getDate) {
      // console.log("销毁定时器");
      clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.name != "/") {
      let token = sessionStorage.getItem("token");
      if (token == null) {
        next("/");
      } else if (token != null) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>
<style>
.home_2 {
  width: 100%;
  height: 400px;
}
.home_1 {
  width: 100%;
  height: 680px;

  margin: 0 auto;
  border-radius: 10px;
}
.home {
  width: 100%;

  background: #eef7fe;
}
.times {
  color: white;
  font-size: 14px;
  /* float: right; */
  margin-top: 14px;
  float: left;
    margin-left: 39%;
}
.heads {
  height: 47px;
  background: #2da9fa;
  /* width: 100%; */
  display: flex;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  float: left;
}
.el-menu--collapse {
  width: 64px;
  float: left;
}
</style>
