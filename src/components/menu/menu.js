define(function(require, exports, module) {
    require('./menu.css');
    module.exports = Vue.component('Menu', {
        template: ['<div class="view-box">',
            '  <el-container style="height: 100%;">',
            '    <el-header style="text-align: left; color: white; background: #545c64;">',
            '      管理系统后台',
            '      <el-dropdown style="color: white; float: right" trigger="click">',
            '        <span class="el-dropdown-link">',
            '          {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>',
            '        </span>',
            '        <el-dropdown-menu slot="dropdown">',
            '          <el-dropdown-item icon="el-icon-remove-outline"><span @click="logout">退出</span></el-dropdown-item>',
            '        </el-dropdown-menu>',
            '      </el-dropdown>',
            '    </el-header>',
            '    <el-container>',
            '      <el-aside width="160px" style="overflow: hidden; background-color: #545c64">',
            '        <el-menu :unique-opened="true" :default-active="num" class="el-menu-vertical-demo" text-color="#fff" background-color="#545c64" active-text-color="#ffd04b">',
            '          <template v-for="(item, index) in menuList">',
            '            <el-submenu class="menu-li" v-if="item.children && item.children.length > 0" :index="item.num">',
            '              <template slot="title">',
            '                <i :class="item.icon"></i>',
            '                <span>{{ item.name }}</span>',
            '              </template>',
            '              <template v-for="(item2, index2) in item.children">',
            '                <el-menu-item :index="item2.num" class="menu-li" @click="goPage(item2)" >{{ item2.name }}</el-menu-item>',
            '              </template>',
            '            </el-submenu>',
            '            <el-menu-item class="menu-li" @click="goPage(item)" v-else :index="item.num">',
            '              <i :class="item.icon"></i>',
            '              <span slot="title">{{ item.name }}</span>',
            '            </el-menu-item>',
            '          </template>',
            '        </el-menu>',
            '      </el-aside>',
            '      <el-main>',
            '        <router-view></router-view>',
            '      </el-main>',
            '    </el-container>',
            '  </el-container>',
            '</div>',
        ].join(""),
        data: function() { // 数据
            return {
                username: "admin",
                num: this.$route.query.num || "1",
                menuList: [
                    // { 
                    //   name: '本地', 
                    //   path: '/admin/index',
                    //   num: '1',
                    //   children: false,
                    //   icon: 'el-icon-house'
                    // },
                    {
                        name: '系统',
                        num: '2',
                        icon: 'el-icon-setting',
                        children: [{
                                path: '/admin/systemMsg',
                                name: '系统设置',
                                num: '2-1',
                                children: false
                                // children: [
                                //   {
                                //     name: '基本信息',
                                //     path: '/admin/systemMsg',
                                //     num: '2-1-1',
                                //     children: false
                                //   },
                                //   {
                                //     name: '时间配置',
                                //     path: '/admin/systemTimeConfig',
                                //     num: '2-1-2',
                                //     children: false
                                //   },
                                //   {
                                //     name: '夏令时',
                                //     path: '/admin/systemDST',
                                //     num: '2-1-3',
                                //     children: false
                                //   }
                                // ]
                            },
                            {
                                name: '系统维护',
                                num: '2-2',
                                path: '/admin/systemDefend',
                                children: false
                                // children: [
                                //   {
                                //     name: '升级维护',
                                //     path: '/admin/systemDefend',
                                //     num: '2-2-1',
                                //     children: false
                                //   },
                                //   {
                                //     name: '日志',
                                //     path: '/admin/systemLog',
                                //     num: '2-2-2',
                                //     children: false
                                //   }
                                // ]
                            },
                            {
                                name: '用户管理',
                                num: '2-3',
                                path: '/admin/systemUser',
                                children: false,
                                // children: [
                                //   {
                                //     name: '用户管理',
                                //     path: '/admin/systemUser',
                                //     num: '2-3-1',
                                //     children: false
                                //   },
                                //   {
                                //     name: '在线用户',
                                //     path: '/admin/systemOnlineUser',
                                //     num: '2-3-2',
                                //     children: false
                                //   }
                                // ]
                            }
                        ]
                    },
                    {
                        name: '网路',
                        num: '3',
                        icon: 'el-icon-s-platform',
                        children: [{
                                name: '基本配置',
                                num: '3-1',
                                children: false,
                                path: '/admin/netConfig',
                                // children: [
                                //   {
                                //     name: 'TCP_IP',
                                //     path: '/admin/netConfig',
                                //     num: '3-1-1',
                                //     children: false
                                //   },
                                //   {
                                //     name: '4G_5G拨号',
                                //     path: '/admin/net4gOr5g',
                                //     num: '3-1-2',
                                //     children: false
                                //   },
                                //   {
                                //     name: 'WIFI配置',
                                //     path: '/admin/netWIFI',
                                //     num: '3-1-3',
                                //     children: false
                                //   }
                                // ]
                            },
                            {
                                name: '高级配置',
                                num: '3-2',
                                children: false,
                                path: '/admin/netHighConfig',
                                // children: [
                                //   {
                                //     name: 'SNMP',
                                //     path: '/admin/netHighConfig',
                                //     num: '3-2-1',
                                //     children: false
                                //   },
                                //   {
                                //     name: '平台接入',
                                //     path: '/admin/netPlatform',
                                //     num: '3-2-2',
                                //     children: false
                                //   },
                                //   {
                                //     name: '集成协议',
                                //     path: '/admin/netAgreement',
                                //     num: '3-2-3',
                                //     children: false
                                //   }
                                // ]
                            }
                        ]
                    },
                    {
                        name: '音视频',
                        num: '4',
                        icon: 'el-icon-video-camera',
                        children: [{
                                name: '音视频',
                                path: '/admin/audio',
                                num: '4-1',
                                children: false
                            },
                            // {
                            //   name: '视频',
                            //   path: '/admin/video',
                            //   num: '4-2',
                            //   children: false
                            // }
                        ]
                    },
                    {
                        name: '图像',
                        num: '5',
                        icon: 'el-icon-picture-outline',
                        children: [{
                            name: '显示设置',
                            path: '/admin/pictureShow',
                            num: '5-1',
                            children: false
                        }]
                    },
                    {
                        name: '存储',
                        num: '6',
                        icon: 'el-icon-s-order',
                        children: [{
                                name: '计划配置',
                                num: '6-1',
                                children: false,
                                path: '/admin/recordVideo',
                                // children: [
                                //   {
                                //     name: '录像计划',
                                //     path: '/admin/recordVideo',
                                //     num: '6-1-1',
                                //     children: false
                                //   },
                                //   {
                                //     name: '抓图',
                                //     path: '/admin/catchPic',
                                //     num: '6-1-2',
                                //     children: false
                                //   }
                                // ]
                            },
                            {
                                name: '存储管理',
                                num: '6-2',
                                path: '/admin/localDisk',
                                children: false
                                // children: [
                                //   {
                                //     name: '本地磁盘',
                                //     path: '/admin/localDisk',
                                //     num: '6-2-1',
                                //     children: false
                                //   },
                                //   {
                                //     name: '硬盘管理',
                                //     path: '/admin/diskManage',
                                //     num: '6-2-2',
                                //     children: false
                                //   },
                                //   {
                                //     name: '网络硬盘',
                                //     path: '/admin/netDisk',
                                //     num: '6-2-3',
                                //     children: false
                                //   }
                                // ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            goPage: function(data) {
                if (data.path === this.$route.path) return
                // console.log(data)
                // this.num = data.num
                this.$router.push({
                    path: data.path,
                    query: {
                        num: data.num
                    }
                })
            },
            logout: function() {
                // sessionStorage.clear();
                this.$router.push({
                    path: "/"
                })
            }
        }
    })
})
