// import axios from '../axios'

import axios from "axios"

const coaches = {
    ///axios
    getCoaches(data) {
        return axios({
            url: "/coaches/getCoaches",
            method: "POST",
            data
        })
    }
}

export default coaches