<template>
  <div style="width:100%">
    <h1 style="margin-left:10px;">request</h1>
    <a-button
      class="btn"
      type="primary"
      @click="queryData('/comments')"
    >请求comments数据</a-button>
    <a-button
      class="btn"
      type="danger"
      @click="clearData"
    >清空table数据</a-button>
    <a-button
      class="btn"
      @click="mockData"
    >Mock数据</a-button>
    <a-table
      :columns="colums"
      :data-source="dataSource"
    ></a-table>
  </div>
</template>

<script>
import { get } from '@/api/axios'
import Mock from 'mockjs'
const BASE_URL = 'http://jsonplaceholder.typicode.com'
Mock.setup({
  timeout: '100'
})
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      colums: [
        {
          title: 'postId',
          dataIndex: 'postId',
          key: 'postId'
        },
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: 'name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'email',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'body',
          dataIndex: 'body',
          key: 'body'
        }
      ],
      dataSource: []
    }
  },
  mounted () {
    console.log('Mock启动')
    var mockUrl = BASE_URL + '/comments'
    var Mockdata = this.factory(2000)
    Mock.mock(mockUrl, Mockdata)
  },
  methods: {
    factory: function (num) {
      var array = []
      for (let i = 0; i < num; i++) {
        var temp = {
          id: Mock.mock('@natural(1000, 3000)'),
          postId: i + 1,
          name: Mock.Random.cname(),
          email: Mock.Random.email(),
          body: Mock.Random.sentence(3, 5)
        }
        array.push(temp)
      }
      return array
    },
    queryData: function (name) {
      var url = BASE_URL + name
      console.log(url)
      get(url).then(obj => {
        var sj = obj.data
        console.log('data:' + JSON.stringify(sj))
        console.log(typeof (sj))
        this.dataSource = sj
      })
    },
    clearData: function () {
      this.dataSource = []
    },
    mockData: function () {

    }
  }
}
</script>
<style >
.btn {
  margin-left: 10px;
  margin-bottom: 20px;
}
</style>
