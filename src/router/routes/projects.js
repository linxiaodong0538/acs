export default {
  path: 'projects',
  component: resolve => require(['@/pages/Projects'], resolve),
  children: [
    {
      path: 'list',
      component: resolve => require(['@/pages/Projects/List'], resolve)
    }
  ]
}
