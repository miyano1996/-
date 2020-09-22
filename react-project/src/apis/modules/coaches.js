import axios from "../axios";

const coaches = {
  ///axios
  getCoaches(data) {
    return axios({
      url: "/coaches/getCoaches",
      method: "POST",
      data,
    });
  },
  getone(data) {
    return axios({
      url: `/coaches/details`,
      method: "POST",
      data,
    });
  },
  addCoach(params){
    return axios({
      url: `/coaches/addCoach`,
      method: "get",
      params:{...params,students:[],headImage:'',loginAddress:'',workingTime:'',price:'',isRest:true,isDelete:'false'}
    });
  }
};

export default coaches;
