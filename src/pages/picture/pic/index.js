define(function(require, exports, module) {
    require('./index.css');
    module.exports = Vue.component('index', {
        template: ['<div>',
            '  <el-tabs v-model="activeName">',
            '    <el-tab-pane label="显示设置" name="first">',
            '      <div>',
            '        <div class="pic-item">',
            '          <label for="">日夜参数转换</label>',
            '          <el-select class="pic-input" size="mini" v-model="value">',
            '             <el-option label="定时切换" value="定时切换"></el-option>',
            '          </el-select>',
            '        </div>',
            '        <div class="pic-item">',
            '          <label for="">开始时间</label>',
            '          <el-time-picker class="pic-input" size="mini" v-model="date" placeholder="选择时间"></el-time-picker>',
            '        </div>',
            '        <div class="pic-item">',
            '          <label for="">结束时间</label>',
            '          <el-time-picker class="pic-input" size="mini" v-model="date" placeholder="选择时间"></el-time-picker>',
            '        </div>',
            '        <div class="pic-item">',
            '          <el-button type="danger" size="mini">通用</el-button>',
            '          <el-button size="mini">白天</el-button>',
            '          <el-button size="mini">夜晚</el-button>',
            '        </div>',
            '        <el-collapse style="width: 560px; margin: 0 auto" v-model="activeIndex" accordion>',
            '          <el-collapse-item title="曝光" name="1">',
            '            <div class="pic-item">',
            '              <label for="">曝光类型</label>',
            '              <el-select class="pic-input" size="mini" v-model="value">',
            '                 <el-option label="手动" value="手动"></el-option>',
            '              </el-select>',
            '            </div>',
            '          </el-collapse-item>',
            '          <el-collapse-item title="日夜转换" name="2">',
            '            <div class="pic-item">',
            '              <label for="">日夜转换</label>',
            '              <el-select class="pic-input" size="mini" v-model="value">',
            '                 <el-option label="手动" value="手动"></el-option>',
            '              </el-select>',
            '            </div>',
            '            <div class="pic-item">',
            '              <label for="">灵敏度</label>',
            '              <el-select class="pic-input" size="mini" v-model="value">',
            '                 <el-option label="手动" value="手动"></el-option>',
            '              </el-select>',
            '            </div>',
            '            <div class="pic-item">',
            '              <label for="">过滤时间</label>',
            '              <el-slider class="slider" v-model="num" show-input input-size="mini" :show-input-controls="false"></el-slider>',
            '            </div>',
            '            <div class="pic-item">',
            '              <label for="">防补光过曝</label>',
            '              <el-select class="pic-input" size="mini" v-model="value">',
            '                 <el-option label="手动" value="手动"></el-option>',
            '              </el-select>',
            '            </div>',
            '          </el-collapse-item>',
            '          <el-collapse-item title="视频调整" name="3">',
            '            <div class="pic-item">',
            '              <label for="">镜像</label>',
            '              <el-select class="pic-input" size="mini" v-model="value">',
            '                 <el-option label="手动" value="手动"></el-option>',
            '              </el-select>',
            '            </div>',
            '            <div class="pic-item">',
            '              <label for="">旋转</label>',
            '              <el-select class="pic-input" size="mini" v-model="value">',
            '                 <el-option label="手动" value="手动"></el-option>',
            '              </el-select>',
            '            </div>',
            '            <div class="pic-item">',
            '              <label for="">视频输入模式</label>',
            '              <el-select class="pic-input" size="mini" v-model="value">',
            '                 <el-option label="手动" value="手动"></el-option>',
            '              </el-select>',
            '            </div>',
            '          </el-collapse-item>',
            '        </el-collapse>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane border label="OSD设置" name="second">',
            '      <div>',
            '        <div class="pic-item">',
            '          <el-checkbox v-model="value">显示名称</el-checkbox>',
            '        </div> ',
            '        <div class="pic-item">',
            '          <el-checkbox v-model="value">显示日期</el-checkbox>',
            '        </div> ',
            '        <div class="pic-item">',
            '          <el-checkbox v-model="value">显示星期</el-checkbox>',
            '        </div> ',
            '        <div class="pic-item">',
            '          <label for="">通道名称</label>',
            '          <el-input class="pic-input" size="mini" v-model="value"></el-input>',
            '        </div>',
            '        <div class="pic-item">',
            '          <label for="">时间格式</label>',
            '          <el-select class="pic-input" size="mini" v-model="value">',
            '             <el-option label="12小时制" value="12"></el-option>',
            '             <el-option label="24小时制" value="24"></el-option>',
            '          </el-select>',
            '        </div>',
            '        <div class="pic-item">',
            '          <label for="">日期格式</label>',
            '          <el-select class="pic-input" size="mini" v-model="value">',
            '             <el-option label="YY-MM-DD" value="YY-MM-DD"></el-option>',
            '          </el-select>',
            '        </div>',
            '        <p style="margin-bottom: 10px;" class="p-title">字符叠加</p>',
            '        <div class="pic-item">',
            '          <el-checkbox v-model="value">1</el-checkbox>',
            '          <el-input class="pic-input" size="mini" v-model="value"></el-input>',
            '        </div>',
            '        <div class="pic-item">',
            '          <el-checkbox v-model="value">2</el-checkbox>',
            '          <el-input class="pic-input" size="mini" v-model="value"></el-input>',
            '        </div>',
            '        <div class="pic-item">',
            '          <el-checkbox v-model="value">3</el-checkbox>',
            '          <el-input class="pic-input" size="mini" v-model="value"></el-input>',
            '        </div>',
            '        <div class="pic-item">',
            '          <el-checkbox v-model="value">4</el-checkbox>',
            '          <el-input class="pic-input" size="mini" v-model="value"></el-input>',
            '        </div>',
            '        <div class="pic-item">',
            '          <label for="">OSD属性</label>',
            '          <el-select class="pic-input" size="mini" v-model="value">',
            '             <el-option label="YY-MM-DD" value="YY-MM-DD"></el-option>',
            '          </el-select>',
            '        </div>',
            '        <div class="pic-item">',
            '          <label for="">OSD字体</label>',
            '          <el-select class="pic-input" size="mini" v-model="value">',
            '             <el-option label="YY-MM-DD" value="YY-MM-DD"></el-option>',
            '          </el-select>',
            '        </div>',
            '        <div class="pic-item">',
            '          <label style="vertical-align: top;" for="">OSD颜色</label>',
            '          <el-color-picker v-model="color"></el-color-picker>',
            '        </div>',
            '        <div class="pic-item">',
            '          <label for="">对齐方式</label>',
            '          <el-select class="pic-input" size="mini" v-model="value">',
            '             <el-option label="YY-MM-DD" value="YY-MM-DD"></el-option>',
            '          </el-select>',
            '        </div>',
            '        <div style="text-align: center; margin-top: 10px;">',
            '          <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '        </div>',
            '      </div>',
            '    </el-tab-pane>',
            '  </el-tabs>',
            '</div>',
        ].join(""),
        data: function() { // 数据
            return {
                activeName: 'first',
                value: '12',
                color: '#567289',
                date: '',
                activeIndex: '0',
                num: 23
            }
        },
        methods: {}
    })
})
