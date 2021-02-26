<template>
  <div>
    <div>
      {{name}}
    </div>
    <div class="md-point hidden-md-and-down">
      <el-carousel
        :interval="4000"
        type="card"
        height="200px"
      >
        <el-carousel-item
          v-for="item in 6"
          :key="item"
        >
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="sm-point hidden-md-and-up">
      <el-timeline>
        <el-timeline-item
          timestamp="2018/4/12"
          placement="top"
        >
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item
          timestamp="2018/4/3"
          placement="top"
        >
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item
          timestamp="2018/4/2"
          placement="top"
        >
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>

</template>

<script>
import { Carousel, CarouselItem, Timeline, TimelineItem } from 'element-ui'
export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Timeline.name]: Timeline,
    [TimelineItem.name]: TimelineItem
  },
  data () {
    return {
      name: '这是响应页面示例'
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
.md-point {
  background-color: pink;
}
.sm-point {
  background-color: lightgoldenrodyellow;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
