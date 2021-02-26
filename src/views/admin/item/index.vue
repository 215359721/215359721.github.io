<template>
  <div class="column_container">
    <el-container>
      <!-- 头部功能菜单 -->
      <el-header>
        <el-row>
          <el-button
            type="primary"
            style="display: inline-block"
            @click="showDialog"
          >添加栏目</el-button>
          <el-button
            type="warning"
            :disabled="contentRadio == ''"
            icon="el-icon-edit"
            @click="editDialog"
            circle
          ></el-button>
          <el-popconfirm
            title="确定删除此模板吗？"
            @onConfirm="deleteContent"
          >
            <el-button
              type="danger"
              :style="{'margin-left':'10px'}"
              :disabled="contentRadio == ''"
              slot="reference"
              icon="el-icon-delete"
              circle
            ></el-button>
          </el-popconfirm>
          <div class="dept_search">
            <el-input
              placeholder="请输入栏目名称"
              prefix-icon="el-icon-search"
              @change="searchColumn"
              v-model="filterText"
            ></el-input>
          </div>
        </el-row>
      </el-header>
      <!-- 内容列表 -->
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%"
      >
        <el-table-column
          label
          width="35"
        >
          <template slot-scope="scope">
            <el-radio
              :label="scope.row.contentid"
              class="edit-radio"
              v-model="contentRadio"
              @change.native="getContentRow(scope.$index, scope.row)"
            ></el-radio>
          </template>
        </el-table-column>
        <el-table-column
          label="序号"
          type="index"
          width="50"
        >
        </el-table-column>
        <el-table-column
          prop="contentname"
          label="名称"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="minwidth"
          label="最小宽度"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="minheight"
          label="最小高度"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="maxwidth"
          label="最大宽度"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="maxheight"
          label="最大高度"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="sfzsbt"
          label="是否隐藏栏目标题"
          width="160"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.sfzsbt == "1" ? "是" : "否" }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="ifsc"
          label="是否是四创栏目标题"
          width="160"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.ifsc == "1" ? "是" : "否" }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="contenturl"
          label="访问地址"
        >
        </el-table-column>
        <el-table-column
          prop="moreurl"
          label="更多地址"
        > </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
        >
        </el-table-column>
      </el-table>
      <el-pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.rowNum"
        @pagination="queryParams"
        background
        @current-change="handleCurrentChange"
      />
    </el-container>

    <el-dialog
      :title="dialogType == 'new' ? '新建栏目' : '编辑栏目'"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        :model="column"
        :label-position="'left'"
        ref="column"
        label-width="100px"
      >
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="栏目名称">
              <el-input v-model="column.contentname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="栏目标签">
              <el-input v-model="column.contentlabel"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="访问地址">
          <el-input v-model="column.contenturl"></el-input>
        </el-form-item>
        <el-form-item label="更多访问地址">
          <el-input v-model="column.moreurl"></el-input>
        </el-form-item>
        <el-row :gutter="10">
          <el-col :span="11">
            <el-form-item label="最小宽度">
              <el-input-number
                style="width: 120px"
                v-model="column.minwidth"
                :min="1"
                :max="24"
              ></el-input-number>
            </el-form-item>
          </el-col>

          <el-col :span="11">
            <el-form-item label="最大宽度">
              <el-input-number
                style="width: 120px"
                v-model="column.maxwidth"
                :min="1"
                :max="24"
              ></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="11">
            <el-form-item label="最小高度">
              <el-input-number
                style="width: 120px"
                v-model="column.minheight"
                :min="1"
                :max="24"
              ></el-input-number>
            </el-form-item>
          </el-col>

          <el-col :span="11">
            <el-form-item label="最大高度">
              <el-input-number
                style="width: 120px"
                v-model="column.maxheight"
                :min="1"
                :max="24"
              ></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="11">
            <el-form-item label="排序值">
              <el-input-number
                style="width: 120px"
                v-model="column.sort"
                :min="1"
                :max="100"
              ></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="11">
            <el-form-item
              label="是否显示栏目标题"
              :label-width="formLabelWidth"
            >
              <el-switch v-model="column.sfzsbt"></el-switch>
            </el-form-item>
          </el-col>

          <el-col :span="11">
            <el-form-item
              label="是否是四创栏目"
              :label-width="formLabelWidth"
            >
              <el-switch v-model="column.ifsc"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="confirmColumn"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  addContent,
  getContent,
  deleteContent,
  updateContent,
} from "@/api/adminApi";
import { Loading } from 'element-ui'
export default {
  components: {
    [Loading.name]: Loading,
  },
  data () {
    return {
      column: {
        contentname: "",
        contenturl: "",
        ifsc: false,
        sfzsbt: false,
        maxheight: "",
        maxwidth: "",
        minheight: "",
        minwidth: "",
        moreurl: "",
        sort: "",
      },
      queryParams: {
        pageNum: 1,
        rowNum: 10,
      },
      contentRadio: "",
      contentSelection: null,
      dialogType: "",
      total: 0,
      formLabelWidth: "130px",
      dialogFormVisible: false,
      filterText: "",
      tableData: [],
      loadingInstance: null,//loading实例
    };
  },
  created () {
    this.getContent(1, 10);
  },
  methods: {
    /**
     * 编辑按钮点击
     */
    async editDialog () {
      this.dialogFormVisible = true;
      this.dialogType = "edit";
      let formdata = this.contentSelection;
      this.$logs('编辑按钮点击-formdata:', formdata);
      this.column = formdata;
      this.column["ifsc"] = formdata.ifsc == "1" ? true : false;
      this.column["sfzsbt"] = formdata.sfzsbt == "1" ? true : false;
      this.$logs('编辑按钮点击-colum:', this.column);
    },
    /**
     * 删除布局
     */
    async deleteContent () {
      this.$logs('删除布局contentSelection：', this.contentSelection);
      this.showLoading()
      let result = await deleteContent(this.contentSelection.contentid);
      this.hideLoading()
      if (result.status == "200") {
        this.getContent(1, 10);
        this.contentRadio = "";
        this.$message({
          message: "删除布局成功",
          type: "success",
        });
      } else {
        this.$message.error("删除布局失败");
      }
    },
    showDialog () {
      this.dialogFormVisible = true;
      this.dialogType = "new";
      this.contentSelection = null;
      this.column = {};
    },
    searchColumn (value) {
      this.getContent(1, 10, value);
    },
    handleCurrentChange (value) {
      this.getContent(value, this.queryParams.rowNum);
    },
    getContentRow (index, row) {
      // 获取选中数据
      this.contentSelection = row;
    },
    async getContent (pageNum = 1, rowNum = 10, contentname = "") {
      let params = {
        contentname,
        // contentlable,
        pageNum,
        rowNum,
      };
      this.showLoading()
      let result = await getContent(params);
      this.hideLoading()
      this.$logs('getContent-result:', result);
      if (result.status == 200) {
        this.tableData = result.data.data;
        this.total = parseInt(result.data.recordsTotal);
      }
    },
    confirmColumn () {
      if (this.dialogType == "new") {
        this.newColumn();
      } else {
        this.editColumn();
      }
    },
    /**
     * 编辑栏目
     */
    async editColumn () {
      let body = {
        ...this.column,
        contentid: this.contentSelection.contentid,
      };
      body["ifsc"] = this.column.ifsc ? "1" : "0";
      body["sfzsbt"] = this.column.sfzsbt ? "1" : "0";
      this.$logs('编辑栏目上送:', body);
      this.showLoading()
      let result = await updateContent(body);
      this.hideLoading()
      this.$logs('编辑栏目返回:', result);
      if (result.status == 200) {
        this.dialogFormVisible = false;
        this.contentRadio = "";
        this.getContent(1, 10);
        this.$message({
          message: "编辑栏目成功",
          type: "success",
        });
      } else {
        this.$message.error("编辑栏目失败");
      }
    },
    /**
     * 创建栏目
     */
    async newColumn () {
      let body = {
        ...this.column,
      };
      body["ifsc"] = body.ifsc ? "1" : "0";
      body["sfzsbt"] = body.sfzsbt ? "1" : "0";
      this.$logs('创建栏目上送:', body);
      this.showLoading()
      let result = await addContent(body);
      this.hideLoading()
      this.$logs('创建栏目返回:', result);
      if (result.status == 200) {
        this.dialogFormVisible = false;
        this.getContent(1, 10);
        this.$message({
          message: "更新栏目成功",
          type: "success",
        });
      } else {
        this.$message.error("更新栏目失败");
      }
    },
    showLoading: function (opt) {
      let options = opt || {
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      }
      this.loadingInstance = Loading.service(options)
    },
    hideLoading: function () {
      this.loadingInstance.close()
    }
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
