export default [
  {
    icon: 'android-desktop',
    name: 'categories',
    title: '测试类目管理',
    children: [
      {
        title: '测试类目列表',
        route: '/categories/list'
      }
    ]
  },
  {
    icon: 'android-desktop',
    name: 'projects',
    title: '测试题管理',
    children: [
      {
        title: '测试题列表',
        route: '/projects/list'
      },
      {
        title: '测试题基础信息配置页',
        route: '/projects/deploy'
      }
    ]
  },
  {
    icon: 'android-desktop',
    name: 'userManage',
    title: '用户管理',
    children: [
      {
        title: '用户管理',
        route: '/userManage/list'
      },
      {
        title: '用户详情',
        route: '/userManage/detail'
      }
    ]
  },
  {
    icon: 'android-desktop',
    name: 'order',
    title: '订单管理',
    children: [
      {
        title: '订单列表',
        route: '/order/list'
      }
    ]
  },
  {
    icon: 'android-desktop',
    name: 'financing',
    title: '财务管理',
    children: [
      {
        title: '财务管理',
        route: '/financing/list'
      }
    ]
  }
]
