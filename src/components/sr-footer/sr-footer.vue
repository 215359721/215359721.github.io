<template>
  <el-footer :height="height + 'px'">
    <div class="">
      <div style="clear:both"></div>
      <div class="footer">
        <div class="foot-left">
          <div class="left-text left-head">联系我们</div>
          <div class="left-text">电话：010-68767492</div>
          <div class="left-text">传真：010-68372291</div>
          <div class="left-text">地址：北京市海淀区阜成路16号</div>
          <div class="left-text">邮编：100048</div>
          <div class="left-text">信访邮箱：xinfang@spacechina.com</div>
          <div class="left-text">监事会邮箱：jianshihui@spacechina.com</div>
        </div>
        <div class="foot-middle">
          <div
            class="link-group-div"
            name="link1"
            id="link1"
          >
            <div>
              <div class="middle-head">集团网群</div>
              <div class="middle-single">
                <div class="middle-s-left">大型科研生产联合体:</div>
                <div class="middle-s-right">
                  <SELECT
                    class="middle-sel"
                    name="select"
                    onChange=""
                  >
                    <OPTION value="1">AAAA</OPTION>
                  </select>
                </div>
              </div>

              <div class="middle-single">
                <div class="middle-s-left">专业公司:</div>
                <div class="middle-s-right">
                  <SELECT
                    class="middle-sel"
                    name="select"
                    onChange=""
                  >
                    <OPTION value="2">BBBB</OPTION>
                  </select>
                </div>
              </div>

              <div class="middle-single">
                <div class="middle-s-left">直属单位:</div>
                <div class="middle-s-right">
                  <SELECT
                    class="middle-sel"
                    name="select"
                    onChange=""
                  >
                    <OPTION value="3">CCCC</OPTION>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="foot-right">
          <div class="right-head">移动平台客户端下载</div>
          <div class="right-box">
            <div class="right-each">
              <el-image
                class="ewm-img"
                :src="require('../../assets/image/erwm_android.png')"
              ></el-image>
              <br /><span class="right-name">安卓</span>
            </div>
            <div class="right-each">
              <el-image
                class="ewm-img"
                :src="require('../../assets/image/erwm_ios.png')"
              ></el-image>
              <br /><span class="right-name">iOS</span>
            </div>
          </div>
        </div>

      </div>
      <div class="banquan">中国航天科技集团有限公司 &nbsp;&nbsp;版权所有</div>
    </div>
  </el-footer>
</template>

<script>
export default {
  props: {
    //底栏高度
    height: {
      type: String || Number,
      default: '60'
    }
  },
  components: {
  },
  data () {
    return {
    }
  }
}

</script>
<style lang='less'>
@import "./sr-footer.less";
</style>
