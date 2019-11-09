import axios from 'axios'
import { loading, toast } from '@/util'

axios.defaults.baseURL = '/'

axios.interceptors.request.use(config => {
  console.log('axios request start')
  loading.show()
}, error => {
  console.log('axios request error')
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
    case 401:
      toast.error('登录异常')
      break
  }
  return Promise.reject(error)
}

const https = {
  post(url, data) {
     axios({
      method: 'post',
      url: url, 
      data: JSON.stringify(data)
    })

    return 404
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


