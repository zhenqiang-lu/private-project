// import axios from './request'
// // import qs from 'qs'

define(function(require, exports, module) {
  
  exports.login = function(data) {
    return axios({
      url: '/ITS/Security/Login',
      method: 'post',
      data: data
    })
  }
  
  exports.list = function(data) {
    return axios({
      url: '/api/user/list',
      method: 'post',
      data: data
    })
  }
  
})
