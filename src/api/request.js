import axios from 'axios'

const service = axios.create({
  baseURL: "/",
  timeout: 30000 
})

service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    return response.data;
  },
  error => {
    console.log(error)
  })

export default service
