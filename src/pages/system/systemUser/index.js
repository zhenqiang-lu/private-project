define(function(require, exports, module) {
    require('./index.css');

    var usersList = require('../../../api/system.js').usersList;

    module.exports = Vue.component('index', {
        template: ['<div>',
            '  <el-tabs v-model="activeName">',
            '    <el-tab-pane label="用户管理" name="first">',
            '      <p style="margin-top: 10px;" class="p-title">',
            '        <span>日志列表</span> ',
            '        <span class="right">',
            // '          <el-button class="user-btn" type="primary" size="mini">安全问题</el-button>',
            '          <el-button @click="addUser" class="user-btn" type="primary" size="mini">添加</el-button>',
            '        </span>',
            '      </p>',
            '      <el-table border :data="allUsers.tableData" style="width: 100%; margin-top: 10px;">',
            '        <el-table-column  width="80px" align="center" prop="name" label="序号"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="用户名"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="角色"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="在线状态"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="登录时间"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="创建时间"></el-table-column>',
            '        <el-table-column width="300px" align="center" label="操作">',
            '          <template>',
            '            <el-button type="success" size="mini">修改</el-button>',
            '            <el-button type="danger" size="mini">删除</el-button>',
            '          </template>',
            '        </el-table-column>',
            '      </el-table>',
            '    </el-tab-pane>',
            // '    <el-tab-pane label="在线用户" name="second">',
            // '      <p style="margin-top: 10px;" class="p-title">',
            // '        <span>用户列表</span> ',
            // '        <span class="right">',
            // '          <el-button class="user-btn" type="primary" size="mini">刷新</el-button>',
            // '        </span>',
            // '      </p>',
            // '      <el-table border :data="onlineUsers.tableData" style="width: 100%; margin-top: 10px;">',
            // '        <el-table-column  width="80px" align="center" prop="name" label="序号"></el-table-column>',
            // '        <el-table-column align="center" prop="name" label="用户名"></el-table-column>',
            // '        <el-table-column align="center" prop="name" label="用户类型"></el-table-column>',
            // '        <el-table-column align="center" prop="name" label="IP地址"></el-table-column>',
            // '        <el-table-column align="center" prop="name" label="用户操作时间"></el-table-column>',
            // '      </el-table>',
            // '    </el-tab-pane>',
            '  </el-tabs>',
            '  ',
            '  <el-dialog title="添加用户" :visible.sync="dialogUser">',
            '    <div>',
            '      <div class="dialog-item-box">',
            '        <label for="">用户名</label>',
            '        <el-input class="dialog-item-input" v-model="dialogData.userName" size="mini"></el-input>',
            '      </div>',
            '      <div class="dialog-item-box">',
            '        <label for="">用户类型</label>',
            '        <el-select class="dialog-item-input" v-model="dialogData.userType" size="mini">',
            '          <el-option label="操作员" value="operator"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="dialog-item-box">',
            '        <label for="">管理员密码</label>',
            '        <el-input class="dialog-item-input" v-model="dialogData.adminPwd" size="mini"></el-input>',
            '      </div>',
            '      <div class="dialog-item-box">',
            '        <label for="">密码</label>',
            '        <el-input class="dialog-item-input" v-model="dialogData.password" size="mini"></el-input>',
            '      </div>',
            '      <div class="dialog-item-box">',
            '        <label for="">密码确认</label>',
            '        <el-input class="dialog-item-input" v-model="dialogData.rePwd" size="mini"></el-input>',
            '      </div>',
            '      <div>',
            '        <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>',
            '          <div style="margin: 1px 0;"></div>',
            '          <el-checkbox-group @change="handleCheckedChange" v-model="checked">',
            '            <el-checkbox v-for="item in labels" :label="item.value" :key="item.value">{{ item.label }}</el-checkbox>',
            '          </el-checkbox-group>',
            '      </div>',
            '    </div>',
            '    <span slot="footer" class="dialog-footer">',
            '      <el-button size="mini" @click="dialogUser = false">取 消</el-button>',
            '      <el-button size="mini" type="primary" @click="dialogUser = false">确 定</el-button>',
            '    </span>',
            '  </el-dialog>',
            '</div>'
        ].join(""),
        data: function() { // 数据
            return {
                activeName: 'first',
                dialogUser: false,
                allUsers: {
                    tableData: []
                },
                onlineUsers: {
                    tableData: [{
                        name: 'name'
                    }]
                },
                dialogData: {
                    userName: '',
                    userType: '',
                    adminPwd: '',
                    password: '',
                    rePwd: '',
                    dataSet: []
                },
                checkAll: false,
                checked: ['1', '3'],
                labels: [{
                        label: '远程设置参数',
                        value: '1'
                    },
                    {
                        label: '远程查看日志,状态',
                        value: '2'
                    },
                    {
                        label: '远程升级,格式化',
                        value: '3'
                    },
                    {
                        label: '远程语音对讲',
                        value: '4'
                    },
                ],
                isIndeterminate: true
            }
        },
        created: function () {
            //获取用户管理列表
            this.getUsersList();
        },
        methods: {
            getUsersList: function () {
                var _this = this;
                usersList({}).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.allUsers.tableData = data.data
                    }else{
                        _this.$message.error("获取用户管理列表失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("用户管理列表请求失败")
                    _this.allUsers.tableData = [
                        {name: '测试', id: 345}
                    ]
                    return;
                })
            },
            addUser: function() {
                this.dialogUser = true
            },
            handleCheckAllChange: function(val) {
                this.checked = val ? this.labels.map(function(res) {
                    return res.value
                }) : []
            },
            handleCheckedChange: function(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.labels.length;
            }
        }
    })
})
