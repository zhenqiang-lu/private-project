define(function (require, exports, module) {
  //基本信息获取
  exports.getBasic = function (data) {
    return axios({
      url: "/ITS/System/GetVersion",
      method: 'post',
      data: data
    })
  }

  //获取设备名称和设备编号
  exports.getNameAndNumber = function (data) {
    return axios({
      url: "/ITS/System/GetDeviceInfo",
      method: 'post',
      data: data
    })
  }

  //基本信息保存
  exports.basic = function (data) {
    return axios({
      url: "/ITS/System/SetDeviceInfo",
      method: 'post',
      data: data
    })
  }

  //时间配置获取
  exports.getTimeConfig = function (data) {
    return axios({
      url: "/ITS/System/GetTimeConfig",
      method: 'post',
      data: data
    })
  }

  //时间配置保存
  exports.timeConfig = function (data) {
    return axios({
      url: "/ITS/System/SetTimeConfig",
      method: 'post',
      data: data
    })
  }

  //夏令时获取
  exports.getDaylightSavingTime = function (data) {
    return axios({
      url: "/ITS/System/getDaylightSavingTime",
      method: 'post',
      data: data
    })
  }

  //夏令时保存
  exports.daylightSavingTime = function (data) {
    return axios({
      url: "/ITS/System/daylightSavingTime",
      method: 'post',
      data: data
    })
  }

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

  //用户管理列表
  exports.usersList = function (data) {
    return axios({
      url: "/ITS/Security/usersList",
      method: 'post',
      data: data
    })
  }

})
