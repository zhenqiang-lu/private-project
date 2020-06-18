define(function(require, exports, module) {
    require('./index.css');
    module.exports = Vue.component('index', {
        template: ['<div>',
            '  <el-tabs v-model="activeName">',
            '    <el-tab-pane label="视频" name="first">',
            '      <div class="basic-item-box">',
            '        <label for="">码流类型</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">视频类型</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">分辨率</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">码率类型</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">图像质量</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">视频帧率</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '        <span>fps</span>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">码率上限</label>',
            '        <el-input class="input-box" size="mini" v-model="test"></el-input>',
            '        <span>Kbps</span>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">视频编码</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">编码复杂度</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">1帧间隔</label>',
            '        <el-input class="input-box" size="mini" v-model="test"></el-input>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">SVC</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">码流平滑</label>',
            '        <el-slider style="width: 300px; display: inline-block; vertical-align: middle;" :show-input-controls="false" v-model="value" input-size="mini" show-input></el-slider>',
            '      </div>',
            '      ',
            '      <div style="text-align: left; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '    <el-tab-pane label="音频" name="second">',
            '      <div class="basic-item-box">',
            '        <label for="">音频编码</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">音频输入</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">输入音量</label>',
            '        <el-slider style="width: 300px; display: inline-block; vertical-align: middle;" :show-input-controls="false" v-model="value" input-size="mini" show-input></el-slider>',
            '      </div>',
            '      <div class="basic-item-box">',
            '        <label for="">环境噪声过滤</label>',
            '        <el-select class="input-box" size="mini" v-model="test">',
            '          <el-option label="30分钟" value="30"></el-option>',
            '        </el-select>',
            '      </div>',
            '      <div style="text-align: left; margin-top: 10px;">',
            '        <el-button icon="el-icon-receiving" size="mini" type="success">保存</el-button>',
            '      </div>',
            '    </el-tab-pane>',
            '  </el-tabs>',
            '</div>'
        ].join(""),
        data: function() { // 数据
            return {
                activeName: 'first',
                test: '',
                value: 50,
                enable: true
            }
        },
        methods: {

        }
    })
})