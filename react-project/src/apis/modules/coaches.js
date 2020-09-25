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
    return axios({
      url: '/coaches/updateCoaches',
      method: "POST",
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

  addCoach(params) {
    return axios({
      url: `/coaches/addCoach`,
      method: "get",
      params: { ...params, students: [], headImage: '废物.jpg', age: "未知", gender: '未知', loginAddress: '', workingTime: '', price: '', isRest: true, isDelete: 'false' }
    });
  }

}
export default coaches;
