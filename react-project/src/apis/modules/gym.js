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
    }
}

export default gym