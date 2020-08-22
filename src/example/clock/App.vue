<template>
  <div>
    <el-button @click="showDialog">重新计时</el-button>
    <br /><br />
    <span
      class="now"
      v-html="nowTime"
    ></span>
    <br /><br />
    <span class="chixu">持续时间 <span class="time">{{translate}}</span></span>
    <br /><br />
    <el-button
      style="width:100px;"
      :type="type"
      @click="paush"
    >{{cont}}</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <span>是否要重新计时?</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="restart"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Button, Dialog } from 'element-ui'
export default {
  name: 'App',
  components: {
    [Button.name]: Button,
    [Dialog.name]: Dialog
  },
  data () {
    return {
      dialogVisible: false,
      timer: null,
      type: 'success',
      nowTime: '',
      cont: '暂停',
      continuousTime: 0,
      showSeconds: false
    }
  },
  computed: {
    translate: function () {
      var fen = parseInt(this.continuousTime / 60)
      var miao = this.continuousTime % 60
      return fen + '分' + (this.showSeconds ? miao + '秒' : '')
    }
  },
  beforeMount () {
    this.timer = setInterval(this.clock, 1000)
  },
  beforeDestroy () {

  },
  methods: {
    clock: function () {
      var self = this
      this.continuousTime++
      self.nowTime = '<span class="hour">' + new Date().getHours() + '点</span>  <span class="min">' + new Date().getMinutes() + '分</span>  ' + (this.showSeconds ? '<span class="sec">' + new Date().getSeconds() + '秒</span>' : '')
    },
    showDialog: function () {
      this.dialogVisible = true
    },
    paush: function () {
      if (this.cont === '暂停') {
        this.type = 'danger'
        this.cont = '继续'
        localStorage.setItem('time', this.continuousTime)
        clearInterval(this.timer)
      } else {
        this.cont = '暂停'
        this.type = 'success'
        this.timer = setInterval(this.clock, 1000)
      }
    },

    restart: function () {
      this.continuousTime = 0
      this.dialogVisible = false
    }
  }
}
</script>
<style >
.hour {
  font-size: 24px;
  font-weight: 900;
}
.min {
  font-size: 20px;
  font-weight: 600;
}
.sec {
  font-size: 14px;
  font-weight: 600;
}
.chixu {
  margin-left: 0px;
  font-size: 20px;
  font-weight: 900;
}
.now {
  color: blue;
  float: left;
}
.time {
  font-size: 28px;
  font-weight: 900;
}
</style>
