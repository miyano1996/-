import axios from "../axios"

const coaches = {
    getone(data){
        return axios({
            url:`/coaches/details`,
            method:'POST',
            data
        })
    }
}

export default coaches