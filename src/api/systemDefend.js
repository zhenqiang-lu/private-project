define(function(require, exports, module) {
    //重新启动
    exports.restart = function(data) {
      return axios({
        url: "/ITS/Security/restart",
        method: 'post',
        data: data
      })
    }

    //恢复出厂设置
    exports.reset = function(data) {
      return axios({
        url: "/ITS/Security/reset",
        method: 'post',
        data: data
      })
    }
    
  })
  