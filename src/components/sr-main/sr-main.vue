<!-- 整个中间区域部分，包括所有内容部分内容，高度自动根据内容部分高度计算 -->
<template>
  <el-main>
    <div
      class="main-box"
      :style="{'height':totalHeight+'px'}"
    >
      <sr-box
        v-for="(item,index) in areaData"
        :key="index"
        :data="item"
      />
    </div>
  </el-main>
</template>

<script>
import srBox from '@/components/sr-box/sr-box'
import commonMixins from '@/mixins/commonMixins'
// import { getAllTemplates } from '@/api/fontendApi'
export default {
  components: {
    srBox
  },
  mixins: [commonMixins],
  data () {
    return {
      //总高度
      totalHeight: 300,
      areaData: [
        {
          "areaID": "3fc7dd28-dafe-4416-a454-52a108db3454",
          "content": [
            {
              "contentid": "504720f5-570d-4826-a104-50643b1ad78e",
              "contentlabel": "app",
              "contentname": "应用中心",
              "contenturl": "phpcms/templates/default/content/appcenter/index.html",
              "createTime": "2020-10-12 16:18:32",
              "ifsc": "0",
              "maxheight": "10",
              "maxwidth": "24",
              "minheight": "4",
              "minwidth": "8",
              "moreurl": null,
              "sfdc": "1",
              "sfzsbt": "1",
              "sort": null,
              "updateTime": "2021-02-08 08:44:28"
            }
          ],
          "height": "5",
          "templateid": "5895e5ca-f701-4967-8958-282a56ca00f3",
          "width": "24",
          "x_cor": "0",
          "y_cor": "27"
        },
        {
          "areaID": "8abe7a60-7340-4d91-bbda-7ae148559ee5",
          "content": [
            {
              "contentid": "7",
              "contentlabel": "news0",
              "contentname": "党建动态",
              "contenturl": "phpcms/templates/default/content/news/index.html",
              "createTime": null,
              "ifsc": "1",
              "maxheight": "10",
              "maxwidth": "16",
              "minheight": "3",
              "minwidth": "8",
              "moreurl": "/index.php?m=content&c=index&a=list_cms",
              "sfdc": "1",
              "sfzsbt": "1",
              "sort": null,
              "updateTime": "2021-01-21 17:09:40"
            }
          ],
          "height": "8",
          "templateid": "5895e5ca-f701-4967-8958-282a56ca00f3",
          "width": "12",
          "x_cor": "12",
          "y_cor": "19"
        },
        {
          "areaID": "a003c1b1-c3e7-41d7-8450-06d33041eb1d",
          "content": [
            {
              "contentid": "6",
              "contentlabel": "news5",
              "contentname": "通知公告",
              "contenturl": "phpcms/templates/default/content/news/index.html",
              "createTime": null,
              "ifsc": "1",
              "maxheight": "10",
              "maxwidth": "16",
              "minheight": "3",
              "minwidth": "8",
              "moreurl": "/index.php?m=content&c=index&a=list_cms",
              "sfdc": "1",
              "sfzsbt": "1",
              "sort": null,
              "updateTime": "2021-01-21 17:09:50"
            }
          ],
          "height": "8",
          "templateid": "5895e5ca-f701-4967-8958-282a56ca00f3",
          "width": "12",
          "x_cor": "0",
          "y_cor": "19"
        },
        {
          "areaID": "b2db4be3-6595-464e-a21a-51a3415101ae",
          "content": [
            {
              "contentid": "3",
              "contentlabel": "news1",
              "contentname": "图片新闻",
              "contenturl": "phpcms/templates/default/content/carousel/index.html",
              "createTime": "2020-10-12",
              "ifsc": "1",
              "maxheight": "9",
              "maxwidth": "12",
              "minheight": "6",
              "minwidth": "12",
              "moreurl": null,
              "sfdc": "1",
              "sfzsbt": "0",
              "sort": null,
              "updateTime": "2021-02-01 16:29:46"
            }
          ],
          "height": "9",
          "templateid": "5895e5ca-f701-4967-8958-282a56ca00f3",
          "width": "12",
          "x_cor": "0",
          "y_cor": "0"
        },
        {
          "areaID": "c87fd911-383b-45d8-b7cc-4124596fdd03",
          "content": [
            {
              "contentid": "af1fdd1b-52ea-4569-b91b-2797561212dc",
              "contentlabel": "news2",
              "contentname": "常用服务",
              "contenturl": "phpcms/templates/default/content/services/index.html",
              "createTime": "2020-10-12 16:18:50",
              "ifsc": "0",
              "maxheight": "4",
              "maxwidth": "24",
              "minheight": "4",
              "minwidth": "8",
              "moreurl": null,
              "sfdc": "1",
              "sfzsbt": "1",
              "sort": null,
              "updateTime": "2021-01-21 17:00:28"
            }
          ],
          "height": "4",
          "templateid": "5895e5ca-f701-4967-8958-282a56ca00f3",
          "width": "24",
          "x_cor": "0",
          "y_cor": "32"
        },
        {
          "areaID": "de356732-cadb-44ff-b78c-35b00752a444",
          "content": [
            {
              "contentid": "4",
              "contentlabel": "news3",
              "contentname": "集团新闻",
              "contenturl": "phpcms/templates/default/content/news/index.html",
              "createTime": "2020-10-09 16:28:22",
              "ifsc": "1",
              "maxheight": "10",
              "maxwidth": "16",
              "minheight": "3",
              "minwidth": "8",
              "moreurl": "/index.php?m=content&c=index&a=list_cms",
              "sfdc": "1",
              "sfzsbt": "1",
              "sort": null,
              "updateTime": "2021-01-21 17:09:30"
            },
            {
              "contentid": "5",
              "contentlabel": "news4",
              "contentname": "领导动态",
              "contenturl": "phpcms/templates/default/content/news/index.html",
              "createTime": "2020-10-09 16:28:22",
              "ifsc": "1",
              "maxheight": "10",
              "maxwidth": "16",
              "minheight": "3",
              "minwidth": "8",
              "moreurl": "/index.php?m=content&c=index&a=list_cms",
              "sfdc": "1",
              "sfzsbt": "1",
              "sort": null,
              "updateTime": "2021-01-21 17:09:59"
            }
          ],
          "height": "9",
          "templateid": "5895e5ca-f701-4967-8958-282a56ca00f3",
          "width": "12",
          "x_cor": "12",
          "y_cor": "0"
        },
        {
          "areaID": "f0ed6d89-fe6f-4ef3-b8f7-019b323bc37c",
          "content": [
            {
              "contentid": "c1b58653-09a8-4db2-b9cb-00c5a49a0dab",
              "contentlabel": "task",
              "contentname": "个人待办",
              "contenturl": "phpcms/templates/default/content/task/index.html",
              "createTime": "2020-10-12 16:18:15",
              "ifsc": "0",
              "maxheight": "12",
              "maxwidth": "16",
              "minheight": "3",
              "minwidth": "10",
              "moreurl": "/index.php?m=content&c=index&a=list_todo",
              "sfdc": "1",
              "sfzsbt": "1",
              "sort": null,
              "updateTime": "2021-01-22 11:46:54"
            },
            {
              "contentid": "5",
              "contentlabel": "news4",
              "contentname": "领导动态-new",
              "contenturl": "phpcms/templates/default/content/news/index.html",
              "createTime": "2020-10-09 16:28:22",
              "ifsc": "1",
              "maxheight": "10",
              "maxwidth": "16",
              "minheight": "3",
              "minwidth": "8",
              "moreurl": "/index.php?m=content&c=index&a=list_cms",
              "sfdc": "1",
              "sfzsbt": "1",
              "sort": null,
              "updateTime": "2021-01-21 17:09:59"
            }
          ],
          "height": "10",
          "templateid": "5895e5ca-f701-4967-8958-282a56ca00f3",
          "width": "12",
          "x_cor": "0",
          "y_cor": "9"
        },
        {
          "areaID": "fa55222c-fd30-4fd7-a3d5-6cb08a5636a3",
          "content": [
            {
              "contentid": "a6f5666c-6293-4fd9-8d69-99803242394b",
              "contentlabel": "schedule",
              "contentname": "日程",
              "contenturl": "phpcms/templates/default/content/calendar/index.html",
              "createTime": "2020-10-12 16:17:21",
              "ifsc": "0",
              "maxheight": "10",
              "maxwidth": "20",
              "minheight": "6",
              "minwidth": "6",
              "moreurl": null,
              "sfdc": "1",
              "sfzsbt": "1",
              "sort": null,
              "updateTime": "2021-01-22 11:46:26"
            }
          ],
          "height": "10",
          "templateid": "5895e5ca-f701-4967-8958-282a56ca00f3",
          "width": "12",
          "x_cor": "12",
          "y_cor": "9"
        },
      ]
    }
  },
  computed: {
  },
  mounted () {
  },
  created () {
    this.areaData = this.SetSortPoint(this.areaData)
    this.totalHeight = this.getTotalHeight(this.areaData)
    //网络请求
    // getAllTemplates()
  },
  methods: {
    getTotalHeight (data) {
      let hei = 300
      if (data.length) {
        hei = parseInt(data[data.length - 1].y_cor) * this.eachPx_$ + parseInt(data[data.length - 1].height * this.eachPx_$)
      }
      this.$logs('totalHeight:' + hei)
      return hei
    },
    //【方法】排序
    SetSortPoint (arry) {
      var len = arry.length
      for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
          if (this.SetSortRule(arry[j], arry[j + 1])) {
            var tmp = arry[j]
            arry[j] = arry[j + 1]
            arry[j + 1] = tmp
          }
        }
      }
      return arry
    },
    //【方法】两个坐标比较大小
    SetSortRule (p1, p2) {
      if (Number(p1.y_cor) > Number(p2.y_cor)) {
        return true
      } else if (Number(p1.y_cor) === Number(p2.y_cor)) {
        return (Number(p1.x_cor) > Number(p2.x_cor))
      } else {
        return false
      }
    }
  }
}

</script>
<style lang='less'>
@import "./sr-main.less";
</style>
