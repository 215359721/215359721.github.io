<template>
  <div class="main-bg">
    <div class="login-view">
      <el-row>
        <el-col :span="24">
          <div class="title">登录</div>
        </el-col>
        <el-col :span="24">
          <div class="username">
            <i class="icon el-icon-edit"></i>
            <el-input
              class="inp"
              v-model="userName"
              placeholder="请输入用户名"
              size="mini"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="password">
            <i class="icon el-icon-delete"></i>
            <el-input
              class="inp"
              v-model="passWord"
              show-password
              size="mini"
              placeholder="请输入密码"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="btn-view">
            <el-button
              class="btn"
              type="primary"
              size="medium"
            >登录</el-button>
            <el-button
              class="btn"
              type="primary"
              size="medium"
            >注册</el-button>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import { Button, Row, Col, Input } from 'element-ui'
export default {
  name: 'srLogin',
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Input.name]: Input
  },
  data () {
    return {
      userName: '',
      passWord: ''
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
<style lang="scss">
.main-bg {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-view {
  width: 20%;
  height: 30%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 14px;
}

.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  // background-color: red;
}

.username {
  margin-top: 40px;
}

.password {
  margin-top: 20px;
}

.btn-view {
  margin-top: 50px;
  text-align: center;
}

.btn {
  width: 40%;
}

.icon {
  color: #fff;
}

.inp {
  width: 80%;
  margin-left: 30px;
}
</style>
