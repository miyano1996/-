import axios from '../axios'

const gym = {
    register(data) {
        return axios({
            url: '/gym/register',
            method: "POST",
            data
        })
    },
    login(data) {
        return axios({
            url: "/gym/login",
            method: "POST",
            data
        })
    },
    addGym(data) {
        return axios({
            url: '/gym/addGym',
            method: 'post',
            data
        })
    },
    getGym(_id) {
        return axios({
            url: '/gym/getGym',
            method: 'get',
            params: { _id }
        })
    },
    getAllGym(data) {
        console.log(data);
        return axios({
            url: '/gym/getAllGym',
            method: "post",
            data,
        })
    },
    delGym(data) {
        return axios({
            url: '/gym/delGym',
            method: 'POST',
            data
        })
    },
    updateGym(data) {
        return axios({
            url: '/gym/updateGym',
            method: 'post',
            data
        })
    },

    getGymByStatus(params) {
        return axios({
            url: '/gym/getGymByStatus',
            method: 'get',
            params
        })
    },
    changeGymStatus(data) {
        return axios({
            url: '/gym/changeGymStatus',
            method: 'post',
            data
        })
    },
    getGymByText(params) {
        return axios({
            url: '/gym/getGymByText',
            method: 'get',
            params
        })
    },
    sendCheckCode(data){
        return axios({
            url:'/gym/sendCheckCode',
            method:"POST",
            data
        })
    },
    changePassword(data){
        return axios({
            url:"/gym/changePassword",
            method:"POST",
            data
        })
    },
    clearCheckCode(data){
        return axios({
            url:"/gym/clearCheckCode",
            method:"POST",
            data
        })
    },

}

export default gym