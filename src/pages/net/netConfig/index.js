define(function(require, exports, module) {
    require('./index.css');
    module.exports = Vue.component('index', {
        template: ['<div>',
            '  <el-tabs v-model="activeName">',
            '    <el-tab-pane label="TCP/IP" name="first">',
            '      <div class="net-item-box">',
            '        <label for="">网卡类型</label>',
            '        <el-select class="net-input" size="mini" v-model="TCPIP.netCardType">',
            '           <el-option label="自适应" value="自适应"></el-option>',
            '           <el-option label="10M 半双工" value="10M 半双工"></el-option>',
            '           <el-option label="10M 全双工" value="10M 全双工"></el-option>',
            '           <el-option label="100M 半双工" value="100M 半双工"></el-option>',
            '           <el-option label="100M 全双工" value="100M 全双工"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">&nbsp;</label>',
            '        <el-checkbox v-model="TCPIP.autoGet">自动获取</el-checkbox>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">设备IPv4地址</label>',
            '        <el-input class="net-input" size="mini" v-model="TCPIP.ipv4Address"></el-input>',
            '        <el-button type="primary" size="mini">测试</el-button>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">IPv4子网掩码</label>',
            '        <el-input class="net-input" size="mini" v-model="TCPIP.ipv4SubnetMask"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">IPv4默认网关</label>',
            '        <el-input class="net-input" size="mini" v-model="TCPIP.ipv4NetCard"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">IPv6模式</label>',
            '        <el-select class="net-input" size="mini" v-model="TCPIP.ipv6Model">',
            '           <el-option label="路由公告" value="路由公告"></el-option>',
            '        </el-select>',
            '        <el-button type="primary" size="mini">查看路由公告</el-button>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">设备IPv6地址</label>',
            '        <el-input class="net-input" size="mini" v-model="TCPIP.ipv6Address"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">IPv6子网掩码</label>',
            '        <el-input class="net-input" size="mini" v-model="TCPIP.ipv6SubnetMask"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">IPv6默认网关</label>',
            '        <el-input class="net-input" size="mini" v-model="TCPIP.ipv6NetCard"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">物理地址</label>',
            '        <el-input class="net-input" size="mini" v-model="TCPIP.physicalAddress"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">MTU</label>',
            '        <el-input class="net-input" size="mini" v-model="TCPIP.MTU"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">多播地址</label>',
            '        <el-input class="net-input" size="mini" v-model="TCPIP.theMulticastAddress"></el-input>',
            '      </div>',
            '      <p style="margin-top: 10px;" class="p-title">DNS服务器配置</p>',
            '      <div class="net-item-box">',
            '        <label for="">首选DNS服务器</label>',
            '        <el-input disabled class="net-input" size="mini" v-model="TCPIP.firstDNS"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">备用DNS服务器</label>',
            '        <el-input disabled class="net-input" size="mini" v-model="TCPIP.secondDNS"></el-input>',
            '      </div>',
            '      <div style="text-align: center; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="DDNS" name="second">',
            '      <el-checkbox v-model="DDNS.enable">启用DDNS</el-checkbox>',
            '      <div class="net-item-box">',
            '        <label for="">DDNS类型</label>',
            '        <el-select class="net-input" size="mini" v-model="DDNS.type">',
            '           <el-option label="DynDNS" value="DynDNS"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">服务器地址</label>',
            '        <el-input class="net-input" size="mini" v-model="port.serverAddress"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">域名</label>',
            '        <el-input class="net-input" size="mini" v-model="port.domain"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">用户名</label>',
            '        <el-input class="net-input" size="mini" v-model="port.username"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">端口</label>',
            '        <el-input class="net-input" size="mini" v-model="port.port"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">密码</label>',
            '        <el-input class="net-input" size="mini" v-model="port.password"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">密码确认</label>',
            '        <el-input class="net-input" size="mini" v-model="port.rePwd"></el-input>',
            '      </div>',
            '      <div style="text-align: center; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="端口" name="third">',
            '      <div class="net-item-box">',
            '        <label for="">HTTP端口</label>',
            '        <el-input class="net-input" size="mini" v-model="port.httpPort"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">RTSP端口</label>',
            '        <el-input class="net-input" size="mini" v-model="port.rtspPort"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">HTTPS端口</label>',
            '        <el-input class="net-input" size="mini" v-model="port.httpsPort"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">服务端口</label>',
            '        <el-input class="net-input" size="mini" v-model="port.servePort"></el-input>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">服务增强型端口</label>',
            '        <el-input class="net-input" size="mini" v-model="port.enhancePort"></el-input>',
            '      </div>',
            '      <div style="text-align: center; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="端口映射" name="fourth">',
            '      <el-checkbox v-model="portMapping.enable">启用UPnP™</el-checkbox>',
            '      <div class="net-item-box">',
            '        <label for="">别名</label>',
            '        <span>name</span>',
            '      </div>',
            '      <div class="net-item-box">',
            '        <label for="">端口映射方式</label>',
            '        <el-select size="mini" v-model="portMapping.mappingType">',
            '           <el-option label="自动" value="auto"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <el-table border :data="portMapping.tableData" style="width: 100%; margin-top: 10px;">',
            '        <el-table-column align="center" prop="name" label="端口类型"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="外部端口"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="外部IP地址"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="内部端口"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="状态"></el-table-column>',
            '      </el-table>',
            '      <div style="text-align: center; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="无线拨号" name="fifth">',
            '      <el-checkbox v-model="wireless.enable">启用</el-checkbox>',
            '      <el-tabs style="margin-top: 10px;" type="border-card">',
            '        <el-tab-pane label="拨号状态">',
            '          <div class="net-item-box">',
            '            <label for="">实时模式</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.offlineTime"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">UIM状态</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.offlineTime"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">信号强度</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.offlineTime"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">拨号状态</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.offlineTime"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">IP地址</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.offlineTime"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">掩码地址</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.offlineTime"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">网关地址</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.offlineTime"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">DNS地址</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.offlineTime"></el-input>',
            '          </div>',
            '          <div style="text-align: center; margin-top: 10px;">',
            '            <el-button size="mini" type="success">刷新</el-button>',
            '          </div>',
            '        </el-tab-pane>',
            '        <el-tab-pane label="拨号参数">',
            '          <div class="net-item-box">',
            '            <label for="">拨号方式</label>',
            '            <el-select class="net-input" size="mini" v-model="wireless.dialParam.dialType">',
            '               <el-option label="自动" value="auto"></el-option>',
            '            </el-select>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">网络切换方式</label>',
            '            <el-select class="net-input" size="mini" v-model="wireless.dialParam.networkSwitchingMode">',
            '               <el-option label="自动" value="auto"></el-option>',
            '            </el-select>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">下线时间</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.offlineTime"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">手机号码</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.tel"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">接入号码</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.accessNumber"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">用户名</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.username"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">密码</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">APN</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.APN"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">MTU</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.MTU"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">验证协议</label>',
            '            <el-select class="net-input" size="mini" v-model="wireless.dialParam.verifyProtocol">',
            '               <el-option label="自动" value="auto"></el-option>',
            '            </el-select>',
            '          </div>',
            '          <div style="text-align: center; margin-top: 10px;">',
            '            <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '          </div>',
            '        </el-tab-pane>',
            '      </el-tabs>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="WIFI配置" name="sixth">',
            '      <el-checkbox v-model="wireless.enable">启用</el-checkbox>',
            '      <el-tabs style="margin-top: 10px;" type="border-card">',
            '        <el-tab-pane label="STA模式">',
            '          <div class="net-item-box">',
            '            <label for="">SSID</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">协议</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">加密类型</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">加密方式</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">密码</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div style="text-align: center; margin-top: 10px;">',
            '            <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '          </div>',
            '        </el-tab-pane>',
            '        <el-tab-pane label="AP模式">',
            '          <div class="net-item-box">',
            '            <label for="">SSID</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">信道</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">协议</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">加密类型</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div class="net-item-box">',
            '            <label for="">加密密钥</label>',
            '            <el-input class="net-input" size="mini" v-model="wireless.dialParam.password"></el-input>',
            '          </div>',
            '          <div style="text-align: center; margin-top: 10px;">',
            '            <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '          </div>',
            '        </el-tab-pane>',
            '      </el-tabs>',
            '    </el-tab-pane>',
            '  </el-tabs>',
            '  ',
            '</div>'
        ].join(""),
        data: function() { // 数据first
            return {
                activeName: 'first',
                WIFIconfig: {
                    type: "STA", //  STA AP
                },
                TCPIP: {
                    netCardType: '自适应',
                    autoGet: true,
                    ipv4Address: '10.1.1.1',
                    ipv4SubnetMask: '255.255.255.0',
                    ipv4NetCard: '',
                    ipv6Model: '路由公告',
                    ipv6Address: '10.1.1.1',
                    ipv6SubnetMask: '255.255.255.0',
                    ipv6NetCard: '',
                    physicalAddress: '',
                    MTU: '',
                    theMulticastAddress: '',
                    isMulticastSearch: true,
                    firstDNS: '',
                    secondDNS: ''
                },
                DDNS: {
                    enable: true,
                    type: 'DynDNS',
                    serverAddress: '',
                    domain: '',
                    username: '',
                    port: '',
                    password: '',
                    rePwd: ''
                },
                portMapping: {
                    enable: true,
                    mappingType: '',
                    tableData: [{
                        name: 'name'
                    }]
                },
                port: {
                    httpPort: '',
                    rtspPort: '',
                    httpsPort: '',
                    servePort: '',
                    enhancePort: ''
                },
                wireless: {
                    enable: true,
                    dialStatus: {
                        tableData: [{
                                name: '实时模式',
                                label: 'FDDLTE'
                            },
                            {
                                name: 'UIM状态',
                                label: 'VALID'
                            },
                            {
                                name: '信号强度',
                                label: '77'
                            },
                            {
                                name: '拨号状态',
                                label: 'connected'
                            },
                            {
                                name: 'IP地址',
                                label: '12.23.21.11'
                            },
                            {
                                name: '掩码地址',
                                label: 'FDDLTE'
                            },
                            {
                                name: '网关地址',
                                label: '255.255.255.0'
                            },
                            {
                                name: 'DNS地址',
                                label: '20.1.1.1'
                            },
                        ]
                    },
                    dialParam: {
                        dialType: 'auto',
                        networkSwitchingMode: 'auto',
                        offlineTime: '300',
                        tel: '',
                        accessNumber: '',
                        username: '',
                        password: '',
                        APN: '',
                        MTU: '',
                        verifyProtocol: 'auto'
                    }
                },

            }
        },
        methods: {}
    })
})
