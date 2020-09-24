// //设置拦截器

import axios from 'axios'
import {HashRouter} from 'react-router-dom'
const instance = axios.create({
    baseURL: 'http://localhost:4000'
})
//设置请求拦截器
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.token;
        //两个都要 别删
            config.headers.token = token;      
            config.headers.Authorization = 'Bearer '+ token
        return config
    },
    (err) => {
        return Promise.reject(err)
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
        if (err.response.status === 401) { //401 token 头过期
            alert("您的认证已过期，请重新登录")
            const router = new HashRouter()
            router.history.push('/firstPage')
            localStorage.setItem("token",'')
            return { data: { msg: '身份认证失败,请重新登录', success: false } }
        }
        return err
    }
)
export default instance
