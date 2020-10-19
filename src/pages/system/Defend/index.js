define(function(require, exports, module) {
    require('./index.css');
    // 引入请求接口
    var restart = require('../../../api/system.js').restart;
    var reset = require('../../../api/system.js').reset;
    var equipment = require('../../../api/system.js').equipment;
    var diagnosis = require('../../../api/system.js').diagnosis;
    var equipmentImport = require('../../../api/system.js').equipmentImport;
    var upgradeFile = require('../../../api/system.js').upgradeFile;
    var logList = require('../../../api/system.js').logList;
    
    module.exports = Vue.component('index', {
        template: ['<div>',
            '  <el-tabs v-model="activeName">',
            '    <el-tab-pane label="升级维护" name="first">',
            '      <p class="p-title">重启</p>',
            '      <div class="defend-item-box">',
            '        <el-button @click="restart" size="mini" type="primary">重新启动</el-button>',
            '        <label for="">重新启动设备</label>',
            '      </div>',
            '      <p class="p-title">恢复默认值</p>',
            '      <div class="defend-item-box">',
            '        <el-button @click="reset" size="mini" type="primary">恢复出场</el-button>',
            '        <label for="">恢复设备参数到出厂设置</label>',
            '      </div>',
            '      <p class="p-title">信息导出</p>',
            '      <div class="defend-item-box">',
            '        <el-button @click="getEquipment" size="mini" type="primary">设备参数</el-button>',
            '      </div>',
            '      <div class="defend-item-box">',
            '        <el-button @click="getDiagnosis" size="mini" type="primary">诊断信息</el-button>',
            '        <label for="">下载运行日志，系统信息，硬件信息等</label>',
            '      </div>',
            '      <p class="p-title">参数导入</p>',
            '      <div class="defend-item-box">',
            '        <label style="display: inline-block; width: 120px;" for="">设备参数</label>',
            '        <span class="filename">{{ filename.file1.name }}</span>',
            '        <el-button size="mini" type="warning" @click="previewFile(\'file1\')">浏览</el-button>',
            '        <el-button @click="importEquipmentParams" size="mini" type="warning">导入</el-button>',
            '      </div>',
            '      <div class="defend-item-box">',
            '        <label style="display: inline-block; width: 120px;" for="">状态</label>',
            '      </div>',
            '      <p class="p-title">升级</p>',
            '      <div class="defend-item-box">',
            '        <el-select style="width: 120px; height: 30px;" size="mini" v-model="defend.upgrade">',
            '          <el-option label="升级文件" value="upgrade"></el-option>',
            '        </el-select>',
            '        <span class="filename">{{ filename.file2.name }}</span>',
            '        <el-button size="mini" type="warning" @click="previewFile(\'file2\')">浏览</el-button>',
            '        <el-button  @click="importUpdateFile" size="mini" type="warning">导入</el-button>',
            '      </div>',
            '      <div class="defend-item-box">',
            '        <label style="display: inline-block; width: 120px;" for="">状态</label>',
            '      </div>',
            '      <strong>说明: 升级过程需要1-10分钟,请不要关闭电源,完成升级后将自动重启</strong>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="日志" name="second">',
            '      <el-row>',
            '        <el-col :span="10">',
            '          <label class="log-label" for="">主类型：</label>',
            '          <el-select style="width: 220px;" size="mini" v-model="log.mainType">',
            '            <el-option label="type1" value="type1"></el-option>',
            '            <el-option label="type2" value="type2"></el-option>',
            '            <el-option label="type3" value="type3"></el-option>',
            '          </el-select>',
            '        </el-col>',
            '        <el-col :span="10">',
            '          <label class="log-label" for="">次类型：</label>',
            '          <el-select style="width: 220px;" size="mini" v-model="log.secondType">',
            '            <el-option label="type1" value="type1"></el-option>',
            '            <el-option label="type2" value="type2"></el-option>',
            '            <el-option label="type3" value="type3"></el-option>',
            '          </el-select>',
            '        </el-col>',
            '      </el-row>',
            '      <el-row style="margin-top: 12px;">',
            '        <el-col :span="10">',
            '          <label class="log-label" for="">开始时间：</label>',
            '          <el-date-picker v-model="log.startTime" size="mini" type="datetime" placeholder="选择日期时间"></el-date-picker></el-col>',
            '        <el-col :span="10">',
            '          <label class="log-label" for="">结束时间：</label>',
            '          <el-date-picker v-model="log.endTime" size="mini" type="datetime" placeholder="选择日期时间"></el-date-picker></el-col>',
            '        </el-col>',
            '        <el-col :span="4">',
            '          <el-button @click="getLogs" type="success" size="mini">查找</el-button>',
            '        </el-col>',
            '      </el-row>',
            '      <p style="margin-top: 10px;" class="p-title">日志列表 <el-button class="right" style="margin-top: 5px; line-height: 10px; margin-right: 8px; height: 24px;" type="primary" size="mini" >导出</el-button></p>',
            '      <el-table border :data="log.tableData" style="width: 100%; margin-top: 10px;">',
            '        <el-table-column width="80px" align="center" prop="name" label="序号"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="时间"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="主类型"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="次类型"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="通道号"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="本地/远程用户"></el-table-column>',
            '        <el-table-column align="center" prop="name" label="远程主机地址"></el-table-column>',
            '      </el-table>',
            '      <el-pagination style="margin-top: 10px;" background @current-change="handleCurrentChange" :current-page.sync="pager.currentPage" :page-sizes="[10, 20, 50]" :page-size="pager.pageSize" layout="prev, pager, next, sizes, total" :total="pager.total"></el-pagination>',
            '    </el-tab-pane>',
            '  </el-tabs>',
            '</div>'
        ].join(""),
        data: function() { // 数据
            return {
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
        created: function () {
            this.getLogs()
        },
        methods: {
            getLogs: function () {
                var _this = this;
                var params = Object.assign({}, _this.log);
                params.tableData = undefined;
                logList(params).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("获取日志列表成功")
                        _this.log.tableData = data.data
                    }else{
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
                        _this.$message.success("重启成功")
                    }else{
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
                        _this.$message.success("恢复出厂成功")
                    }else{
                        _this.$message.error("恢复出厂失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("恢复出厂请求失败")
                    return;
                })
            },
            getEquipment: function () {
                var _this = this;
                equipment({}).then(function (res) {
                    var data = res.data;
                    if (data.code == 1000) {
                        _this.$message.success("获取设备参数成功")
                    }else{
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
                    }else{
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
                    }else{
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
                    }else{
                        _this.$message.error("升级文件导入失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("升级文件导入请求失败")
                    return;
                })
            },
            handleCurrentChange: function(n) {

            },
            previewFile: function(name) {
                var _this = this
                var inputObj = document.createElement('input')
                inputObj.setAttribute('id', name);
                inputObj.setAttribute('type', 'file');
                inputObj.setAttribute("style", 'visibility: hidden; position: fixed');
                document.body.appendChild(inputObj);
                inputObj.click();
                inputObj.addEventListener('change', function() {
                    _this.filename[name] = this.files[0]
                })
            }
        }
    })
})