export default {
  path: 'userManage',
  component: resolve => require(['@/pages/UserManage'], resolve),
  children: [{
      path: 'list',
      component: resolve => require(['@/pages/UserManage/List'], resolve)
    },
    
    {
      path: 'detail',
      component: resolve => require(['@/pages/UserManage/Detail'], resolve)
    }
  ]
}
