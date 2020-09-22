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
  updateCoaches(data) {

  },
  getone(data) {
    return axios({
      url: `/coaches/details`,
      method: "POST",
      data,
    });
  },

  addCoach(params) {
    return axios({
      url: `/coaches/addCoach`,
      method: "get",
      params
    });
  }

}
export default coaches;
