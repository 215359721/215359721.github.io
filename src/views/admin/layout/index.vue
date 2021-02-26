<template>
  <div class="app-container">
    <el-container>
      <!-- 头部功能区域 -->
      <el-header height="50px">
        <div class="buttonGroup">
          <div class="group-left">
            <el-button
              class="left-each"
              @click="addLayout"
            >新建布局</el-button>
            <el-button
              class="left-each"
              type="success"
              @click="addLayoutItem"
            >添加布局组件</el-button>
            <el-button
              class="left-each"
              type="primary"
              @click="saveItem"
            >保存布局</el-button>
            <div
              v-show="showUnSave"
              class="alert-group left-each"
            >
              <el-alert
                effect="dark"
                title="您有更改未保存，退出前请“保存布局”"
                type="warning"
                show-icon
                :closable="false"
              />
            </div>
            <el-select
              class="left-each"
              v-model="defaultTemplateValue"
              placeholder="请选择模板"
              @change="changeTemplates"
            >
              <el-option
                v-for="item in templates"
                :key="item.templateId"
                :label="item.templateName"
                :value="item.templateId"
              ></el-option>
            </el-select>

            <el-popconfirm
              title="确定删除此模板吗？"
              @onConfirm="deleteTemplate"
            >
              <el-button
                class="left-each"
                type="danger"
                slot="reference"
                icon="el-icon-delete"
                circle
              ></el-button>
            </el-popconfirm>
          </div>
          <div class="group-right">
            <el-switch
              style="display: 'block'; float: right"
              v-model="sfzs"
              @change="switchChange"
              active-text="显示轮播图"
              inactive-text="隐藏轮播图"
            >
            </el-switch>
            <span><a
                class="show-index"
                href="../index.html"
                target="_blank"
              >首页预览</a></span>
          </div>
        </div>
      </el-header>
      <!-- 布局区域 -->
      <el-main>
        <!-- <div class="mys"> -->
        <grid-layout
          class="main-grid"
          :layout.sync="layout"
          :col-num="24"
          :row-height="50"
          :is-draggable="true"
          :is-resizable="true"
          :is-mirrored="false"
          :vertical-compact="true"
          :margin="[0, 0]"
          :use-css-transforms="true"
          @layout-updated="layoutUpdatedEvent"
          @layout-ready="layoutReadyEvent"
        >
          <grid-item
            v-for="item in layout"
            :id="'index_'+item.i"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :minW="item.minwidth"
            :minH="item.minheight"
            :maxW="item.maxwidth"
            :maxH="item.maxheight"
            :key="item.i"
            @moved="moved"
            @resize="resizeEvent"
            @resized="resizedEvent"
          >
            <div
              class="content_box"
              v-bind:class="{'un-save': (item.content.length == 0) }"
            >
              <span class="closeButton">
                <i
                  style="cursor: pointer"
                  class="el-icon-error inner-icon"
                  @click="delItem(item)"
                />
              </span>
              <div
                class="add_item"
                title="添加布局组件"
                v-if="item.content.length == 0"
                @click="chooseItem(item)"
              >
                <i class="el-icon-circle-plus"></i>
                <!-- {{item.i}} -->
              </div>
              <div
                class="show_item"
                v-else
              >
                <ul class="content">
                  <li
                    :key="element.contentid"
                    v-for="element in item.content"
                  >
                    栏目名称：{{ element.contentname }}
                    <span>最小宽度：{{ element.minwidth }} 最小高度:
                      {{ element.minheight }} 最大宽度：{{
                        element.maxwidth
                      }}
                      最大高度：{{ element.maxheight }}</span>
                    <span>
                      <i
                        style="cursor: pointer;margin-left:5px;font-size:16px;"
                        class="el-icon-circle-close"
                        @click="removeColumn(element, item)"
                      />
                    </span>
                  </li>
                  <!-- 模块内-添加栏目+号 -->
                  <li style="text-align: center;">
                    <i
                      class="el-icon-circle-plus inner-icon"
                      style="cursor: pointer;padding:0 10px;"
                      @click="chooseItem(item)"
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
          </grid-item>
        </grid-layout>
        <!-- </div> -->
      </el-main>
    </el-container>

    <el-dialog
      title="选择栏目"
      id="chooseItem"
      :append-to-body="true"
      :width="'900px'"
      :visible="isVisable"
      @close="closeDialog"
    >
      <div class="dept_search">
        <el-input
          placeholder="请输入栏目名称"
          prefix-icon="el-icon-search"
          @change="searchColumn"
          v-model="filterText"
        ></el-input>
      </div>
      <el-table
        v-loading="itemLoadingFlg"
        row-key="contentid"
        class="user-table"
        size="small"
        ref="multipleTable"
        highlight-current-row
        :data="appList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          label="序号"
          type="index"
          width="50"
        >
        </el-table-column>
        <el-table-column
          label
          width="30"
        >
          <template slot-scope="scope">
            <el-radio
              :label="scope.row.contentid"
              v-model="templateRadio"
              @change.native="getTemplateRow(scope.$index, scope.row)"
            >&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column
          prop="contentname"
          label="名称"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="minwidth"
          label="最小宽度"
        ></el-table-column>
        <el-table-column
          prop="minheight"
          label="最小高度"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="maxwidth"
          label="最大宽度"
        ></el-table-column>
        <el-table-column
          prop="maxheight"
          label="最大高度"
          show-overflow-tooltip
        ></el-table-column>
      </el-table>
      <el-pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.rowNum"
        @pagination="queryParams"
        background
        @current-change="handleCurrentPageChange"
      />
      <span slot="footer">
        <el-button
          type="primary"
          :disabled="chooseItemBtnDisable"
          @click="confirmChoose"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 填写新建布局名称 -->
    <el-dialog
      title="新建布局"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        :model="templateForm"
        ref="templateForm"
      >
        <el-form-item
          label="布局名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="templateForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="newTemplate"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 导入 ASP 平台通用组件包
import VueGridLayout from "vue-grid-layout";
import {
  getContentArea,
  addContentArea,
  addArea,
  delArea,
  saveArea,
  getContent,
  removeContentArea,
  getTemplates,
  getContentByTemplates,
  addTemplate,
  deleteTemplate,
  updateTempalte,
} from "@/api/adminApi";
import _ from "lodash";
import { Loading, Message, MessageBox } from 'element-ui'
export default {
  components: {
    [Loading.name]: Loading,
    [MessageBox.name]: MessageBox,
    [Message.name]: Message,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  props: {
    modalWidth: {
      type: String,
      required: false,
      default: "850px",
    },
    rootDeptId: {
      type: String,
      required: false,
      default: "orgRootDomain",
    },
    multi: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  async created () {
    this.getTemplates();
  },
  data () {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      templateForm: {
        name: "",
      },
      formLabelWidth: "120px",
      defaultTemplateValue: "",
      layout: [],
      total: 0,
      queryParams: {
        pageNum: 1,
        rowNum: 10,
      },
      appList: [],
      layoutMap: [],
      checkApp: [],
      multipleSelection: [],
      templateRadio: "",
      templateSelection: null,
      curTemplate: {},
      isVisable: false,
      filterText: "",
      newX: 0,
      newY: 0,
      curBox: {},
      templates: [],
      sfzs: true,
      chooseItemBtnDisable: true,//选择栏目按钮禁用状态标识
      loadingInstance: null,//loading实例
      showUnSave: false, //显示未保存布局标识
      itemLoadingFlg: false,//选择栏目loading
    };
  },

  methods: {
    handleCurrentPageChange (value) {
      let params = {
        pageNum: value,
        rowNum: this.queryParams.rowNum,
      };
      this.getContent(params);
    },
    /**
     * 轮播图开关
     */
    async switchChange (value) {
      this.$logs('显示轮播图:' + value)
      let body = {
        sfzs: value ? "1" : "0",
        templateId: this.curTemplate.templateId,
        templateName: this.curTemplate.templateName,
      };
      let result = await updateTempalte([body]);
      this.$logs('更新模板result:', result);
    },
    /**
     * 删除模板
     */
    async deleteTemplate () {
      if (this.defaultTemplateValue == "CASCPortal") {
        Message({
          message: "默认模板无法删除",
          type: "warning",
        });
        return;
      }
      let result = await deleteTemplate(this.defaultTemplateValue);
      if (result.status == "200") {
        this.getTemplates();
        Message({
          message: "删除布局成功",
          type: "success",
        });
      } else {
        Message.error("删除布局失败");
      }
    },
    addLayout () {
      this.dialogFormVisible = true;
    },
    /**
     * 新增模板
     */
    async newTemplate () {
      let body = {
        template: {
          sfzs: "1",
          templateName: this.templateForm.name,
        },
      };
      let result = await addTemplate(body);
      this.$logs('新增模板result：', result)
      if (result.status == 200) {
        this.templates.push(result.data.template);
        this.defaultTemplateValue = result.data.template.templateId;
        this.getContentByTemplates(result.data.template.templateId);

        this.dialogFormVisible = false;
        this.layout = [];
        this.templateForm.name = "";
      }
    },
    /**
     * 选择模板
     */
    changeTemplates (value) {
      this.$logs('选择模板changeTemplates:', value);
      if (this.showUnSave) {
        MessageBox.confirm('您有模板更改未保存, 是否继续切换?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.doChange(value)
        }).catch(() => { });
      } else {
        this.doChange(value)
      }
    },
    /**
     * 切换模板操作
     */
    doChange: function (value) {
      this.defaultTemplateValue = value;
      this.templates.forEach((item) => {
        if (item.templateId == value) {
          this.sfzs = item.sfzs == "1" ? true : false;
          this.curTemplate = item;
        }
      });
      this.getContentByTemplates(value);
    },
    /**
     * 获取模板下的区域
     */
    async getContentByTemplates (templateid) {
      this.showLoading()
      let result = await getContentByTemplates(templateid);
      this.hideLoading()
      this.$logs('获取模板下的区域result:', result);
      if (result.status == 200) {
        let areas = result.data;
        this.layout = areas.map((item, index) => {
          const limitResult = this.getLimitByContent(item.content);
          item["x"] = parseInt(item.x_cor);
          item["y"] = parseInt(item.y_cor);
          item["w"] = parseInt(item.width);
          item["h"] = parseInt(item.height);
          item["i"] = parseInt(index);
          item["minwidth"] = Number(limitResult.minwidth);
          item["minheight"] = Number(limitResult.minheight);
          item["maxwidth"] = Number(limitResult.maxwidth);
          item["maxheight"] = Number(limitResult.maxheight);
          if (item.content.length) {
            item["old"] = 1;
          }
          return item;
        });
        this.$logs("获取模板下的区域", this.layout);
      }
    },
    /**
     * 汇总计算当前区域下所有栏目极限值
     */
    getLimitByContent: function (allItem) {
      // this.$logs("getLimitByContent-", allItem);
      let limitResult = {
        minwidth: 0,
        minheight: 0,
        maxwidth: 1,
        maxheight: 1,
      };
      if (allItem.length) {
        limitResult.minwidth = allItem[0].minwidth;
        limitResult.minheight = allItem[0].minheight;
        limitResult.maxwidth = allItem[0].maxwidth;
        limitResult.maxheight = allItem[0].maxheight;
        if (allItem.length > 1) {
          //区域内有多个栏目
          for (let i = 0; i < allItem.length; i++) {
            if (Number(allItem[i].minwidth) < Number(limitResult.minwidth)) {
              limitResult.minwidth = allItem[i].minwidth;
              this.$logs("change:" + limitResult.minwidth);
            }
            if (Number(allItem[i].minheight) < Number(limitResult.minheight)) {
              limitResult.minheight = allItem[i].minheight;
              this.$logs("change:" + limitResult.minheight);
            }
            if (Number(allItem[i].maxwidth) > Number(limitResult.maxwidth)) {
              limitResult.maxwidth = allItem[i].maxwidth;
              this.$logs("change:" + limitResult.maxwidth);
            }
            if (Number(allItem[i].maxheight) > Number(limitResult.maxheight)) {
              limitResult.maxheight = allItem[i].maxheight;
              this.$logs("change:" + limitResult.maxheight);
            }
          }
        }
      }
      return limitResult;
    },
    //获取所有模板
    async getTemplates () {
      let params = {
        pageNum: 1,
        rowNum: 999,
      };
      const templates = await getTemplates(params);
      this.$logs('获取所有模板:', templates);
      this.templates = templates.data.data;
      this.defaultTemplateValue =
        this.templates.length != 0
          ? this.templates[0].templateId
          : "CASCPortal";
      this.sfzs = this.templates[0].sfzs == "1" ? true : false;
      this.curTemplate = this.templates.length != 0 ? this.templates[0] : {};
      this.getContentByTemplates(this.defaultTemplateValue);
    },
    /**
     * 获取内容栏目
     */
    async getContent (params) {
      this.itemLoadingFlg = true
      const contents = await getContent(params);
      this.itemLoadingFlg = false
      this.$logs('获取内容栏目:', contents);
      this.appList = contents.data.data;
      this.total = parseInt(contents.data.recordsTotal);
    },
    /**
     * 获取首页区域
     */
    async getContentArea () {
      const areas = await getContentArea();
      this.layout = areas.data.map((item, index) => {
        item["x"] = parseInt(item.x_cor);
        item["y"] = parseInt(item.y_cor);
        item["w"] = parseInt(item.width);
        item["h"] = parseInt(item.height);
        item["i"] = parseInt(index);
        return item;
      });
      this.$logs('获取首页区域:', this.layout);
    },
    /**
     * 任务删除前
     */
    async moved (i, newX, newY) {
      this.$logs('任务删除前 ### MOVED i=' + i + ', X=' + newX + ', Y=' + newY);
      this.$logs('任务删除前layout:', this.layout);
    },
    getTemplateRow (index, row) {
      // 获取选中数据
      this.chooseItemBtnDisable = false
      this.templateSelection = row;
    },
    chooseItem: function (item) {
      this.$logs('chooseItem-item:', item)
      this.chooseItemBtnDisable = true
      this.isVisable = true;
      this.curBox = item;
      this.$logs('chooseItem-curBox:', this.curBox)
      const params = {
        pageNum: 1,
        rowNum: 10,
      };
      this.getContent(params);
    },
    searchColumn (val) {
      const params = {
        pageNum: 1,
        rowNum: 10,
        contentname: val,
      };
      this.getContent(params);
    },
    spliceItem: function (elem) {
      this.$logs('spliceItem:', elem)
      this.addColumnToArea(elem);
    },
    /**
     * 模板删除栏目(点击叉号)
     */
    async removeColumn (element, item) {
      this.$logs('模板删除栏目element', element);
      const _arr = this.layout;
      const result = await removeContentArea([
        {
          areaID: item.areaID,
          contentid: element.contentid,
        },
      ]);
      this.showUnSave = true
      this.showLoading({
        target: '#index_' + item.i,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.$logs('模板删除栏目result', result);
      this.hideLoading()
      if (result.status == 200) {
        this.layout = _arr.map((o) => {
          if (o.areaID == item.areaID) {
            const idx = _.findIndex(o.content, element);
            item.content.splice(idx, 1);
            if (!o.content.length) {
              //恢复区域默认
              delete o.old
              o.h = o.height = 3
              o.w = o.width = 24
            }
          }
          return o;
        });
        this.$logs('模板删除栏目后layout:', this.layout)
      }
    },
    closeDialog: function () {
      this.handleClear();
    },
    /**
     * 布局大小变更事件
     */
    resizeEvent (i, newH, newW, newHPx, newWPx) {
      if (newH && newW) {
        const areaObj = {
          newH: newH,
          newHPx: newHPx,
          newW: newW,
          newWPx: newWPx,
        };
        this.$logs('布局变更[' + i + ']:', areaObj);
      }
    },
    /**
     * 布局大小变更后事件
     */
    resizedEvent (i, newH, newW, newHPx, newWPx) {
      if (!newH && !newW) {
        Message({
          message: "请先添加栏目再调整大小",
          type: "warning",
        });
      } else {
        const areaObj = {
          newH: newH,
          newHPx: newHPx,
          newW: newW,
          newWPx: newWPx,
        };
        this.$logs('布局变更后' + i + ':', areaObj);
      }
    },
    /**
     * 选择栏目确定点击
     */
    async confirmChoose () {
      const elem = this.templateSelection;
      this.$logs('confirmChoose-curBox:', this.curBox);
      this.templateSelection = {
        ...this.curBox,
        ...elem,
      };
      this.$logs('templateSelection:', this.templateSelection);
      const obj = {
        areaID: this.curBox.areaID,
        ...elem,
        status: "1",
      };
      obj.width = elem.minwidth
      obj.height = elem.minheight
      obj.w = elem.minwidth
      obj.h = elem.minheight
      this.$logs('选择栏目确定点击上送obj:', [obj])
      const result = await addContentArea([obj]);
      this.$logs('选择栏目确定点击result:', result);
      this.showUnSave = true
      if (result.status == "200") {
        Message({
          message: "添加栏目成功",
          type: "success",
        });
      } else {
        Message.error("添加栏目失败");
      }
      this.addColumnToArea(this.templateSelection);
      this.handleClear();
    },
    /**
     *  将栏目添加进区域
     */
    async addColumnToArea (elem) {
      this.$logs('添加之前layout:', this.layout)
      const _arr = this.layout;
      this.$logs('将栏目添加进区域element:', elem);
      this.layout = _arr.map((item) => {
        if (item.areaID === elem.areaID) {
          const idx = _.findIndex(item.content, elem);
          this.$logs('idx:', idx)
          if (idx === -1) {
            item.content.push(elem);
          } else {
            item.content.splice(idx, 1);
          }
        }
        return item;
      });
      this.$logs('添加之后layout:', this.layout)
      this.layoutFactory(this.layout)
    },
    handleClear () {
      this.isVisable = false;
      this.templateRadio = "";
      this.curBox = {};
    },
    /**
     * 当前行被点击
     */
    handleCurrentChange (row) {
      const idx = _.findIndex(this.checkApp, row);
      if (idx === -1) {
        if (this.multi) {
          this.checkApp.push(row);
        } else {
          this.checkApp = [row];
        }
      } else {
        this.checkApp.splice(idx, 1);
      }
      this.$refs.multipleTable.clearSelection();
      this.checkApp.forEach((row) => {
        this.$refs.multipleTable.toggleRowSelection(row, true);
      });
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    /**
     * 保存布局
     */
    async saveItem () {
      this.showLoading()
      this.$logs('保存布局saveItem:', this.layout)
      const _arr = this.layout.map((item) => {
        item["x_cor"] = item.x;
        item["y_cor"] = item.y;
        item["width"] = item.w;
        item["height"] = item.h;
        item["templateid"] = this.defaultTemplateValue;
        return item;
      });
      this.$logs('_arr:', _arr.length)
      const result = await saveArea(_arr);
      this.showUnSave = false
      this.hideLoading()
      this.$logs('保存布局result:', result);
      if (result.status == "200") {
        Message({
          message: "保存布局成功",
          type: "success",
        });
      } else {
        Message.error("保存布局失败");
      }

    },
    /**
     * 移除布局
     */
    async delItem (area) {
      this.$logs('移除布局delItem：', area);
      if (area.content.length != 0) {
        Message({
          message: "请先移除栏目再删除区域",
          type: "warning",
        });
        return;
      }
      // this.showUnSave = true
      this.showLoading()
      const result = await delArea(area.areaID);
      this.$logs('移除布局result:', result);
      this.hideLoading()
      if (result.status == 200) {
        this.layout = this.layout.filter((item) => item.areaID != area.areaID);
        Message({
          message: "删除区域成功",
          type: "success",
        });
      } else {
        Message.error("删除区域失败");
      }
    },
    /**
     * 保存布局
     */
    async savesArea (item) {
      this.$logs('保存布局savesArea：', item)
      item["x_cor"] = item.x;
      item["y_cor"] = item.y;
      item["width"] = item.w;
      item["height"] = item.h;
      item["templateid"] = this.defaultTemplateValue;
      const result = await saveArea([item]);
      this.$logs('保存布局result:', result);
      if (result.status == "200") {
        Message({
          message: "保存布局成功",
          type: "success",
        });
      } else {
        Message.error("保存布局失败");
      }
    },
    async addLayoutItem () {
      this.showUnSave = true
      // 产生随机宽高
      var itemW = 24;
      var itemH = 3;
      var addItem = {
        areaID: "",
        x: 0,
        y: this.layoutMap.length,
        x_cor: 0,
        y_cor: this.layoutMap.length,
        w: itemW,
        h: itemH,
        i: this.layout[this.layout.length - 1]
          ? parseInt(this.layout[this.layout.length - 1].i) + 1
          : 0,
        templateid: "",
        content: [],
      };
      if (this.layoutMap.length) {
        for (let r = 0, rLen = this.layoutMap.length; r < rLen; r++) {
          for (let c = 0; c <= this.layoutColNum - itemW; c++) {
            const res = this.regionalTest(
              c,
              r,
              itemW,
              rLen > r + itemH ? itemH : rLen - r
            );

            if (res.result) {
              // 更新添加数据内容
              addItem = {
                x: res.x,
                y: res.y,
                w: itemW,
                h: itemH,
                i: parseInt(this.layout[this.layout.length - 1].i) + 1,
              };

              c = this.layoutColNum + 1;
              r = rLen + 1;
            } else {
              c = res.offsetX;
            }
          }
        }
      }
      // 更新二维数组地图
      for (let itemR = 0; itemR < itemH; itemR++) {
        for (let itemC = 0; itemC < itemW; itemC++) {
          // 如果没有该行，初始化
          if (!this.layoutMap[addItem.y + itemR]) {
            this.layoutMap[addItem.y + itemR] = new Array(this.layoutColNum);
            for (let i = 0; i < this.layoutColNum; i++) {
              this.layoutMap[addItem.y + itemR][i] = 0;
            }
          }
          // 标记点
          this.layoutMap[addItem.y + itemR][addItem.x + itemC] = 1;
        }
      }
      // 添加数据
      addItem["width"] = addItem.w;
      addItem["height"] = addItem.h;
      addItem["templateid"] = this.defaultTemplateValue;
      this.showLoading()
      const result = await addArea(addItem);
      this.hideLoading()
      this.$logs('addArea-result:', result);
      addItem["areaID"] = result.data.areaID;
      this.layout.push(addItem);
      Message({
        message: "添加组件成功",
        type: "success",
      });
    },
    /**
     * 二维数组排序
     */
    SetSortPoint (arry) {
      var len = arry.length;
      for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
          if (this.SetSortRule(arry[j], arry[j + 1])) {
            var tmp = arry[j];
            arry[j] = arry[j + 1];
            arry[j + 1] = tmp;
          }
        }
      }
      return arry;
    },
    /**
     * 两个坐标比较大小
     */
    SetSortRule (p1, p2) {
      if (p1.y > p2.y) {
        return true;
      } else if (p1.y == p2.y) {
        return p1.x > p2.x;
      } else {
        return false;
      }
    },
    /**
     * 生成二维数组地图
     */
    genereatePlaneArr: function (data) {
      var map = [];
      if (Array.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          var one = data[i];
          // 循环行
          for (var r = one.y; r < one.y + one.h; r++) {
            // 循环列
            for (var c = one.x; c < one.x + one.w; c++) {
              // 检修当前行是否存在
              if (!map[r]) {
                map[r] = new Array(this.layoutColNum);

                for (let i = 0; i < this.layoutColNum; i++) {
                  map[r][i] = 0;
                }
              }
              // 占据为1
              map[r][c] = 1;
            }
          }
        }
      }
      return map;
    },
    /**
     * 区域检测 x,y 二维数据地图起始坐标点  w,h 检测区域宽高
     */
    regionalTest: function (x, y, w, h) {
      // 定义返回 x,y 偏移 及 是否有空位置
      let offsetX = 0;
      let offsetY = 0;
      let res = true;
      // 按区域循环检测 二维数组地图
      for (let r = 0; r < w; r++) {
        for (let c = 0; c <= h; c++) {
          const point = this.layoutMap[y + r]
            ? this.layoutMap[y + r][x + c]
            : 0;
          // 如该点被占据 记录偏移值
          if (point === 1) {
            res = false;
            offsetX = offsetX > x + c ? offsetX : x + c;
            offsetY = offsetY > y + r ? offsetY : y + r;
          }
        }
      }

      return {
        result: res,
        offsetX: offsetX,
        x: x,
        y: y,
      };
    },
    /**
     * 组件更新完成生命周期
     */
    layoutReadyEvent: function () {
      // 当插件加载完成后  获取现在的二维地图树
      this.layoutMap = this.genereatePlaneArr(this.layout);
    },
    layoutUpdatedEvent: function () {
      // 当插件内容布局发生变化后  获取现在的二维地图树
      this.layoutMap = this.genereatePlaneArr(this.layout);
    },
    /**
     * 随机数
     */
    rnd: function (m, n) {
      return (Math.random() * (m - n + 1) + n) | 0;
    },
    /**
     * 处理layout对象，删除重复循环的content
     */
    layoutFactory: function (des_layout) {
      des_layout.forEach(obj => {
        if (obj && obj.content) {
          //区域内有栏目
          obj.content.forEach(contOjb => {
            if (contOjb && contOjb.content) {
              delete contOjb.content
            }
          })
        } else {
          //区域内没有栏目
          this.$logs('区域' + obj.i + '内没有栏目')
        }
      });
      let tempLayout = this.layout;
      this.layout = tempLayout.map((item, index) => {
        const limitResult = this.getLimitByContent(item.content);
        item["x"] = parseInt(item.x_cor);
        item["y"] = parseInt(item.y_cor);
        item["w"] = (item.old) ? (parseInt(item.width)) : (Number(limitResult.minwidth));
        item["h"] = (item.old) ? (parseInt(item.height)) : (Number(limitResult.minheight));
        item["i"] = parseInt(index);
        item["minwidth"] = Number(limitResult.minwidth);
        item["minheight"] = Number(limitResult.minheight);
        item["maxwidth"] = Number(limitResult.maxwidth);
        item["maxheight"] = Number(limitResult.maxheight);
        item["old"] = 1;
        return item;
      });
      this.$logs('处理后的layout:', des_layout)
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

