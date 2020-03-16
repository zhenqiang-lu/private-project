import axios from './request'
import qs from 'qs'

// 登录
export function login(data) {
  return axios({
    url: '/ITS/Security/Login',
    method: 'post',
    data: data
  })
}
