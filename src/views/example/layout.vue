<template>
  <div>
    <sr-container>
      <sr-header
        height="450"
        class="autoBg"
      >
        <sr-nav-menu />
      </sr-header>
      <sr-main>sr-Main</sr-main>
      <sr-footer>
        sr-Footer
      </sr-footer>
    </sr-container>
  </div>
</template>

<script>
import { srContainer, srHeader, srFooter, srMain } from '@/components/layout/default'
import srNavMenu from '@/components/sr-navMenu/sr-navMenu.vue'
export default {
  components: {
    srContainer,
    srHeader,
    srFooter,
    srMain,
    srNavMenu,
  },
  data () {
    return {
      activeIndex: '1',
    }
  },
  computed: {

  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>
<style lang='scss'>
.autoBg {
  background-image: url("/assets/image/topbg.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
