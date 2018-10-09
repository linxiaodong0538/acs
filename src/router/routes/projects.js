export default {
  path: 'projects',
  component: resolve => require(['@/pages/Projects'], resolve),
  children: [
    {
      path: 'list',
      component: resolve => require(['@/pages/Projects/List'], resolve)
    },
    {
      path: 'deploy',
      component: resolve => require(['@/pages/Projects/Deploy'], resolve),
      redirect: 'deploy/base',
      children: [
        {
          path: 'result',
          component: resolve => require(['@/pages/Projects/Deploy/SetResult'], resolve)
        },
        {
          path: 'topic',
          component: resolve => require(['@/pages/Projects/Deploy/SetTopic'], resolve)
        },
        {
          path: 'base',
          component: resolve => require(['@/pages/Projects/Deploy/SetBase'], resolve)
        }
      ]
    },
    {
      path: 'picture',
      component: resolve => require(['@/pages/Projects/Picture'], resolve)
    }
  ]
}
