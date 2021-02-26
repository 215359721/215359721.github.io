<template>
  <el-aside :width="width + 'px'">
    <slot />
  </el-aside>
</template>

<script>
import { Aside } from 'element-ui'
export default {
  name: 'srAside',
  props: {
    //边栏宽度
    width: {
      type: String || Number,
      default: 300
    }
  },
  components: {
    [Aside.name]: Aside
  },
  data () {
    return {
    }
  }
}

</script>
<style lang='scss'>
@import url("sr-aside.scss");
</style>
