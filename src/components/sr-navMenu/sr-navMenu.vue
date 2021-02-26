<template>
  <!-- hidden-md-and-down -->
  <div class="menu">
    <div class="left">
      <div v-if="showTitle">
        <img class="menu-logo">
      </div>
      <div
        class="menu-title"
        v-if="showTitle"
      >{{title}}</div>
    </div>
    <div class="right">
      <a-menu
        v-model="current"
        mode="horizontal"
        theme="light"
      >
        <template v-for="(item) in mlist">
          <a-menu-item
            :key="item.key"
            v-if="item.subs.length === 0"
            @click="menuClick"
          >
            {{item.name}}
          </a-menu-item>
          <a-sub-menu
            :key="item.key"
            v-else
          >
            <span slot="title">
              {{item.name}}
            </span>
            <a-menu-item
              v-for="(subItem) in item.subs"
              :key="subItem.key"
              @click="menuClick"
            >
              {{subItem.name}}
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { menuList } from '../../config/data.config'
export default {
  name: 'srNavMenu',
  components: {},
  props: {
    showTitle: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '中国航天科技集团商密网'
    }
  },
  data () {
    return {
      current: [],
      mlist: [],
    }
  },
  mounted () {
    this.mlist = menuList
  },
  methods: {
    menuClick (e) {
      alert(e.key);
    }
  }
}

</script>
<style lang='scss'>
@import "./sr-navMenu.scss";
</style>
