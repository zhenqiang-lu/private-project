define(function (require, exports, module) {
  //重新启动
  exports.restart = function (data) {
    return axios({
      url: "/ITS/Security/restart",
      method: 'post',
      data: data
    })
  }

  //恢复出厂设置
  exports.reset = function (data) {
    return axios({
      url: "/ITS/Security/reset",
      method: 'post',
      data: data
    })
  }

  //获取设备参数
  exports.equipment = function (data) {
    return axios({
      url: "/ITS/Security/equipment",
      method: 'post',
      data: data
    })
  }

  //获取诊断信息
  exports.diagnosis = function (data) {
    return axios({
      url: "/ITS/Security/diagnosis",
      method: 'post',
      data: data
    })
  }

  //设备参数导入
  exports.equipmentImport = function (data) {
    return axios({
      url: "/ITS/Security/equipmentImport",
      method: 'post',
      data: data
    })
  }

  //升级文件
  exports.upgradeFile = function (data) {
    return axios({
      url: "/ITS/Security/upgradeFile",
      method: 'post',
      data: data
    })
  }

  //获取日志列表
  exports.logList = function (data) {
    return axios({
      url: "/ITS/Security/logList",
      method: 'post',
      data: data
    })
  }

})
