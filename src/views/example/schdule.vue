<template>
  <div>
    <div class="box-op">
      <a-row>
        <a-col :span="12">
          宽度
          <a-slider
            v-model="data.width"
            :min="10"
            :max="24"
          />
        </a-col>
        <a-col :span="4">
          <a-input-number
            v-model="data.width"
            :min="10"
            :max="24"
            style="marginLeft: 16px"
          />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">
          高度
          <a-slider
            v-model="data.height"
            :min="10"
            :max="24"
          />
        </a-col>
        <a-col :span="4">
          <a-input-number
            v-model="data.height"
            :min="10"
            :max="24"
            style="marginLeft: 16px"
          />
        </a-col>
      </a-row>
      <div class="des">
        <div class="des-title">说明：</div>
        <div class="des-content">为保证良好显示效果，建议最小宽度10，最小高度10(这里可以通过管理员后台配置)</div>
        <div class="des-content">可以拖动滑块调整宽高查看自适应效果(默认宽12;高10,宽度12为屏幕一半，全屏宽度是24)</div>
      </div>
    </div>
    <div class="box-main">
      <div class="box-head">
        <a-card
          :tab-list="tabs"
          :active-tab-key="tabs.key"
          :bordered="false"
          class="tabs-head"
        >
          <a
            slot="tabBarExtraContent"
            href="#"
          >更多>></a>
        </a-card>
      </div>
      <div class="box-content">
        <div>
          <schedule
            :data="data"
            :width="Number(data.width)"
            :height="Number(data.height)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonMixins from '@/mixins/commonMixins'
import schedule from '@/components/business/schedule/index'
export default {
  components: {
    schedule
  },
  mixins: [commonMixins],
  data () {
    return {
      data: {
        width: 12,
        height: 10,
        x_cor: 0,
        y_cor: 0
      },
      tabs: [
        {
          key: 'schdule',
          tab: '日程示例',
        }
      ]
    }
  },
  computed: {

  },
  methods: {
  }
}

</script>
<style lang='less'>
.box-main {
  // background-color: turquoise;
  position: absolute;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}
.box-op {
  margin: 10px;
  border: 1px rgb(198, 198, 198) solid;
  border-radius: 4px;
  width: 90%;
  height: auto;
  // background: rgb(255, 232, 255);
  margin-bottom: 20px;
  padding: 20px;
  .des {
    margin-top: 10px;
    padding: 5px;
    background-color: rgb(244, 244, 244);
    &-title {
      font-weight: bold;
    }
    &-content {
      margin-top: 5px;
    }
  }
}
.box-head {
  width: 100%;
  display: flex;
  height: 50px;
  background-color: rgb(232, 232, 232);
  border-radius: 4px 4px 0 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
}
.box-content {
  width: 100%;
  display: flex;
  height: 100%;
  // background-color: burlywood;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
}
.ant-card {
  width: 100%;
  background-color: transparent;
}
.tabs-head {
  .ant-card-head {
    min-height: 10px;
    border-bottom: 0px;
    padding: 0 10px;
    .ant-tabs {
      color: rgb(33, 33, 33);
    }
  }
  .ant-tabs .ant-tabs-large-bar .ant-tabs-nav-container {
    font-size: 18px;
  }
  //head文字下方指示条
  .ant-tabs-ink-bar {
    height: 3px;
    background-color: #333;
  }
  //当前鼠标指向hover文字颜色
  .ant-tabs-tab:hover {
    color: #333;
  }
  //当前激活tab文字颜色
  .ant-tabs-tab-active {
    color: #333;
  }
  .ant-tabs .ant-tabs-large-bar .ant-tabs-tab {
    padding: 12px;
    margin-right: 15px;
  }
  .ant-tabs-bar {
    border-bottom: none;
  }
  a {
    color: rgb(33, 33, 33);
  }
}
</style>
