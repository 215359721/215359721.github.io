<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <!-- logo部分 -->
      <div class="logo">
        <div class="logo-img">
          <adminLogo
            width="60"
            height="60"
          />
        </div>
        <div class="logo-text">中国航天</div>
      </div>
      <!-- 内容部分 -->
      <div class="content">
        <div class="content-info">
          <div class="content-info-each">您好！phpcms [超级管理员]</div>
          <div class="content-info-each">[退出]</div>
          <div class="content-info-each">站点首页</div>
        </div>
        <!-- 顶部菜单 -->
        <div class="content-menu">
          <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['item']"
            @click="goMenu"
          >
            <a-menu-item key="item">
              栏目管理
            </a-menu-item>
            <a-menu-item key="layout">
              布局管理
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </a-layout-header>
    <a-layout>
      <!-- 侧边菜单 -->
      <a-layout-sider
        width="200"
        v-model="collapsed"
        collapsible
      >
        <a-menu
          theme="dark"
          mode="inline"
          :default-selected-keys="['item']"
          :default-open-keys="['admin']"
          @click="goMenu"
        >
          <a-sub-menu
            v-for="(item) in leftMenu"
            :key="item.key"
          >
            <span slot="title">
              <a-icon :type="item.icon" />
              <span>{{item.text}}</span>
            </span>
            <a-menu-item
              v-for="subItem in item.items"
              :key="subItem.item_key"
            >
              {{subItem.item_text}}
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout class="contentbox">
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          class="contentbox-breadcrumb"
        >
          <el-breadcrumb-item :to="{ path: '/' }">管理员设置</el-breadcrumb-item>
          <el-breadcrumb-item>{{nowItem?nowItem.item.$el.innerText:'栏目管理'}}</el-breadcrumb-item>
        </el-breadcrumb>
        <a-layout-content
          class="contentbox-info"
          :style="{height:getContentHei + 'px'}"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import adminLogo from '@/assets/image/admin/svg/logo.svg'
import { breadcrumb, breadcrumbItem } from 'element-ui'
export default {
  components: {
    adminLogo,
    [breadcrumb.name]: breadcrumb,
    [breadcrumbItem.name]: breadcrumbItem
  },
  data () {
    return {
      collapsed: false,
      //左侧菜单对象
      leftMenu: [
        {
          key: 'admin',
          icon: 'user',
          text: '管理员设置',
          items: [
            {
              item_key: 'item',
              item_text: '栏目管理'
            },
            {
              item_key: 'layout',
              item_text: '布局管理'
            },
            {
              item_key: 'menu',
              item_text: '菜单管理'
            }
          ]
        }
      ],
      //当前选中的子菜单
      nowItem: null,
    };
  },
  computed: {
    getContentHei () {
      return window.innerHeight - 180;
    }
  },
  created () {

  },
  methods: {
    goMenu (e) {
      this.$logs('e:', e)
      if (this.nowItem && this.nowItem.key && this.nowItem.key !== e.key) {
        this.$router.push('/admin-' + e.key)
      }
      this.nowItem = e
    },
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
