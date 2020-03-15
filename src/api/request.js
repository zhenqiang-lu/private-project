import axios from 'axios'

const service = axios.create({
  baseURL: "/",
  timeout: 30000 
})

service.interceptors.request.use(config => {
    console.log(config)
  return config
}, error => {
  console.log(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if(res.code === 0) {
        
      return response.data;
    }else{
      console.log('失败')
    }
    
  },
  error => {
    console.log(error)
  })

export default service
