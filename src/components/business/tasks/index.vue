<template>
  <div
    class="task-main"
    :style="{'width':__getModuleWidth(width)+'px','height':__getModuleHeight(height)+'px'}"
  >
    {{data.contentname}},当前模块尺寸{{__getModuleWidth(width)}} * {{__getModuleHeight(height)}}
  </div>
</template>

<script>
import commonMixins from '@/mixins/commonMixins'
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
    }
  },
  mounted () {
  },
  computed: {

  },
  methods: {

  }
}

</script>
<style lang='less'>
@import "./tasks.less";
@import "../../../assets/css/common.less";
</style>
