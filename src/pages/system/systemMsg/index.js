define(function (require, exports, module) {
    require('./index.css');
    var isEmpty = require('../../../tools/tools.js').isEmpty;
    // 引入请求接口
    var basic = require('../../../api/api.js').basic;
    var getBasic = require('../../../api/api.js').getBasic;
    var getTimeConfig = require('../../../api/api.js').getTimeConfig;
    var timeConfig = require('../../../api/api.js').timeConfig;
    var getDaylightSavingTime = require('../../../api/api.js').getDaylightSavingTime;
    var daylightSavingTime = require('../../../api/api.js').daylightSavingTime;

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
            '          <el-option v-for="(item, index) in timeZones" :key="index" :label="item.name" :value="item.value"></el-option>',
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
            '        <el-button @click="saveTimeConfig" icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="夏令时" name="third">',
            '      <el-checkbox v-model="daylightSavingTime.enable">启用夏令时</el-checkbox>',
            '      <div class="basic-item-box">',
            '        <label for="">开始时间</label>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.month">',
            '          <el-option v-for="(item, index) in months" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.order">',
            '          <el-option v-for="(item, index) in whichs" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.day">',
            '          <el-option v-for="(item, index) in week" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.num">',
            '          <el-option v-for="(item, index) in nums" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">结束时间</label>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.month">',
            '          <el-option v-for="(item, index) in months" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.order">',
            '          <el-option v-for="(item, index) in whichs" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.day">',
            '          <el-option v-for="(item, index) in week" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.num">',
            '          <el-option v-for="(item, index) in nums" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">偏移时间</label>',
            '        <el-select style="width: 416px" size="mini" v-model="daylightSavingTime.offsetTime">',
            '          <el-option v-for="(item, index) in times" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div style="text-align: left; margin-top: 10px;">',
            '        <el-button @click="saveDST" icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '  </el-tabs>',
            '</div>'
        ].join(""),
        data: function () { // 数据
            return {
                // name 在页面显示的值  value 是传给请求的值
                timeZones: [
                    { name: "北京", value: "beijing" },
                    { name: "华盛顿", value: "USA" }
                ],
                months: [
                    { name: "一月", value: "January" },
                    { name: "二月", value: "February" },
                    { name: "三月", value: "March" },
                    { name: "四月", value: "April" },
                    { name: "五月", value: "May" },
                    { name: "六月", value: "June" },
                    { name: "七月", value: "July" },
                    { name: "八月", value: "August" },
                    { name: "九月", value: "September" },
                    { name: "十月", value: "October" },
                    { name: "十一月", value: "November" },
                    { name: "十二月", value: "December" }
                ],
                whichs: [
                    { name: "首个", value: "first" },
                    { name: "末个", value: "last" }
                ],
                week: [
                    { name: "周一", value: "Monday" },
                    { name: "周二", value: "Tuesday" },
                    { name: "周三", value: "Wednesday" },
                    { name: "周四", value: "Thursday" },
                    { name: "周五", value: "Friday" },
                    { name: "周六", value: "Saturday" },
                    { name: "周日", value: "Sunday" }
                ],
                nums: [
                    { name: "01", value: 0 },
                    { name: "02", value: 1 },
                    { name: "03", value: 2 },
                    { name: "04", value: 3 },
                    { name: "05", value: 4 },
                    { name: "06", value: 5 },
                    { name: "07", value: 6 }
                ],
                //偏移时间
                times: [
                    { name: "1分钟", value: 1 },
                    { name: "3分钟", value: 3 },
                    { name: "5分钟", value: 5 },
                    { name: "10分钟", value: 10 },
                    { name: "15分钟", value: 15 },
                    { name: "30分钟", value: 30 },
                    { name: "60分钟", value: 60 }
                ],
                activeName: 'first',
                basicMsg: {
                    deviceName: '',
                    deviceNum: '',
                    deviceType: 'deviceType',
                    serialNumber: '',
                    hardwareVersion: '',
                    softwareVersion: '',
                    webVersion: '',
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

        created: function() {
            //获取基本信息
            this.getBasic();
            //获取时间配置
            this.getTimeConfig();
            //获取夏令时
            this.getDaylightSavingTime();
        },

        methods: {
            getBasic: function () {
                var _this = this;
                getBasic({}).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.basicMsg = data.data
                    }else{
                        _this.$message.error("基本信息获取失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("基本信息请求失败")
                    return;
                })
            },
            getTimeConfig: function () {
                var _this = this;
                getTimeConfig({}).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.timeConfig = data.data
                    }else{
                        _this.$message.error("时间配置获取失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("时间配置请求失败")
                    return;
                })
            },
            getDaylightSavingTime: function () {
                var _this = this;
                getDaylightSavingTime({}).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.daylightSavingTime = data.data
                    }else{
                        _this.$message.error("夏令时获取失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("夏令时请求失败")
                    return;
                })
            },
            saveBasicMsg: function () {
                var _this = this;
                if (isEmpty(_this.basicMsg)) {
                    _this.$message.error("请完善基本信息")
                    return
                }
                basic(_this.basicMsg).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("保存成功")
                    }else{
                        _this.$message.error("保存失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("请求失败")
                    return;
                })

            },
            saveTimeConfig: function () {
                var _this = this;
                timeConfig(_this.timeConfig).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("保存成功")
                    }else{
                        _this.$message.error("保存失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("请求失败")
                    return;
                })
            },
            saveDST: function () {
                var _this = this;
                daylightSavingTime(_this.daylightSavingTime).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("保存成功")
                    }else{
                        _this.$message.error("保存失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("请求失败")
                    return;
                })
            }
        }
    })
})
