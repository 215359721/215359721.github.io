(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{374:function(t,a,s){"use strict";s.r(a);var r=s(45),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),s("p",[t._v("布局为后台中门户的子组件，一个门户中包含多个布局，一个布局中包含一个或多个栏目，布局是网站中一个门户的重要组成单元，也是不可缺少的组成单元。")]),t._v(" "),s("h3",{attrs:{id:"布局主要属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局主要属性"}},[t._v("#")]),t._v(" 布局主要属性")]),t._v(" "),s("p",[t._v("id（单个布局的唯一标识）")]),t._v(" "),s("p",[t._v("起始坐标（x，y）")]),t._v(" "),s("p",[t._v("宽度（width）")]),t._v(" "),s("p",[t._v("高度（height）")]),t._v(" "),s("h3",{attrs:{id:"操作布局前需注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作布局前需注意"}},[t._v("#")]),t._v(" 操作布局前需注意")]),t._v(" "),s("p",[t._v("① 布局不是单独存在，而是属于某个门户，操作布局前请一定确认当前门户，即下拉框目前激活的门户，避免发生因选择门户不正确造成的布局设置有误等问题！")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/布局-注意-1.png")}}),t._v(" "),s("p",[t._v("② 布局内会显示布局ID及布局大小（宽 * 高），最小单位1，最大单位24，即一个单位为50px；宽高范围为（50px - 1200px）以此判定布局区域大小。")]),t._v(" "),s("p",[t._v("③ 布局内没有栏目时，可随意调整布局大小，不受控制；布局内有栏目时，会根据当前栏目所允许的最大、最小宽高值进行范围内调整，超出栏目规定宽高阈值会停止区域的调整。")]),t._v(" "),s("p",[t._v("④ 调整布局顺序及排列时，应注意不同布局宽度总和应<=24，为最优用户体验，建议多栏目同一行宽度值总和应正好为24（充满整个屏幕宽度）\n当不同布局同一行宽度>24时，将自动折行显示布局。")]),t._v(" "),s("h2",{attrs:{id:"添加布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加布局"}},[t._v("#")]),t._v(" 添加布局")]),t._v(" "),s("p",[t._v("管理后台 -> 门户管理 -> 选择要操作的门户 -> “添加布局组件”按钮")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/布局-添加-1.png")}}),t._v(" "),s("h2",{attrs:{id:"删除布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除布局"}},[t._v("#")]),t._v(" 删除布局")]),t._v(" "),s("p",[t._v("管理后台 -> 门户管理 -> 选择要操作的门户 -> 选择要删除的布局 -> 确认当前布局已没有栏目 -> 点击右上角“X”删除当前布局")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/布局-删除-1.png")}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/布局-删除-2.png")}}),t._v(" "),s("h2",{attrs:{id:"添加栏目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加栏目"}},[t._v("#")]),t._v(" 添加栏目")]),t._v(" "),s("p",[t._v("已创建的布局组件 -> 点击布局框下方“+” -> 弹出框内勾选要添加的栏目 -> 点击弹框“确认”完成添加 -> 点击“保存门户”保存已修改的布局数据")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/栏目-添加-1.png")}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/栏目-添加-2.png")}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/栏目-添加-3.png")}}),t._v(" "),s("h2",{attrs:{id:"删除栏目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除栏目"}},[t._v("#")]),t._v(" 删除栏目")]),t._v(" "),s("p",[t._v("已创建的布局组件（已添加栏目）-> 点击要删除栏目后方“x” ->  点击“保存门户”保存已修改的布局数据")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/栏目-删除-1.png")}}),t._v(" "),s("h2",{attrs:{id:"调整布局大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调整布局大小"}},[t._v("#")]),t._v(" 调整布局大小")]),t._v(" "),s("p",[t._v("已创建的布局组件 -> 鼠标放置到布局组件右下角，会出现“↘”箭头图例 -> 拖动实现布局大小的调整 -> 调整完成后点击“保存门户”保存已修改的布局数据")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/布局-调整大小-1.png")}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/布局-调整大小-2.png")}}),t._v(" "),s("h2",{attrs:{id:"移动-拖动-改变布局排列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动-拖动-改变布局排列"}},[t._v("#")]),t._v(" 移动|拖动，改变布局排列")]),t._v(" "),s("p",[t._v("已创建的布局组件 -> 鼠标放置到布局任意空白处，会出现“十”图例 -> 拖动布局实现布局位置的拖动调整 -> 调整完成后点击“保存门户”保存已修改的布局数据")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/布局-拖动-1.png")}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/布局-拖动-2.png")}})])}),[],!1,null,null,null);a.default=v.exports}}]);