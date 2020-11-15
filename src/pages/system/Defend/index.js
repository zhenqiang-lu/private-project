define(function (require, exports, module) {
    require('./index.css');
    // 引入请求接口
    var restart = require('../../../api/system.js').restart;
    var reset = require('../../../api/system.js').reset;
    var equipment = require('../../../api/system.js').equipment;
    var diagnosis = require('../../../api/system.js').diagnosis;
    var equipmentImport = require('../../../api/system.js').equipmentImport;
    var upgradeFile = require('../../../api/system.js').upgradeFile;
    var logList = require('../../../api/system.js').logList;

    var handle = function (e) {
        var ev = window.event || e;
        var code = ev.keyCode || ev.which;
        if (code == 116) {
            if (ev.preventDefault) {
                ev.preventDefault();
            } else {
                ev.keyCode = 0;
                ev.returnValue = false;
            }
        }
    }

    var mousedown = function (e) {
        var ev = window.event || e;
        ev.preventDefault()
    }

    module.exports = Vue.component('index', {
        template: ['<div>',
            '  <el-tabs v-model="activeName" @tab-click="tabClick">',
            '    <el-tab-pane :label="$t(\'update.update\')" name="first">',
            '      <p class="p-title">{{$t(\'update.restart\')}}</p>',
            '      <div class="defend-item-box">',
            '        <el-button @click="restart" size="mini" type="primary">{{$t(\'update.restart2\')}}</el-button>',
            '        <label for="">{{$t(\'update.restartDevice\')}}</label>',
            '      </div>',
            '      <p class="p-title">{{$t(\'update.resetDefaultValue\')}}</p>',
            '      <div class="defend-item-box">',
            '        <el-button @click="reset" size="mini" type="primary">{{$t(\'update.resetFactory\')}}</el-button>',
            '        <label for="">{{$t(\'update.resetFactory2\')}}</label>',
            '      </div>',
            '      <p class="p-title">{{$t(\'update.messageExport\')}}</p>',
            '      <div class="defend-item-box">',
            '        <el-button @click="getEquipment" size="mini" type="primary">{{$t(\'update.deviceParams\')}}</el-button>',
            '      </div>',
            '      <div class="defend-item-box">',
            '        <el-button @click="getDiagnosis" size="mini" type="primary">{{$t(\'update.diagnosticMessage\')}}</el-button>',
            '        <label for="">{{$t(\'update.diagnosticMessage2\')}}</label>',
            '      </div>',
            '      <p class="p-title">{{$t(\'update.paramsExport\')}}</p>',
            '      <div class="defend-item-box">',
            '        <label style="display: inline-block; width: 120px;" for="">{{$t(\'update.paramsExport\')}}</label>',
            '        <span class="filename">{{ filename.file1.name }}</span>',
            '        <el-button size="mini" type="warning" @click="previewFile(\'file1\')">{{$t(\'update.look\')}}</el-button>',
            '        <el-button @click="importEquipmentParams" size="mini" type="warning">{{$t(\'update.export\')}}</el-button>',
            '      </div>',
            // '      <div class="defend-item-box">',
            // '        <label style="display: inline-block; width: 120px;" for="">状态</label>',
            // '      </div>',
            '      <p class="p-title">{{$t(\'update.updateFile\')}}</p>',
            '      <div class="defend-item-box">',
            '        <el-select style="width: 120px; height: 30px;" size="mini" v-model="defend.upgrade">',
            '          <el-option :label="$t(\'update.updateFile\')" value="upgrade"></el-option>',
            '        </el-select>',
            '        <span class="filename">{{ filename.file2.name }}</span>',
            '        <el-button size="mini" type="warning" @click="previewFile(\'file2\')">{{$t(\'update.look\')}}</el-button>',
            '        <el-button  @click="importUpdateFile" size="mini" type="warning">{{$t(\'update.export\')}}</el-button>',
            '      </div>',
            // '      <div class="defend-item-box">',
            // '        <label style="display: inline-block; width: 120px;" for="">状态</label>',
            // '      </div>',
            '      <strong>{{$t(\'update.explain\')}}</strong>',
            '    </el-tab-pane>',
            '    <el-tab-pane :label="$t(\'log.log\')" name="second">',
            '      <el-row>',
            '        <el-col :span="10">',
            '          <label class="log-label" for="">{{$t(\'log.mainType\')}}：</label>',
            '          <el-select style="width: 220px;" size="mini" v-model="log.mainType">',
            '            <el-option label="type1" value="type1"></el-option>',
            '            <el-option label="type2" value="type2"></el-option>',
            '            <el-option label="type3" value="type3"></el-option>',
            '          </el-select>',
            '        </el-col>',
            '        <el-col :span="10">',
            '          <label class="log-label" for="">{{$t(\'log.secondType\')}}：</label>',
            '          <el-select style="width: 220px;" size="mini" v-model="log.secondType">',
            '            <el-option label="type1" value="type1"></el-option>',
            '            <el-option label="type2" value="type2"></el-option>',
            '            <el-option label="type3" value="type3"></el-option>',
            '          </el-select>',
            '        </el-col>',
            '      </el-row>',
            '      <el-row style="margin-top: 12px;">',
            '        <el-col :span="10">',
            '          <label class="log-label" for="">{{$t(\'common.startTime\')}}：</label>',
            '          <el-date-picker v-model="log.startTime" size="mini" type="datetime" placeholder="选择日期时间"></el-date-picker></el-col>',
            '        <el-col :span="10">',
            '          <label class="log-label" for="">{{$t(\'common.endTime\')}}：</label>',
            '          <el-date-picker v-model="log.endTime" size="mini" type="datetime" placeholder="选择日期时间"></el-date-picker></el-col>',
            '        </el-col>',
            '        <el-col :span="4">',
            '          <el-button @click="getLogs" type="success" size="mini">{{$t(\'log.search\')}}</el-button>',
            '        </el-col>',
            '      </el-row>',
            '      <p style="margin-top: 10px;" class="p-title">{{$t(\'log.logList\')}} <el-button class="right" style="margin-top: 5px; line-height: 10px; margin-right: 8px; height: 24px;" type="primary" size="mini" >{{$t(\'log.export\')}}</el-button></p>',
            '      <el-table border :data="log.tableData" style="width: 100%; margin-top: 10px;">',
            '        <el-table-column width="80px" align="center" prop="name" :label="$t(\'common.number\')"></el-table-column>',
            '        <el-table-column align="center" prop="name" :label="$t(\'log.time\')"></el-table-column>',
            '        <el-table-column align="center" prop="name" :label="$t(\'log.mainType\')"></el-table-column>',
            '        <el-table-column align="center" prop="name" :label="$t(\'log.secondType\')"></el-table-column>',
            '        <el-table-column align="center" prop="name" :label="$t(\'log.channelNumber\')"></el-table-column>',
            '        <el-table-column align="center" prop="name" :label="$t(\'log.localUser\')"></el-table-column>',
            '        <el-table-column align="center" prop="name" :label="$t(\'log.host\')"></el-table-column>',
            '      </el-table>',
            '      <el-pagination style="margin-top: 10px;" background @current-change="handleCurrentChange" :current-page.sync="pager.currentPage" :page-sizes="[10, 20, 50]" :page-size="pager.pageSize" layout="prev, pager, next, total" :total="pager.total"></el-pagination>',
            '    </el-tab-pane>',
            '  </el-tabs>',
            '  <div>',
            '    <el-dialog :style="{\'margin-left\': toRight ? \'180px\' : \'80px\'}" @close="close" @open="open" :title="progress.title" :close-on-click-modal="false" :show-close="false" :visible.sync="progress.visible">',
            '      <el-progress style="border-radius: 100px; margin-bottom: 20px;" :color="customColors" :text-inside="true" :stroke-width="26" :percentage="progress.percentage"></el-progress>',
            '    </el-dialog>',
            '  </div>',
            '</div>'
        ].join(""),
        data: function () { // 数据
            return {
                toRight: true,
                customColors: [
                    { color: '#f56c6c', percentage: 20 },
                    { color: '#e6a23c', percentage: 40 },
                    { color: '#6f7ad3', percentage: 60 },
                    { color: '#1989fa', percentage: 80 },
                    { color: '#5cb87a', percentage: 100 }
                ],
                timer: null,
                progress: {
                    visible: false,
                    time: 0,
                    title: '',
                    percentage: 0
                },
                activeName: 'first',
                defend: {
                    upgrade: 'upgrade'
                },
                filename: {
                    file1: '',
                    file2: '',
                },
                log: {
                    mainType: '',
                    secondType: '',
                    startTime: '',
                    endTime: '',
                    tableData: []
                },
                pager: {
                    currentPage: 2,
                    pageSize: 100,
                    total: 1
                }
            }
        },
        methods: {
            tabClick: function () {
                if(this.activeName === 'second') {
                    this.getLogs()
                }
            },
            open: function () {
                document.addEventListener('keydown', handle)
                document.addEventListener('contextmenu', mousedown)
            },
            close: function () {
                document.removeEventListener('keydown', handle)
                document.removeEventListener('contextmenu', mousedown)
                this.$router.push({
                    path: '/login'
                })
            },
            getLogs: function () {
                var _this = this;
                var params = Object.assign({}, _this.log);
                params.tableData = undefined;
                logList(params).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("获取日志列表成功")
                        _this.log.tableData = data.data
                    } else {
                        _this.$message.error("获取日志列表失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("获取日志列表请求失败")
                    return;
                })
            },
            restart: function () {
                var _this = this;
                restart({}).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        // _this.$message.success("重启成功")
                        _this.goProgress(20, '重新启动')
                    } else {
                        _this.$message.error("重启失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("重启请求失败")
                    return;
                })
            },
            reset: function () {
                var _this = this;
                reset({}).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        // _this.$message.success("恢复出厂成功")
                        _this.goProgress(30, '恢复出厂设置')
                    } else {
                        _this.$message.error("恢复出厂失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("恢复出厂请求失败")
                    return;
                })
            },
            goProgress: function (time, title) {
                this.toRight = (sessionStorage.getItem('isCollapse') === 'false')
                console.log(this.toRight)
                var timeCount = time * 10
                var _this = this
                clearInterval(_this.timer)
                var count = 0;
                this.progress.title = '正在' + title + '中'
                this.progress.visible = true;
                this.timer = setInterval(function () {
                    count++
                    _this.progress.percentage = count > 100 ? 100 : count
                    if (count > 100) {
                        clearInterval(_this.timer)
                        _this.$message.success(title + "成功")
                        _this.progress.visible = false
                    }
                }, timeCount);
            },
            getEquipment: function () {
                var _this = this;
                _this.goProgress(10, '恢复出厂设置')
                equipment({}).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("获取设备参数成功")
                    } else {
                        _this.$message.error("获取设备参数失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("获取设备参数请求失败")
                    return;
                })
            },
            getDiagnosis: function () {
                var _this = this;
                diagnosis({}).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("下载诊断信息成功")
                    } else {
                        _this.$message.error("下载诊断信息失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("诊断信息请求失败")
                    return;
                })
            },
            importEquipmentParams: function () {
                var _this = this;
                equipmentImport({
                    file: _this.filename.file1
                }).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("设备参数导入成功")
                    } else {
                        _this.$message.error("设备参数导入失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("设备参数导入请求失败")
                    return;
                })
            },
            importUpdateFile: function (name) {
                var _this = this;
                upgradeFile({
                    file: _this.filename.file2
                }).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("升级文件导入成功")
                    } else {
                        _this.$message.error("升级文件导入失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("升级文件导入请求失败")
                    return;
                })
            },
            handleCurrentChange: function (n) {

            },
            previewFile: function (name) {
                var _this = this
                var inputObj = document.createElement('input')
                inputObj.setAttribute('id', name);
                inputObj.setAttribute('type', 'file');
                inputObj.setAttribute("style", 'visibility: hidden; position: fixed');
                document.body.appendChild(inputObj);
                inputObj.click();
                inputObj.addEventListener('change', function () {
                    _this.filename[name] = this.files[0]
                })
            }
        }
    })
})
