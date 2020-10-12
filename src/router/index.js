define(function(require, exports, module) {
  module.exports = new VueRouter({
    routes: [{
        path: '/',
        component: require('../pages/login/login.js')
      },
      {
        path: '/login',
        component: require('../pages/login/login.js')
      },
      {
        path: '/admin',
        component: require('../components/menu/menu.js'),
        children: [
          // {
          //   path: '/',
          //   name: 'index',
          //   component: require('../pages/index/index.js')
          // },
          // {
          //   path: '/admin/index',
          //   name: 'indexPage',
          //   component: require('../pages/index/index.js')
          // },
          {
            path: '/admin/systemMsg',
            name: 'systemMsg',
            component: require('../pages/system/Msg/index.js')
          },
          {
            path: '/admin/systemDefend',
            name: 'systemDefend',
            component: require('../pages/system/Defend/index.js')
          },
          {
            path: '/admin/systemUser',
            name: 'systemUser',
            component: require('../pages/system/User/index.js')
          },
          {
            path: '/admin/netConfig',
            name: 'netConfig',
            component: require('../pages/net/netConfig/index.js')
          },
          {
            path: '/admin/netHighConfig',
            name: 'netHighConfig',
            component: require('../pages/net/netHighConfig/index.js')
          },
          {
            path: '/admin/audio',
            name: 'audio',
            component: require('../pages/media/audio/index.js')
          },
          {
            path: '/admin/pictureShow',
            name: 'picture',
            component: require('../pages/picture/pic/index.js')
          },
          {
            path: '/admin/localDisk',
            name: 'localDisk',
            component: require('../pages/memory/localDisk/index.js')
          },
          {
            path: '/admin/recordVideo',
            name: 'recordVideo',
            component: require('../pages/memory/recordVideo/index.js')
          },
          // {
          //   path: '/navAdmin/indexPage',
          //   name: 'indexPage',
          //   component: indexPage,
          //   meta: {
          //       keepAlive: false
          //   }
          // }
        ]
      }
    ]
  })
})
