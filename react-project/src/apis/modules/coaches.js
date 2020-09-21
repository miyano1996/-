import axios from '../axios'

// import axios from "axios"

const coaches = {
  ///axios
  getCoaches(data) {
    return axios({
      url: '/coaches/getCoaches',
      method: 'POST',
      data
    })
  },
  delCoaches(data) {
    return axios({
      url: '/coaches/delCoaches',
      method: 'POST',
      data
    })
  },
  getone(data) {
    return axios({
      url: `/coaches/details`,
      method: "POST",
      data,
    });
  },
}

export default coaches;
