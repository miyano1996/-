import axios from '../axios'

const orders = {
    getAllOrders(data) {
        return axios({
            url: '/orders/getAllOrders',
            method: 'GET',
            data
        })
    }
}

export default orders