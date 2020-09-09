import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import homepage from '../components/homepage.vue'
import index from '../components/index.vue'
import log from '../components/system/log.vue'
import role from '../components/system/role.vue'
import permissions from '../components/system/permissions.vue'
import enterprise from '../components/system/enterprise.vue'
import enterprisesel from '../components/system/enterprisesel.vue'
import enterpriseadd from '../components/system/enterpriseadd.vue'
import enterpriseupd from '../components/system/enterpriseupd.vue'
import company from '../components/maintenance/company.vue'
import department from '../components/maintenance/department.vue'
import support from '../components/maintenance/support.vue'
import director from '../components/maintenance/director.vue'
import aaa from '../components/maintenance/aaa.vue'
import bb from '../components/maintenance/bb.vue'
import roleadd from '../components/system/roleadd.vue'
import inform from '../components/company/inform.vue'
import reference from '../components/company/reference.vue'
import project from '../components/company/project.vue'
import projectadd from '../components/company/projectadd.vue'
import capital from '../components/projectprovided/capital.vue'
import honor from '../components/projectprovided/honor.vue'
import science from '../components/projectprovided/science.vue'
import money from '../components/schedule/money.vue'
import keji from '../components/schedule/keji.vue'
import moneys from '../components/acceptance/moneys.vue'
import kejis from '../components/acceptance/kejis.vue'
import xmfiles from '../components/xmfiles/xmfiles.vue'
import audit from '../components/xmfiles/audit.vue'
import projectoverview from '../components/projectoverview/projectoverview.vue'

// import broken from '../echarts/broken.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'homepage',
        component: homepage
      },
      {
        path: 'log',
        component: log,
        meta: { title: '操作日志' }
      },
      {
        path: 'role',
        name: 'role',
        component: role,
        meta: { title: '角色管理' }
      },
      {
        path: 'roleadd',
        component: roleadd,
        meta: { title: '角色管理add' }
      },
      {
        path: 'permissions',
        component: permissions,
        meta: { title: '权限管理' }
      },
      {
        path: 'enterprise',
        name: 'enterprise',
        component: enterprise,
        meta: { title: '企业管理' }
      },
      {
        path: 'enterprisesel',
        name: 'enterprisesel',
        component: enterprisesel,
        meta: { title: '企业管理sel' }
      },
      {
        path: 'enterpriseupd',
        name: 'enterpriseupd',
        component: enterpriseupd,
        meta: { title: '企业管理upd' }
      },
      {
        path: 'enterpriseadd',
        name: 'enterpriseadd',
        component: enterpriseadd,
        meta: { title: '企业管理ad' }
      },
      //基础维护
      {
        path: 'company',
        component: company,
        meta: { title: '公司维护' }
      },
      {
        path: 'department',
        component: department,
        meta: { title: '科室维护' }
      },
      {
        path: 'support',
        component: support,
        meta: { title: '支持维护' }
      },
      {
        path: 'director',
        component: director,
        meta: { title: '主管部门' }
      },
      //公告发布
      {
        path: 'inform',
        component: inform,

      },
      {
        path: 'project',
        component: project,

      },
      {
        path: 'projectadd',
        component: projectadd,

      },
      {
        path: 'reference',
        component: reference,

      },
      //项目填报
      {
        path: 'capital',
        component: capital,
      },
      {
        path: 'honor',
        component: honor
      },
      {
        path: 'science',
        component: science,
      },
      //进度管理
      {
        path: 'money',
        component: money,
      },
      {
        path: 'keji',
        component: keji
      },
      //验收管理
      {
        path: 'moneys',
        component: moneys,
      },
      {
        path: 'kejis',
        component: kejis
      },
      //项目档案
      {
        path: 'audit',
        component: audit,
      },
      {
        path: 'xmfiles',
        component: xmfiles
      },
      //项目总览
      {
        path: 'projectoverview',
        component: projectoverview,
      },
      {
        path: '/aaa',
        name: 'aaa',
        component: aaa
      },
      {
        path: '/bb',
        name: 'bb',
        component: bb
      },
      {
        path: '/Home',
        redirect: '/Home/homepage'
      }]
  },

  {
    path: '/',
    name: 'login',
    component: login
  },

  {
    path: '/index',
    name: 'index',
    component: index
  },
  // {
  //   path: '/broken',
  //   name: 'broken',
  //   component: broken
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


export default router
