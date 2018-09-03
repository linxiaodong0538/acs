export default {
  path: 'financing',
  component: resolve => require(['@/pages/Financing'], resolve),
  children: [
    {
      path: 'list',
      component: resolve => require(['@/pages/Financing/List'], resolve)
    }
  ]
}
