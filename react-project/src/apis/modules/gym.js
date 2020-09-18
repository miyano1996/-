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
    addGym(data){
        return axios({
            url:'/gym/addGym',
            method:'post',
            data
        })
    }
}

export default gym