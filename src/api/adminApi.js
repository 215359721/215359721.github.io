import axios from 'axios'
let mainPath = process.env.VUE_APP_MAIN_PATH
//取url上的字段
// function GetUrlParam (paraName) {
//   var url = document.location.toString();
//   var arrObj = url.split("?");

//   if (arrObj.length > 1) {
//     var arrPara = arrObj[1].split("&");
//     var arr;

//     for (var i = 0; i < arrPara.length; i++) {
//       arr = arrPara[i].split("=");

//       if (arr != null && arr[0] == paraName) {
//         return arr[1];
//       }
//     }
//     return "";
//   }
//   else {
//     return "";
//   }
// }

var portal_baseurl = mainPath
// if (GetUrlParam('base_url')) {
//   portal_baseurl = decodeURIComponent(GetUrlParam('base_url')) + 'portal/1.0'
// } else {
//   portal_baseurl = 'http://10.0.37.14:8923/portal/1.0'
// }
// 获取首页区域与内容栏目的详细信息
export function getContentArea () {
  return axios({
    url: portal_baseurl + '/area/content',
    method: 'get'
  })
}
// 新建区域
export function addArea (_obj) {
  var data = _obj
  return axios({
    url: portal_baseurl + `/area`,
    method: 'post',
    data
  })
}
// 删除区域
export function delArea (areaIds) {
  return axios({
    url: portal_baseurl + `/area`,
    method: 'delete',
    params: {
      areaIds
    }
  })
}

// 新建内容栏目与首页区域的关系
export function addContentArea (data) {
  return axios({
    url: portal_baseurl + `/content/area`,
    method: 'post',
    data: data
  })
}

// 解除内容栏目与首页区域的关系
export function removeContentArea (data) {
  return axios({
    url: portal_baseurl + `/content/area`,
    method: 'delete',
    data: data
  })
}

// 保存区域
export function saveArea (data) {
  return axios({
    url: portal_baseurl + '/area',
    method: 'put',
    data
  })
}
// 新建栏目
export function addContent (data) {
  return axios({
    url: portal_baseurl + `/content`,
    method: 'post',
    data: data
  })
}
// 更新栏目
export function updateContent (data) {
  return axios({
    url: portal_baseurl + '/content',
    method: 'put',
    data
  })
}
// 获取内容栏目
export function getContent (data) {
  return axios({
    url: portal_baseurl + '/content',
    method: 'get',
    params: data
  })
}
// 新建模板
export function addTemplate (data) {
  return axios({
    url: portal_baseurl + `/template/role`,
    method: 'post',
    data: data
  })
}
// 获取所有模板
export function getTemplates (data) {
  return axios({
    url: portal_baseurl + '/templates',
    method: 'get',
    params: data
  })
}

// 通过模板获取内容
export function getContentByTemplates (templateId) {
  return axios({
    url: portal_baseurl + '/area/templateId',
    method: 'get',
    params: {
      templateId
    }
  })
}

// 更新模板
export function updateTempalte (data) {
  return axios({
    url: portal_baseurl + '/templates',
    method: 'put',
    data
  })
}

// 删除模板
export function deleteTemplate (templateIds) {
  return axios({
    url: portal_baseurl + '/template?templateIds=' + templateIds,
    method: 'delete',
  })
}

// 删除栏目
export function deleteContent (contentIds) {
  return axios({
    url: portal_baseurl + '/content?contentIds=' + contentIds,
    method: 'delete',
  })
}

