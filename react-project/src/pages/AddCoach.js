import React, { Component } from 'react'
import { Button, Input, Modal } from 'antd';
import api from '../apis/api'
export default class AddCoach extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            _id: '',
            rows: { activeTitle: [], activeContent: [] },
            newCoach: { gym: JSON.parse(localStorage.userInfo)._id },
            visible: false
        };
        this.getGym()
    }
    getId = () => {
        this.setState({ _id: JSON.parse(localStorage.userInfo)._id });
    }
    getGym = async () => {
        const data = await api.gym.getGym(JSON.parse(localStorage.userInfo)._id);
        this.setState({ rows: data.rows })
    }
    componentDidMount() {
        this.getId()
    }
    addName = (e) => {
        const newCoach = this.state.newCoach
        newCoach.name = (e.target.value)
        this.setState({ newCoach })
    }
    addTelep = (e) => {
        const newCoach = this.state.newCoach
        newCoach.telephone = (e.target.value)
        this.setState({ newCoach })
    }
    addClass = (e) => {
        const newCoach = this.state.newCoach
        newCoach.course = (e.target.value)
        this.setState({ newCoach })
    }
    addUsername = (e) => {
        const newCoach = this.state.newCoach
        newCoach.account = (e.target.value)
        this.setState({ newCoach })
    }
    addPassword = (e) => {

        const newCoach = this.state.newCoach
        newCoach.password = (e.target.value)
        this.setState({ newCoach })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
        // console.log(123);
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
        // console.log(345);
    };
    onOk = async () => {
        // console.log(this.state.newCoach);
        await api.coaches.addCoach(this.state.newCoach)
        this.setState({
            visible: false,
        });

        Modal.success({
            content: '添加成功!',
        });
    }
    render() {
        return (
            <div className='addActive' style={{ backgroundColor: 'white', padding: 20 }}>
                <h1 style={{ backgroundColor: '#f2f2f2', padding: '5px', fontWeight: 'bold', fontSize: '18px' }}>添加教练</h1>
                <div><p><span style={{ color: 'red' }}>*</span>姓名：</p> <Input onChange={this.addName}></Input></div>
                <div><p><span style={{ color: 'red' }}>*</span>电话号码：</p> <Input onChange={this.addTelep}></Input></div>
                <div><p><span style={{ color: 'red' }}>*</span>教授课程:</p> <Input onChange={this.addClass}></Input></div>
                <div><p><span style={{ color: 'red' }}>*</span>登陆帐号：</p> <Input onChange={this.addUsername}></Input></div>
                <div><p><span style={{ color: 'red' }}>*</span>登陆密码：</p> <Input onChange={this.addPassword}></Input></div>
                <Button type="primary" onClick={this.showModal} >确定</Button>
                <Modal
                    title="提示"
                    visible={this.state.visible}
                    onOk={this.onOk}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                    <p>确定新增此教练吗？</p>
                </Modal>
            </div>
        )
    }
}
