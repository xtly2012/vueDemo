import axios from 'axios'
import { loading, toast } from '@/util'

axios.defaults.timeout = 1000
axios.defaults.baseURL = 'http://localhost:8080'


axios.interceptors.request.use(config => {
  loading.show()
  return config
}, error => {
  console.log('axios request error', error)
  loading.hide()
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  console.log('axios response start')
  loading.hide()
  return response
}, error => {
  console.log('axios response error',error)
  return statusHandler(error)
})

const statusHandler = function(error) {
  switch (error.response.status) {
    case 404:
      toast.error('登录异常')
      break
  }
  return Promise.reject(error)
}

const https = {
  post(url, data) {
     return axios({
      method: 'post',
      url: url, 
      data: JSON.stringify(data)
    })
  },
  get(url, param) {
    return axios({
      method: 'get',
      url: url,
      data: param
    })
  }
}

export default https


