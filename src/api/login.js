define(function(require, exports, module) {
  //登陆
  exports.login = function(data) {
    return axios({
      url: "/ITS/Security/Login",
      method: 'post',
      data: data
    })
  }
  
})
