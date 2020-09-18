import axios from '../axios'

const orders = {
    getAllOrders(id) {
        return axios({
            url: '/orders/getAllOrders',
            method: 'GET',
            params: { id }
        })
    },
    deleteOrder(data) {
        return axios({
            url: './orders/deleteOrder',
            method: 'POST',
            data,
        })
    }
}

export default orders