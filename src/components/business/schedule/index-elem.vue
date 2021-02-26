<template>
  <div
    class="scheduleMain"
    :style="{'width':__getModuleWidth(width)+'px','height':__getModuleHeight(height)+'px'}"
  >
    <!-- {{data.contentname}},当前模块尺寸{{__getModuleWidth(width)}} * {{__getModuleHeight(height)}} -->
    <div
      class="scheduleMain-calendar"
      :style="{'height':__getModuleHeight(height)+'px'}"
    >
      <!-- 
        :range="[beginDate, endDate]"
      -->
      <el-calendar
        :v-model="new Date()"
        :style="{'height':__getModuleHeight(height)+'px'}"
      >
        <template
          slot="dateCell"
          slot-scope="{date, data}"
        >
          <!-- 
            data结构:{isSelected: false, type: "next-month", day: "2021-03-14"}
          -->
          <p>
            {{ Number(data.day.substr(8,9)) + '' }}
          </p>
        </template>
      </el-calendar>
      <!-- <vue-event-calendar
        :events="demoEvents"
        @monthChanged="monthChange"
        @dayChanged="dayChange"
      ></vue-event-calendar> -->
    </div>

  </div>
</template>

<script>
import commonMixins from '@/mixins/commonMixins'
export default {
  components: {},
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
      type: String,
      default: "1"
    },
    //模块高度
    height: {
      type: String,
      default: "1"
    }
  },
  data () {
    return {
      demoEvents: [{
        date: '2016/12/15',
        title: 'eat',
        desc: 'longlonglong description'
      }, {
        date: '2016/11/12',
        title: 'this is a title'
      }],
      beginDate: '2021-02-08',
      endDate: '2021-02-21',
      scheduleData: {
        "data": [
          {
            "beginTime": "2021-02-26T08:00:00",
            "calendarName": "test4",
            "createTime": "2021-02-23 09:47:39",
            "createUserId": "Q6553e1f61619000",
            "createUserName": "杨涛",
            "endTime": "2021-02-26T18:00",
            "id": "98d22864-a6ee-4200-8fc9-f2bdf787d50a",
            "note": "",
            "tipType": "",
            "tipstatus": "0",
            "txstatus": "1",
            "updateTime": "2021-02-23 09:47:39",
            "updateUserId": "Q6553e1f61619000",
            "updateUserName": "杨涛"
          },
          {
            "beginTime": "2021-02-26T08:00:00",
            "calendarName": "test3",
            "createTime": "2021-02-23 09:47:11",
            "createUserId": "Q6553e1f61619000",
            "createUserName": "杨涛",
            "endTime": "2021-02-26T18:00",
            "id": "fc509ca6-a7f6-4e97-acae-f3ba6af8f099",
            "note": "",
            "tipType": "",
            "tipstatus": "0",
            "txstatus": "1",
            "updateTime": "2021-02-23 09:47:11",
            "updateUserId": "Q6553e1f61619000",
            "updateUserName": "杨涛"
          },
          {
            "beginTime": "2021-02-23T08:00:00",
            "calendarName": "test2",
            "createTime": "2021-02-23 09:46:48",
            "createUserId": "Q6553e1f61619000",
            "createUserName": "杨涛",
            "endTime": "2021-02-23T18:00",
            "id": "1ede57f3-c817-4462-b3f3-d63d657cea4c",
            "note": "",
            "tipType": "",
            "tipstatus": "0",
            "txstatus": "1",
            "updateTime": "2021-02-23 09:46:48",
            "updateUserId": "Q6553e1f61619000",
            "updateUserName": "杨涛"
          },
          {
            "beginTime": "2021-02-23T08:00:00",
            "calendarName": "test1",
            "createTime": "2021-02-23 09:45:57",
            "createUserId": "Q6553e1f61619000",
            "createUserName": "杨涛",
            "endTime": "2021-02-24T18:00:00",
            "id": "76109cf6-851e-4181-80bf-d0e768b911ef",
            "note": "11111111",
            "tipType": "1",
            "tipstatus": "1",
            "txstatus": "0",
            "updateTime": "2021-02-23 09:45:57",
            "updateUserId": "Q6553e1f61619000",
            "updateUserName": "杨涛"
          }
        ],
        "recordsTotal": "4"
      }
    }
  },
  mounted () {
    this.$logs('begin:', this.beginDate)
    this.$logs('end:', this.endDate)
  },
  computed: {

  },
  methods: {
    monthChange (month) {
      console.log(month)
    },
    dayChange (day) {
      console.log(day)
    }
  }
}

</script>
<style lang='less'>
@import "./schedule.less";
@import "../../../assets/css/common.less";
</style>
