define(function(require, exports, module) {
  //登陆
  exports.login = function(data) {
    return axios({
      url: "/ITS/Security/Login",
      method: 'post',
      data: data
    })
  }
  //基本信息保存
  exports.basic = function(data) {
    return axios({
      url: "/ISAPI/System/Format",
      method: 'post',
      data: data
    })
  } 
  
})
