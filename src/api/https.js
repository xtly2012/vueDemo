import axios from 'axios'
import { loading, toast } from '@/util'

axios.defaults.baseURL = '/'

axios.interceptors.request.use(config => {
  loading.show()
}, error => {
  loading.hide()
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  loading.hide()
  return response
}, error => {
    return statusHandler(error)
})

const statusHandler = function(error) {
  switch (error.response.status) {
    case 401:
      toast.error()
      break
  }
  return Promise.reject(error)
}



