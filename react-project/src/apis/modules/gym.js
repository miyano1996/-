import axios from '../axios'

const gym = {
    register(data){
        return axios({
            url:'/gym/register',
            method:"POST",
            data
        })
    },
    login(data){
        return axios({
            url:"/gym/login",
            method:"POST",
            data
        })
    },
    getGymByAccount(params){
        return axios({
            url:"/gym/getGymByAccount",
            method:"GET",
            params
        })
    },
    addGym(data){
        return axios({
            url:'/gym/addGym',
            method:'post',
            data
        })
    },
    getGymByStatus(params){
        return axios({
            url:'/gym/getGymByStatus',
            method:'get',
            params
        })
    },
    changeGymStatus(data){
        return axios({
            url:'/gym/changeGymStatus',
            method:'post',
            data
        })
    },
    getGymByText(params){
        return axios({
            url:'/gym/getGymByText',
            method:'get',
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