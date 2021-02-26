<template>
  <div
    class="news-main"
    :style="{'width':__getModuleWidth(width)+'px','height':__getModuleHeight(height)+'px'}"
  >
    {{data.contentname}},当前模块尺寸{{__getModuleWidth(width)}} * {{__getModuleHeight(height)}}
  </div>
</template>

<script>
import commonMixins from '@/mixins/commonMixins'
import { getNewsData } from '@/api/fontendApi'
export default {
  components: {},
  mixins: [commonMixins],
  props: {
    //模块数据
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    //模块宽度
    width: {
      type: String,
      default: "1"
    },
    //模块高度
    height: {
      type: String,
      default: "1"
    }
  },
  data () {
    return {
      //四创新闻数据
      newsData: null,
      //新闻栏目id
      subjectId: '',
      //新闻请求条数
      pageSize: '10'
    }
  },
  computed: {
  },
  created () {
    // this.requestNewsData()
  },
  mounted () {
  },
  methods: {
    /**
     * 请求四创新闻数据
     */
    async requestNewsData () {
      const responseData = await getNewsData(this.subjectId, this.pageSize);
      this.$logs('新闻返回数据:', responseData)
    }
  }
}

</script>
<style lang='less'>
@import "./news.less";
@import "../../../assets/css/common.less";
</style>
