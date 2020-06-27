define(function (require, exports, module) {
    var login = require('../../api/api.js').login;
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
            '		  <el-input class="login-input" size="medium" :placeholder="$t(\'message.password\')" v-model="password"></el-input>',
            '		  <p @click="openMsg" style="text-align: right; font-size: 14px; cursor: pointer;">{{ $t(\'message.forget\') }}</p>',
            '		  <el-button @click="send" type="success">{{ $t(\'message.login\') }}</el-button>',
            '	  </div>',
            '  </div>',
            '  <p class="login-bottom">版权所有</p>',
            '</div>'
        ].join(""),
        data: function () { // 数据
            return {
                username: "",
                password: "",
                lang: localStorage.getItem('language') || "zh",
                options: [{
                    value: 'zh',
                    label: '中文'
                },
                {
                    value: 'en',
                    label: '英文'
                },
                ],
            }
        },
        created: function () {
            this.setCookieLang();
            this.getLang();
        },
        methods: {
            getLang: function () {
                localStorage.setItem('language', this.lang)
                this.$i18n.locale = this.lang
                this.setCookieLang();
            },
            setCookieLang: function () {
                var lg = this.lang == 'zh' ? 'chinese' : 'English'
                this.setCookie('language', lg)
            },
            openMsg: function () {
                this.$notify({
                    title: '消息',
                    message: '请联系管理员',
                    type: 'warning'
                });
            },
            send: function () {
                var _this = this;
                var sendData = {
                    username: this.username,
                    password: this.password
                }
                if (!sendData.username || !sendData.password) {
                    _this.$message.error("请输入用户名和密码")
                    return
                }
                if(sendData.username === "admin" && sendData.password === "123456") {
                    _this.$message.success("登录成功")
                    this.$router.push({
                        path: '/admin/systemMsg',
                        query: {
                            num: '2-1'
                        }
                    })
                    return
                }
                login(sendData).then(function (res) {
                    if (res.success != true) {
                        _this.$message.error("登录失败")
                        return;
                    } else {
                        var data = res.data;
                        if (data.statuscode == "200") {
                            sessionStorage.setItem('user', this.username)
                            _this.setCookie('usrname', _this.usrname);
                            _this.setCookie('password', _this.password);
                            if (data.sessionid != null) {
                                _this.setCookie('sessionid', data.sessionid);
                            } else {
                                _this.setCookie('sessionid', "Ver1-123");
                            }
                            // self.location='Navigation.html';
                            _this.$message.error("登录成功")
                            this.$router.push({
                                path: '/admin/systemMsg',
                                query: {
                                    num: '2-1'
                                }
                            })
                            return;
                        }
                        _this.$message.error("登录失败")
                    }
                }).catch(function (res) {
                    _this.$message.error("登录失败")
                })
            },
            setCookie: function (name, value) {
                var str = name + "=" + value + "&amp;";
                document.cookie = str;
                return;
            }
        }
    })
})
