define(function(require, exports, module) {
  //登陆
  exports.login = function(data) {
    return axios({
      url: "/ITS/Security/Login",
      method: 'post',
      data: data
    })
  }

  //基本信息获取
  exports.getBasic = function(data) {
    return axios({
      url: "/ITS/System/getFormat",
      method: 'post',
      data: data
    })
  } 

  //基本信息保存
  exports.basic = function(data) {
    return axios({
      url: "/ITS/System/Format",
      method: 'post',
      data: data
    })
  } 

  //时间配置获取
  exports.getTimeConfig = function(data) {
    return axios({
      url: "/ITS/System/getTimeConfig",
      method: 'post',
      data: data
    })
  }

  //时间配置保存
  exports.timeConfig = function(data) {
    return axios({
      url: "/ITS/System/timeConfig",
      method: 'post',
      data: data
    })
  }

  //夏令时获取
  exports.getDaylightSavingTime = function(data) {
    return axios({
      url: "/ITS/System/getDaylightSavingTime",
      method: 'post',
      data: data
    })
  }

  //夏令时保存
  exports.daylightSavingTime = function(data) {
    return axios({
      url: "/ITS/System/daylightSavingTime",
      method: 'post',
      data: data
    })
  }
  
})
