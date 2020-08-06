<template>
  <!-- <div style="width:100%">
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
      :rowKey='(record,index)=> index'
    ></a-table>
  </div> -->
  <div style="width:100%">
    <h1 style="margin-left:10px;">request</h1>
    <el-button
      class="btn"
      type="success"
      @click="queryData('/comments')"
    >请求comments数据</el-button>
    <el-button
      class="btn"
      type="danger"
      @click="clearData"
    >清空table数据</el-button>
    <el-button
      class="btn"
      @click="mockData"
    >Mock数据</el-button>
    <el-table
      :data="dataSource"
      stripe
      border
      :rowKey='(record,index)=> index'
    >
      <el-table-column
        prop="postId"
        label="postId"
      ></el-table-column>
      <el-table-column
        prop="id"
        label="id"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      ></el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
      ></el-table-column>
      <el-table-column
        prop="body"
        label="描述详情"
      ></el-table-column>
    </el-table>
    <!-- <el-pagination
      background
      layout="prev, pager, next"
      page-size="20"
    /> -->
  </div>
</template>

<script>
import { get } from '@/api/axios'
import { Mock } from '@/Mock'
import { Button, Table, TableColumn, Loading } from 'element-ui'
const BASE_URL = 'http://jsonplaceholder.typicode.com'
export default {
  name: 'App',
  components: {
    [Button.name]: Button,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  computed: {
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
      dataSource: [],
      loading: true
    }
  },
  mounted () {
    var Mockdata = this.factory(2000)
    Mock.mock(BASE_URL + '/comments', Mockdata)
  },
  methods: {
    startLoading: function () {
      this.loading = Loading.service({
        text: 'loading',
        fullscreen: true,
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    endLoading: function () {
      this.loading.close()
    },
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
      this.startLoading()
      get(url).then(obj => {
        var sj = obj.data
        console.log('data:' + JSON.stringify(sj))
        console.log(typeof (sj))
        this.dataSource = sj
        this.endLoading()
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
