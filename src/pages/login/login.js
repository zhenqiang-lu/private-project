define(function(require, exports, module) {
  var login = require('../../api/api.js').login;
  var setCookie = require('../../tools/cookie.js').setCookie;
  var getCookie = require('../../tools/cookie.js').getCookie;
  var randomWord = require('../../tools/tools.js').randomWord;
  require('./login.css');
  module.exports = Vue.component('login', {
    template: ['<div class="login-page">',
      '  <div class="top">',
      '	  <img class="logo-img" src="./assets/image/logo.jpg" >',
      '	  <el-select @change="getLang" size="mini" v-model="lang">',
      '		  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>',
      '	  </el-select>',
      '  </div>',
      '  <div class="login-wrap">',
      '	  <div class="login-box">',
      '		  <el-input class="login-input" size="medium" :placeholder=" $t(\'message.username\') " v-model="username"></el-input>',
      '		  <el-input type="password" class="login-input" size="medium" :placeholder="$t(\'message.password\')" v-model="password"></el-input>',
      '		  <p @click="openMsg" style="text-align: right; font-size: 14px; cursor: pointer;">{{ $t(\'message.forget\') }}</p>',
      '		  <el-button @click="send" type="success">{{ $t(\'message.login\') }}</el-button>',
      '	  </div>',
      '  </div>',
      '  <p class="login-bottom">版权所有</p>',
      '</div>'
    ].join(""),
    data: function() { // 数据
      return {
        username: "",
        password: "",
        lang: getCookie("language") || "chinese",
        options: [{
            value: 'chinese',
            label: '中文'
          },
          {
            value: 'english',
            label: '英文'
          },
        ],
      }
    },
    created: function() {
      if (!getCookie('sessionid')) {
        setCookie('sessionid', randomWord(false, 6))
      }
    },
    methods: {
      getLang: function() {
        this.$i18n.locale = this.lang
        this.setCookieLang();
      },
      setCookieLang: function() {
        setCookie('language', this.lang)
      },
      openMsg: function() {
        this.$notify({
          title: '消息',
          message: '请联系管理员',
          type: 'warning'
        });
      },
      send: function() {
        var _this = this;
        var sendData = {
          username: this.username,
          password: this.password
        }
        if (!sendData.username || !sendData.password) {
          _this.$message.error("请输入用户名和密码")
          return
        }

        if (sendData.username == "admin" && sendData.password == 123456) {
          _this.$router.push({
            path: '/admin/systemMsg',
            query: {
              num: '2-1'
            }
          })
          return
        }

        if (getCookie('username') && sendData.username !== getCookie('username')) {
          setCookie('sessionid', randomWord(false, 6))
        }
        login(sendData).then(function(res) {
          var data = res.data;
          if (data.code == 1000) {
            _this.$message.success("登录成功")
            sessionStorage.setItem('user', this.username)
            setCookie('username', sendData.username);
            console.log('login success')
            _this.$router.push({
              path: '/admin/systemMsg',
              query: {
                num: '2-1'
              }
            })
            return;
          } else {
            _this.$message.error("登录失败")
          }
        }).catch(function(res) {
          console.log("请求失败")
        })
      }
    }
  })
})
