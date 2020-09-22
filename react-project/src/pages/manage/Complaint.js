import React, { Component } from 'react';
import '../../assets/style/complaint.scss';
import api from '../../apis/api'


export default class Complaint extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        this.getAllcomplaint();
    }
    async getAllcomplaint() {
        try {
            const { _id } = JSON.parse(localStorage.userInfo);
            const data = await api.complaint.getAllComplaint(_id);
            await this.setState({
                list: data.rows
            })
        } catch (error) {
            console.log(error);
        }
    }
    async delit(id) {
        const data = await api.complaint.delComplaint(id);
        this.getAllcomplaint();
    }
    render() {
        return (
            <div className="complaint-box">

                {this.state.list.map((item) => <div className="complaint-item" key="_id">
                    <div className="item-top">
                        <span>用户名:
                            <span className="username">
                                {item.studentId.name}
                            </span>
                        </span>
                        <span>订单编号:
                        <span className="orderid">{item.ordersId._id}</span>
                        </span>
                        <span>教练:
                                <span className="orderid">{item.coacheId.name}</span>
                        </span>
                        <span>日期:
                            <span className="orderid">{item.time}</span>
                        </span>
                    </div>
                    <div className="item-body">
                        <span>投诉内容:</span>
                        <div className="complaint-text">
                            {item.text}
                        </div>
                    </div>
                    <div className="complaint-footer">
                        {item.status ? <span className="active">有异议?点击申诉</span> : <span onClick={() => { this.delit(item._id) }}>确定</span>}


                    </div>
                </div>)}

            </div>
        )
    }
}
