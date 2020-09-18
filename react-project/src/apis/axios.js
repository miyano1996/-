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
        if (res.status === 200) {
            return res.data
        } else {
            return res
        }
    },
    (err) => {
        //此处可以获取状态码，然后根据状态码做出对应行为
        return err
    }
)
export default instance
