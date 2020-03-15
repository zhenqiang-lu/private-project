import axios from './request'
import qs from 'qs'

// 登录
export function login(data) {
  return axios({
    url: '/api/user/login',
    method: 'post',
    data: data
  })
}
