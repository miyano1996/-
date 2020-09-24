import React, { Component } from 'react'
import api from '../../apis/api';
import { Avatar, Button, Divider } from 'antd';
import { UserOutlined, WhatsAppOutlined, EnvironmentOutlined, DollarOutlined } from '@ant-design/icons';

export default class Sdetails extends Component {
    state = {
        list: {
            headImage:'sweet.jpg',//默认值
        }
    }
    getData = async () => {
        const { getone } = api.students;
        let id = localStorage.studentID;
        const data = await getone({ id });
        this.setState({ list: data.getdata[0] })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        const { name, account, headImage, telephone, loginAdress, points } = this.state.list;
        const imgpath="http://localhost:4000/temp/"+headImage;
        return (
            <div className="sDetails">
                <div className="box">
                    <div className="headimg">
                        <Avatar size={64} src={imgpath} />
                        <p>{name}</p>
                    </div>
                    <div className="list">
                        <Divider orientation="left">账号</Divider>
                        <p><UserOutlined />____{account}</p>
                    </div>
                    <div className="list">
                        <Divider orientation="left">积分</Divider>
                        <p><DollarOutlined />____{points}金豆</p>
                    </div>
                    <div className="list">
                        <Divider orientation="left">联系电话</Divider>
                        <p><WhatsAppOutlined />____{telephone}</p>
                    </div>
                    <div className="list">
                        <Divider orientation="left">常用地址</Divider>
                        <p><EnvironmentOutlined />____{loginAdress}</p>
                    </div>
                    <div className="btn">
                        <Button type="primary" size="large " block danger>封禁用户</Button>
                    </div>
                </div>
            </div>
        )
    }
}

