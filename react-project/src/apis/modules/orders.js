import axios from '../axios'

const orders = {
    getAllOrders(data) {
        return axios({
            url: '/orders/getAllOrders',
            method: 'GET',
            params: data
        })
    },
    deleteOrder(data) {
        return axios({
            url: './orders/deleteOrder',
            method: 'POST',
            data,
        })
    },
    getOrders(data) {
        return axios({
            url: '/orders/getOrders',
            method: 'GET',
            params: data
        })
    }
}
export default orders