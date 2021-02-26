<template>
  <div class="bg">
    <div class="group-0">
      <div class="show-title">组件示例</div>
      <el-button
        type="primary"
        @click="jumpPage(0)"
      >
        日程组件
      </el-button>
    </div>
    <div class="group-1">
      <div class="show-title">页面示例</div>
      <el-button
        type="primary"
        @click="jumpPage(1)"
      >
        登录页示例
      </el-button>
      <el-button
        type="primary"
        @click="jumpPage(2)"
      >
        响应页示例
      </el-button>
      <el-button
        type="primary"
        @click="jumpPage(3)"
      >
        详情页示例
      </el-button>
    </div>
    <div class="group-2">
      <div class="show-title">公共方法</div>
      <el-button
        type="primary"
        @click="btnAction"
      >
        request
      </el-button>
      <el-button
        type="primary"
        @click="btnAction"
      >
        $toast
      </el-button>
      <el-button
        type="primary"
        @click="btnAction"
      >
        $ls.set
      </el-button>
      <el-button
        type="primary"
        @click="btnAction"
      >
        $ls.get
      </el-button>
      <el-button
        type="primary"
        @click="btnAction"
      >
        $ls.remove
      </el-button>
      <el-button
        type="primary"
        @click="btnAction"
      >
        $isEmpty
      </el-button>
      <el-button
        type="primary"
        @click="btnAction"
      >
        showLoading
      </el-button>
      <el-button
        type="primary"
        @click="btnAction"
      >
        hideLoading
      </el-button>
    </div>
    <div class="group-3">
      <div class="show-title">自定义指令</div>
      <el-button
        type="primary"
        @click="btnAction"
        v-copy="copyText"
      >
        v-copy
      </el-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import loading from '@/utils/loading'
import { testGet_api } from '@/api/test'
export default {
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      copyText: 'my-copy-text'
    }
  },
  methods: {
    jumpPage: function (index) {
      let path = ''
      switch (Number(index)) {
        case 0:
          path = '/schdule'
          break
        case 1:
          path = '/login'
          break
        case 2:
          path = '/reactive'
          break
        case 3:
          path = '/newsInfo'
          break
        default:
      }
      this.$changePage(path)
    },
    btnAction: function (e) {
      const content = e.target.textContent.trim()
      this.$logs('content:', content)
      switch (content) {
        case 'request':
          testGet_api()
          break
        case '$toast':
          this.$toast('成功')
          break;
        case '$ls.set':
          this.$ls.set('testValue', {
            name: 'tom',
            age: 25
          })
          break;
        case '$ls.get':
          var obj = this.$ls.get('testValue')
          alert(obj && obj.name)
          break;
        case '$ls.remove':
          this.$ls.remove('testValue')
          break;
        case '$isEmpty':
          alert('空对象{}-' + this.$isEmpty({}) + ' | 空值""-' + this.$isEmpty("") + ' | undefined-' + this.$isEmpty(undefined))
          break;
        case 'showLoading':
          loading.show()
          setTimeout(() => {
            loading.hide()
          }, 2000);
          break;
        case 'hideLoading':
          break;
        case 'v-copy':
          this.$toast('复制成功')
          break
        default:
      }
    }
  }
}

</script>
<style lang='scss'>
.bg {
  padding: 30px;
}
.show-title {
  padding: 10px;
  font-weight: bold;
}
.group-0 {
  background-color: rgb(197, 249, 141);
  padding: 10px;
  border-radius: 8px;
}
.group-1 {
  background-color: rgb(231, 220, 106);
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
}
.group-2 {
  background-color: rgb(193, 224, 193);
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
}
.group-3 {
  background-color: rgb(213, 196, 215);
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
}
</style>
