<template>
  <div
    class="ind-main"
    :class="'ind-main-' + theCurThem_$"
  >
    <sr-container>
      <sr-header />
      <sr-main />
      <sr-footer />
    </sr-container>
  </div>
</template>

<script>
import { srContainer, srHeader, srFooter, srMain } from '@/components/layout/default'
import commonMixins from '@/mixins/commonMixins'
export default {
  components: {
    srContainer,
    srHeader,
    srFooter,
    srMain,
  },
  mixins: [commonMixins],
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  created () {
  },
  methods: {
  }
}

</script>
<style lang='less'>
@import "./index.less";
@import "../../assets/css/common.less";
@import "../../assets/css/them-conver.less";
</style>
