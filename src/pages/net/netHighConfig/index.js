define(function(require, exports, module) {
    require('./index.css');
    module.exports = Vue.component('index', {
        template: ['<div>',
            '  <el-tabs v-model="activeName">',
            '    <el-tab-pane label="SNMP" name="first">',
            '      <p class="p-title">SNMP v1/v2</p>',
            '      <div class="net-item-box">',
            '        <el-checkbox v-model="integrate.enable">启用SNMPv1</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <el-checkbox v-model="integrate.enable">启用SNMPv2c</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">读共同体名称</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">写共同体名称</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">Trap地址</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">Trap端口</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">Trap团体名</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <p style="margin-top: 20px;" class="p-title">SNMP v3</p>',
            '      <div class="net-item-box">',
            '        <el-checkbox v-model="integrate.enable">启用SNMPv3</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">读安全名称</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">安全级别</label>',
            '        <el-select class="net-input" size="mini" v-model="platform.agreement">',
            '           <el-option label="TCP" value="TCP"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">认证算法</label>',
            '        <el-radio v-model="SNMP.radio" label="1">MD5</el-radio>',
            '        <el-radio v-model="SNMP.radio" label="2">SHA</el-radio>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">认证密码</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">私钥算法</label>',
            '        <el-radio v-model="SNMP.radio" label="1">DES</el-radio>',
            '        <el-radio v-model="SNMP.radio" label="2">AES</el-radio>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">私钥密码</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">写安全名称</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">安全级别</label>',
            '        <el-select class="net-input" size="mini" v-model="platform.agreement">',
            '           <el-option label="TCP" value="TCP"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div style="text-align: center; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    ',
            '    <el-tab-pane label="FTP" name="second">',
            '      <div class="net-item-box">',
            '        <label for="">服务器地址</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">端口</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">用户名</label>',
            '        <el-input style="width: 325px" class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '        <el-checkbox v-model="integrate.enable">匿名登录</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">密码</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">密码确认</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">目录结构</label>',
            '        <el-select class="net-input" size="mini" v-model="platform.agreement">',
            '           <el-option label="TCP" value="TCP"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">图片归档间隔</label>',
            '        <el-select class="net-input" size="mini" v-model="platform.agreement">',
            '           <el-option label="TCP" value="TCP"></el-option>',
            '        </el-select>',
            '        <span>天</span>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">图片名</label>',
            '        <el-select class="net-input" size="mini" v-model="platform.agreement">',
            '           <el-option label="TCP" value="TCP"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">&nbsp;</label>',
            '        <el-checkbox v-model="integrate.enable">上传图片</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">&nbsp;</label>',
            '        <el-button size="mini">测试</el-button>',
            '      </div>',
            '      <div style="text-align: center; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    ',
            '    <el-tab-pane label="Email" name="third">',
            '      <div class="net-item-box">',
            '        <label for="">发件人名称</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">发件人地址</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">SMTP服务器</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">SMTP端口</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">邮件加密</label>',
            '        <el-select class="net-input" size="mini" v-model="platform.agreement">',
            '           <el-option label="SSL" value="SSL"></el-option>',
            '           <el-option label="TLS" value="TLS"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <el-checkbox v-model="integrate.enable">图片附件</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">抓图时间间隔</label>',
            '        <el-select class="net-input" size="mini" v-model="platform.agreement">',
            '           <el-option label="SSL" value="SSL"></el-option>',
            '           <el-option label="TLS" value="TLS"></el-option>',
            '        </el-select>',
            '        <span>秒</span>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <el-checkbox v-model="integrate.enable">服务器认证</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">用户名</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">密码</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">密码确认</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <p style="margin-top: 20px;" class="p-title">收件人</p>',
            '      <el-table border :data="integrate.tableData" style="width: 100%; margin-top: 10px;">',
            '        <el-table-column align="center" prop="name" label="序号"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="收件人名称"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="收件人地址"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="测试">',
            '          <el-button size="mini" >测试</el-button>',
            '        </el-table-column>',
            '      </el-table>',
            '      <div style="text-align: center; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    ',
            '    <el-tab-pane label="平台接入" name="fourth">',
            '      <div class="net-item-box">',
            '        <label for="">平台接入方式</label>',
            '        <el-select class="net-input" size="mini" v-model="platform.accessType">',
            '           <el-option label="28181" value="28181"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">本地SIP端口</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.SIP"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">传输协议</label>',
            '        <el-select class="net-input" size="mini" v-model="platform.agreement">',
            '           <el-option label="TCP" value="TCP"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">白名单</label>',
            '        <el-button size="mini" type="success">编辑</el-button>',
            '      </div>',
            '      <div style="margin-top: 20px;">',
            '        <el-tag type="danger">平台1</el-tag>',
            '        <div class="net-item-box">',
            '          <el-checkbox v-model="platform.platform1.enable">启用</el-checkbox>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">协议版本</label>',
            '          <el-select class="net-input" size="mini" v-model="platform.platform1.agreementVersion">',
            '             <el-option label="GB/T28181-2016" value="GB/T28181-2016"></el-option>',
            '          </el-select>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">SIP服务器ID</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.SIP_ID"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">SIP服务器域</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.SIP_domain"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">SIP服务器地址</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.SIP_address"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">SIP服务器端口</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.SIP_port"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">SIP用户名</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.SIP_username"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">SIP用户认证ID</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.SIP_userId"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">密码</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.password"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">密码确认</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.re_pwd"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">注册有效期</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.validityTime"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">注册状态</label>',
            '          <el-select class="net-input" size="mini" v-model="platform.platform1.status">',
            '             <el-option label="TCP" value="TCP"></el-option>',
            '          </el-select>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">心跳周期</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.cycle"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">28181码流索引</label>',
            '          <el-select class="net-input" size="mini" v-model="platform.platform1.bitstream">',
            '             <el-option label="TCP" value="TCP"></el-option>',
            '          </el-select>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">注册间隔</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.interval"></el-input>',
            '        </div>',
            '        <div class="net-item-box">',
            '          <label for="">最大心跳超时次数</label>',
            '          <el-input class="net-input" size="mini" v-model="platform.platform1.maxTimes"></el-input>',
            '        </div>',
            '        <div style="text-align: center; margin-top: 10px;">',
            '          <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '        </div>',
            '      </div>',
            '    </el-tab-pane>',
            '    ',
            '    <el-tab-pane label="HTTPS" name="fifth">',
            '      <div class="net-item-box">',
            '        <el-checkbox v-model="integrate.enable">启用</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <el-checkbox v-model="integrate.enable">自动跳转HTTPS</el-checkbox>',
            '      </div>',
            '      <p style="margin-top: 20px;" class="p-title">证书详情</p>',
            '      <div class="net-item-box">',
            '        <label for="">已安装证书</label>',
            '        <el-button size="mini" type="danger">删除</el-button>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">属性</label>',
            '        <el-input style="vertical-align: top;" class="net-input" type="textarea" size="mini" v-model="platform.platform1.maxTimes"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">自签名证书</label>',
            '        <el-button size="mini" type="primary">导出</el-button>',
            '      </div>',
            '      <div style="text-align: center; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    ',
            '    <!-- <el-tab-pane label="QoS" name="sixth">',
            '      ',
            '    </el-tab-pane>',
            '    ',
            '    <el-tab-pane label="802.1x" name="seventh">',
            '      ',
            '    </el-tab-pane> -->',
            '    ',
            '    <el-tab-pane label="集成协议" name="eighth">',
            '      <div class="net-item-box">',
            '        <el-checkbox v-model="integrate.enable">启用ONVIF</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">ONVIF版本号</label>',
            '        <el-select class="net-input" size="mini" v-model="integrate.ONVIF">',
            '           <el-option label="12.11" value="12.11"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div style="overflow: hidden; margin-top: 20px;">',
            '        <label class="left">用户列表</label>',
            '        <span class="right">',
            '          <el-button @click="addUserDialog = true" size="mini" type="primary">添加</el-button>',
            '          <el-button size="mini"  type="success">修改</el-button>',
            '          <el-button size="mini"  type="danger">删除</el-button>',
            '        </span>',
            '      </div>',
            '      <el-table border :data="integrate.tableData" style="width: 100%; margin-top: 10px;">',
            '        <el-table-column width="80px" align="center" type="index" label="序号"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="用户名"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="用户类型"></el-table-column>',
            '      </el-table>',
            '    </el-tab-pane>',
            '    ',
            '  </el-tabs>',
            '  ',
            '  <el-dialog title="用户添加":visible.sync="addUserDialog">',
            '    <div>',
            '      <div class="net-item-box">',
            '        <label for="">用户名</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.platform1.maxTimes"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">密码</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.platform1.maxTimes"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">密码确认</label>',
            '        <el-input class="net-input" size="mini" v-model="platform.platform1.maxTimes"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">认证算法</label>',
            '        <el-radio class="user-type" v-model="SNMP.radio" label="视屏用户">视屏用户</el-radio>',
            '        <el-radio class="user-type" v-model="SNMP.radio" label="视屏用户">管理员</el-radio>',
            '        <el-radio class="user-type" v-model="SNMP.radio" label="视屏用户">操作员</el-radio>',
            '      </div>',
            '    </div>',
            '    <span slot="footer" class="dialog-footer">',
            '      <el-button @click="addUserDialog = false">取 消</el-button>',
            '      <el-button type="primary" @click="addUserDialog = false">确 定</el-button>',
            '    </span>',
            '  </el-dialog>',
            '</div>'
        ].join(""),
        data: function() { // 数据
            return {
                addUserDialog: false,
                activeName: 'first',
                SNMP: {
                    radio: false
                },
                platform: {
                    accessType: '28181',
                    SIP: '5060',
                    agreement: 'TCP',
                    whiteList: [],
                    platform1: {
                        enable: true,
                        agreementVersion: 'GB/T28181-2016',
                        SIP_ID: '22222',
                        SIP_domain: '',
                        SIP_address: '',
                        SIP_port: 222,
                        SIP_username: '',
                        SIP_userId: '',
                        password: '',
                        re_pwd: '',
                        validityTime: '',
                        status: '',
                        cycle: '',
                        bitstream: '',
                        interval: 123,
                        maxTimes: 29
                    }
                },
                integrate: {
                    enable: true,
                    ONVIF: '12.11',
                    tableData: [{
                        name: 'name'
                    }]
                }
            }
        },
        methods: {}
    })
})
