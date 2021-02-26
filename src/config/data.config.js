//导航菜单
const menuList = [
  {
    name: '首页',
    key: 'index',
    subs: []
  },
  {
    name: '企业赋能',
    key: 'qx',
    subs: [
      {
        name: 'subs1',
        key: 'sub-1',
      },
      {
        name: 'subs2',
        key: 'sub-2',
      },
      {
        name: 'subs3',
        key: 'sub-3',
      },
      {
        name: 'subs4',
        key: 'sub-4',
      }
    ]
  },
  {
    name: '人才赋能',
    key: 'rc',
    subs: []
  },
  {
    name: '公共赋能',
    key: 'gg',
    subs: []
  },
  {
    name: '开放平台',
    key: 'kf',
    subs: []
  }
]

export {
  menuList
}