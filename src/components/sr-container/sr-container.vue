<template>
  <el-container :direction="direction">
    <slot />
  </el-container>
</template>

<script>
import { Container } from 'element-ui'
export default {
  name: 'srContainer',
  props: {
    //子元素的排列方向( vertical-垂直排列[默认] | horizontal-水平排列 )
    direction: {
      type: String,
      default: 'vertical'
    }
  },
  components: {
    [Container.name]: Container
  },
  data () {
    return {
    }
  }
}

</script>
<style lang='less'>
@import "./sr-container.less";
</style>
