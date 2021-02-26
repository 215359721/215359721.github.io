<!-- 
  每个单独模块盒子，内容可有多个tab切换 padding:10
  data:每个盒子内容对象，包括当前盒子坐标、盒子宽高、content：数组，包含1个或多个功能栏目
-->
<template>
  <div
    class="box-main"
    :style="initLayout"
  >
    <div class="box-head">
      <a-card
        :tab-list="initTitleData"
        :active-tab-key="nowTitleKey"
        :bordered="false"
        class="tabs-head"
        :class="'tabs-head-' + theCurThem_$"
        @tabChange="key => onTabChange(key, 'nowTitleKey')"
      >
        <a
          slot="tabBarExtraContent"
          href="#"
        >更多>></a>
      </a-card>
    </div>
    <div class="box-content">
      <div v-if="includeNews(nowTitleKey,'news')">
        <news
          :data="initContetnData(nowTitleKey)"
          :width="data.width"
          :height="data.height"
        />
      </div>
      <div v-else-if="nowTitleKey === 'app'">
        <apps
          :data="initContetnData(nowTitleKey)"
          :width="data.width"
          :height="data.height"
        />
      </div>
      <div v-else-if="nowTitleKey === 'task'">
        <tasks
          :data="initContetnData(nowTitleKey)"
          :width="data.width"
          :height="data.height"
        />
      </div>
      <div v-else-if="nowTitleKey === 'schedule'">
        <schedule
          :data="initContetnData(nowTitleKey)"
          :width="Number(data.width)"
          :height="Number(data.height)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import commonMixins from '@/mixins/commonMixins'
import apps from '@/components/business/apps/index'
import news from '@/components/business/news/index'
import tasks from '@/components/business/tasks/index'
import schedule from '@/components/business/schedule/index'
export default {
  components: {
    apps,
    news,
    tasks,
    schedule
  },
  mixins: [commonMixins],
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          width: 1,
          height: 1,
          x_cor: 0,
          y_cor: 0
        }
      }
    }
  },
  data () {
    return {
      //模块栏目集合
      content: [],
      //当前active的模块-key
      nowTitleKey: '',
    }
  },
  computed: {
    initLayout () {
      let layoutStyle = {
        'width': Number(this.data.width) * this.eachPx_$ + `px`,
        'height': Number(this.data.height) * this.eachPx_$ + `px`,
        'transform': `translate3d(${Number(this.data.x_cor) * this.eachPx_$}px,${Number(this.data.y_cor) * this.eachPx_$}px,0px)`
      }
      return layoutStyle
    },
    initTitleData () {
      let array = []
      if (this.data && this.data.content.length) {
        this.data.content.forEach((element) => {
          array.push({
            key: element.contentlabel,
            tab: element.contentname,
          })
        });
      }
      return array
    },
    initContetnData () {
      let result = {}
      return (str) => {
        if (this.data && this.data.content.length) {
          this.data.content.forEach((element) => {
            if (element.contentlabel === str) {
              result = element
            }
          });
        }
        return result
      }
    },
    includeNews () {
      return (a, b) => {
        return this.$isInclude(a, b)
      }
    }
  },
  created () {
    if (this.data && this.data.content.length) {
      this.nowTitleKey = this.data.content[0].contentlabel;
    }
    this.content = this.data.content
  },
  mounted () {
  },
  methods: {
    onTabChange (key, type) {
      this[type] = key;
    },
  }
}

</script>
<style lang='less'>
@import "../../assets/css/common.less";
@import "./sr-box.less";
</style>
