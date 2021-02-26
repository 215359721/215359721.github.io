<template>
  <div>
    <div>
      {{name}}
    </div>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
import { Calendar } from 'element-ui'
export default {
  components: {
    [Calendar.name]: Calendar
  },
  data () {
    return {
      name: '这是详情页面示例',
      value: new Date()
    }
  },
  computed: {

  },
  methods: {
    /**
    * 这是function名称
    * 这是params描述
    */
    func: function () {

    }
  }
}

</script>
<style lang='scss'>
</style>
