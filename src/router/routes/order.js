export default {
  path: 'order',
  component: resolve => require(['@/pages/Order'], resolve),
  children: [{
    path: 'list',
    component: resolve => require(['@/pages/Order/List'], resolve)
  }]
}
