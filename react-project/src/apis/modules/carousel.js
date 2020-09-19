import axios from '../axios'

const carousel = {
    ///axios
    upCarousel(data){
        console.log(data);
        return axios({
            url:'/carousel/upCarousel',
            method:'post',
            data
        })
    }
}

export default carousel