import axios from '../axios'

const students = {
    getone(data) {//学员详细信息
        return axios({
            url: `/students/details`,
            method: 'POST',
            data
        })
    },
    regAsync(params) {
        return axios({
            url: `/students/reg`,
            method: 'get',
            params
        })
    },
    getallStudents(data) {
        return axios({
            url: "/students/getallStudents",
            method: 'POST',
            data
        })
    },
    delStudent(data) {
        return axios({
            url: "/students/delStudent",
            method: 'POST',
            data
        })
    }
}

export default students