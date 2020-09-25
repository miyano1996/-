import React, { Component } from 'react';
import { Modal, message, Button } from 'antd';
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
    async sure(id) {
        const data = await api.complaint.delComplaint(id);
        if (data.success) {
            message.success('确定成功');
            this.getAllcomplaint();
        }
    }
    surActive = (index) => {
        Modal.confirm({
            title: '提示',
            content: '确认后如果有异议可以选择申诉',
            okText: '确认',
            cancelText: '取消',
            onOk: () => this.sure(index),
        });
    }
    render() {
        return (
            this.state.list.length === 0 ? <h1>暂无数据</h1> :
                <div className="complaint-box">
                    {this.state.list.map((item) => <div className="complaint-item" key={item._id}>
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
                            {item.status ? <Button className="active">有异议?点击申诉</Button> : <Button type="primary" onClick={() => { this.surActive(item._id) }}>确定</Button>}
                        </div>
                    </div>)}
                </div>
        )
    }
}
