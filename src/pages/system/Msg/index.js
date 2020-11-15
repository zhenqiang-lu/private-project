define(function (require, exports, module) {
    require('./index.css');
    var isEmpty = require('../../../tools/tools.js').isEmpty;
    var toDate = require('../../../tools/tools.js').toDate;
    // 引入请求接口
    var basic = require('../../../api/system.js').basic;
    var getBasic = require('../../../api/system.js').getBasic;
    var getNameAndNumber = require('../../../api/system.js').getNameAndNumber;
    var getTimeConfig = require('../../../api/system.js').getTimeConfig;
    var timeConfig = require('../../../api/system.js').timeConfig;
    // var getDaylightSavingTime = require('../../../api/system.js').getDaylightSavingTime;
    // var daylightSavingTime = require('../../../api/system.js').daylightSavingTime;

    module.exports = Vue.component('index', {
        template: ['<div>',
            '  <el-tabs v-model="activeName" @tab-click="tabClick">',
            '    <el-tab-pane :label="$t(\'basic.basic\')" name="first" >',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'basic.deviceName\') }}</label>',
            '        <el-input class="msg-input" size="mini" v-model="basicMsg.Name"></el-input>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'basic.deviceNum\') }}</label>',
            '        <el-input class="msg-input" size="mini" v-model="basicMsg.Num"></el-input>',
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
            '      <div style="text-align: center; margin-top: 10px;">',
            '        <el-button @click="saveBasicMsg" icon="el-icon-receiving" size="mini" type="success">{{ $t(\'common.save\') }}</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane :label="$t(\'time.time\')" name="second" v-on:click="getBasic">',
            '      <div class="basic-item-box">',
            '        <label for="">{{ $t(\'time.zone\') }}</label>',
            '        <el-select class="msg-input" size="mini" v-model="timeConfig.Zone">',
            '          <el-option :label="$t(\'time.one\')" :value="0"></el-option>',
            '          <el-option :label="$t(\'time.two\')" :value="1"></el-option>',
            '          <el-option :label="$t(\'time.three\')" :value="2"></el-option>',
            '          <el-option :label="$t(\'time.four\')" :value="3"></el-option>',
            '          <el-option :label="$t(\'time.five\')" :value="4"></el-option>',
            '          <el-option :label="$t(\'time.six\')" :value="5"></el-option>',
            '          <el-option :label="$t(\'time.seven\')" :value="6"></el-option>',
            '          <el-option :label="$t(\'time.eight\')" :value="7"></el-option>',
            '          <el-option :label="$t(\'time.nine\')" :value="8"></el-option>',
            '          <el-option :label="$t(\'time.ten\')" :value="9"></el-option>',
            '          <el-option :label="$t(\'time.eleven\')" :value="10"></el-option>',
            '          <el-option :label="$t(\'time.twelve\')" :value="11"></el-option>',
            '          <el-option :label="$t(\'time.thirteen\')" :value="12"></el-option>',
            '          <el-option :label="$t(\'time.fourteen\')" :value="13"></el-option>',
            '          <el-option :label="$t(\'time.fifteen\')" :value="14"></el-option>',
            '          <el-option :label="$t(\'time.sixteen\')" :value="15"></el-option>',
            '          <el-option :label="$t(\'time.seventeen\')" :value="16"></el-option>',
            '          <el-option :label="$t(\'time.eighteen\')" :value="17"></el-option>',
            '          <el-option :label="$t(\'time.nineteen\')" :value="18"></el-option>',
            '          <el-option :label="$t(\'time.twenty\')" :value="19"></el-option>',
            '          <el-option :label="$t(\'time.twentyOne\')" :value="20"></el-option>',
            '          <el-option :label="$t(\'time.twentyTwo\')" :value="21"></el-option>',
            '          <el-option :label="$t(\'time.twentyThree\')" :value="22"></el-option>',
            '          <el-option :label="$t(\'time.twentyFour\')" :value="23"></el-option>',
            '          <el-option :label="$t(\'time.twentyFive\')" :value="24"></el-option>',
            '          <el-option :label="$t(\'time.twentySix\')" :value="25"></el-option>',
            '          <el-option :label="$t(\'time.twentySeven\')" :value="26"></el-option>',
            '          <el-option :label="$t(\'time.twentyEight\')" :value="27"></el-option>',
            '          <el-option :label="$t(\'time.twentyNine\')" :value="28"></el-option>',
            '          <el-option :label="$t(\'time.thirty\')" :value="29"></el-option>',
            '          <el-option :label="$t(\'time.thirtyOne\')" :value="30"></el-option>',
            '          <el-option :label="$t(\'time.thirtyTwo\')" :value="31"></el-option>',
            '          <el-option :label="$t(\'time.thirtyThree\')" :value="32"></el-option>',
            '          <el-option :label="$t(\'time.thirtyFour\')" :value="33"></el-option>',
            '        </el-select>',
            '      </div>',
            '        <div class="jbs"><el-radio v-model="timeConfig.Type" :label="1">{{ $t(\'time.ntp\') }}</el-radio></div>',
            '      <div>',
            '        <div class="basic-item-box">',
            '          <label for="">{{ $t(\'time.serverAddress\') }}</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.NTPSAddr"></el-input>',
            '        </div>',
            '        <div class="basic-item-box">',
            '          <label for="">{{ $t(\'time.ntpPort\') }}</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.NTPSPort"></el-input>',
            '        </div>',
            '        <div class="basic-item-box">',
            '          <label for="">{{ $t(\'time.Period\') }}</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.Period">',
            '            <span slot="append">{{ $t(\'time.minutes\') }}</span>',
            '          </el-input>',
            '        </div>',
            '        <div class="jbs"><el-radio v-model="timeConfig.Type" :label="0">{{ $t(\'time.hand\') }}</el-radio></div>',
            // '        <el-button style="margin-top: 10px" type="warning" size="mini">测试</el-button>',
            '      </div>',
            '      <div>',
            '        <div class="basic-item-box">',
            '          <label for="">{{ $t(\'time.setTime\') }}</label>',
            '          <div style="width: 500px; display: inline-block; text-align: left;"><el-date-picker @focus="dateFocus" @change="selectDate" :disabled="timeConfig.Type === 1 " v-model="timeConfig.MulTime" value-format="timestamp" size="mini" type="datetime" :placeholder="$t(\'common.select\')"></el-date-picker>',
            '          <el-checkbox :disabled="timeConfig.Type === 1 " @change="changeSync" v-model="isSync">{{ $t(\'time.synchronization\') }}</el-checkbox></div>',
            '        </div>',
            '      </div>',
            '      <div style="text-align: center; margin-top: 20px;">',
            '        <el-button @click="saveTimeConfig" icon="el-icon-receiving" size="mini" type="success">{{ $t(\'common.save\') }}</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '  </el-tabs>',
            '</div>'
        ].join(""),
        data: function () { // 数据
            return {
                timer: null,
                // name 在页面显示的值  value 是传给请求的值
                // timeZones: [
                //     { name: '(CST-12:00:00) 日界线西', value: 0 },
                //     { name: "(CST-11:00:00) 中途岛，萨摩亚群岛", value: 1 },
                //     { name: "(CST-10:00:00) 夏威夷", value: 2 },
                //     { name: "(CST-9:00:00) 阿拉斯加", value: 3 },
                //     { name: "(CST-8:00:00) 太平洋时间(美国和加拿大)", value: 4 },
                //     { name: "(CST-7:00:00) 山地时间(美国和加拿大)", value: 5 },
                //     { name: "(CST-6:00:00) 中部时间(美国和加拿大)", value: 6 },
                //     { name: "(CST-5:00:00) 东部时间(美国和加拿大)", value: 7 },
                //     { name: "(CST-4:30:00) 加拉加斯", value: 8 },
                //     { name: "(CST-4:00:00) 大西洋时间(加拿大)", value: 9 },
                //     { name: "(CST-3:30:00) 纽芬兰", value: 10 },
                //     { name: "(CST-3:00:00) 乔治敦、巴西利亚", value: 11 },
                //     { name: "(CST-2:00:00) 中大西洋", value: 12 },
                //     { name: "(CST-1:00:00) 佛得角群岛、亚速尔群岛", value: 13 },
                //     { name: "(CST-0:00:00) 都柏林、爱丁堡、伦敦", value: 14 },
                //     { name: "(CST+1:00:00) 阿姆斯特丹、柏林、罗马、巴黎", value: 15 },
                //     { name: "(CST+2:00:00) 雅典、耶路撒冷", value: 16 },
                //     { name: "(CST+3:00:00) 巴格达、科威特、莫斯科、伊斯坦布尔、圣彼得堡", value: 17 },
                //     { name: "(CST+3:30:00) 德黑兰", value: 18 },
                //     { name: "(CST+4:00:00) 高加索标准时间", value: 19 },
                //     { name: "(CST+4:30:00) 喀布尔", value: 20 },
                //     { name: "(CST+5:00:00) 伊斯兰堡、卡拉奇、塔什干", value: 21 },
                //     { name: "(CST+5:30:00) 马德拉斯、孟买、新德里", value: 22 },
                //     { name: "(CST+5:45:00) 加德满都", value: 23 },
                //     { name: "(CST+6:00:00) 阿拉木图、达卡", value: 24 },
                //     { name: "(CST+6:30:00) 仰光", value: 25 },
                //     { name: "(CST+7:00:00) 曼谷、河内、雅加达、新西伯利亚", value: 26 },
                //     { name: "(CST+8:00:00) 北京、乌鲁木齐、新加坡、珀斯", value: 27 },
                //     { name: "(CST+9:00:00) 首尔、东京、大阪、札幌", value: 28 },
                //     { name: "(CST+9:30:00) 阿德莱德、达尔文", value: 29 },
                //     { name: "(CST+10:00:00) 墨尔本、悉尼、堪培拉、布里斯班、霍巴特", value: 30 },
                //     { name: "(CST+11:00:00) 马加丹、索罗门群岛", value: 31 },
                //     { name: "(CST+12:00:00) 奥克兰、惠灵顿", value: 32 },
                //     { name: "(CST+13:00:00) 努库阿洛法", value: 33 },
                // ],
                activeName: 'first',
                basicMsg: {
                    Name: '',
                    Num: '',
                    deviceType: 'deviceType',
                    serialNumber: '',
                    hardwareVersion: '',
                    softwareVersion: '',
                    webVersion: '',
                },
                isSync: false,
                timeConfig: {
                    Type: 1,
                    Zone: 0,
                    Period: '',
                    NTPSAddr: '',
                    NTPSPort: '',
                    MulTime: '',
                },
            }
        },

        created: function () {
            // //获取基本信息
            this.getBasic();
        },
        methods: {
            dateFocus: function() {
                this.isSync = false;
                this.changeSync()
            },
            selectDate: function() {
                this.goTime()
            },
            changeSync: function () {
                var _this = this
                if (this.isSync) {
                    _this.timeConfig.MulTime = new Date().getTime()
                    this.goTime();
                } else {
                    clearInterval(_this.timer)
                    this.timeConfig.MulTime = ''
                }
            },
            goTime: function() {
                var _this = this
                clearInterval(this.timer)
                this.timer = setInterval(function () {
                    _this.timeConfig.MulTime += 1000
                }, 1000);
            },
            tabClick: function (tab, event) {
                // console.log(tab,event)
                if (tab.name == 'first') {
                    //获取基本信息
                    this.getBasic();
                } else if (tab.name == 'second') {
                    //获取时间配置
                    this.getTimeConfig();
                }
            },
            getBasic: function () {
                var _this = this;
                getNameAndNumber({}).then(function (res) {
                    var data = res.data;
                    console.log(data)
                    if (data.code == 1000) {
                        _this.basicMsg.Name = data.data.Name
                        _this.basicMsg.Num = data.data.Num
                    } else {
                        _this.$message.error("设备名称和设备编号获取失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("设备名称和设备编号请求失败")
                    return;
                })
                getBasic({}).then(function (res) {
                    var data = res.data;
                    console.log(data)
                    if (data.code == 1000) {
                        _this.basicMsg.deviceType = data.data.Type
                        _this.basicMsg.serialNumber = data.data.ID
                        _this.basicMsg.hardwareVersion = data.data.SW
                        _this.basicMsg.softwareVersion = data.data.HW
                        _this.basicMsg.webVersion = data.data.Web
                    } else {
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
                    } else {
                        _this.$message.error("时间配置获取失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("时间配置请求失败")
                    return;
                })
            },
            saveBasicMsg: function () {
                var _this = this;
                var sendData = {
                    Name: _this.basicMsg.Name,
                    Num: _this.basicMsg.Num
                }
                if (isEmpty(sendData)) {
                    _this.$message.error("请填写设备名称和设备编号")
                    return
                }
                basic(sendData).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("保存成功")
                    } else {
                        _this.$message.error("保存失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("请求失败")
                    return;
                })

            },
            saveTimeConfig: function () {
                var _this = this;
                var sendData = Object.assign({}, _this.timeConfig)
                sendData.MulTime = toDate(sendData.MulTime)
                timeConfig(sendData).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("保存成功")
                    } else {
                        _this.$message.error("保存失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("请求失败")
                    return;
                })
            },
        }
    })
})
