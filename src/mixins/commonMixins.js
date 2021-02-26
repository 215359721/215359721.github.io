export default {
  data () {
    return {
      theCurThem_$: null,//当前主题
      eachPx_$: 50,//单个单位像素
    }
  },
  computed: {

  },
  mounted () {
    this.theCurThem_$ = this.$ls.get('them') || 'default'
  },
  created () {
    this.$bus.$on('themChanged', (themName) => {
      this.$logs('监听on(换肤):' + themName)
      this.__setThem(themName)
    })
  },
  destroyed () {
    this.$bus.$off('themChanged')
  },
  methods: {
    __setThem (_themName) {
      this.theCurThem_$ = _themName
    },
    /**
     * 获得当前模块的高度
     */
    __getModuleWidth (width) {
      return Number(width) * this.eachPx_$ - 20
    },
    /**
     * 获得当前模块的高度
     */
    __getModuleHeight (height) {
      return Number(height) * this.eachPx_$ - 50 - 20
    }
  }
}