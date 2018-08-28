export default {
  path: 'categories',
  component: resolve => require(['@/pages/Categories'], resolve),
  children: [
    {
      path: 'list',
      component: resolve => require(['@/pages/Categories/List'], resolve)
    }
  ]
}
