define(function (require, exports, module) {
    require('./index.css');
    var isEmpty = require('../../../tools/tools.js').isEmpty;
    // 引入请求接口
    var basic = require('../../../api/system.js').basic;
    var getBasic = require('../../../api/system.js').getBasic;
    var getNameAndNumber = require('../../../api/system.js').getNameAndNumber;
    var getTimeConfig = require('../../../api/system.js').getTimeConfig;
    var timeConfig = require('../../../api/system.js').timeConfig;
    var getDaylightSavingTime = require('../../../api/system.js').getDaylightSavingTime;
    var daylightSavingTime = require('../../../api/system.js').daylightSavingTime;

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
            '        <el-button @click="saveBasicMsg" icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="时间配置" name="second" v-on:click="getBasic">',
            '      <div class="basic-item-box">',
            '        <label for="">时区</label>',
            '        <el-select class="msg-input" size="mini" v-model="timeConfig.Zone">',
            '          <el-option v-for="(item, index) in timeZones" :key="index" :label="item.name" :value="item.value"></el-option>',
            '        </el-select>',
            '      </div>',
            '        <div style="width: 750px;margin: 0 auto;text-align: left;"><el-radio v-model="timeConfig.Type" label="1">NTP校时</el-radio></div>',
            '      <div>',
            '        <div class="basic-item-box">',
            '          <label for="">服务器地址</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.NTPSAddr"></el-input>',
            '        </div>',
            '        <div class="basic-item-box">',
            '          <label for="">NTP端口</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.NTPSPort"></el-input>',
            '        </div>',
            '        <div class="basic-item-box">',
            '          <label for="">校时时间间隔</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.Period">',
            '            <span slot="append">分钟</span>',
            '          </el-input>',
            '        </div>',
            '        <div style="width: 750px;margin: 20px auto 0;text-align: left;"><el-radio v-model="timeConfig.Type" label="0">手动校时</el-radio></div>',
            // '        <el-button style="margin-top: 10px" type="warning" size="mini">测试</el-button>',
            '      </div>',
            '      <div>',
            '        <div class="basic-item-box">',
            '          <label for="">设备时间</label>',
            '          <el-input class="msg-input" size="mini" v-model="timeConfig.ManTime"></el-input>',
            '        </div>',
            '        <div class="basic-item-box">',
            '          <label for="">设置时间</label>',
            '          <div style="width: 500px; display: inline-block; text-align: left;"><el-date-picker v-model="timeConfig.TimeSet" value-format="timestamp" size="mini" type="datetime" placeholder="选择日期时间"></el-date-picker>',
            '          <el-checkbox @change="changeSync" v-model="isSync">与计算机时间同步</el-checkbox></div>',
            '        </div>',
            '      </div>',
            '      <div style="text-align: center; margin-top: 20px;">',
            '        <el-button @click="saveTimeConfig" icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            // '    <el-tab-pane label="夏令时" name="third">',
            // '      <el-checkbox v-model="daylightSavingTime.enable">启用夏令时</el-checkbox>',
            // '      <div class="basic-item-box">',
            // '        <label for="">开始时间</label>',
            // '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.month">',
            // '          <el-option v-for="(item, index) in months" :key="index" :label="item.name" :value="item.value"></el-option>',
            // '        </el-select>',
            // '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.order">',
            // '          <el-option v-for="(item, index) in whichs" :key="index" :label="item.name" :value="item.value"></el-option>',
            // '        </el-select>',
            // '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.day">',
            // '          <el-option v-for="(item, index) in week" :key="index" :label="item.name" :value="item.value"></el-option>',
            // '        </el-select>',
            // '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.startTime.num">',
            // '          <el-option v-for="(item, index) in nums" :key="index" :label="item.name" :value="item.value"></el-option>',
            // '        </el-select>',
            // '      </div>',
            // '      <div class="basic-item-box">',
            // '        <label for="">结束时间</label>',
            // '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.month">',
            // '          <el-option v-for="(item, index) in months" :key="index" :label="item.name" :value="item.value"></el-option>',
            // '        </el-select>',
            // '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.order">',
            // '          <el-option v-for="(item, index) in whichs" :key="index" :label="item.name" :value="item.value"></el-option>',
            // '        </el-select>',
            // '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.day">',
            // '          <el-option v-for="(item, index) in week" :key="index" :label="item.name" :value="item.value"></el-option>',
            // '        </el-select>',
            // '        <el-select class="mini-select" size="mini" v-model="daylightSavingTime.endTime.num">',
            // '          <el-option v-for="(item, index) in nums" :key="index" :label="item.name" :value="item.value"></el-option>',
            // '        </el-select>',
            // '      </div>',
            // '      <div class="basic-item-box">',
            // '        <label for="">偏移时间</label>',
            // '        <el-select style="width: 416px" size="mini" v-model="daylightSavingTime.offsetTime">',
            // '          <el-option v-for="(item, index) in times" :key="index" :label="item.name" :value="item.value"></el-option>',
            // '        </el-select>',
            // '      </div>',
            // '      <div style="text-align: center; margin-top: 10px;">',
            // '        <el-button @click="saveDST" icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            // '      </div>',
            // '    </el-tab-pane>',
            '  </el-tabs>',
            '</div>'
        ].join(""),
        data: function () { // 数据
            return {
                timer: null,
                // name 在页面显示的值  value 是传给请求的值
                timeZones: [
                    { name: "(CST+12:00:00) 日界线西", value: "0" },
                    { name: "(CST+11:00:00) 中途岛，萨摩亚群岛", value: "1" },
                    { name: "(CST+10:00:00) 夏威夷", value: "2" },
                    { name: "(CST+9:00:00) 阿拉斯加", value: "3" },
                    { name: "(CST+8:00:00) 太平洋时间(美国和加拿大)", value: "4" },
                    { name: "(CST+7:00:00) 山地时间(美国和加拿大)", value: "5" },
                    { name: "(CST+6:00:00) 中部时间(美国和加拿大)", value: "6" },
                    { name: "(CST+5:00:00) 东部时间(美国和加拿大)", value: "7" },
                    { name: "(CST+4:30:00) 加拉加斯", value: "8" },
                    { name: "(CST+4:00:00) 大西洋时间(加拿大)", value: "9" },
                    { name: "(CST+3:30:00) 纽芬兰", value: "10" },
                    { name: "(CST+3:00:00) 乔治敦、巴西利亚", value: "11" },
                    { name: "(CST+2:00:00) 中大西洋", value: "12" },
                    { name: "(CST+1:00:00) 佛得角群岛、亚速尔群岛", value: "13" },
                    { name: "(CST+0:00:00) 都柏林、爱丁堡、伦敦", value: "14" },
                    { name: "(CST-1:00:00) 阿姆斯特丹、柏林、罗马、巴黎", value: "15" },
                    { name: "(CST-2:00:00) 雅典、耶路撒冷", value: "16" },
                    { name: "(CST-3:00:00) 巴格达、科威特、莫斯科、伊斯坦布尔、圣彼得堡", value: "17" },
                    { name: "(CST-3:30:00) 德黑兰", value: "18" },
                    { name: "(CST-4:00:00) 高加索标准时间", value: "19" },
                    { name: "(CST-4:30:00) 喀布尔", value: "20" },
                    { name: "(CST-5:00:00) 伊斯兰堡、卡拉奇、塔什干", value: "21" },
                    { name: "(CST-5:30:00) 马德拉斯、孟买、新德里", value: "22" },
                    { name: "(CST-5:45:00) 加德满都", value: "23" },
                    { name: "(CST-6:00:00) 阿拉木图、达卡", value: "24" },
                    { name: "(CST-6:30:00) 仰光", value: "25" },
                    { name: "(CST-7:00:00) 曼谷、河内、雅加达、新西伯利亚", value: "26" },
                    { name: "(CST-8:00:00) 北京、乌鲁木齐、新加坡、珀斯", value: "27" },
                    { name: "(CST-9:00:00) 首尔、东京、大阪、札幌", value: "28" },
                    { name: "(CST-9:30:00) 阿德莱德、达尔文", value: "29" },
                    { name: "(CST-10:00:00) 墨尔本、悉尼、堪培拉、布里斯班、霍巴特", value: "30" },
                    { name: "(CST-11:00:00) 马加丹、索罗门群岛", value: "31" },
                    { name: "(CST-12:00:00) 奥克兰、惠灵顿", value: "32" },
                    { name: "(CST-13:00:00) 努库阿洛法", value: "33" },
                ],
                // months: [
                //     { name: "一月", value: "January" },
                //     { name: "二月", value: "February" },
                //     { name: "三月", value: "March" },
                //     { name: "四月", value: "April" },
                //     { name: "五月", value: "May" },
                //     { name: "六月", value: "June" },
                //     { name: "七月", value: "July" },
                //     { name: "八月", value: "August" },
                //     { name: "九月", value: "September" },
                //     { name: "十月", value: "October" },
                //     { name: "十一月", value: "November" },
                //     { name: "十二月", value: "December" }
                // ],
                // whichs: [
                //     { name: "首个", value: "first" },
                //     { name: "末个", value: "last" }
                // ],
                // week: [
                //     { name: "周一", value: "Monday" },
                //     { name: "周二", value: "Tuesday" },
                //     { name: "周三", value: "Wednesday" },
                //     { name: "周四", value: "Thursday" },
                //     { name: "周五", value: "Friday" },
                //     { name: "周六", value: "Saturday" },
                //     { name: "周日", value: "Sunday" }
                // ],
                // nums: [
                //     { name: "01", value: 0 },
                //     { name: "02", value: 1 },
                //     { name: "03", value: 2 },
                //     { name: "04", value: 3 },
                //     { name: "05", value: 4 },
                //     { name: "06", value: 5 },
                //     { name: "07", value: 6 }
                // ],
                //偏移时间
                // times: [
                //     { name: "1分钟", value: 1 },
                //     { name: "3分钟", value: 3 },
                //     { name: "5分钟", value: 5 },
                //     { name: "10分钟", value: 10 },
                //     { name: "15分钟", value: 15 },
                //     { name: "30分钟", value: 30 },
                //     { name: "60分钟", value: 60 }
                // ],
                activeName: 'second',
                basicMsg: {
                    Name: '',
                    Num: '',
                    deviceType: 'deviceType',
                    serialNumber: '',
                    hardwareVersion: '',
                    softwareVersion: '',
                    webVersion: '',
                },
                isSync:  false,
                timeConfig: {
                    TimeSet:  '',
                    Type: '1',
                    Zone: '',
                    Period: '',
                    NTPSAddr:'',
                    NTPSPort: '',
                    ManTime: '',
                },
                // daylightSavingTime: {
                //     enable: true,
                //     startTime: {
                //         month: '',
                //         order: '',
                //         day: '',
                //         num: ''
                //     },
                //     endTime: {
                //         month: '',
                //         order: '',
                //         day: '',
                //         num: ''
                //     },
                //     offsetTime: ''
                // }
            }
        },

        created: function() {
            // //获取基本信息
            this.getBasic();
            // //获取时间配置
            // this.getTimeConfig();
            // //获取夏令时
            // this.getDaylightSavingTime();
        },
        methods: {
            changeSync() {
                var _this = this
                if(this.isSync) {
                    var timestampLocal = new Date().getTime();
                    this.timeConfig.TimeSet = timestampLocal;
                    this.timer = setInterval(function() {
                        _this.timeConfig.TimeSet += 1000
                        _this.timeConfig.ManTime = _this.timeConfig.TimeSet
                        
                    }, 1000);
                }else{
                    clearInterval(_this.timer)
                }
            },
            tabClick:function(tab,event){
               // console.log(tab,event)
                if(tab.name=='first'){
                     //获取基本信息
                      this.getBasic();
                }else if(tab.name=='second'){
                    //获取时间配置
                    this.getTimeConfig();
                }
                // else{
                //      //获取夏令时
                //      this.getDaylightSavingTime();
                // }
            },
            getBasic: function () {
                var _this = this;
                getNameAndNumber({}).then(function (res) {
                    var data = res.data;
                    console.log(data)
                    if (data.code == 1000) {
                        _this.basicMsg.Name = data.data.Name
                        _this.basicMsg.Num = data.data.Num
                    }else{
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
            // getDaylightSavingTime: function () {
            //     var _this = this;
            //     getDaylightSavingTime({}).then(function (res) {
            //         var data = res.data;
            //         if (data.code == 1000) {
            //             _this.daylightSavingTime = data.data
            //         }else{
            //             _this.$message.error("夏令时获取失败")
            //         }
            //     }).catch(function (res) {
            //         _this.$message.error("夏令时请求失败")
            //         return;
            //     })
            // },
            saveBasicMsg: function () {
                var _this = this;
                var sendData = {
                    Name: _this.basicMsg.Name,
                    Num:  _this.basicMsg.Num
                }
                if (isEmpty(sendData)) {
                    _this.$message.error("请填写设备名称和设备编号")
                    return
                }
                basic(sendData).then(function (res) {
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
                timeConfig( _this.timeConfig).then(function (res) {
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
            // saveDST: function () {
            //     var _this = this;
            //     daylightSavingTime(_this.daylightSavingTime).then(function (res) {
            //         var data = res.data;
            //         if (data.code == 1000) {
            //             _this.$message.success("保存成功")
            //         }else{
            //             _this.$message.error("保存失败")
            //         }
            //     }).catch(function (res) {
            //         _this.$message.error("请求失败")
            //         return;
            //     })
            // }
        }
    })
})
