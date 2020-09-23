// //设置拦截器
import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:4000'
})
//设置请求拦截器
instance.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        return err
    }
)
//设置响应拦截器
instance.interceptors.response.use(
    (res) => {
        //后端返回的状态码是200且success字段为true才返回res.data，否则返回Promise的reject，前端用catch接收。
        if (res.status === 200) {
            return res.data
        } else {
            return Promise.reject(res.data)
        }
    },
    (err) => {
        //此处可以获取状态码，然后根据状态码做出对应行为
        return err
    }
)
export default instance
