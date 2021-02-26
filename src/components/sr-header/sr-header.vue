<template>
  <el-header :height="height + 'px'">
    <div class="header">
      <!-- 最上方功能区域 -->
      <div class="top-option">
        <div
          class="top-main"
          :class="'top-main-' + theCurThem_$"
        >
          <div
            class="option-left layout-box"
            v-show="showModelChange"
          >
            <span
              class="layout-each"
              data-id="123123"
              data-sfzs="1"
            ><span
                class="layout-text now-Layout"
                :class="'now-Layout-' + theCurThem_$"
              >个人门户</span></span> |
            <span
              class="layout-each"
              data-id="123123"
              data-sfzs="1"
            ><span class="layout-text">内容门户</span></span> |
            <span
              class="layout-each"
              data-id="123123"
              data-sfzs="1"
            ><span class="layout-text">集团门户</span></span>
          </div>
          <div class="option-right">
            <div class="right-item-1">
              <span>欢迎访问，</span>
              <span
                id="userInfoName"
                :class="'right-text-' + theCurThem_$"
              >杨涛</span>
            </div>
            <div class="right-item-2">
              <a-icon type="skin" />
              <el-dropdown
                :hide-on-click="false"
                @command="exChangeThem"
              >
                <span
                  class="el-dropdown-link icon-text"
                  :class="'right-text-' + theCurThem_$"
                >
                  换肤
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="default">默认</el-dropdown-item>
                  <el-dropdown-item command="light">航天蓝</el-dropdown-item>
                  <el-dropdown-item command="dark">优雅黑</el-dropdown-item>
                  <el-dropdown-item command="red">中国红</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span
                id="nowThemName"
                class="icon-text"
                :class="'right-text-' + theCurThem_$"
              >[默认]</span>
            </div>
            <div
              class="right-item-3"
              @click="quitOption"
            >
              <a-icon type="poweroff" />
              <span
                class="icon-text"
                :class="'right-text-' + theCurThem_$"
              >退出</span>
            </div>
          </div>
        </div>
      </div>
      <div class="empty">
        <div class="top-content">
          <div
            class="top-logo"
            :class="'top-logo-' + theCurThem_$"
            alt="中国航天科技集团有限公司"
          ></div>
          <div class="top-search">
            <el-input
              class="head-input"
              :class="'head-input-' + theCurThem_$"
              placeholder="请输入关键字"
              suffix-icon="el-icon-search"
              v-model="searchInput"
            >
            </el-input>
          </div>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
import { Message, MessageBox } from 'element-ui'
import commonMixins from '@/mixins/commonMixins'
export default {
  components: {
    [MessageBox.name]: MessageBox,
    [Message.name]: Message,
  },
  mixins: [commonMixins],
  props: {
    //顶栏高度
    height: {
      type: Number,
      default: 130
    },
    //是否开启模板切换
    showModelChange: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      //搜索输入框
      searchInput: ''
    }
  },
  created () {

  },
  methods: {
    exChangeThem (name) {
      this.$ls.set('them', name)
      this.$bus.$emit('themChanged', name)
    },
    quitOption () {
      MessageBox.confirm('确定退出?', '退出', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        Message({
          type: 'success',
          message: '退出成功!'
        });
      }).catch(() => { });
    }
  }
}

</script>
<style lang='less'>
@import "../../assets/css/common.less";
@import "./sr-header.less";
</style>
