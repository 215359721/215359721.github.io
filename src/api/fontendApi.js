import { get, post } from '@/plugins/axios'
let mainPath = process.env.VUE_APP_MAIN_PATH

//获得当前所有模板
export const getAllTemplates = () => {
  return get(`${mainPath}/templates?pageNum=1&rowNum=999`)
}
//获得所选模板的所有栏目
export const getItemsByTemplate = (templateId) => {
  return get(`${mainPath}/area/templateId?templateId=${templateId}`)
}
//获得当前用户布局数据
export const getLayoutByUser = (userid) => {
  return get(`${mainPath}/area/content?userId=${userid}`)
}
//获得当前用户使用的模板
export const getTemplateByUser = (userid) => {
  return get(`${mainPath}/template/user?userId=${userid}`)
}
//应用中心数据
export const getAppsData = (userid) => {
  return get(`${mainPath}/user/app?userid=${userid}`)
}
//常用服务数据
export const getServicesData = (userid) => {
  return get(`${mainPath}/user/services?userid=${userid}`)
}
//四创新闻数据
export const getNewsData = (subjectId, pageSize) => {
  return get(`${mainPath}/sc/article?subjectId=${subjectId}&curPage=1&pageSize=${pageSize}`)
}
//个人待办数据（待审批）
export const getTaskData_unapproval = (userid) => {
  return get(`${mainPath}/taskStart/page/noToken?userId=${userid}&pageNum=1&rowNum=5&todoStatus=1`)
}
//个人待办数据（已审批）
export const getTaskData_approvaled = (userid) => {
  return get(`${mainPath}/taskStart/page/noToken?userId=${userid}&pageNum=1&rowNum=5&todoStatus=2`)
}
//个人待办数据（已完结）
export const getTaskData_finished = (userid) => {
  return get(`${mainPath}/taskStart/page/noToken?userId=${userid}&pageNum=1&rowNum=5&ifFinal=true`)
}
//个人待办（获得待办详情）
export const getTaskDetail = (taskStartId) => {
  return get(`${mainPath}/portaltask/1.0/taskStart/detail/noToken?taskStartId=${taskStartId}`)
}
//日程（获得所有日程数据）
export const getScheduleData = (userId) => {
  return get(`${mainPath}/aspcalendars/user?userId=${userId}&pageNum=1&rowNum=99`)
}
//日程（提交新日程）
export const commitNewSchedule = (data, userId) => {
  return post(`${mainPath}/aspcalendar?userId=${userId}`, data)
}
//日程（修改日程）
export const updateSchedule = (data, userId) => {
  return post(`${mainPath}/aspcalendar?userId=${userId}`, data)
}
//日程（删除日程）
export const deleteSchedule = (userId, scheduleId) => {
  return post(`${mainPath}/aspcalendars?userId=${userId}&aspcalendarIds=${scheduleId}`)
}