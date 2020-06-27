define(function(require, exports, module) {
    require('./index.css');
    var isEmpty = require('../../../tools/tools.js').isEmpty;
    var basic = require('../../../api/api.js').basic;

    module.exports = Vue.component('index', {
        template: ['<div>',
            '  <el-tabs v-model="activeName">',
            '    <el-tab-pane :label="$t(\'basic.basic\')" name="first">',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'basic.deviceName\') }}</label>',
            '        <el-input class="msg-input" size="mini" v-model="basicMsg.deviceName"></el-input>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'basic.deviceNum\') }}</label>',
            '        <el-input class="msg-input" size="mini" v-model="basicMsg.deviceNum"></el-input>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'basic.deviceType\') }}</label>',
            '        <el-input class="msg-input" disabled size="mini" v-model="basicMsg.deviceType"></el-input>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'basic.serialNumber\') }}</label>',
            '        <el-input class="msg-input" disabled size="mini" v-model="basicMsg.serialNumber"></el-input>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'basic.hardwareVersion\') }}</label>',
            '        <el-input class="msg-input" disabled size="mini" v-model="basicMsg.hardwareVersion"></el-input>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'basic.softwareVersion\') }}</label>',
            '        <el-input class="msg-input" disabled size="mini" v-model="basicMsg.softwareVersion"></el-input>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'basic.webVersion\') }}</label>',
            '        <el-input class="msg-input" disabled size="mini" v-model="basicMsg.webVersion"></el-input>',
            '      </div>',
            '      <div style="text-align: left; margin-top: 10px;">',
            '        <el-button @click="saveBasicMsg" icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="时间配置" name="second">',
            '      <div class="basic-item-box">',
            '        <label for="">时区</label>',
            '        <el-select class="msg-input" size="mini" v-model="timeConfig.timeZone">',
            '          <el-option label="北京" value="beijing"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <el-radio-group style="margin: 20px 0;" v-model="timeConfig.timingType">',
            '        <el-radio label="NTP">NTP校时</el-radio>',
            '        <el-radio label="hand">手动校时</el-radio>',
            '      </el-radio-group>',
            '      <div v-if="timeConfig.timingType == \'NTP\' ">',
            '        <div class="basic-item-box">',
            '          <label for="">服务器地址</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.NTP.serverAddress"></el-input>',
            '        </div>',
            '        <div class="basic-item-box">',
            '          <label for="">NTP端口</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.NTP.NTPport"></el-input>',
            '        </div>',
            '        <div class="basic-item-box">',
            '          <label for="">校时时间间隔</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.NTP.timeInterval">',
            '            <span slot="append">分钟</span>',
            '          </el-input>',
            '        </div>',
            '        <el-button type="warning" size="mini">测试</el-button>',
            '      </div>',
            '      <div v-else>',
            '        <div class="basic-item-box">',
            '          <label for="">设备时间</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.hand.equipmentTime"></el-input>',
            '        </div>',
            '        <div class="basic-item-box">',
            '          <label for="">设置时间</label>',
            '          <el-date-picker v-model="timeConfig.hand.setTime" size="mini" type="datetime" placeholder="选择日期时间"></el-date-picker>',
            '          <el-checkbox v-model="timeConfig.hand.isSync">与计算机时间同步</el-checkbox>',
            '        </div>',
            '      </div>',
            '      <div style="text-align: left; margin-top: 20px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="夏令时" name="third">',
            '      <el-checkbox v-model="daylightSavingTime.enable">启用夏令时</el-checkbox>',
            '      <div class="basic-item-box">',
            '        <label for="">开始时间</label>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.month">',
            '          <el-option label="一月" value="January"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.order">',
            '          <el-option label="首个" value="first"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.day">',
            '          <el-option label="星期日" value="Sunday"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.num">',
            '          <el-option label="02" value="2"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">结束时间</label>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.month">',
            '          <el-option label="一月" value="January"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.order">',
            '          <el-option label="末个" value="last"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.day">',
            '          <el-option label="星期日" value="Sunday"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.num">',
            '          <el-option label="03" value="3"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">偏移时间</label>',
            '        <el-select style="width: 416px" size="mini" v-model="daylightSavingTime.offsetTime">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div style="text-align: left; margin-top: 10px;">',
            '        <el-button @click="saveDST" icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '  </el-tabs>',
            '</div>'
        ].join(""),
        data: function() { // 数据
            return {
                activeName: 'first',
                basicMsg: {
                    deviceName: '',
                    deviceNum: 'deviceNum',
                    deviceType: 'deviceType',
                    serialNumber: '2',
                    hardwareVersion: '1',
                    softwareVersion: '1',
                    webVersion: '1',
                },
                timeConfig: {
                    timeZone: '',
                    timingType: 'NTP',
                    NTP: {
                        serverAddress: '',
                        NTPport: '',
                        timeInterval: ''
                    },
                    hand: {
                        equipmentTime: '',
                        setTime: '',
                        isSync: true
                    }
                },
                daylightSavingTime: {
                    enable: true,
                    startTime: {
                        month: '',
                        order: '',
                        day: '',
                        num: ''
                    },
                    endTime: {
                        month: '',
                        order: '',
                        day: '',
                        num: ''
                    },
                    offsetTime: ''
                }
            }
        },
        methods: {
            saveBasicMsg: function() {
                var _this = this;
                if(isEmpty(_this.basicMsg)) {
                    _this.$message.error("请完善基本信息")
                    return
                }
                basic(_this.basicMsg).then(function(res) {
                    if (res.success != true) {
                        _this.$message.error("保存失败")
                        return;
                    } else {
                        var data = res.data;
                        if (data.statuscode == "200") {
                            _this.$message.success("保存成功")
                        }
                    }
                }).catch(function(res) {
                    _this.$message.error("保存失败")
                    return;
                })

            },
            saveDST: function() {

            }
        }
    })
})
