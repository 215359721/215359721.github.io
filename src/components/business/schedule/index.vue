<template>
  <div
    class="scheduleMain"
    :style="{'width':__getModuleWidth(width)+'px','height':__getModuleHeight(height)+'px'}"
  >
    <!-- {{data.contentname}},当前模块尺寸{{__getModuleWidth(width)}} * {{__getModuleHeight(height)}} -->
    <div
      class="scheduleMain-calendar"
      :style="{'height':getCalendarHei(offHeight)+'px'}"
    >
      <!-- 周月切换 -->
      <div class="discharge">
        <a-button
          type="primary"
          icon="plus"
          class="add-btn"
          @click="addNewSchedule"
        >
          新增日程
        </a-button>
        <a-button
          type="primary"
          shape="circle"
          icon="bell"
          size="small"
          style="margin-left:10px;"
          @click="openNotification"
        />
        <a-radio-group
          :value="nowActive"
          @change="viewChange"
          class="radio-group"
        >
          <a-radio-button
            class="group-btn"
            value="month"
          >月视图</a-radio-button>
          <a-radio-button
            class="group-btn"
            value="week"
          >周视图</a-radio-button>
        </a-radio-group>
      </div>
      <!-- 
        :fullscreen="false"
        :validRange="[beginDate, endDate]"
      -->
      <a-calendar
        :fullscreen="false"
        :locale="locale"
        @select="selectDate"
      >
        <template
          slot="dateCellRender"
          slot-scope="value"
        >
          <a-badge
            dot
            v-if="(value.date() > 22) && (value.date() < 28)"
          />
        </template>
      </a-calendar>
    </div>
    <div
      class="scheduleMain-object"
      :style="{'height':`${__getModuleHeight(height) - getCalendarHei(offHeight)}px`}"
    >
      <div class="object-inner">
        <a-collapse
          v-model="activeKey"
          v-if="hasEvent"
          :bordered="true"
        >
          <template #expandIcon="props">
            <a-icon
              type="right-circle"
              :rotate="props.isActive ? 90 : 0"
            />
          </template>
          <a-collapse-panel
            key="1"
            header="内部交流会议 02-25 9:00 至 02-26 11:30"
          >
            <p>{{ text }}</p>
            <a-icon
              slot="extra"
              type="setting"
              @click="objectClick"
            />
          </a-collapse-panel>
          <a-collapse-panel
            key="2"
            header="外部专家接见 02-25 13:00 至 02-26 14:30"
            :disabled="false"
          >
            <p>{{ text }}</p>
            <a-icon
              slot="extra"
              type="setting"
              @click="objectClick"
            />
          </a-collapse-panel>
          <a-collapse-panel
            key="3"
            header="信息部集体会议 02-25 15:00 至 02-26 17:30"
          >
            <p>{{ text }}</p>
            <a-icon
              slot="extra"
              type="setting"
              @click="objectClick"
            />
          </a-collapse-panel>
        </a-collapse>
        <a-empty
          v-else
          description="暂无日程"
          style="margin-top: 15px"
        />
      </div>
    </div>
    <a-drawer
      :title="windowTitle"
      placement="right"
      :closable="false"
      :visible="windowVisible"
      width="900"
      @close="onClose"
      class="drawView"
    >
      <div class="drawView-content">
        <div class="each-box">
          <div class="title">日程名称</div>
          <a-input
            class="inputs"
            allowClear
            placeholder="请输入日程名称"
          />
        </div>
        <div class="each-box">
          <div class="title">日程时间</div>
          <a-date-picker
            v-model="draw_startTime"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择开始时间"
          />
          <a-date-picker
            v-model="draw_endTime"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择结束时间"
          />
        </div>
        <div class="each-box">
          <div class="title">提前提醒</div>
          <a-input
            class="inputs-short"
            type="number"
            :disabled="draw_flag"
            :value="draw_num"
          />
          <a-select
            default-value="min"
            style="width: 120px;margin-left: 10px"
            :disabled="draw_flag"
            @change="drawTypeChoose"
          >
            <a-select-option value="min">
              分钟
            </a-select-option>
            <a-select-option value="hour">
              小时
            </a-select-option>
            <a-select-option value="day">
              天
            </a-select-option>
          </a-select>
          <a-checkbox
            @change="drawSwitch"
            style="margin-left: 10px"
          >
            提醒开关
          </a-checkbox>
        </div>
        <div class="each-box">
          <div class="title">备注信息</div>
          <a-textarea
            class="inputs-long"
            placeholder="请输入备注信息"
            :rows="4"
          />
        </div>
      </div>
      <div class="drawView-op">
        <a-button
          class="btn"
          @click="drawClose"
        >关闭</a-button>
        <a-button
          class="btn"
          type="danger"
          icon="close"
          @click="drawDelete"
        >
          删除
        </a-button>
        <a-button
          class="btn"
          type="primary"
          icon="check"
          @click="drawCommit"
        >
          提交
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import commonMixins from '@/mixins/commonMixins'
import { notification } from 'ant-design-vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
export default {
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
      type: Number,
      default: 1
    },
    //模块高度
    height: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      locale: {
        lang: {
          month: '月',
          year: '年'
        }
      },
      nowActive: 'month',//当前视图
      eachLineHei: 33,//一行日期高度
      offHeight: 152,//日历部分可减去最高度
      max_height: 278,//日历最大高度(选择月视图)
      min_height: 113,//日历最小高度(选择周视图)
      activeKey: [],//当前选中任务index
      hasEvent: true,//当天是否有日程数据
      windowVisible: false,//日程模态框显示装填
      windowTitle: '新建日程',//日程模态框标题
      draw_startTime: null,//日程开始时间
      draw_endTime: null,//日程结束时间
      draw_num: 5,//提醒时间
      draw_flag: true,//是否提醒
      draw_type: 0,//提前提醒类型（0-分钟;1-小时;2-天）
      text: `这里内容是备注内容`,//测试内容
    }
  },
  computed: {
    //动态计算获得日期控件高度
    getCalendarHei () {
      return () => {
        let resultHei = this.__getModuleHeight(this.height) - Number(this.offHeight)
        let desHei = (this.nowActive === 'week') ? this.min_height : this.max_height
        if (resultHei >= desHei) {
          resultHei = desHei
        }
        return resultHei
      }
    }
  },
  watch: {
    activeKey (key) {
      this.$logs('key:', key);
    },
  },
  mounted () {
    document.getElementsByClassName('ant-fullcalendar-table')[0].style.cssText = `height: 216px;`
  },
  methods: {
    /**
     * 新建日程
     */
    addNewSchedule () {
      this.windowTitle = '新建日程'
      this.windowVisible = true
    },
    /**
     * 周月视图切换
     */
    viewChange (e) {
      this.nowActive = e.target.value;
      this.$logs('切换视图为:' + this.nowActive)
      const dom = document.getElementsByClassName('ant-fullcalendar-tbody')
      this.optionClass(dom, this.nowActive)
      this.$logs(dom[0].children)
    },
    /**
     *  操作class（新增、删除）
     *  dom:要操作的dom对象
     *  opt:操作
     */
    optionClass (dom, opt) {
      let table_dom = document.getElementsByClassName('ant-fullcalendar-table')
      for (let i = 0; i < dom[0].children.length; i++) {
        let classVal = dom[0].children[i].getAttribute("class");
        if (opt === 'week') {
          if (this.$isInclude(classVal, 'ant-fullcalendar-active-week') === false && this.$isInclude(classVal, 'hide-line') === false) {
            classVal = classVal.concat('hide-line') //增加class
          }
        } else {
          classVal = classVal.replace('hide-line', '') //移除class
        }
        dom[0].children[i].setAttribute('class', classVal)
      }
      if (opt === 'week') {
        this.offHeight = this.offHeight + 5 * this.eachLineHei //修改calendar区域要减去的高度
        table_dom[0].style.cssText = `height: ${18 + this.eachLineHei}px;` //修改table的高度 
      } else {
        this.offHeight = 152 //还原calendar区域要减去的高度
        table_dom[0].style.cssText = `height: 216px;` //还原table的高度
      }
    },
    /**
     * 任务点击操作按钮
     */
    objectClick (e) {
      e.stopPropagation();
      this.$logs('任务点击操作按钮:', e)
      this.windowTitle = '修改日程'
      this.windowVisible = true
    },
    /**
     * 日程框关闭
     */
    drawClose () {
      this.windowVisible = false;
    },
    /**
     * 日程删除
     */
    drawDelete () {
      this.windowVisible = false;
    },
    /**
     * 日程提交
     */
    drawCommit () {
      this.windowVisible = false;
    },
    /**
     * 日程-提前提醒时间类型选择
     */
    drawTypeChoose (value) {
      this.$logs(`selected ${value}`)
    },
    /**
     * 日程-提前提醒开关切换
     */
    drawSwitch (e) {
      this.$logs(`checked = ${e.target.checked}`);
      this.draw_flag = !(e.target.checked)
    },
    /**
     * 模态框关闭
     */
    onClose () {
      this.windowVisible = false;
    },
    /**
     * 日期选择
     */
    selectDate (date) {
      if (this.dateFactory(date).day > 22 && this.dateFactory(date).day < 28) {
        this.hasEvent = true
      } else {
        this.hasEvent = false
      }
    },
    /**
     * 日程提醒通知弹出
     */
    openNotification () {
      notification.open({
        message: '日程提醒',
        duration: null,
        description: '您在2021-02-28 15：30有一项日程:领导会议召开，备注信息：拿好纸笔参加会议，不要迟到，请按时参加',
        icon: <a-icon type="bell" style="color: #108ee9" />,
      });
    },
    /**
     * 日期处理工厂
     */
    dateFactory (date) {
      return {
        full: moment(date).format('YYYY-MM-DD'),
        day: Number(moment(date).date()),
        month: Number(moment(date).month()),
        year: Number(moment(date).year())
      }
    }
  }
}

</script>
<style lang='less'>
@import "./schedule.less";
@import "./drawer.less";
@import "../../../assets/css/common.less";
</style>
